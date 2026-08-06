import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import img from '../../utils/images.js'
import restaurant from '../../data/restaurant.js'
import Button from '../ui/Button.jsx'
import OptimizedImage from '../ui/OptimizedImage.jsx'

export default function ChefIntro() {
  return (
    <section className="section-padding bg-stone-100 dark:bg-charcoal-800">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <OptimizedImage
            src={img.chefPortrait}
            alt={restaurant.chef.name}
            aspect="aspect-[4/5]"
            className="rounded-3xl shadow-lift"
          />
          <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl bg-charcoal p-5 text-cream-100 shadow-lift sm:block lg:-right-8">
            <Quote size={18} className="mb-2 text-gold-300" />
            <p className="text-sm italic leading-relaxed">{restaurant.chef.quote}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-5"
        >
          <span className="eyebrow">Meet the Chef</span>
          <h2 className="heading-lg text-charcoal dark:text-cream-100 text-balance">{restaurant.chef.name}</h2>
          <p className="text-sm font-medium uppercase tracking-wide text-gold-600 dark:text-gold-300">
            {restaurant.chef.title}
          </p>
          <p className="body-text">{restaurant.chef.bio[0]}</p>
          <p className="body-text">{restaurant.chef.bio[1]}</p>

          <ul className="mt-2 flex flex-col gap-2">
            {restaurant.chef.credentials.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-charcoal-600 dark:text-cream-100/70">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Button to="/about" variant="outline">
              Our Story
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
