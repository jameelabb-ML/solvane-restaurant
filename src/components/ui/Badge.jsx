const TONES = {
  gold: 'bg-gold-100 text-gold-700 dark:bg-gold-400/15 dark:text-gold-200',
  olive: 'bg-olive-400/15 text-olive-600 dark:text-olive-400',
  stone: 'bg-stone-100 text-charcoal-600 dark:bg-white/10 dark:text-cream-100/80',
}

export default function Badge({ children, tone = 'stone', className = '', icon: Icon }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium tracking-wide ${TONES[tone]} ${className}`}
    >
      {Icon && <Icon size={12} strokeWidth={2.25} />}
      {children}
    </span>
  )
}
