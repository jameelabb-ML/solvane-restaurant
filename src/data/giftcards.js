import img from '../utils/images.js'

export const giftCardOptions = [
  { id: 'gc-75', amount: 75, description: 'A thoughtful starting gift for a first visit.', image: img.giftCard },
  { id: 'gc-150', amount: 150, description: 'Our most popular gift — covers a shared tasting experience.', image: img.giftCard, popular: true },
  { id: 'gc-250', amount: 250, description: 'A generous gift for the tasting menu with wine pairing.', image: img.giftCard },
  { id: 'gc-custom', amount: null, description: 'Choose your own amount, from $25 to $1,000.', image: img.giftCard, custom: true },
]

export const giftCardFaqs = [
  {
    question: 'Do Solvane gift cards expire?',
    answer: 'No. Solvane gift cards never expire and can be used for dining, private events or wine purchases.',
  },
  {
    question: 'Can I use a gift card toward the tasting menu and wine pairing?',
    answer: 'Yes, gift cards can be applied toward any part of your bill, including tasting menus and beverage pairings.',
  },
  {
    question: 'How will the gift card be delivered?',
    answer: 'Digital gift cards are delivered by email within minutes. Physical cards can be mailed or held for pickup.',
  },
  {
    question: 'Can I redeem a gift card both online and in the restaurant?',
    answer: 'Yes — simply mention your gift card when booking, or present it at your table before the bill arrives.',
  },
]

export default giftCardOptions
