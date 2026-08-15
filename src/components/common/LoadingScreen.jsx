import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const hideTimer = setTimeout(() => setVisible(false), 1100)
    const unmountTimer = setTimeout(() => setMounted(false), 1700)
    return () => {
      clearTimeout(hideTimer)
      clearTimeout(unmountTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-cream-200 transition-opacity duration-500 ease-in-out dark:bg-charcoal-900 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-3 animate-fade-in">
        <span className="font-display text-4xl tracking-wide text-charcoal dark:text-cream-100">
          Solvane
        </span>
        <span className="eyebrow">Moderne nordisk mat</span>
      </div>
      <div className="h-px w-24 overflow-hidden bg-stone-200 dark:bg-charcoal-600">
        <div className="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-gold-400 to-transparent bg-[length:200%_100%]" />
      </div>
    </div>
  )
}
