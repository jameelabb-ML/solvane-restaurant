import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import FadeIn from '../ui/FadeIn.jsx'
import Button from '../ui/Button.jsx'
import restaurant from '../../data/restaurant.js'

export default function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    restaurant.contact.mapEmbedQuery
  )}`

  return (
    <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="flex flex-col justify-center gap-6">
          <span className="eyebrow">Find Us</span>
          <h2 className="heading-lg text-charcoal dark:text-cream-100 text-balance">
            In the heart of the Pearl District
          </h2>

          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
            <p className="body-text">{restaurant.contact.address.full}</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={18} className="mt-0.5 shrink-0 text-gold-500" />
            <a href={restaurant.contact.phoneHref} className="body-text hover:text-gold-500">
              {restaurant.contact.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="mt-0.5 shrink-0 text-gold-500" />
            <div className="flex flex-col gap-1">
              {restaurant.hours.slice(0, 3).map((h) => (
                <p key={h.day} className="text-sm text-charcoal-600 dark:text-cream-100/70">
                  <span className="font-medium text-charcoal dark:text-cream-100">{h.day}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <Button href={mapsUrl} target="_blank" rel="noreferrer" variant="outline">
              <Navigation size={16} /> Get Directions
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative min-h-[340px] overflow-hidden rounded-3xl border border-stone-200 bg-stone-100 shadow-soft dark:border-white/10 dark:bg-charcoal-800">
          <div className="absolute inset-0 bg-noise opacity-60" />
          <div
            className="absolute inset-0 opacity-40 dark:opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(176,141,83,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,83,0.15) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative flex h-full min-h-[340px] flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-gold-300 shadow-lift dark:bg-gold-400 dark:text-charcoal-900">
              <MapPin size={20} />
            </span>
            <p className="font-display text-lg text-charcoal dark:text-cream-100">Solvane</p>
            <p className="max-w-xs text-sm text-charcoal-500 dark:text-cream-100/60">
              Interactive map placeholder — an embedded map will appear here in production.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
