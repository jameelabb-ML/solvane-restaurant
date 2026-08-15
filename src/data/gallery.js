import img from '../utils/images.js'

export const galleryCategories = [
  { id: 'all', label: 'Alle' },
  { id: 'interior', label: 'Interiør' },
  { id: 'food', label: 'Mat' },
  { id: 'team', label: 'Teamet' },
  { id: 'events', label: 'Arrangementer' },
]

export const galleryImages = [
  { id: 1, category: 'interior', src: img.galleryInterior1, alt: 'Solvanes spisesal med varme trenyanser', caption: 'Hovedspisesalen' },
  { id: 2, category: 'food', src: img.galleryFood1, alt: 'Sursild-rett', caption: 'Sursild med eple og rug' },
  { id: 3, category: 'interior', src: img.galleryInterior2, alt: 'Levende lys på bordene hos Solvane', caption: 'Stemning om kvelden' },
  { id: 4, category: 'food', src: img.galleryFood2, alt: 'Anrettet sjømatrett', caption: 'Håndplukket kamskjellcrudo' },
  { id: 5, category: 'team', src: img.galleryTeam1, alt: 'Kokk anretter en rett', caption: 'Kokk Magnus ved passet' },
  { id: 6, category: 'food', src: img.galleryFood3, alt: 'Stekt kveite', caption: 'Stekt kveite' },
  { id: 7, category: 'events', src: img.galleryEvent1, alt: 'Oppdekking til privat middag', caption: 'En privat feiring' },
  { id: 8, category: 'interior', src: img.galleryInterior3, alt: 'Barområdet hos Solvane', caption: 'Akevittbaren' },
  { id: 9, category: 'food', src: img.galleryFood4, alt: 'Andebrystrett', caption: 'Einerkrydret andebryst' },
  { id: 10, category: 'team', src: img.galleryTeam2, alt: 'Kjøkkenteamet i arbeid', caption: 'Det åpne ildstedskjøkkenet' },
  { id: 11, category: 'events', src: img.galleryEvent2, alt: 'Oppdekking til bryllupsmottakelse', caption: 'En bryllupsfeiring hos Solvane' },
  { id: 12, category: 'food', src: img.galleryFood5, alt: 'Dessertservering', caption: 'Molteskyrkake' },
]

export default galleryImages
