import { UtensilsCrossed } from 'lucide-react'
import FadeIn from '../ui/FadeIn.jsx'
import Button from '../ui/Button.jsx'
import { tastingMenu } from '../../data/menu.js'

export default function TastingMenuBanner() {
  return (
    <FadeIn className="relative overflow-hidden rounded-3xl bg-charcoal-900 px-8 py-12 text-center sm:px-16 sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(176,141,83,0.5), transparent 45%), radial-gradient(circle at 80% 80%, rgba(176,141,83,0.35), transparent 40%)',
      }} />
      <div className="relative flex flex-col items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 text-charcoal-900">
          <UtensilsCrossed size={20} />
        </span>
        <h2 className="heading-md text-cream-100">{tastingMenu.name}</h2>
        <p className="max-w-lg text-sm sm:text-base leading-relaxed text-cream-100/75">
          {tastingMenu.description}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-6 text-cream-100">
          <div className="text-center">
            <p className="font-display text-2xl text-gold-300">{tastingMenu.courses}</p>
            <p className="text-xs uppercase tracking-widest2 text-cream-100/50">Retter</p>
          </div>
          <div className="h-8 w-px bg-white/15" />
          <div className="text-center">
            <p className="font-display text-2xl text-gold-300">{tastingMenu.price} kr</p>
            <p className="text-xs uppercase tracking-widest2 text-cream-100/50">Per gjest</p>
          </div>
          <div className="h-8 w-px bg-white/15" />
          <div className="text-center">
            <p className="font-display text-2xl text-gold-300">+{tastingMenu.winePairingPrice} kr</p>
            <p className="text-xs uppercase tracking-widest2 text-cream-100/50">Vinmeny</p>
          </div>
        </div>
        <Button to="/reservations" variant="gold" className="mt-4">
          Reserver smaksmenyen
        </Button>
      </div>
    </FadeIn>
  )
}
