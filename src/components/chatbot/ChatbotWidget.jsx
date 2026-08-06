import { useEffect, useState } from 'react'
import { useChat } from '../../hooks/useChat.js'
import FloatingButton from './FloatingButton.jsx'
import ChatWindow from './ChatWindow.jsx'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const chat = useChat()

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
