import { Link } from 'react-router-dom'
import { Clock, MapPin, Phone } from 'lucide-react'
import Seo from '../components/common/Seo.jsx'
import FadeIn from '../components/ui/FadeIn.jsx'
import OptimizedImage from '../components/ui/OptimizedImage.jsx'
import ReservationForm from '../components/reservation/ReservationForm.jsx'
import restaurant from '../data/restaurant.js'
import img from '../utils/images.js'

export default function Reservations() {
  return (
    <>
      <Seo
        title="Reservasjon"
        description="Reserver bord hos Solvane — moderne nordisk fine dining på Frogner i Oslo."
      />

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <FadeIn className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">Reservasjon</span>
              <h1 className="heading-lg text-charcoal dark:text-cream-100 text-balance">
                Reserver bord hos Solvane
              </h1>
              <p className="body-text">
                Vi har nitten bord og en kokkebenk med åtte plasser hver kveld. For selskaper på ni personer eller
                flere, besøk gjerne siden vår for{' '}
                <Link to="/private-events" className="text-gold-600 underline underline-offset-2 dark:text-gold-300">
                  private arrangementer
                </Link>
                .
              </p>
            </div>

            <OptimizedImage src={img.tableSetting} alt="Et bord med levende lys hos Solvane" aspect="aspect-[4/3]" className="rounded-3xl shadow-soft" />

            <div className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-charcoal-800">
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold-500" />
                <div className="flex flex-col gap-1 text-sm text-charcoal-600 dark:text-cream-100/70">
                  {restaurant.hours.map((h) => (
                    <p key={h.day}>
                      <span className="font-medium text-charcoal dark:text-cream-100">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-stone-100 pt-4 text-sm text-charcoal-600 dark:border-white/10 dark:text-cream-100/70">
                <MapPin size={16} className="shrink-0 text-gold-500" />
                {restaurant.contact.address.full}
              </div>
              <a
                href={restaurant.contact.phoneHref}
                className="flex items-center gap-3 text-sm text-charcoal-600 hover:text-gold-500 dark:text-cream-100/70"
              >
                <Phone size={16} className="shrink-0 text-gold-500" />
                Foretrekker du å ringe? {restaurant.contact.phone}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ReservationForm />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
