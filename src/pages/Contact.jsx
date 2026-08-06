import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import Seo from '../components/common/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import FadeIn from '../components/ui/FadeIn.jsx'
import ContactForm from '../components/common/ContactForm.jsx'
import FaqAccordion from '../components/common/FaqAccordion.jsx'
import LocationSection from '../components/common/LocationSection.jsx'
import restaurant from '../data/restaurant.js'
import contactFaqs from '../data/contactFaqs.js'

const INFO_CARDS = [
  { icon: MapPin, label: 'Address', value: restaurant.contact.address.full },
  { icon: Phone, label: 'Phone', value: restaurant.contact.phone, href: restaurant.contact.phoneHref },
  { icon: Mail, label: 'Email', value: restaurant.contact.email, href: `mailto:${restaurant.contact.email}` },
  { icon: Clock, label: 'Hours', value: 'Tue–Sun · See full schedule below' },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Solvane — location, hours, phone, email and a contact form."
      />

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page">
          <SectionHeading eyebrow="Contact" title="We'd love to hear from you" description="Questions about reservations, private events, or anything else — reach out below." />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INFO_CARDS.map((card, i) => (
              <FadeIn key={card.label} delay={i * 0.06} className="card-surface flex flex-col items-center gap-3 p-6 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-600 dark:bg-gold-400/15 dark:text-gold-300">
                  <card.icon size={18} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest2 text-charcoal-400 dark:text-cream-100/40">
                  {card.label}
                </p>
                {card.href ? (
                  <a href={card.href} className="text-sm text-charcoal-600 hover:text-gold-500 dark:text-cream-100/80">
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm text-charcoal-600 dark:text-cream-100/80">{card.value}</p>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-100 dark:bg-charcoal-800">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="card-surface p-6 sm:p-10">
            <h2 className="heading-md mb-6 text-charcoal dark:text-cream-100">Send us a message</h2>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-8">
            <div>
              <h2 className="heading-md mb-6 text-charcoal dark:text-cream-100">Full Hours</h2>
              <div className="card-surface flex flex-col divide-y divide-stone-100 dark:divide-white/10">
                {restaurant.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between px-6 py-3.5 text-sm">
                    <span className="font-medium text-charcoal dark:text-cream-100">{h.day}</span>
                    <span className="text-charcoal-600 dark:text-cream-100/70">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="heading-md mb-4 text-charcoal dark:text-cream-100">Follow Along</h2>
              <div className="flex gap-3">
                <a href={restaurant.social.instagram} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-charcoal transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-white/15 dark:text-cream-100">
                  <Instagram size={18} />
                </a>
                <a href={restaurant.social.facebook} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-charcoal transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-white/15 dark:text-cream-100">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <LocationSection />

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page mx-auto max-w-2xl">
          <FadeIn className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="heading-md text-charcoal dark:text-cream-100">Frequently Asked Questions</h2>
          </FadeIn>
          <FaqAccordion items={contactFaqs} />
        </div>
      </section>
    </>
  )
}
