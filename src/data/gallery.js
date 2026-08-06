import img from '../utils/images.js'

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Interior' },
  { id: 'food', label: 'Food' },
  { id: 'team', label: 'Team' },
  { id: 'events', label: 'Events' },
]

export const galleryImages = [
  { id: 1, category: 'interior', src: img.galleryInterior1, alt: 'Solvane dining room with warm wood tones', caption: 'The main dining room' },
  { id: 2, category: 'food', src: img.galleryFood1, alt: 'Pickled herring dish', caption: 'Pickled Herring, Apple & Rye' },
  { id: 3, category: 'interior', src: img.galleryInterior2, alt: 'Candlelit tables at Solvane', caption: 'Evening ambiance' },
  { id: 4, category: 'food', src: img.galleryFood2, alt: 'Plated seafood dish', caption: 'Hand-Dived Scallop Crudo' },
  { id: 5, category: 'team', src: img.galleryTeam1, alt: 'Chef plating a dish', caption: 'Chef Freja at the pass' },
  { id: 6, category: 'food', src: img.galleryFood3, alt: 'Pan-seared halibut', caption: 'Pan-Seared Halibut' },
  { id: 7, category: 'events', src: img.galleryEvent1, alt: 'Private dining setup', caption: 'A private celebration' },
  { id: 8, category: 'interior', src: img.galleryInterior3, alt: 'Bar area at Solvane', caption: 'The aquavit bar' },
  { id: 9, category: 'food', src: img.galleryFood4, alt: 'Duck breast dish', caption: 'Juniper-Cured Duck Breast' },
  { id: 10, category: 'team', src: img.galleryTeam2, alt: 'Kitchen team at work', caption: 'The open hearth kitchen' },
  { id: 11, category: 'events', src: img.galleryEvent2, alt: 'Wedding reception setup', caption: 'A wedding reception at Solvane' },
  { id: 12, category: 'food', src: img.galleryFood5, alt: 'Dessert course', caption: 'Cloudberry Skyr Cake' },
]

export default galleryImages
