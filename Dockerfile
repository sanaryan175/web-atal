# syntax=docker/dockerfile:1

# Node 24 to match the project's runtime (see .replit: nodejs-24)
FROM node:24-slim

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

# pnpm pinned to the version that generated pnpm-lock.yaml
RUN npm install -g pnpm@11.15.1

WORKDIR /app

# 1. Copy workspace manifests first so the dependency install is layer-cached
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc tsconfig.base.json tsconfig.json ./

COPY artifacts/atal-fdp/package.json ./artifacts/atal-fdp/package.json
COPY artifacts/api-server/package.json ./artifacts/api-server/package.json
COPY artifacts/mockup-sandbox/package.json ./artifacts/mockup-sandbox/package.json
COPY lib/db/package.json ./lib/db/package.json
COPY lib/api-zod/package.json ./lib/api-zod/package.json
COPY lib/api-client-react/package.json ./lib/api-client-react/package.json
COPY lib/api-spec/package.json ./lib/api-spec/package.json
COPY scripts/package.json ./scripts/package.json

# 2. Install dependencies (frozen lockfile = reproducible)
RUN pnpm install --frozen-lockfile

# 3. Copy the rest of the source
COPY . .

EXPOSE 5173

# 4. Run the Vite dev server for the brochure site
CMD ["pnpm", "--filter", "@workspace/atal-fdp", "run", "dev"]
