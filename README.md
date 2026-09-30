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

## Design System

The site follows Material 3 Expressive. Each page loads a small stack of stylesheets from `assets/css/`:

- `tokens.css` holds the generated M3 colour roles (`--md-sys-color-*`), one dark scheme per area: home, Voidline, LunaEcho, and The Mirrored Realms.
- `shapes.css` holds the generated M3 Expressive shape library as `clip-path` polygons (`--shape-cookie9`, `--shape-clover`, …). Every shape has the same number of points, so shapes can morph into each other.
- `base.css` holds the shared foundation: fonts, shape and motion tokens, header, buttons, chips, footer, and the language switch.
- `home.css` contains the homepage styles, and `projects.css` covers the project pages, legal documents, and the 404 page.
- `realms.css` is the dark-grimoire layer used only on The Mirrored Realms.
- `motion.css` loads last on every page and adds the M3 Expressive motion: page transitions, ripples, the wavy progress line, staggered entrances, scroll-driven effects and the rollable d20. `assets/js/motion.js` drives the parts that need script, and `assets/js/die3d.js` draws the 3D d20 at the foot of The Mirrored Realms. Both are switched off by `prefers-reduced-motion`.

Fonts (Roboto Flex, Cinzel, EB Garamond) are self-hosted in `assets/fonts/`, so the CSP can stay `self`-only.

The generated files are committed. Regenerate them only after changing a source colour, font, or shape:

```powershell
npm install
npm run build:tokens   # seed colours live in tools/build-tokens.mjs
npm run build:fonts
npm run build:shapes
npm run build:og       # link-preview cards for all four sites, from tools/og-card.html (needs Edge or Chrome)
```

German translations live in `assets/js/translations.js`. Open any page with `?i18n-audit` to list English text that has no translation, and run `npm run check:i18n` to find dictionary entries no page uses any more (`node tools/check-translations.mjs --write` removes them).
