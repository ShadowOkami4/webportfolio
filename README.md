# Okami Portfolio

A static personal portfolio for sharing hobby projects, experiments, gaming videos, and project showcases. The frontend uses plain HTML, CSS, and JavaScript with no runtime dependencies or upload API.

## Run Locally

Start the dependency-free local preview server:

```powershell
npm start
```

Open `http://127.0.0.1:8080`. The server binds to the local machine only and serves just `index.html`, `pages/`, and `assets/`.

The local and production servers expose the same clean public routes:

- `/Voidline`
- `/LunaEcho`
- `/LunaEcho/Terms`
- `/LunaEcho/Privacy`
- `/Mirrored_Realms`

Unknown paths return a bilingual custom 404 page while preserving the correct HTTP `404` status.

To use a different local port:

```powershell
$env:PORT = "3000"
npm start
```

## Production HTTPS

Production is served directly by nginx on HTTPS port `443`. Port `80` does not serve the website; it only redirects visitors to HTTPS and handles Let's Encrypt certificate renewal.

Before deployment:

- Point the domain's DNS records at the server.
- Install `nginx` and `certbot`.
- Clone the repository onto the server.

Deploy from the repository directory:

```bash
sudo bash setup-nginx.sh example.com
```

The script copies only public static files to `/var/www/webportfolio`, obtains or reuses the domain's Let's Encrypt certificate, validates the nginx configuration, and reloads nginx. Run the same command after pulling future website updates.

## Security Model

- There is no upload endpoint, password endpoint, API server, or writable public directory.
- The public web root contains only the homepage, project pages, and browser assets.
- The only external embed is the privacy-enhanced YouTube video on the Voidline page, explicitly allowed by the CSP. Ko-fi is linked without loading a third-party widget.
- nginx accepts only `GET` and `HEAD`, uses TLS 1.2 or newer, and sends CSP, HSTS, framing, MIME-sniffing, referrer, permissions, and cross-origin headers.
- The local Node server is for previewing only; nginx is the production server.

## Project Structure

- `index.html` contains the portfolio homepage.
- `pages/` contains the Voidline, LunaEcho, and The Mirrored Realms project pages.
- `assets/` contains styles, scripts, and images.
- `server.js` is the dependency-free local preview server.
- `nginx.conf` is the hardened production HTTPS template.
- `setup-nginx.sh` deploys the static files and activates nginx.
