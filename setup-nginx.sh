#!/bin/bash

# Setup script for nginx + Node.js API server
# Run with: sudo bash setup-nginx.sh

set -e

echo "=== Website Nginx Setup ==="

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root (sudo bash setup-nginx.sh)"
    exit 1
fi

# Install nginx if not installed
if ! command -v nginx &> /dev/null; then
    echo "Installing nginx..."
    apt-get update
    apt-get install -y nginx
fi

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Copy nginx config
echo "Copying nginx configuration..."
cp "$SCRIPT_DIR/nginx.conf" /etc/nginx/sites-available/website

# Create symlink if it doesn't exist
if [ ! -L /etc/nginx/sites-enabled/website ]; then
    ln -s /etc/nginx/sites-available/website /etc/nginx/sites-enabled/website
fi

# Remove default site if it exists
if [ -L /etc/nginx/sites-enabled/default ]; then
    rm /etc/nginx/sites-enabled/default
fi

# Test nginx config
echo "Testing nginx configuration..."
nginx -t

# Restart nginx
echo "Restarting nginx..."
systemctl restart nginx
systemctl enable nginx

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Nginx is now configured to:"
echo "  - Serve static files from $SCRIPT_DIR"
echo "  - Proxy /upload and /verify-password to Node.js on port 3000"
echo ""
echo "To start the API server:"
echo "  cd $SCRIPT_DIR"
echo "  node api-server.js"
echo ""
echo "Or use PM2 for production:"
echo "  npm install -g pm2"
echo "  pm2 start api-server.js --name website-api"
echo "  pm2 save && pm2 startup"
echo ""
echo "Check status:"
echo "  systemctl status nginx"
echo "  curl http://localhost/health"
