import { Leaf, Flame, Heart, Sprout } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import FadeIn from '../ui/FadeIn.jsx'
import restaurant from '../../data/restaurant.js'

const ICONS = [Leaf, Flame, Heart, Sprout]

export default function Philosophy() {
  return (
    <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="Four principles guide every plate"
          description="Solvane is built on a simple idea: let the ingredient speak, and treat the guest like family."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {restaurant.values.map((value, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <FadeIn key={value.title} delay={i * 0.1} className="flex flex-col items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 dark:bg-gold-400/15 dark:text-gold-300">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl text-charcoal dark:text-cream-100">{value.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">
                  {value.description}
                </p>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
