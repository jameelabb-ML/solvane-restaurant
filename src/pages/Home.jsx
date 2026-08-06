import Seo from '../components/common/Seo.jsx'
import Hero from '../components/hero/Hero.jsx'
import FeaturedDishes from '../components/menu/FeaturedDishes.jsx'
import ChefIntro from '../components/common/ChefIntro.jsx'
import Philosophy from '../components/common/Philosophy.jsx'
import Awards from '../components/common/Awards.jsx'
import TestimonialsSection from '../components/testimonials/TestimonialsSection.jsx'
import GalleryPreview from '../components/gallery/GalleryPreview.jsx'
import QuickLinksCTA from '../components/common/QuickLinksCTA.jsx'
import NewsletterSection from '../components/common/NewsletterSection.jsx'
import LocationSection from '../components/common/LocationSection.jsx'

export default function Home() {
  return (
    <>
      <Seo
        title="Modern Nordic Fine Dining in Portland"
        description="Solvane is a modern Nordic fine-dining restaurant in Portland's Pearl District, celebrating seasonal ingredients and warm Scandinavian hospitality."
      />
      <Hero />
      <FeaturedDishes />
      <ChefIntro />
      <Philosophy />
      <Awards />
      <TestimonialsSection />
      <GalleryPreview />
      <QuickLinksCTA />
      <NewsletterSection />
      <LocationSection />
    </>
  )
}
