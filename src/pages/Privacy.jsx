import LegalPage from '../components/common/LegalPage.jsx'

const sections = [
  {
    heading: '1. Innledning',
    paragraphs: [
      'Denne personvernerklæringen beskriver hvordan Solvane («vi», «oss») samler inn, bruker og beskytter informasjon som samles inn gjennom denne nettsiden.',
    ],
  },
  {
    heading: '2. Informasjon vi samler inn',
    paragraphs: [
      'Vi samler inn informasjon du oppgir direkte, som navn, e-postadresse, telefonnummer og reservasjonsdetaljer når du fyller ut et skjema.',
      'Vi kan også samle inn begrenset teknisk informasjon, som nettlesertype og generelle bruksmønstre, for å forbedre nettsidens ytelse.',
    ],
  },
  {
    heading: '3. Hvordan informasjonen brukes',
    paragraphs: [
      'Informasjon sendt inn gjennom reservasjons-, kontakt- eller henvendelsesskjemaer brukes utelukkende til å besvare henvendelsen din, planlegge besøket ditt og forbedre tjenesten vår — og selges aldri videre til tredjeparter.',
    ],
  },
  {
    heading: '4. Informasjonskapsler og lokal lagring',
    paragraphs: [
      'Denne siden bruker minimal lokal lagring — for eksempel for å huske fargetema og din nylige samtale med assistenten vår. Ingen sporing fra tredjeparts annonsører brukes.',
    ],
  },
  {
    heading: '5. Dine rettigheter',
    paragraphs: [
      'Du har rett til å be om innsyn i, retting av, eller sletting av dine personopplysninger ved å kontakte oss direkte.',
    ],
  },
  {
    heading: '6. Kontakt',
    paragraphs: [
      'Spørsmål om denne personvernerklæringen kan rettes til post@solvane.no.',
    ],
  },
]

export default function Privacy() {
  return <LegalPage title="Personvern" updated="januar 2026" sections={sections} />
}
