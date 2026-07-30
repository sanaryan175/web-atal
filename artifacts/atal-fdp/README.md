# AICTE-ATAL FDP — Applied AI Brochure Website

A static brochure website for the AICTE-ATAL Faculty Development Programme on **Applied AI: Emerging Trends, Tools, and Societal Applications** at PICT Pune.

Built with Vite + React + TypeScript + Tailwind CSS.

---

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/installation)

### Install dependencies

```bash
cd artifacts/atal-fdp
pnpm install
```

### Start dev server

```bash
pnpm run dev
```

The site will be available at `http://localhost:5173`.

### Type-check

```bash
pnpm run typecheck
```

### Production build

```bash
pnpm run build
```

Output goes to `artifacts/atal-fdp/dist/public/`.

### Preview production build locally

```bash
pnpm run serve
```

---

## Deploy

The build output is a set of static files (`dist/public/`). Deploy to any static hosting:

### GitHub Pages

```bash
# Build the project
cd artifacts/atal-fdp
pnpm run build

# Deploy the dist/public folder to gh-pages branch
npx gh-pages -d dist/public
```

Or push the `dist/public` folder to your preferred hosting.

### Netlify / Vercel

1. Connect your repository.
2. Set:
   - **Base directory:** `artifacts/atal-fdp`
   - **Build command:** `pnpm run build`
   - **Publish directory:** `artifacts/atal-fdp/dist/public`
3. Deploy.

### Any static server

Copy the contents of `artifacts/atal-fdp/dist/public` to your web server's document root.

> **Note:** The project uses a `BASE_PATH` environment variable (default `/`) for the Vite base path. Set it if deploying to a subdirectory.
