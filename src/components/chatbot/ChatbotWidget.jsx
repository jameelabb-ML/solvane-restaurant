import { useEffect, useState } from 'react'
import { useChat } from '../../hooks/useChat.js'
import FloatingButton from './FloatingButton.jsx'
import ChatWindow from './ChatWindow.jsx'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const chat = useChat()

  // Auto-open shortly after the site loads, so the visitor sees the site and
  // the assistant together without needing to find and click a small icon.
  // Timed to fire just after the loading screen clears (~1.7s), so the visitor
  // sees the site first and then watches the assistant open — not both at once.
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <FloatingButton onClick={() => setOpen(true)} visible={!open} />
      <ChatWindow chat={chat} onClose={() => setOpen(false)} visible={open} />
    </>
  )
}
