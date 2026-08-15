import ChatIcon from './ChatIcon.jsx'

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-100 to-gold-200 text-charcoal-800">
        <ChatIcon size={13} />
      </div>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-stone-50 px-4 py-3.5 shadow-soft dark:bg-charcoal-800">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-400"
            style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1s' }}
          />
        ))}
      </div>
    </div>
  )
}
