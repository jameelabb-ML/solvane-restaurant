import { Award } from 'lucide-react'
import FadeIn from '../ui/FadeIn.jsx'
import restaurant from '../../data/restaurant.js'

export default function Awards() {
  return (
    <section className="bg-charcoal-900 py-16 sm:py-20">
      <div className="container-page">
        <FadeIn className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="eyebrow">Recognition</span>
          <h2 className="heading-md text-cream-100">Awards &amp; Accolades</h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {restaurant.awards.map((award, i) => (
            <FadeIn
              key={award.title}
              delay={i * 0.08}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 px-6 py-8 text-center transition-colors hover:border-gold-400/40"
            >
              <Award size={22} className="text-gold-300" />
              <p className="font-display text-lg text-cream-100">{award.title}</p>
              <p className="text-xs uppercase tracking-widest2 text-cream-100/50">{award.org}</p>
              <span className="text-xs text-gold-300/80">{award.year}</span>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-14 sm:grid-cols-4">
          {restaurant.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl text-gold-300 sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest2 text-cream-100/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
