import { Search, X } from 'lucide-react'
import { categories } from '../../data/menu.js'

const DIETARY_FILTERS = [
  { id: 'vegetarian', label: 'Vegetar' },
  { id: 'vegan', label: 'Vegansk' },
  { id: 'gluten-free', label: 'Glutenfri' },
  { id: 'pescatarian', label: 'Pescetariansk' },
]

export default function MenuFilters({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  activeDietary,
  onDietaryToggle,
  onClear,
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative mx-auto w-full max-w-md">
        <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Søk i menyen..."
          className="w-full rounded-full border border-stone-300 bg-white py-3 pl-11 pr-10 text-sm text-charcoal outline-none transition-colors focus:border-gold-400 dark:border-white/15 dark:bg-charcoal-800 dark:text-cream-100"
        />
        {search && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            aria-label="Fjern søk"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onCategoryChange('all')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-charcoal text-cream-100 dark:bg-gold-400 dark:text-charcoal-900'
              : 'bg-stone-100 text-charcoal-600 hover:bg-stone-200 dark:bg-white/10 dark:text-cream-100/70'
          }`}
        >
          Alle retter
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onCategoryChange(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? 'bg-charcoal text-cream-100 dark:bg-gold-400 dark:text-charcoal-900'
                : 'bg-stone-100 text-charcoal-600 hover:bg-stone-200 dark:bg-white/10 dark:text-cream-100/70'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-stone-200 pt-5 dark:border-white/10">
        <span className="mr-1 text-xs font-medium uppercase tracking-widest2 text-charcoal-400 dark:text-cream-100/40">
          Kosthold
        </span>
        {DIETARY_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onDietaryToggle(f.id)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              activeDietary.includes(f.id)
                ? 'border-gold-400 bg-gold-100 text-gold-700 dark:bg-gold-400/20 dark:text-gold-200'
                : 'border-stone-200 text-charcoal-500 hover:border-gold-300 dark:border-white/15 dark:text-cream-100/60'
            }`}
          >
            {f.label}
          </button>
        ))}
        {(search || activeCategory !== 'all' || activeDietary.length > 0) && (
          <button
            type="button"
            onClick={onClear}
            className="ml-2 text-xs font-medium text-charcoal-400 underline-offset-2 hover:text-gold-500 hover:underline dark:text-cream-100/50"
          >
            Fjern filtre
          </button>
        )}
      </div>
    </div>
  )
}
