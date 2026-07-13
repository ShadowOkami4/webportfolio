const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const crypto = require('crypto');

// API server port (nginx proxies to this)
const PORT = Number(process.env.PORT) || 3000;

// ============== CRASH PREVENTION ==============
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    console.error(err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

let isShuttingDown = false;

function gracefulShutdown() {
    if (isShuttingDown) return;
    isShuttingDown = true;
    console.log('\nGraceful shutdown initiated...');
    
    server.close(() => {
        console.log('API server closed successfully');
        process.exit(0);
    });
    
    setTimeout(() => {
        console.error('Forced shutdown after timeout');
        process.exit(1);
    }, 10000);
}

// ============== RATE LIMITING ==============
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_MAX_UPLOAD = 10;
const RATE_LIMIT_MAX_PASSWORD = 5;

function checkRateLimit(ip, type) {
    const now = Date.now();
    const key = `${ip}:${type}`;
    const limit = type === 'upload' ? RATE_LIMIT_MAX_UPLOAD : RATE_LIMIT_MAX_PASSWORD;
    
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

setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
        if (now > record.resetTime) {
            rateLimitMap.delete(key);
        }
    }
}, 60000);

// ============== HELPERS ==============
function getClientIP(req) {
    // nginx sets X-Real-IP header
    return req.headers['x-real-ip'] || 
           req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 
           req.socket?.remoteAddress || 
           'unknown';
}

function sanitizeFilename(filename) {
    return filename
        .replace(/[\/\\]/g, '')
        .replace(/\0/g, '')
        .replace(/\.\./g, '')
        .substring(0, 255);
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

// Create uploads directory
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log('Created uploads directory');
}

// Allowed upload extensions
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.txt', '.doc', '.docx', '.zip'];

// ============== API SERVER ==============
const server = http.createServer((req, res) => {
    req.setTimeout(30000, () => {
        res.writeHead(408, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Request timeout' }));
    });
    
    const clientIP = getClientIP(req);
    console.log(`[${new Date().toISOString()}] ${clientIP} - ${req.method} ${req.url}`);
    
    // CORS headers for API
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Upload-Password');
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    
    try {
        // File upload endpoint
        if (req.url === '/upload' && req.method === 'POST') {
            if (!requireUploadPassword(req, res)) return;
            if (!checkRateLimit(clientIP, 'upload')) {
                res.writeHead(429, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Upload rate limit exceeded' }));
                return;
            }
            handleFileUpload(req, res);
            return;
        }
        
        // Password verification endpoint
        if (req.url === '/verify-password' && req.method === 'POST') {
            if (!checkRateLimit(clientIP, 'password')) {
                res.writeHead(429, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Too many password attempts' }));
                return;
            }
            handlePasswordVerification(req, res);
            return;
        }
        
        // Health check endpoint
        if (req.url === '/health') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
            return;
        }
        
        // Unknown endpoint
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
        
    } catch (error) {
        console.error('Request error:', error);
        if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        }
    }
});

server.on('error', (err) => {
    console.error('Server error:', err);
});

server.on('clientError', (err, socket) => {
    if (socket.writable) {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    }
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`API server running at http://127.0.0.1:${PORT}/`);
    console.log('Endpoints: /upload, /verify-password, /health');
    console.log('Use nginx to serve static files and proxy API requests');
});

// ============== FILE UPLOAD HANDLER ==============
function handleFileUpload(req, res) {
    const form = new formidable.IncomingForm({
        uploadDir: uploadsDir,
        keepExtensions: true,
        maxFileSize: 10 * 1024 * 1024,
        maxFiles: 10,
        maxFields: 20,
        maxFieldsSize: 2 * 1024 * 1024
    });
    
    form.parse(req, (err, fields, files) => {
        try {
            if (err) {
                console.error('Upload error:', err);
                const message = err.code === 'LIMIT_FILE_SIZE' ? 'File too large' : 'Upload error';
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message }));
                return;
            }
            
            const uploadedFiles = [];
            const errors = [];
            
            if (files.files) {
                const fileArray = Array.isArray(files.files) ? files.files : [files.files];
                
                fileArray.forEach(file => {
                    const oldPath = file.filepath;
                    const originalFileName = file.originalFilename || 'unnamed';
                    const safeFileName = sanitizeFilename(originalFileName);
                    const ext = path.extname(safeFileName).toLowerCase();
                    
                    if (!allowedExtensions.includes(ext)) {
                        console.warn(`Blocked upload: invalid extension ${ext}`);
                        errors.push(`File type ${ext} not allowed`);
                        try { fs.unlinkSync(oldPath); } catch (e) {}
                        return;
                    }
                    
                    const newPath = path.join(uploadsDir, safeFileName);
                    
                    if (!newPath.startsWith(uploadsDir)) {
                        console.warn('Blocked upload: path traversal attempt');
                        try { fs.unlinkSync(oldPath); } catch (e) {}
                        return;
                    }
                    
                    try {
                        fs.renameSync(oldPath, newPath);
                        uploadedFiles.push({
                            name: safeFileName,
                            size: file.size,
                            path: `uploads/${safeFileName}`
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

// ============== PASSWORD VERIFICATION HANDLER ==============
function handlePasswordVerification(req, res) {
    if (!CORRECT_PASSWORD_HASH) {
        res.writeHead(503, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Upload service is not configured' }));
        return;
    }

    let body = '';
    const maxBodySize = 1024;
    
    req.on('data', chunk => {
        body += chunk.toString();
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
            
            if (typeof password !== 'string' || password.length > 256) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: 'Invalid input' }));
                return;
            }
            
            const correct = isPasswordValid(password, encrypted);
            
            // Small delay to prevent timing attacks
            setTimeout(() => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: correct }));
            }, 100 + Math.random() * 100);
            
        } catch (error) {
            console.error('Password verification error:', error);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, message: 'Invalid request' }));
        }
    });
}
