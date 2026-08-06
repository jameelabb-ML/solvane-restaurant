import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button.jsx'
import img from '../../utils/images.js'
import restaurant from '../../data/restaurant.js'

export default function Hero() {
  return (
    <section className="relative flex h-[92vh] min-h-[620px] w-full items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={img.heroInterior}
          alt="Solvane dining room bathed in warm evening light"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Even wash for baseline contrast across the whole image */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/50 to-charcoal-950/35" />
        {/* Focused vignette directly behind the text block, edges stay vivid */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 52%, rgba(12,10,8,0.55) 0%, rgba(12,10,8,0.2) 55%, rgba(12,10,8,0) 78%)',
          }}
        />
      </motion.div>

      <div className="container-page relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest2 text-gold-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          {restaurant.cuisine}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="heading-xl text-balance max-w-3xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]"
        >
          {restaurant.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-xl text-base sm:text-lg text-cream-100/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
        >
          {restaurant.shortDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-4 flex flex-col gap-4 sm:flex-row"
        >
          <Button to="/reservations" variant="gold" size="lg">
            Reserve a Table
          </Button>
          <Button to="/menu" variant="outline" size="lg" className="border-cream-100/40 text-cream-100 hover:bg-white/10">
            View Menu
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-100/70"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
