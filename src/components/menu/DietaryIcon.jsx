import { Leaf, WheatOff, Fish, MilkOff, Sprout } from 'lucide-react'

const DIETARY_META = {
  vegetarian: { label: 'Vegetar', icon: Leaf, tone: 'text-olive-600 dark:text-olive-400' },
  vegan: { label: 'Vegansk', icon: Sprout, tone: 'text-olive-600 dark:text-olive-400' },
  'gluten-free': { label: 'Glutenfri', icon: WheatOff, tone: 'text-gold-600 dark:text-gold-300' },
  'gluten-free option': { label: 'Glutenfritt alternativ', icon: WheatOff, tone: 'text-gold-600 dark:text-gold-300' },
  pescatarian: { label: 'Pescetariansk', icon: Fish, tone: 'text-sky-600 dark:text-sky-300' },
  'dairy-free': { label: 'Melkefri', icon: MilkOff, tone: 'text-charcoal-400' },
}

export function DietaryBadge({ tag }) {
  const meta = DIETARY_META[tag]
  if (!meta) return null
  const Icon = meta.icon
  return (
    <span
      title={meta.label}
      className={`inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-medium dark:bg-white/10 ${meta.tone}`}
    >
      <Icon size={11} strokeWidth={2.25} />
      {meta.label}
    </span>
  )
}

export const ALLERGEN_LABELS = {
  gluten: 'Gluten',
  dairy: 'Melk',
  nuts: 'Nøtter',
  shellfish: 'Skalldyr',
  fish: 'Fisk',
  egg: 'Egg',
}

export default DietaryBadge
