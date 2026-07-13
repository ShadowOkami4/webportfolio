const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const crypto = require('crypto');
const zlib = require('zlib');

const PORT = Number(process.env.PORT) || 80;

// ============== CACHING & COMPRESSION ==============
// Cache durations in seconds
const CACHE_DURATION = {
    images: 31536000,  // 1 year for images
    css: 604800,       // 1 week for CSS
    js: 604800,        // 1 week for JS
    html: 0            // No cache for HTML
};

// File types that can be gzip compressed
const COMPRESSIBLE_TYPES = ['.html', '.css', '.js', '.json', '.svg', '.txt'];

// ============== CRASH PREVENTION ==============
// Prevent crashes from uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    console.error(err.stack);
    // Keep server running - don't exit
});

// Prevent crashes from unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Keep server running - don't exit
});

// Graceful shutdown handling
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

let isShuttingDown = false;

function gracefulShutdown() {
    if (isShuttingDown) return;
    isShuttingDown = true;
    console.log('\nGraceful shutdown initiated...');
    
    server.close(() => {
        console.log('Server closed successfully');
        process.exit(0);
    });
    
    // Force exit after 10 seconds if graceful shutdown fails
    setTimeout(() => {
        console.error('Forced shutdown after timeout');
        process.exit(1);
    }, 10000);
}

// ============== RATE LIMITING ==============
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 100; // max requests per window
const RATE_LIMIT_MAX_UPLOAD = 10; // max uploads per window
const RATE_LIMIT_MAX_PASSWORD = 5; // max password attempts per window

function checkRateLimit(ip, type = 'general') {
    const now = Date.now();
    const key = `${ip}:${type}`;
    const limit = type === 'upload' ? RATE_LIMIT_MAX_UPLOAD : 
                  type === 'password' ? RATE_LIMIT_MAX_PASSWORD : RATE_LIMIT_MAX;
    
    if (!rateLimitMap.has(key)) {
        rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }
    
    const record = rateLimitMap.get(key);
    if (now > record.resetTime) {
        record.count = 1;
        record.resetTime = now + RATE_LIMIT_WINDOW;
        return true;
    }
    
    if (record.count >= limit) {
        return false;
    }
    
    record.count++;
    return true;
}

// Clean up old rate limit entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
        if (now > record.resetTime) {
            rateLimitMap.delete(key);
        }
    }
}, 60000);

// ============== SECURITY HELPERS ==============
function getClientIP(req) {
    return req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 
           req.socket?.remoteAddress || 
           'unknown';
}

function setSecurityHeaders(res) {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
}

// Validate file path to prevent directory traversal
function isPathSafe(requestedPath) {
    const resolved = path.resolve(requestedPath);
    const rootDir = path.resolve(__dirname);
    return resolved.startsWith(rootDir);
}

// Sanitize filename to prevent malicious uploads
function sanitizeFilename(filename) {
    // Remove path separators and null bytes
    return filename
        .replace(/[\/\\]/g, '')
        .replace(/\0/g, '')
        .replace(/\.\./g, '')
        .substring(0, 255); // Limit filename length
}

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

const configuredUploadPassword = process.env.UPLOAD_PASSWORD || '';
const CORRECT_PASSWORD_HASH = configuredUploadPassword
    ? hashPassword(configuredUploadPassword)
    : null;

function isPasswordValid(password, encrypted = false) {
    if (!CORRECT_PASSWORD_HASH || typeof password !== 'string') return false;

    const candidateHash = encrypted ? password.toLowerCase() : hashPassword(password);
    if (!/^[a-f0-9]{64}$/.test(candidateHash)) return false;

    return crypto.timingSafeEqual(
        Buffer.from(candidateHash, 'hex'),
        Buffer.from(CORRECT_PASSWORD_HASH, 'hex')
    );
}

function requireUploadPassword(req, res) {
    if (!CORRECT_PASSWORD_HASH) {
        res.writeHead(503, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Upload service is not configured' }));
        return false;
    }

    if (!isPasswordValid(req.headers['x-upload-password'])) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid upload password' }));
        return false;
    }

    return true;
}

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log('Created uploads directory');
}

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

// Get cache duration based on file extension
function getCacheDuration(ext) {
    if (['.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.woff', '.woff2'].includes(ext)) {
        return CACHE_DURATION.images;
    } else if (ext === '.css') {
        return CACHE_DURATION.css;
    } else if (ext === '.js') {
        return CACHE_DURATION.js;
    }
    return CACHE_DURATION.html;
}

