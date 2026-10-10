# NEXUS Core

**Neural Evolutionary eXchange Unified System** — Advanced AGI-inspired full-stack dashboard with chat, memory, agents, learning, and analytics.

Built with React 19 + Vite + Express + Gemini + Tailwind.

## Run locally (Mac / Windows / Linux)

**Prerequisites:** Node.js 18+

```bash
npm install
```

Create `.env.local`:

```
GEMINI_API_KEY=your_key_here
```

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:3000`).

## Use on iPhone / iPad (iOS)

### Option A — Add to Home Screen (PWA)

1. Deploy or host the app (or use a tunnel like ngrok while developing).
2. Open the site in **Safari** on iPhone/iPad.
3. Tap **Share** → **Add to Home Screen**.
4. NEXUS opens like a native app (standalone, no Safari chrome).

### Option B — Native shell with Capacitor (Xcode)

On a Mac with Xcode installed:

```bash
npm install && npm run build
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "NEXUS Core" com.nexus.core --web-dir dist
npx cap add ios && npx cap sync ios && npx cap open ios
```

## Features

- Dashboard with live metrics and quick actions
- Multi-thread AI chat (Gemini)
- Voice mode (Web Speech API)
- Memory grid, knowledge base, agent monitor
- Self-improvement / reflections
- Dark / light theme toggle (persisted)
- Mobile-responsive sidebar

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (Express + Vite) |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Typecheck |

## Project structure

```
nexus-core/
├── server.ts
├── src/
│   ├── App.tsx
│   ├── components/
│   └── index.css
├── public/manifest.json
└── index.html
```
