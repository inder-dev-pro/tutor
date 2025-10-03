# AI Tutor Demo (React + Vite)

Premium, light‑blue themed React app that integrates a Heygen interactive avatar as a tutor. Includes a dashboard, quiz, gamification, and an embedded avatar panel on the homepage.

## What’s included

- Premium light‑blue UI theme using Tailwind (`brand` palette, Inter font, soft shadows)
- Sticky translucent navbar with brand accent
- Homepage sections styled as cards: Avatar, Quiz, Progress
- Heygen Streaming Avatar integration in `src/components/TutorAvatar.jsx`
  - Starts a streaming session and renders video when ready
  - Simple text input + Speak button to make the tutor talk
- Optional floating embed component (`HeygenEmbed.jsx`) wired but not mounted

## Prerequisites

- Node 18+
- A Heygen API token and avatar name/id

## Getting started

1) Install dependencies

```bash
cd UI/ai-tutor-demo
npm install
```

2) Create environment file `UI/ai-tutor-demo/.env.local` with Heygen vars:

```bash
VITE_HEYGEN_TOKEN=YOUR_TEMP_DEV_TOKEN
VITE_HEYGEN_AVATAR_ID=YOUR_AVATAR_ID
```

Notes:
- Do NOT ship long‑lived keys in the browser. In production, mint short‑lived tokens server‑side and return them to the client.
- Alternatively, you can embed a share URL via iframe using `VITE_HEYGEN_EMBED_URL` and an iframe component.

3) Start the transcript server (writes to UI/ai-tutor-demo/transcript.txt)

```bash
npm run transcripts
```

Addresses:
- Health: http://localhost:4545/health
- Append transcript (POST JSON): http://localhost:4545/transcript
  - Example:
    ```bash
    curl -s -X POST http://localhost:4545/transcript -H 'Content-Type: application/json' -d '{"text":"Hello transcript"}'
    ```

Optional environment overrides:
```bash
TRANSCRIPT_PORT=4546 TRANSCRIPT_FILE=./my-transcript.txt npm run transcripts
```

4) Run the web dev server (Vite)

```bash
npm run dev
```

Addresses:
- App: http://localhost:5173

- Go to Home. The “Your AI Tutor” card will render the avatar when the stream is ready.
- Use the input to type a message and click Speak to have the avatar respond.

## Troubleshooting

- 400 from Heygen API
  - Usually invalid token or avatar name. Double‑check `VITE_HEYGEN_TOKEN` and `VITE_HEYGEN_AVATAR_ID`.
  - After changing `.env.local`, stop and restart `npm run dev`.

- Autoplay / AudioContext not allowed
  - Some browsers require a user gesture before starting audio/video playback. Interact with the page (click) first, then use Speak.

- Network / permissions
  - If you enable voice chat paths later, allow microphone permissions.

## Key files

- `src/components/TutorAvatar.jsx`: Heygen streaming avatar integration
- `src/pages/home.jsx`: Homepage layout (cards for Avatar, Quiz, Progress)
- `src/App.jsx`: App shell, navbar, routes
- `src/index.css`: Tailwind layers (base gradient, card and button utilities)
- `tailwind.config.js`: Brand color palette and theme extensions

## Customization

- Change brand colors in `tailwind.config.js` under `theme.extend.colors.brand`
- Adjust typography and background in `src/index.css`
- Re‑enable floating embed by mounting `HeygenEmbed` in `App.jsx` (after consent) if desired

## Production notes

- Replace `VITE_HEYGEN_TOKEN` with a short‑lived token minted by your backend
- Consider adding backend endpoints for session lifecycle and security