// Check if client accepts gzip encoding
function acceptsGzip(req) {
    const acceptEncoding = req.headers['accept-encoding'] || '';
    return acceptEncoding.includes('gzip');
}

const server = http.createServer((req, res) => {
    // Set request timeout
    req.setTimeout(30000, () => {
        console.log('Request timeout');
        res.writeHead(408, { 'Content-Type': 'text/plain' });
        res.end('Request timeout');
    });
    
    // Add security headers to all responses
    setSecurityHeaders(res);
    
    const clientIP = getClientIP(req);
    console.log(`[${new Date().toISOString()}] ${clientIP} - ${req.method} ${req.url}`);
    
    try {
        // Rate limiting check
        if (!checkRateLimit(clientIP)) {
            res.writeHead(429, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Too many requests. Please try again later.' }));
            return;
        }
        
        // Handle file upload
        if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
            if (!requireUploadPassword(req, res)) return;
            if (!checkRateLimit(clientIP, 'upload')) {
                res.writeHead(429, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Upload rate limit exceeded' }));
                return;
            }
            handleFileUpload(req, res);
            return;
        }
        
        // Handle password verification
        if (req.url === '/verify-password' && req.method.toLowerCase() === 'post') {
            if (!checkRateLimit(clientIP, 'password')) {
                res.writeHead(429, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Too many password attempts. Please try again later.' }));
                return;
            }
            handlePasswordVerification(req, res);
            return;
        }
        
        // Block access to sensitive files
        const blockedPatterns = [/\.env$/i, /\.git/i, /node_modules/i, /package-lock\.json$/i];
        if (blockedPatterns.some(pattern => pattern.test(req.url))) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('Forbidden');
            return;
        }
        
        // Handle root path
        let filePath = req.url === '/' ? './index.html' : '.' + req.url;
        
        // Decode URL and remove query strings
        filePath = decodeURIComponent(filePath.split('?')[0]);
        
        // Security: Prevent directory traversal attacks
        if (!isPathSafe(filePath)) {
            console.warn(`[SECURITY] Path traversal attempt blocked from ${clientIP}: ${req.url}`);
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('Forbidden');
            return;
        }
        
        // Get the file extension
        const extname = path.extname(filePath);
        let contentType = MIME_TYPES[extname] || 'application/octet-stream';
        
        // Get cache duration for this file type
        const cacheDuration = getCacheDuration(extname);
        const shouldCompress = COMPRESSIBLE_TYPES.includes(extname) && acceptsGzip(req);
    
        // Read the file and respond
        fs.readFile(filePath, (err, content) => {
            try {
                if (err) {
                    if (err.code === 'ENOENT') {
                        // Page not found - serve index.html for SPA routing
                        console.log(`File not found: ${filePath}`);
                        fs.readFile('./index.html', (err2, content) => {
                            if (err2) {
                                res.writeHead(404, { 'Content-Type': 'text/plain' });
                                res.end('Not Found');
                                return;
                            }
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(content, 'utf-8');
                        });
                    } else {
                        // Server error - don't leak internal details
                        console.error(`Server Error: ${err.code}`);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal Server Error');
                    }
                } else {
                    // Build response headers with caching
                    const headers = {
                        'Content-Type': contentType,
                        'Cache-Control': cacheDuration > 0 
                            ? `public, max-age=${cacheDuration}, immutable` 
                            : 'no-cache, no-store, must-revalidate',
                        'Vary': 'Accept-Encoding'
                    };
                    
                    // Apply gzip compression for text-based files
                    if (shouldCompress) {
                        zlib.gzip(content, (gzipErr, compressed) => {
                            if (gzipErr) {
                                // Fall back to uncompressed
                                res.writeHead(200, headers);
                                res.end(content);
                            } else {
                                headers['Content-Encoding'] = 'gzip';
                                headers['Content-Length'] = compressed.length;
                                res.writeHead(200, headers);
                                res.end(compressed);
                            }
                        });
                    } else {
                        // Serve uncompressed (images, etc.)
                        headers['Content-Length'] = content.length;
                        res.writeHead(200, headers);
                        res.end(content);
                    }
                }
            } catch (readError) {
                console.error('Error handling file read:', readError);
                if (!res.headersSent) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                }
            }
        });
    } catch (error) {
        console.error('Request handling error:', error);
        if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        }
    }
});

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err);
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use`);
    }
});

// Handle client connection errors
server.on('clientError', (err, socket) => {
    console.error('Client error:', err);
    if (socket.writable) {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Press Ctrl+C to stop the server`);
    console.log('Security features enabled: rate limiting, path validation, security headers');
});

