# Web-Brochure-Design

FDP brochure website for the **AICTE-ATAL Applied AI** programme at PICT Pune.

Built with Vite + React + TypeScript + Tailwind CSS, managed as a pnpm workspace.

---

## Quick start (Docker — one command)

The easiest way to run the project. The only requirement is [Docker Desktop](https://www.docker.com/products/docker-desktop/) — no Node.js or pnpm needed.

```bash
docker compose up
```

- Open [http://localhost:5173](http://localhost:5173)
- Stop with `Ctrl+C`

After editing code, rebuild the image to pick up the changes:

```bash
docker compose up --build
```

> **Troubleshooting:** If you get `Bind for 0.0.0.0:5173 failed: port is already allocated`, another app is already using port 5173. Stop it, or run the container on a different port with `docker run -d -p 5174:5173 web-brochure-design-web` and open `http://localhost:5174`.

---

## Running locally (without Docker)

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/installation)

### Install dependencies

```bash
pnpm install
```

### Dev server (localhost)

```bash
cd artifacts/atal-fdp && pnpm run dev
```

Opens at `http://localhost:5173`.

### Type-check

```bash
cd artifacts/atal-fdp && pnpm run typecheck
```

---

## Build

```bash
cd artifacts/atal-fdp && pnpm run build
```

Output: `artifacts/atal-fdp/dist/public/`.

## Preview production build locally

```bash
cd artifacts/atal-fdp && pnpm run serve
```

---

## Project structure

```
artifacts/
  atal-fdp/            # the brochure website (Vite + React)
  api-server/          # API server (not required for the site)
  mockup-sandbox/      # design mockup playground
lib/
  api-client-react/    # React query hooks (workspace package)
  api-spec/            # OpenAPI spec + codegen
  api-zod/             # shared Zod schemas
  db/                  # Drizzle ORM schema
scripts/               # workspace helper scripts
```

The brochure site is a static app and does **not** depend on the API server.

---

## Deploy

The build output (`dist/public/`) is a set of static files. Deploy to any static hosting:

### GitHub Pages

```bash
cd artifacts/atal-fdp
pnpm run build
npx gh-pages -d dist/public
```

### Netlify / Vercel

1. Connect your repository.
2. Set:
   - **Base directory:** `artifacts/atal-fdp`
   - **Build command:** `pnpm run build`
   - **Publish directory:** `artifacts/atal-fdp/dist/public`
3. Deploy.

### Any static server

Copy `artifacts/atal-fdp/dist/public/` to your web server's document root.

> **Note:** Always run commands inside `artifacts/atal-fdp/` — the root workspace build will fail because other projects in the workspace require additional env variables.

---

## Integrate into another website

The brochure is a static app, so it can be embedded or mounted inside an existing website in several ways:

### Option 1 — Embed as an iframe (easiest, no build changes)

Deploy the site anywhere, then embed it in any HTML page:

```html
<iframe
  src="https://your-domain.com/brochure/"
  style="width: 100%; height: 100vh; border: 0"
  title="AICTE-ATAL FDP Brochure"
></iframe>
```

### Option 2 — Host under a subpath (recommended for same-domain integration)

The project already supports a base path — routing uses `BASE_URL` (see `src/App.tsx`), so assets and routes are automatically prefixed.

```bash
cd artifacts/atal-fdp
BASE_PATH=/brochure pnpm run build
```

Then copy `artifacts/atal-fdp/dist/public/` into your server's `brochure/` folder. The site will work at `https://your-domain.com/brochure/`.

### Option 3 — Serve through a reverse proxy (nginx)

Keep the app running (e.g. via Docker) and proxy a path to it:

```nginx
location /brochure/ {
  proxy_pass http://localhost:5173/;
  proxy_set_header Host $host;
}
```

### Option 4 — Just link to it

Point a button/logo from the existing website to the deployed brochure page:

```html
<a href="https://your-domain.com/brochure/" target="_blank" rel="noopener noreferrer">View Brochure</a>
```

> **Tip:** For production, run `BASE_PATH=/brochure pnpm run build` and serve the static `dist/public/` folder — faster and no dev server needed.

---

## Sharing the project

Give someone the repository and tell them to run `docker compose up` — see [Quick start](#quick-start-docker--one-command).
