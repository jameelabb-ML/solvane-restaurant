import { Link } from 'react-router-dom'
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'
import restaurant from '../../data/restaurant.js'
import { footerLinks } from '../../utils/navigation.js'
import Newsletter from '../common/Newsletter.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <span className="font-display text-3xl text-cream-100">{restaurant.name}</span>
            <p className="max-w-xs text-sm leading-relaxed text-cream-100/70">
              {restaurant.shortDescription}
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={restaurant.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Solvane on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href={restaurant.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Solvane on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest2 text-cream-100/50">Explore</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-cream-100/80 transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest2 text-cream-100/50">Services</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-cream-100/80 transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-widest2 text-cream-100/50">Legal</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-cream-100/80 transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3 text-sm text-cream-100/80">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-300" />
              <span>{restaurant.contact.address.full}</span>
            </div>
            <a href={restaurant.contact.phoneHref} className="flex items-center gap-3 text-sm text-cream-100/80 transition-colors hover:text-gold-300">
              <Phone size={16} className="shrink-0 text-gold-300" />
              {restaurant.contact.phone}
            </a>
            <a href={`mailto:${restaurant.contact.email}`} className="flex items-center gap-3 text-sm text-cream-100/80 transition-colors hover:text-gold-300">
              <Mail size={16} className="shrink-0 text-gold-300" />
              {restaurant.contact.email}
            </a>
            <div className="flex items-start gap-3 text-sm text-cream-100/80">
              <Clock size={16} className="mt-0.5 shrink-0 text-gold-300" />
              <span>Tue–Sun, see full hours on our Contact page</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest2 text-cream-100/50">
              Join our table
            </h3>
            <Newsletter dark />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 text-xs text-cream-100/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {restaurant.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
