import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SearchX } from 'lucide-react'
import Seo from '../components/common/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import MenuFilters from '../components/menu/MenuFilters.jsx'
import MenuCard from '../components/menu/MenuCard.jsx'
import TastingMenuBanner from '../components/menu/TastingMenuBanner.jsx'
import { menuItems } from '../data/menu.js'

export default function Menu() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeDietary, setActiveDietary] = useState([])

  const toggleDietary = (id) => {
    setActiveDietary((prev) => (prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]))
  }

  const clearFilters = () => {
    setSearch('')
    setActiveCategory('all')
    setActiveDietary([])
  }

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory
      const matchesDietary =
        activeDietary.length === 0 || activeDietary.every((d) => item.dietary.includes(d))
      return matchesSearch && matchesCategory && matchesDietary
    })
  }, [search, activeCategory, activeDietary])

  return (
    <>
      <Seo
        title="Menu"
        description="Explore Solvane's seasonal Nordic menu — starters, mains, desserts and our seven-course tasting menu."
      />

      <section className="relative flex h-[46vh] min-h-[340px] items-center justify-center overflow-hidden bg-charcoal-900">
        <div className="container-page relative z-10 flex flex-col items-center gap-4 text-center">
          <span className="eyebrow">The Menu</span>
          <h1 className="heading-xl text-cream-100 text-balance">Seasonal, Considered, Nordic</h1>
          <p className="max-w-xl text-cream-100/75">
            Our menu shifts with the seasons and the day&apos;s harvest. Every dish is built to be shared, and every
            ingredient has a story.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page">
          <TastingMenuBanner />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <SectionHeading eyebrow="À La Carte" title="Browse the full menu" />

          <div className="mt-10">
            <MenuFilters
              search={search}
              onSearchChange={setSearch}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              activeDietary={activeDietary}
              onDietaryToggle={toggleDietary}
              onClear={clearFilters}
            />
          </div>

          <div className="mt-4 text-center text-xs text-charcoal-400 dark:text-cream-100/40">
            {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
          </div>

          {filteredItems.length > 0 ? (
            <motion.div
              key={activeCategory + activeDietary.join(',') + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredItems.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-16 flex flex-col items-center gap-3 text-center"
            >
              <SearchX size={28} className="text-charcoal-300 dark:text-cream-100/30" />
              <p className="text-charcoal-500 dark:text-cream-100/60">
                No dishes match your filters. Try clearing a few.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
