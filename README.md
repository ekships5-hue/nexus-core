# NEXUS Core

**Neural Evolutionary eXchange Unified System** — Advanced AGI-inspired full-stack dashboard with chat, memory, agents, learning, and analytics.

Built with React 19 + Vite + Express + Gemini + Tailwind.

**Repository:** https://github.com/ekships5-hue/nexus-core

## Quick start

```bash
git clone https://github.com/ekships5-hue/nexus-core.git
cd nexus-core
npm install
```

Create `.env.local`:

```
GEMINI_API_KEY=your_key_here
```

```bash
npm run dev
```

Open http://localhost:3000

## Complete source

This repo includes project config, README, design system CSS, types, and entry files.

For the **full application source** (`server.ts`, `src/App.tsx`, and all components), use the project zip from your workspace:

1. Download **nexus-core-ios.zip**
2. Unzip it
3. Copy these into your clone:

```bash
# From the unzipped folder
cp server.ts /path/to/nexus-core/
cp -r src/App.tsx src/components /path/to/nexus-core/src/
cd /path/to/nexus-core
git add .
git commit -m "Add full application source"
git push
```

Or run everything directly from the unzipped folder without GitHub:

```bash
cd nexus-core
npm install
echo 'GEMINI_API_KEY=your_key' > .env.local
npm run dev
```

## iPhone / iPad

1. Run the app (or deploy it)
2. Open the URL in **Safari**
3. Share → **Add to Home Screen**

## Features

- Dashboard with live metrics and quick actions
- Multi-thread AI chat (Gemini)
- Voice mode (Web Speech API)
- Memory grid, knowledge base, agent monitor
- Self-improvement / reflections
- Dark / light theme toggle
- Mobile-responsive sidebar + iOS PWA meta tags

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Run production |
| `npm run lint` | Typecheck |
