import img from '../utils/images.js'

export const eventTypes = [
  {
    id: 'private-dining',
    title: 'Private Dining',
    description: 'Our glass-enclosed private room seats up to 14 guests for a fully bespoke tasting menu.',
    image: img.privateDining,
    capacity: 'Up to 14 guests',
  },
  {
    id: 'corporate',
    title: 'Corporate Dinners',
    description: 'Impress clients and teams with a refined, unhurried dining experience tailored to your evening.',
    image: img.eventSetup,
    capacity: 'Up to 40 guests (full buyout)',
  },
  {
    id: 'weddings',
    title: 'Wedding Receptions',
    description: 'Intimate wedding dinners and receptions styled around Solvane\'s warm Nordic aesthetic.',
    image: img.weddingSetup,
    capacity: 'Up to 64 guests (full buyout)',
  },
  {
    id: 'birthdays',
    title: 'Birthdays & Celebrations',
    description: 'Custom set menus, celebration desserts and personal touches for milestone birthdays.',
    image: img.tableCandles,
    capacity: 'Up to 20 guests',
  },
]

export const eventFaqs = [
  {
    question: 'How far in advance should I book a private event?',
    answer:
      'We recommend booking at least four weeks in advance for private dining and eight weeks for full restaurant buyouts, especially for weekend dates.',
  },
  {
    question: 'Can the menu be customized?',
    answer:
      'Yes. Our events team works with you and Chef Magnus to design a bespoke menu, accommodating dietary restrictions and preferences.',
  },
  {
    question: 'Is there a minimum spend?',
    answer:
      'Minimum spends vary by room, day of week and season. Our events team will share full details after your initial inquiry.',
  },
  {
    question: 'Do you offer audio-visual equipment for corporate events?',
    answer:
      'Our private dining room includes a discreet screen and sound system suitable for presentations and toasts.',
  },
]

export default eventTypes
