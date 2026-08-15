import { menuItems } from '../../data/menu.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import MenuCard from './MenuCard.jsx'

export default function FeaturedDishes() {
  const featured = menuItems.filter((item) => item.chefRecommended).slice(0, 3)

  return (
    <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
      <div className="container-page">
        <SectionHeading
          eyebrow="Utvalgte retter"
          title="Kokkens sesongutvalg"
          description="Et glimt av det som står på bordet denne uken — hver rett bygget rundt det gårdene og sankerne våre gir oss."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/menu" variant="outline" size="lg">
            Se hele menyen
          </Button>
        </div>
      </div>
    </section>
  )
}
