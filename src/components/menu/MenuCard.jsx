import { Flame, ChefHat, TriangleAlert } from 'lucide-react'
import { motion } from 'framer-motion'
import OptimizedImage from '../ui/OptimizedImage.jsx'
import { DietaryBadge, ALLERGEN_LABELS } from './DietaryIcon.jsx'

export default function MenuCard({ item, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: 'easeOut' }}
      className="card-surface group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-card"
    >
      <div className="relative">
        <OptimizedImage
          src={item.image}
          alt={item.name}
          aspect="aspect-[4/3]"
          imgClassName="group-hover:scale-110"
          className="rounded-t-2xl"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {item.chefRecommended && (
            <span className="inline-flex items-center gap-1 rounded-full bg-charcoal/90 px-2.5 py-1 text-[11px] font-medium text-gold-300 backdrop-blur">
              <ChefHat size={11} /> Chef&apos;s Pick
            </span>
          )}
          {item.popular && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-charcoal backdrop-blur">
              <Flame size={11} className="text-gold-500" /> Popular
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug text-charcoal dark:text-cream-100">{item.name}</h3>
          <span className="shrink-0 font-display text-lg text-gold-600 dark:text-gold-300">${item.price}</span>
        </div>
        <p className="text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">{item.description}</p>

        {item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.dietary.map((tag) => (
              <DietaryBadge key={tag} tag={tag} />
            ))}
          </div>
        )}

        {item.allergens.length > 0 && (
          <div className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-charcoal-400 dark:text-cream-100/40">
            <TriangleAlert size={12} />
            <span>Contains: {item.allergens.map((a) => ALLERGEN_LABELS[a]).join(', ')}</span>
          </div>
        )}
      </div>
    </motion.article>
  )
}
