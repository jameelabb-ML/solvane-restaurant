import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import FadeIn from '../ui/FadeIn.jsx'
import Button from '../ui/Button.jsx'
import restaurant from '../../data/restaurant.js'

export default function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    restaurant.contact.mapEmbedQuery
  )}`
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    restaurant.contact.mapEmbedQuery
  )}&output=embed`

  return (
    <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="flex flex-col justify-center gap-6">
          <span className="eyebrow">Finn oss</span>
          <h2 className="heading-lg text-charcoal dark:text-cream-100 text-balance">
            I hjertet av Frogner
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
              <Navigation size={16} /> Få veibeskrivelse
            </Button>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="relative min-h-[340px] overflow-hidden rounded-3xl border border-stone-200 shadow-soft dark:border-white/10"
        >
          <iframe
            title={`Kart som viser hvor ${restaurant.name} ligger`}
            src={mapEmbedUrl}
            className="h-full min-h-[340px] w-full grayscale-[15%] contrast-[1.05] sepia-[8%]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeIn>
      </div>
    </section>
  )
}
