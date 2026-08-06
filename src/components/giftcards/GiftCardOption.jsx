import { motion } from 'framer-motion'
import { Sparkles, Gift } from 'lucide-react'
import Button from '../ui/Button.jsx'

export default function GiftCardOption({ option, index = 0, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className={`card-surface relative flex flex-col gap-5 overflow-hidden p-7 transition-shadow hover:shadow-card ${
        option.popular ? 'ring-2 ring-gold-400' : ''
      }`}
    >
      {option.popular && (
        <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gold-400 px-2.5 py-1 text-[11px] font-semibold text-charcoal-900">
          <Sparkles size={11} /> Most Popular
        </span>
      )}

      <div className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-2xl bg-charcoal-900 p-5 text-cream-100">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(176,141,83,0.6), transparent 40%), radial-gradient(circle at 85% 85%, rgba(176,141,83,0.4), transparent 45%)',
          }}
        />
        <div className="relative flex items-center justify-between">
          <span className="font-display text-lg">Solvane</span>
          <Gift size={18} className="text-gold-300" />
        </div>
        <div className="relative">
          <p className="font-display text-3xl text-gold-300">
            {option.custom ? 'Custom Amount' : `$${option.amount}`}
          </p>
          <p className="text-xs uppercase tracking-widest2 text-cream-100/50">Gift Card</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">{option.description}</p>

      <Button onClick={() => onSelect?.(option)} variant={option.popular ? 'gold' : 'outline'} className="mt-auto">
        {option.custom ? 'Choose Amount' : 'Select This Card'}
      </Button>
    </motion.div>
  )
}
