import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import OptimizedImage from '../ui/OptimizedImage.jsx'

export default function EventCard({ event, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="card-surface group overflow-hidden transition-shadow duration-300 hover:shadow-card"
    >
      <OptimizedImage src={event.image} alt={event.title} aspect="aspect-[16/10]" imgClassName="group-hover:scale-110" />
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-display text-xl text-charcoal dark:text-cream-100">{event.title}</h3>
        <p className="text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">{event.description}</p>
        <div className="mt-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gold-600 dark:text-gold-300">
          <Users size={13} />
          {event.capacity}
        </div>
      </div>
    </motion.article>
  )
}
