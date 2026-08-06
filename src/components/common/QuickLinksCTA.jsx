import { motion } from 'framer-motion'
import { Users, Gift, UtensilsCrossed } from 'lucide-react'
import Button from '../ui/Button.jsx'

const items = [
  {
    icon: UtensilsCrossed,
    title: 'Reserve a Table',
    description: 'Join us for an evening tasting menu or Sunday brunch.',
    cta: 'Book Now',
    to: '/reservations',
  },
  {
    icon: Users,
    title: 'Private Dining',
    description: 'Corporate dinners, celebrations and full restaurant buyouts.',
    cta: 'Plan an Event',
    to: '/private-events',
  },
  {
    icon: Gift,
    title: 'Gift Cards',
    description: 'Share the Solvane experience with someone you love.',
    cta: 'Give a Gift',
    to: '/gift-cards',
  },
]

export default function QuickLinksCTA() {
  return (
    <section className="section-padding bg-stone-100 dark:bg-charcoal-800">
      <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            className="card-surface flex flex-col items-start gap-4 p-8 transition-shadow hover:shadow-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 dark:bg-gold-400/15 dark:text-gold-300">
              <item.icon size={20} />
            </div>
            <h3 className="font-display text-xl text-charcoal dark:text-cream-100">{item.title}</h3>
            <p className="flex-1 text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">
              {item.description}
            </p>
            <Button to={item.to} variant="outline" size="sm">
              {item.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