// Function to handle file uploads
function handleFileUpload(req, res) {
    // Set CORS headers for cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Allowed file extensions
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.txt', '.doc', '.docx', '.zip'];
    
    const form = new formidable.IncomingForm({
        uploadDir: uploadsDir,
        keepExtensions: true,
        maxFileSize: 10 * 1024 * 1024, // 10MB
        maxFiles: 10,
        maxFields: 20,
        maxFieldsSize: 2 * 1024 * 1024 // 2MB for non-file fields
    });
    
    form.parse(req, (err, fields, files) => {
        try {
            if (err) {
                console.error('Error parsing form:', err);
                const message = err.code === 'LIMIT_FILE_SIZE' ? 'File too large' : 'Upload error';
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message }));
                return;
            }
            
            // Process uploaded files
            const uploadedFiles = [];
            const errors = [];
            
            if (files.files) {
                // Handle multiple files (formidable v2+)
                const fileArray = Array.isArray(files.files) ? files.files : [files.files];
                
                fileArray.forEach(file => {
                    const oldPath = file.filepath;
                    const originalFileName = file.originalFilename || 'unnamed';
                    
                    // Sanitize and validate filename
                    const safeFileName = sanitizeFilename(originalFileName);
                    const ext = path.extname(safeFileName).toLowerCase();
                    
                    // Check allowed extensions
                    if (!allowedExtensions.includes(ext)) {
                        console.warn(`Blocked upload: invalid extension ${ext}`);
                        errors.push(`File type ${ext} not allowed: ${originalFileName}`);
                        // Clean up temp file
                        try { fs.unlinkSync(oldPath); } catch (e) {}
                        return;
                    }
                    
                    const newPath = path.join(uploadsDir, safeFileName);
                    
                    // Verify new path is still within uploads directory
                    if (!newPath.startsWith(uploadsDir)) {
                        console.warn(`Blocked upload: path traversal attempt`);
                        try { fs.unlinkSync(oldPath); } catch (e) {}
                        return;
                    }
                    
                    try {
                        // Rename to preserve original filename
                        fs.renameSync(oldPath, newPath);
                        uploadedFiles.push({
                            name: safeFileName,
                            size: file.size,
                            path: path.relative(process.cwd(), newPath)
                        });
                    } catch (error) {
                        console.error(`Error saving file ${safeFileName}:`, error);
                        errors.push(`Failed to save: ${safeFileName}`);
                    }
                });
            }
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
                success: uploadedFiles.length > 0, 
                message: uploadedFiles.length > 0 ? 'Files uploaded successfully' : 'No files uploaded',
                files: uploadedFiles,
                errors: errors.length > 0 ? errors : undefined
            }));
        } catch (uploadError) {
            console.error('Upload handling error:', uploadError);
            if (!res.headersSent) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: 'Internal server error' }));
            }
        }
    });
}

// Function to handle password verification
function handlePasswordVerification(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (!CORRECT_PASSWORD_HASH) {
        res.writeHead(503, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Upload service is not configured' }));
        return;
    }
    
    let body = '';
    const maxBodySize = 1024; // 1KB limit for password request
    
    req.on('data', chunk => {
        body += chunk.toString();
        // Prevent memory exhaustion attacks
        if (body.length > maxBodySize) {
            req.destroy();
            res.writeHead(413, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, message: 'Request too large' }));
        }
    });
    
    req.on('error', (err) => {
        console.error('Request error:', err);
    });
    
    req.on('end', () => {
        try {
            if (body.length > maxBodySize) return;
            
            const { password, encrypted } = JSON.parse(body);
            
            // Input validation
            if (typeof password !== 'string' || password.length > 256) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: 'Invalid input' }));
                return;
            }
            
            const correct = isPasswordValid(password, encrypted);
            
            // Add small delay to further prevent timing attacks
            setTimeout(() => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: correct }));
            }, 100 + Math.random() * 100);
            
        } catch (error) {
            console.error('Error parsing password verification request:', error);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, message: 'Invalid request' }));
        }
    });
}
