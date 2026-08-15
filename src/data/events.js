import img from '../utils/images.js'

export const eventTypes = [
  {
    id: 'private-dining',
    title: 'Privat middag',
    description: 'Vårt glassinnrammede private rom har plass til 14 gjester for en skreddersydd smaksmeny.',
    image: img.privateDining,
    capacity: 'Inntil 14 gjester',
  },
  {
    id: 'corporate',
    title: 'Bedriftsmiddager',
    description: 'Imponer kunder og kolleger med en raffinert og avslappet middagsopplevelse tilpasset kvelden deres.',
    image: img.eventSetup,
    capacity: 'Inntil 40 gjester (hele lokalet)',
  },
  {
    id: 'weddings',
    title: 'Bryllupsfeiring',
    description: 'Intime bryllupsmiddager og mottakelser i Solvanes varme, nordiske stil.',
    image: img.weddingSetup,
    capacity: 'Inntil 64 gjester (hele lokalet)',
  },
  {
    id: 'birthdays',
    title: 'Bursdager & feiringer',
    description: 'Skreddersydde menyer, feiringsdesserter og personlige detaljer for store bursdager.',
    image: img.tableCandles,
    capacity: 'Inntil 20 gjester',
  },
]

export const eventFaqs = [
  {
    question: 'Hvor lang tid i forveien bør jeg bestille et privat arrangement?',
    answer:
      'Vi anbefaler minst fire ukers varsel for privat middag, og åtte uker for å leie hele lokalet — spesielt for helgedatoer.',
  },
  {
    question: 'Kan menyen tilpasses?',
    answer:
      'Ja. Arrangementteamet vårt samarbeider med deg og kokk Magnus om en skreddersydd meny, tilpasset allergier og preferanser.',
  },
  {
    question: 'Er det et minstebeløp?',
    answer:
      'Minstebeløp varierer etter rom, ukedag og sesong. Arrangementteamet vårt sender fullstendige detaljer etter din første henvendelse.',
  },
  {
    question: 'Tilbyr dere lyd- og bildeutstyr til bedriftsarrangementer?',
    answer:
      'Det private rommet vårt har en diskré skjerm og lydanlegg som egner seg til presentasjoner og skåltaler.',
  },
]

export default eventTypes
