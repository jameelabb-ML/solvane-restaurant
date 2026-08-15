import LegalPage from '../components/common/LegalPage.jsx'

const sections = [
  {
    heading: '1. Aksept av vilkårene',
    paragraphs: [
      'Ved å bruke denne nettsiden godtar du disse vilkårene. Hvis du ikke er enig i noen del av vilkårene, ber vi deg om ikke å bruke siden.',
    ],
  },
  {
    heading: '2. Reservasjoner',
    paragraphs: [
      'Reservasjonsforespørsler sendt via denne siden er avhengig av ledig kapasitet og bekreftelse. Vi anbefaler å ankomme innen 15 minutter etter reservert tidspunkt; bord som holdes utover dette kan bli frigitt. Reservasjoner kan endres eller avbestilles kostnadsfritt inntil 24 timer i forveien ved å kontakte oss direkte.',
    ],
  },
  {
    heading: '3. Gavekort',
    paragraphs: [
      'Gavekort utløper ikke, og kan brukes til middag, private arrangementer eller drikkevarer. Gavekort refunderes ikke, og kan ikke veksles inn i kontanter med mindre loven krever det.',
    ],
  },
  {
    heading: '4. Immaterielle rettigheter',
    paragraphs: [
      'Alt innhold på denne siden, inkludert tekst, bilder og merkevare, tilhører Solvane og kan ikke gjengis eller brukes uten tillatelse.',
    ],
  },
  {
    heading: '5. Ansvarsbegrensning',
    paragraphs: [
      'Denne nettsiden leveres «som den er». Vi tilstreber nøyaktighet, men retter, priser og tilgjengelighet kan endres uten varsel.',
    ],
  },
  {
    heading: '6. Endringer i vilkårene',
    paragraphs: [
      'Vi kan oppdatere disse vilkårene fra tid til annen. Fortsatt bruk av siden etter at endringer er publisert innebærer at du godtar de reviderte vilkårene.',
    ],
  },
]

export default function Terms() {
  return <LegalPage title="Vilkår" updated="januar 2026" sections={sections} />
}
