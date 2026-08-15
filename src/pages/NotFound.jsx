import { Compass } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Seo from '../components/common/Seo.jsx'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <Seo title="Siden ble ikke funnet" description="Siden du leter etter kunne ikke bli funnet." />
      <Compass size={40} className="text-gold-400" />
      <h1 className="heading-lg text-charcoal dark:text-cream-100">Siden ble ikke funnet</h1>
      <p className="max-w-md text-charcoal-600 dark:text-cream-100/70">
        Siden du leter etter kan ha blitt flyttet eller finnes ikke lenger.
      </p>
      <Button to="/">Tilbake til forsiden</Button>
    </div>
  )
}
