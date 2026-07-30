# Web-Brochure-Design

FDP brochure website for **AICTE-ATAL Applied AI** programme at PICT Pune.

Built with Vite + React + TypeScript + Tailwind CSS.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/installation)

## Install dependencies

```bash
pnpm install
```

## Dev server (localhost)

```bash
cd artifacts/atal-fdp && pnpm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
cd artifacts/atal-fdp && pnpm run build
```

Output: `artifacts/atal-fdp/dist/public/`.

## Preview production build locally

```bash
cd artifacts/atal-fdp && pnpm run serve
```

## Type-check

```bash
cd artifacts/atal-fdp && pnpm run typecheck
```

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
