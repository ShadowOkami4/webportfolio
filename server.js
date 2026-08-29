'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const ROOT = __dirname;
const REAL_ROOT = fs.realpathSync(ROOT);
const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 8080);
const NOT_FOUND_PAGE = path.join(ROOT, '404.html');
const ROUTE_ALIASES = new Map([
    ['/LunaEcho', 'pages/lunaecho.html'],
    ['/LunaEcho/Privacy', 'pages/lunaecho-privacy.html'],
    ['/LunaEcho/Terms', 'pages/lunaecho-terms.html'],
    ['/Mirrored_Realms', 'pages/mirrorgate.html'],
    ['/Voidline', 'pages/voidline.html']
]);
const ROUTE_REDIRECTS = new Map([
    ['/MirrorGate', '/Mirrored_Realms']
]);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535');
}

const MIME_TYPES = new Map([
    ['.css', 'text/css; charset=utf-8'],
    ['.gif', 'image/gif'],
    ['.html', 'text/html; charset=utf-8'],
    ['.ico', 'image/x-icon'],
    ['.jpeg', 'image/jpeg'],
    ['.jpg', 'image/jpeg'],
    ['.js', 'text/javascript; charset=utf-8'],
    ['.json', 'application/json; charset=utf-8'],
    ['.png', 'image/png'],
    ['.svg', 'image/svg+xml'],
    ['.webp', 'image/webp'],
    ['.woff', 'font/woff'],
    ['.woff2', 'font/woff2']
]);

const SECURITY_HEADERS = {
    'Content-Security-Policy': "default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; frame-src https://www.youtube-nocookie.com https://ko-fi.com; form-action 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'",
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY'
};

function isPublicPath(relativePath) {
    const extension = path.posix.extname(relativePath).toLowerCase();
    if (relativePath === 'index.html') return true;
    if (relativePath.startsWith('pages/')) return extension === '.html';
    return relativePath.startsWith('assets/') && MIME_TYPES.has(extension);
}

async function findPublicFile(urlPath) {
    let decodedPath;

    try {
        decodedPath = decodeURIComponent(urlPath);
    } catch {
        return { status: 400 };
    }

    if (decodedPath.includes('\0') || decodedPath.includes('\\')) {
        return { status: 400 };
    }

    const normalizedPath = decodedPath.length > 1 ? decodedPath.replace(/\/+$/, '') : decodedPath;
    const aliasedPath = ROUTE_ALIASES.get(normalizedPath);
    const segments = decodedPath.split('/').filter(Boolean);
    if (segments.some((segment) => segment.startsWith('.'))) {
        return { status: 403 };
    }

    let relativePath = aliasedPath || segments.join('/');
    if (!aliasedPath) {
        if (!relativePath) {
            relativePath = 'index.html';
        } else if (decodedPath.endsWith('/')) {
            relativePath = `${relativePath}/index.html`;
        }
    }

    const candidates = [relativePath];
    if (!path.posix.extname(relativePath)) candidates.push(`${relativePath}.html`);

    for (const candidate of candidates) {
        if (!isPublicPath(candidate)) continue;

        const absolutePath = path.resolve(ROOT, ...candidate.split('/'));
        if (!absolutePath.startsWith(`${ROOT}${path.sep}`)) continue;

        try {
            const realPath = await fs.promises.realpath(absolutePath);
            const relativeRealPath = path.relative(REAL_ROOT, realPath);
            const isInsideRoot = relativeRealPath
                && !relativeRealPath.startsWith('..')
                && !path.isAbsolute(relativeRealPath);

            if (!isInsideRoot) return { status: 403 };

            const stats = await fs.promises.stat(realPath);
            if (stats.isFile()) return { absolutePath: realPath, stats, status: 200 };
        } catch (error) {
            if (error.code !== 'ENOENT') throw error;
        }
    }

    return { status: 404 };
}

function sendText(req, res, status, message, extraHeaders = {}) {
    const body = Buffer.from(message);
    res.writeHead(status, {
        ...SECURITY_HEADERS,
        ...extraHeaders,
        'Cache-Control': 'no-store',
        'Content-Length': body.length,
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end(req.method === 'HEAD' ? undefined : body);
}

async function sendNotFoundPage(req, res) {
    try {
        const body = await fs.promises.readFile(NOT_FOUND_PAGE);
        res.writeHead(404, {
            ...SECURITY_HEADERS,
            'Cache-Control': 'no-store',
            'Content-Length': body.length,
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(req.method === 'HEAD' ? undefined : body);
    } catch {
        sendText(req, res, 404, 'Not Found');
    }
}

async function handleRequest(req, res) {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        sendText(req, res, 405, 'Method Not Allowed', { Allow: 'GET, HEAD' });
        return;
    }

    let requestUrl;
    try {
        requestUrl = new URL(req.url, 'http://localhost');
    } catch {
        sendText(req, res, 400, 'Bad Request');
        return;
    }

    try {
        const normalizedPath = requestUrl.pathname.length > 1
            ? requestUrl.pathname.replace(/\/+$/, '')
            : requestUrl.pathname;
        const redirectTarget = ROUTE_REDIRECTS.get(normalizedPath);
        if (redirectTarget) {
            sendText(req, res, 308, 'Permanent Redirect', { Location: redirectTarget });
            return;
        }

        const file = await findPublicFile(requestUrl.pathname);
        if (file.status !== 200) {
            if (file.status === 404) {
                await sendNotFoundPage(req, res);
                return;
            }
            const message = file.status === 403 ? 'Forbidden' : file.status === 400 ? 'Bad Request' : 'Not Found';
            sendText(req, res, file.status, message);
            return;
        }

        const extension = path.extname(file.absolutePath).toLowerCase();
        const contentType = MIME_TYPES.get(extension) || 'application/octet-stream';
        res.writeHead(200, {
            ...SECURITY_HEADERS,
            'Cache-Control': 'no-store',
            'Content-Length': file.stats.size,
            'Content-Type': contentType
        });

        if (req.method === 'HEAD') {
            res.end();
            return;
        }

        const stream = fs.createReadStream(file.absolutePath);
        stream.on('error', () => res.destroy());
        stream.pipe(res);
    } catch (error) {
        console.error('Request failed:', error.message);
        if (!res.headersSent) sendText(req, res, 500, 'Internal Server Error');
        else res.destroy();
    }
}

const server = http.createServer((req, res) => {
    void handleRequest(req, res);
});

server.headersTimeout = 5_000;
server.keepAliveTimeout = 5_000;
server.requestTimeout = 10_000;
server.maxHeadersCount = 50;

server.on('clientError', (_error, socket) => {
    if (socket.writable) socket.end('HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n');
});

server.listen(PORT, HOST, () => {
    console.log(`Local preview: http://${HOST}:${PORT}/`);
    console.log('Production HTTPS is handled by nginx on port 443.');
});

function shutdown() {
    server.close(() => process.exit(0));
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
