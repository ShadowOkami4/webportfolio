# Okami Portfolio

A personal hobby developer portfolio for sharing projects, experiments, and YouTube showcases. The site is built with plain HTML, CSS, and JavaScript, with no frontend build step required.

## Highlights

- Responsive purple editorial design
- Dedicated project pages for Voidline and LunaEcho
- Accessible navigation and reduced-motion support
- Optional Node.js server and nginx deployment configuration

## Run Locally

Install the Node.js dependencies:

```powershell
npm install
```

Start the standalone website server on a local port:

```powershell
$env:PORT = "8080"
npm start
```

Then open `http://localhost:8080`.

## Optional Upload API

The included upload endpoints are disabled until an `UPLOAD_PASSWORD` environment variable is configured. Upload requests must send the same password in the `X-Upload-Password` header.

```powershell
$env:UPLOAD_PASSWORD = "use-a-long-random-password"
$env:PORT = "8080"
npm start
```

Never commit a real password or a local `.env` file. Use `.env.example` only as a configuration reference.

## Project Structure

- `index.html` contains the portfolio homepage.
- `pages/` contains the individual project pages.
- `assets/` contains styles, scripts, and images.
- `server.js` serves the complete site without nginx.
- `api-server.js` provides the API when nginx serves the static files.
