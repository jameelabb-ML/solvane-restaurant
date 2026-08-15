// Fiktiv restaurantprofil — brukes gjennom hele nettsiden.
// Solvane er ikke en reell virksomhet; alt innhold, kontaktinfo og bilder er kun til demoformål.

export const restaurant = {
  name: 'Solvane',
  tagline: 'Et stille bord, nordisk i hjertet',
  shortDescription:
    'Moderne nordisk fine dining bygget på sesongens råvarer, stillferdig håndverk og varm skandinavisk gjestfrihet.',
  founded: 2016,
  cuisine: 'Moderne skandinavisk · Ny-nordisk',
  priceRange: 'kr kr kr kr',

  contact: {
    phone: '+47 22 44 10 20',
    phoneHref: 'tel:+4722441020',
    email: 'post@solvane.no',
    eventsEmail: 'arrangement@solvane.no',
    address: {
      line1: 'Inkognitogata 9',
      line2: 'Frogner',
      city: 'Oslo',
      state: '',
      zip: '0258',
      country: 'Norge',
      full: 'Inkognitogata 9, 0258 Oslo',
    },
    mapEmbedQuery: 'Inkognitogata 9, 0258 Oslo',
  },

  hours: [
    { day: 'Mandag', time: 'Stengt' },
    { day: 'Tirsdag', time: '17.30 – 22.00' },
    { day: 'Onsdag', time: '17.30 – 22.00' },
    { day: 'Torsdag', time: '17.30 – 22.00' },
    { day: 'Fredag', time: '17.00 – 23.00' },
    { day: 'Lørdag', time: '17.00 – 23.00' },
    { day: 'Søndag', time: '12.00 – 16.00 · Brunsj' },
  ],

  social: {
    instagram: 'https://instagram.com/solvane.oslo',
    facebook: 'https://facebook.com/solvaneoslo',
    pinterest: 'https://pinterest.com/solvaneoslo',
  },

  story: {
    eyebrow: 'Vår historie',
    heading: 'Født av lange somre og enda lengre middager',
    paragraphs: [
      'Solvane startet som et minne — av lyse sommerkvelder på vestlandskysten, bord dekket under bjørketrær, og mat som smakte av stedet den kom fra. I 2016 tok kokk Magnus Lindholm med seg det minnet til Oslo, og formet det til en spisesal bygget på ro, varme og tid.',
      'Navnet Solvane er satt sammen av «sol» og «vane» — en påminnelse om de rolige ritualene i nordisk gjestfrihet, der et måltid aldri hastes gjennom, og hver gjest blir møtt som familie som endelig er hjemme igjen.',
      'Nesten et tiår senere er Solvane fortsatt et lite, gjennomtenkt lokale: nitten bord, et åpent ildstedskjøkken, og en meny som følger de norske årstidene fremfor kalenderen.',
    ],
  },

  mission: {
    heading: 'Vårt oppdrag',
    text: 'Å hedre den stille verdigheten i enkle råvarer — å behandle hver grønnsak, hvert korn og hvert stykke fisk med samme omsorg som den sjeldneste delikatesse — og å dele den omsorgen raust med hver eneste gjest som setter seg til bords.',
  },

  vision: {
    heading: 'Vår visjon',
    text: 'En spisesal der skandinavisk enkelhet møter norsk overflod — der bærekraft ikke er et markedsføringsord, men en daglig praksis, og der gjestfrihet føles som å bli ønsket velkommen hjem til noen.',
  },

  values: [
    {
      title: 'Sesongens integritet',
      description:
        'Vi bygger menyen rundt det regionen har å by på hver uke, i direkte samarbeid med under tjue lokale gårder, sankere og fiskere.',
    },
    {
      title: 'Stillferdig håndverk',
      description:
        'Hver rett bygges gjennom tradisjonelle nordiske teknikker — gravning, røyking, sylting og langsom fermentering — utført med tålmodighet fremfor skue.',
    },
    {
      title: 'Varm gjestfrihet',
      description:
        'Service hos Solvane er oppmerksom uten å være stiv — den samme omsorgen du ville tilbudt en gjest i ditt eget hjem.',
    },
    {
      title: 'Bevisst bærekraft',
      description:
        'Fra rot til skrell driver kjøkkenet vårt etter en nesten avfallsfri filosofi — vi komposterer, fermenterer og gjenbruker det de fleste kjøkken kaster.',
    },
  ],

  chef: {
    name: 'Kokk Magnus Lindholm',
    title: 'Kjøkkensjef og medgründer',
    bioShort:
      'Utdannet i Københavns ny-nordiske kjøkken, før han vendte tilbake til røttene sine på Vestlandet.',
    bio: [
      'Magnus Lindholm vokste opp mellom to kyster — somre hos bestemoren i en fiskevær utenfor Bergen, og resten av året i Oslo, der familien slo seg ned da han var ni år. Denne todelte oppveksten preger alt han lager.',
      'Han utdannet seg i seks år i København, under pionerene bak den ny-nordiske bevegelsen, før han flyttet hjem for å åpne Solvane sammen med sin samarbeidspartner, sommelier Elin Kirkeby, i 2016.',
      'Matlagingen hans handler om måtehold fremfor overflod: én perfekt kamskjell fremfor en overfylt tallerken. Han er nøye med råvarene, sanker selv, og besøker fortsatt lørdagsmarkedet personlig de fleste uker.',
    ],
    quote:
      '«Jeg vil ikke at maten min skal imponere deg. Jeg vil at den skal føles som om den alltid har hørt hjemme på bordet ditt.»',
    credentials: [
      'Seks år i Københavns ny-nordiske kjøkken',
      'Nominert til Årets Kokk, Norsk Kulinarisk Gilde',
      'Omtalt i Gastro Norge og Nordisk Smak',
    ],
  },

  sustainability: {
    eyebrow: 'Bærekraft',
    heading: 'Forankret i landet vi låner av',
    intro:
      'Bærekraft hos Solvane er ikke et program — det er slik kjøkkenet har drevet siden første åpningsdag.',
    pillars: [
      {
        title: 'Rot-til-skrell-kjøkken',
        description:
          'Grønnsaksrester blir til kraft, ferment og tilbehør til de ansattes måltider. Under 3 % av matinnkjøpene våre ender som avfall.',
      },
      {
        title: 'Regionalt råvarevalg',
        description:
          'Over 80 % av råvarene våre reiser mindre enn 20 mil, fra samarbeidsgårder på Østlandet til kystfiske langs Vestlandet.',
      },
      {
        title: 'Regenerative samarbeid',
        description:
          'Vi samarbeider utelukkende med gårder som praktiserer regenerativt jordbruk, og fiskere med sertifiserte, bærekraftige fangstkvoter.',
      },
      {
        title: 'Skånsom drift',
        description:
          'Solcelledrevet kjøkkenstrøm, filtrert stille- og kullsyrevann, og et fullstendig komposteringsprogram i restauranten.',
      },
    ],
  },

  timeline: [
    { year: '2014', title: 'Ideen', description: 'Magnus og Elin begynner å skissere Solvane på papirservietter etter en sommer i Bergen.' },
    { year: '2016', title: 'Åpningsdagen', description: 'Solvane åpner på Frogner med nitten bord og en meny på fem retter.' },
    { year: '2018', title: 'Første anerkjennelse', description: 'Kåret til «Årets restaurant» av Norsk Kulinarisk Gilde.' },
    { year: '2020', title: 'Ildstedsutvidelsen', description: 'Et åpent ildstedskjøkken og kokkebenk for åtte gjester per kveld står ferdig.' },
    { year: '2022', title: 'Bærekraftsmilepæl', description: 'Solvane når sin rot-til-skrell, nesten avfallsfrie standard på kjøkkenet.' },
    { year: '2024', title: 'Nordisk Gastronomipris', description: 'Kåret blant de 50 beste nordisk-inspirerte restaurantene i Norden.' },
  ],

  awards: [
    { year: '2024', title: 'Nordisk Gastronomipris', org: 'Topp 50 nordisk-inspirerte restauranter' },
    { year: '2023', title: 'Beste smaksmeny', org: 'Norsk Kulinarisk Gilde' },
    { year: '2022', title: 'Anerkjennelse for bærekraftig kjøkken', org: 'Gård & Fjord-alliansen' },
    { year: '2018', title: 'Årets restaurant', org: 'Norsk Kulinarisk Gilde' },
  ],

  stats: [
    { label: 'Års håndverk', value: '9+' },
    { label: 'Samarbeidsgårder og sankere', value: '18' },
    { label: 'Seter per kveld', value: '64' },
    { label: 'Gjestevurdering', value: '4,9/5' },
  ],
}

export default restaurant
