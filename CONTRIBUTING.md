# Contributing to NEXUS Core

## Setup

```bash
git clone https://github.com/ekships5-hue/nexus-core.git
cd nexus-core
npm install
cp .env.example .env.local
# Add your GEMINI_API_KEY to .env.local
npm run dev
```

## Full source

If some source files are missing from this repo, download the complete project archive from the project workspace (`nexus-core-ios.zip`) and copy the `src/` and `server.ts` files into this repository, then push.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — run production server
- `npm run lint` — TypeScript check
