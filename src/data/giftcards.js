import img from '../utils/images.js'

export const giftCardOptions = [
  { id: 'gc-750', amount: 750, description: 'En tankevekkende gave for et første besøk.', image: img.giftCard },
  { id: 'gc-1500', amount: 1500, description: 'Vår mest populære gave — dekker en delt smaksopplevelse.', image: img.giftCard, popular: true },
  { id: 'gc-2500', amount: 2500, description: 'En raus gave for smaksmenyen med vinmeny.', image: img.giftCard },
  { id: 'gc-custom', amount: null, description: 'Velg selv beløp, fra 250 til 10 000 kr.', image: img.giftCard, custom: true },
]

export const giftCardFaqs = [
  {
    question: 'Utløper Solvanes gavekort?',
    answer: 'Nei. Solvanes gavekort utløper aldri, og kan brukes til middag, private arrangementer eller vinkjøp.',
  },
  {
    question: 'Kan jeg bruke gavekort på smaksmenyen med vinmeny?',
    answer: 'Ja, gavekort kan brukes på hele regningen, inkludert smaksmenyer og drikkepakker.',
  },
  {
    question: 'Hvordan leveres gavekortet?',
    answer: 'Digitale gavekort sendes på e-post i løpet av minutter. Fysiske kort kan sendes i posten eller hentes i restauranten.',
  },
  {
    question: 'Kan jeg bruke gavekortet både på nett og i restauranten?',
    answer: 'Ja — nevn gavekortet ditt ved bestilling, eller vis det frem ved bordet før regningen kommer.',
  },
]

export default giftCardOptions
