#!/usr/bin/env bash

set -Eeuo pipefail

DOMAIN="${1:-}"
WEB_ROOT="/var/www/webportfolio"
SITE_NAME="webportfolio"
CONFIG_TARGET="/etc/nginx/sites-available/$SITE_NAME"
CONFIG_LINK="/etc/nginx/sites-enabled/$SITE_NAME"
CERT_DIRECTORY="/etc/letsencrypt/live/$DOMAIN"

if [[ "${EUID}" -ne 0 ]]; then
    echo "Run this script as root: sudo bash setup-nginx.sh <domain>" >&2
    exit 1
fi

if [[ -z "$DOMAIN" || ! "$DOMAIN" =~ ^[A-Za-z0-9][A-Za-z0-9.-]*[A-Za-z0-9]$ || "$DOMAIN" != *.* ]]; then
    echo "Usage: sudo bash setup-nginx.sh example.com" >&2
    exit 1
fi

for command in nginx certbot; do
    if ! command -v "$command" >/dev/null 2>&1; then
        echo "Missing $command. Install nginx and certbot before continuing." >&2
        exit 1
    fi
done

SCRIPT_DIRECTORY="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_SOURCE="$SCRIPT_DIRECTORY/nginx.conf"

for required_path in "$CONFIG_SOURCE" "$SCRIPT_DIRECTORY/index.html" "$SCRIPT_DIRECTORY/assets" "$SCRIPT_DIRECTORY/pages"; do
    if [[ ! -e "$required_path" ]]; then
        echo "Required project file is missing: $required_path" >&2
        exit 1
    fi
done

echo "Deploying static files to $WEB_ROOT..."
install -d -m 0755 "$WEB_ROOT"
install -m 0644 "$SCRIPT_DIRECTORY/index.html" "$WEB_ROOT/index.html"
install -d -m 0755 "$WEB_ROOT/assets" "$WEB_ROOT/pages"
cp -R "$SCRIPT_DIRECTORY/assets/." "$WEB_ROOT/assets/"
cp -R "$SCRIPT_DIRECTORY/pages/." "$WEB_ROOT/pages/"
find "$WEB_ROOT" -type d -exec chmod 0755 {} +
find "$WEB_ROOT" -type f -exec chmod 0644 {} +

# Keep files from the removed upload feature outside the public web root.
if [[ -d "$WEB_ROOT/uploads" ]]; then
    BACKUP_DIRECTORY="/var/backups/webportfolio-uploads-$(date +%Y%m%d%H%M%S)"
    install -d -m 0700 /var/backups
    mv "$WEB_ROOT/uploads" "$BACKUP_DIRECTORY"
    echo "Moved old uploads to $BACKUP_DIRECTORY"
fi

install -d -m 0755 /etc/nginx/sites-available /etc/nginx/sites-enabled

reload_nginx() {
    nginx -t
    if systemctl is-active --quiet nginx; then
        systemctl reload nginx
    else
        systemctl enable --now nginx >/dev/null
    fi
}

if [[ ! -r "$CERT_DIRECTORY/fullchain.pem" || ! -r "$CERT_DIRECTORY/privkey.pem" ]]; then
    echo "No certificate found for $DOMAIN; requesting one with Let's Encrypt..."

    cat > "$CONFIG_TARGET" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN;
    root $WEB_ROOT;

    location ^~ /.well-known/acme-challenge/ {
        default_type text/plain;
        try_files \$uri =404;
    }

    location / {
        return 503;
    }
}
EOF

    ln -sfn "$CONFIG_TARGET" "$CONFIG_LINK"
    reload_nginx
    certbot certonly --webroot --webroot-path "$WEB_ROOT" --domain "$DOMAIN"
fi

TEMP_CONFIG="$(mktemp)"
trap 'rm -f "$TEMP_CONFIG"' EXIT
sed "s/__DOMAIN__/$DOMAIN/g" "$CONFIG_SOURCE" > "$TEMP_CONFIG"
install -m 0644 "$TEMP_CONFIG" "$CONFIG_TARGET"
ln -sfn "$CONFIG_TARGET" "$CONFIG_LINK"

reload_nginx
systemctl enable nginx >/dev/null

echo "Deployment complete: https://$DOMAIN"
echo "Port 443 serves the site; port 80 only redirects to HTTPS and handles certificate renewal."
