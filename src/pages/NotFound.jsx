import { Compass } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Seo from '../components/common/Seo.jsx'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <Seo title="Page Not Found" description="The page you're looking for could not be found." />
      <Compass size={40} className="text-gold-400" />
      <h1 className="heading-lg text-charcoal dark:text-cream-100">Page Not Found</h1>
      <p className="max-w-md text-charcoal-600 dark:text-cream-100/70">
        The page you&apos;re looking for may have been moved or no longer exists.
      </p>
      <Button to="/">Return Home</Button>
    </div>
  )
}
