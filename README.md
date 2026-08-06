# Solvane — Restaurant Portfolio Demo

A premium, fully fictional restaurant website built as a web development portfolio piece. Solvane is a modern Nordic fine-dining concept — the brand, copy, menu, chef profile, contact details and imagery are all invented for demonstration purposes only.

## Tech Stack

- React 19 (JavaScript only — no TypeScript)
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React Icons

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## AI Assistant (Gemini) Setup

The floating chat assistant is fully wired up to Google Gemini — it just needs an API key:

1. Get a free key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Copy `.env.example` to `.env.local`
3. Paste your key: `VITE_GEMINI_API_KEY=your_key_here`
4. Restart the dev server

Without a key, the assistant still runs — it shows a friendly in-chat message telling the visitor (or you) that a key is needed, with a Retry button, instead of breaking.

**Security note:** this is a frontend-only project with no backend, so the API key is bundled into the client JavaScript and visible to anyone who inspects the site or its network requests. That's fine for local development and demos, but before deploying this publicly, proxy Gemini calls through a small backend/serverless function so the key never reaches the browser.

To point this at a different restaurant later, edit `src/config/restaurantContext.js` (and the files it pulls from in `src/data/`) — the assistant's knowledge updates automatically, no chatbot code changes needed.

## Project Structure

```
src/
├── assets/            Fonts, icons, images
├── components/        Reusable UI grouped by domain (layout, navigation, hero, menu,
│                       gallery, reservation, events, giftcards, testimonials, chatbot,
│                       common, ui)
├── config/             gemini.js (API config, reads VITE_GEMINI_API_KEY)
│                       restaurantContext.js (auto-built AI system prompt + suggested prompts)
├── context/            Theme (dark/light) context
├── data/               Restaurant content (menu, gallery, testimonials, events, gift cards)
├── hooks/               useChat.js and other shared hooks
├── pages/               Route-level page components
├── services/            gemini.js — streaming chat API calls
├── utils/               Navigation config, image URLs, storage.js, markdown.js
├── App.jsx              App shell, routing
├── main.jsx             Entry point
└── routes.jsx           Route definitions
```

### Chatbot architecture

```
components/chatbot/
├── ChatbotWidget.jsx     Top-level: holds open/closed state, wires up useChat
├── FloatingButton.jsx    Trigger button (hides while chat is open)
├── ChatWindow.jsx        Panel shell: header, message list, welcome state, input
├── ChatHeader.jsx        Logo, name, online indicator, clear/close buttons
├── ChatMessage.jsx       Markdown rendering, timestamps, copy button, error/retry
├── TypingIndicator.jsx
└── SuggestedQuestions.jsx
```

To reuse this chatbot for a different client, you only need to change: the restaurant name/logo initial/colors in `tailwind.config.js` and `config/restaurantContext.js`, the data in `src/data/`, and the Gemini key in `.env.local`.

## Notes

- This is a frontend-only demo — there is no backend, database, authentication or payment processing.
- Reservation, contact, inquiry and gift-card forms are illustrative only; nothing is submitted anywhere.
- Chat history persists locally per-browser via `localStorage` (not sent anywhere except to Gemini when you send a message).
- Photography is sourced from Unsplash as placeholder imagery.
