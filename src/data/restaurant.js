// Fictional restaurant brand data — used throughout the site.
// Solvane is not a real business; all content, contacts and imagery are for demo purposes.

export const restaurant = {
  name: 'Solvane',
  tagline: 'A Quiet Table, Nordic at Heart',
  shortDescription:
    'Modern Nordic fine dining rooted in seasonal ingredients, quiet craftsmanship and warm Scandinavian hospitality.',
  founded: 2016,
  cuisine: 'Modern Scandinavian · New Nordic',
  priceRange: '$$$$',

  contact: {
    phone: '+1 (503) 555-0187',
    phoneHref: 'tel:+15035550187',
    email: 'reservations@solvanerestaurant.com',
    eventsEmail: 'events@solvanerestaurant.com',
    address: {
      line1: '128 Fjeld Lane',
      line2: 'Pearl District',
      city: 'Portland',
      state: 'OR',
      zip: '97205',
      country: 'United States',
      full: '128 Fjeld Lane, Pearl District, Portland, OR 97205',
    },
    mapEmbedQuery: '128 Fjeld Lane, Portland, OR 97205',
  },

  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '5:30 PM – 10:00 PM' },
    { day: 'Wednesday', time: '5:30 PM – 10:00 PM' },
    { day: 'Thursday', time: '5:30 PM – 10:00 PM' },
    { day: 'Friday', time: '5:00 PM – 11:00 PM' },
    { day: 'Saturday', time: '5:00 PM – 11:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 3:00 PM · Brunch' },
  ],

  social: {
    instagram: 'https://instagram.com/solvane.restaurant',
    facebook: 'https://facebook.com/solvanerestaurant',
    pinterest: 'https://pinterest.com/solvanerestaurant',
  },

  story: {
    eyebrow: 'Our Story',
    heading: 'Born from long summers and longer tables',
    paragraphs: [
      'Solvane began as a memory — of midsummer evenings on the Norwegian coast, tables set beneath birch trees, and food that tasted of the place it came from. In 2016, Chef Magnus Lindholm brought that memory to Portland, translating it into a dining room built on restraint, warmth and time.',
      'The name Solvane borrows from the Scandinavian words for "sun" and "custom" — a nod to the unhurried rituals of Nordic hospitality, where a meal is never rushed and every guest is treated like family returning home.',
      'Nearly a decade later, Solvane remains a small, deliberate room: nineteen tables, an open hearth kitchen, and a menu that changes with the Pacific Northwest seasons rather than the calendar.',
    ],
  },

  mission: {
    heading: 'Our Mission',
    text: 'To honor the quiet dignity of simple ingredients — treating each vegetable, grain and cut of fish with the same care as the rarest delicacy — and to share that care generously with every guest who joins our table.',
  },

  vision: {
    heading: 'Our Vision',
    text: 'A dining room where Scandinavian minimalism and Pacific Northwest abundance meet — where sustainability is not a marketing word but a daily discipline, and where hospitality feels like being welcomed into someone\'s home.',
  },

  values: [
    {
      title: 'Seasonal Integrity',
      description:
        'We build our menu around what the region offers each week, working directly with under twenty local farms, foragers and fisheries.',
    },
    {
      title: 'Quiet Craftsmanship',
      description:
        'Every dish is built through traditional Nordic techniques — curing, smoking, pickling and slow-fermenting — practiced with patience rather than spectacle.',
    },
    {
      title: 'Warm Hospitality',
      description:
        'Service at Solvane is attentive without formality — the kind of care you would offer a guest in your own home.',
    },
    {
      title: 'Mindful Sustainability',
      description:
        'From root to peel, our kitchen operates on a near zero-waste philosophy, composting, fermenting and repurposing what most kitchens discard.',
    },
  ],

  chef: {
    name: 'Chef Magnus Lindholm',
    title: 'Executive Chef & Co-Founder',
    bioShort:
      'Trained in Copenhagen\'s New Nordic kitchens before returning to his family roots in the Pacific Northwest.',
    bio: [
      'Magnus Lindholm grew up between two coastlines — summers with his grandmother in a fishing village outside Bergen, and winters in Oregon, where his family settled when he was nine. That duality shapes everything he cooks.',
      'He trained for six years in Copenhagen, working under pioneers of the New Nordic movement before returning home to open Solvane with his partner, sommelier Elin Kirkeby, in 2016.',
      'His cooking favors restraint over abundance: a single, perfect scallop over a crowded plate. He sources obsessively, forages personally, and still visits the Saturday farmers market himself most weeks.',
    ],
    quote:
      '"I don\'t want my food to impress you. I want it to feel like it was always meant to be on your table."',
    credentials: [
      'Six years cooking in Copenhagen\'s New Nordic kitchens',
      'James Beard Foundation semifinalist, Best Chef Northwest',
      'Featured in Nordic Table Journal and Pacific Coast Gastronome',
    ],
  },

  sustainability: {
    eyebrow: 'Sustainability',
    heading: 'Rooted in the land we borrow from',
    intro:
      'Sustainability at Solvane is not a program — it is the way the kitchen has operated since the day it opened.',
    pillars: [
      {
        title: 'Root-to-Peel Kitchen',
        description:
          'Vegetable trimmings become stocks, ferments and staff-meal condiments. Less than 3% of our food purchases end up as waste.',
      },
      {
        title: 'Regional Sourcing',
        description:
          'Over 80% of our ingredients travel less than 150 miles, from partner farms in the Willamette Valley to day-boat fisheries on the coast.',
      },
      {
        title: 'Regenerative Partnerships',
        description:
          'We work exclusively with farms practicing regenerative agriculture and fisheries certified for sustainable harvest limits.',
      },
      {
        title: 'Low-Impact Operations',
        description:
          'Solar-assisted kitchen power, filtered still and sparkling water service, and a fully composted service program.',
      },
    ],
  },

  timeline: [
    { year: '2014', title: 'The Idea', description: 'Magnus and Elin begin sketching Solvane on napkins after a summer in Bergen.' },
    { year: '2016', title: 'Doors Open', description: 'Solvane opens in the Pearl District with nineteen tables and a five-course menu.' },
    { year: '2018', title: 'First Recognition', description: 'Named "Restaurant of the Year" by the Pacific Northwest Culinary Guild.' },
    { year: '2020', title: 'The Hearth Expansion', description: 'An open-hearth kitchen and chef\'s counter are added for eight guests nightly.' },
    { year: '2022', title: 'Sustainability Milestone', description: 'Solvane reaches its root-to-peel, near zero-waste kitchen standard.' },
    { year: '2024', title: 'Nordic Gastronomy Circle Award', description: 'Recognized among the top 50 Nordic-inspired tables in North America.' },
  ],

  awards: [
    { year: '2024', title: 'Nordic Gastronomy Circle Award', org: 'Top 50 Nordic-Inspired Tables, North America' },
    { year: '2023', title: 'Best Tasting Menu', org: 'Pacific Northwest Culinary Guild' },
    { year: '2022', title: 'Sustainable Kitchen Recognition', org: 'Farm & Fjord Alliance' },
    { year: '2018', title: 'Restaurant of the Year', org: 'Pacific Northwest Culinary Guild' },
  ],

  stats: [
    { label: 'Years of Craft', value: '9+' },
    { label: 'Partner Farms & Foragers', value: '18' },
    { label: 'Seats Nightly', value: '64' },
    { label: 'Guest Rating', value: '4.9/5' },
  ],
}

export default restaurant
