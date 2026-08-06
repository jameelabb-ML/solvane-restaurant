const STORAGE_KEY = 'solvane-chat-history'
const MAX_STORED_MESSAGES = 50

export function loadChatHistory() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveChatHistory(messages) {
  if (typeof window === 'undefined') return
  try {
    const trimmed = messages.slice(-MAX_STORED_MESSAGES)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
  } catch {
    // Storage may be full or unavailable (e.g. private browsing) — fail silently.
  }
}

export function clearChatHistory() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
