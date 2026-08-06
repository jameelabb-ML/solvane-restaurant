// Gemini API configuration.
//
// Setup: copy .env.example to .env.local and paste your key:
//   VITE_GEMINI_API_KEY=your_key_here
//
// Get a key at https://aistudio.google.com/apikey
//
// Security note: this is a frontend-only demo (no backend), so the key is
// bundled into the client JS and visible to anyone who inspects the site.
// That's acceptable for a local demo/portfolio piece, but before shipping
// this to production, proxy Gemini calls through a backend so the key is
// never exposed to the browser.

export const GEMINI_CONFIG = {
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || '',
  // gemini-2.5-flash: current stable, well-supported free-tier model.
  // Swap to 'gemini-3.6-flash' (or whatever is newest at ai.google.dev/gemini-api/docs/models)
  // for the latest model — just be aware newer models can have tighter free-tier limits.
  model: 'gemini-3.1-flash-lite',
  baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
  temperature: 0.8,
  maxOutputTokens: 800,
}

export const isGeminiConfigured = () => Boolean(GEMINI_CONFIG.apiKey)

export default GEMINI_CONFIG
