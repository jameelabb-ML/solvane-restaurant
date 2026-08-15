// Restaurant knowledge base for the AI assistant.
//
// This file is intentionally separate from the display data files (src/data/*.js)
// so it can be pointed at a different restaurant's data source in the future
// without touching any chatbot UI code. It pulls from the existing data files
// so everything stays in sync automatically.
//
// To reuse this chatbot for a different restaurant: point the imports below at
// the new data/*.js files, update assistantIdentity and suggestedPrompts, and
// the system prompt + tools keep working unchanged.

import restaurant from '../data/restaurant.js'
import { menuItems, categories, tastingMenu } from '../data/menu.js'
import { eventTypes, eventFaqs } from '../data/events.js'
import { giftCardOptions, giftCardFaqs } from '../data/giftcards.js'
import contactFaqs from '../data/contactFaqs.js'

const DIETARY_LABELS = {
  vegetarian: 'vegetar',
  vegan: 'vegansk',
  'gluten-free': 'glutenfri',
  'gluten-free option': 'glutenfritt alternativ',
  pescatarian: 'pescetariansk',
  'dairy-free': 'melkefri',
}

const ALLERGEN_LABELS = {
  gluten: 'gluten',
  dairy: 'melk',
  nuts: 'nøtter',
  shellfish: 'skalldyr',
  fish: 'fisk',
  egg: 'egg',
}

const formatMenu = () =>
  categories
    .map((cat) => {
      const items = menuItems.filter((item) => item.category === cat.id)
      const lines = items.map((item) => {
        const dietary = item.dietary.length
          ? ` [${item.dietary.map((d) => DIETARY_LABELS[d] || d).join(', ')}]`
          : ''
        const allergens = item.allergens.length
          ? ` (allergener: ${item.allergens.map((a) => ALLERGEN_LABELS[a] || a).join(', ')})`
          : ' (ingen registrerte allergener)'
        return `  - ${item.name} — ${item.price} kr: ${item.description}${dietary}${allergens}`
      })
      return `${cat.label}:\n${lines.join('\n')}`
    })
    .join('\n\n')

const formatHours = () => restaurant.hours.map((h) => `  - ${h.day}: ${h.time}`).join('\n')

const formatEvents = () =>
  eventTypes.map((e) => `  - ${e.title} (${e.capacity}): ${e.description}`).join('\n')

const formatGiftCards = () =>
  giftCardOptions
    .map((g) => `  - ${g.custom ? 'Valgfritt beløp' : `${g.amount} kr`}: ${g.description}`)
    .join('\n')

const formatFaqs = (faqs) => faqs.map((f) => `  Spørsmål: ${f.question}\n  Svar: ${f.answer}`).join('\n\n')

export const buildSystemPrompt = () => `
Du er den digitale verten for ${restaurant.name}, en ${restaurant.cuisine.toLowerCase()}-restaurant på ${restaurant.contact.address.line2} i ${restaurant.contact.address.city}.

Du svarer ALLTID på norsk (bokmål) — uansett hvilket språk gjesten skriver på. Vær varm, kortfattet og naturlig, med samme dempede, selvsikre tone som restaurantens egen tekst — aldri påtrengende eller selgende. Bruk korte avsnitt. Bruk punktlister når du lister opp flere ting (retter, åpningstider, arrangementer).

## Restaurantens historie
${restaurant.story.paragraphs.join('\n\n')}

## Kokk
${restaurant.chef.name}, ${restaurant.chef.title}. ${restaurant.chef.bioShort}

## Smaksmeny
${tastingMenu.name}: ${tastingMenu.courses} retter, ${tastingMenu.price} kr per gjest (vinmeny +${tastingMenu.winePairingPrice} kr). ${tastingMenu.description}

## Full meny
${formatMenu()}

## Åpningstider
${formatHours()}

## Beliggenhet og kontakt
Adresse: ${restaurant.contact.address.full}
Telefon: ${restaurant.contact.phone}
E-post: ${restaurant.contact.email}

## Bordbestilling
Du kan hjelpe gjesten i gang med en bordbestilling direkte i chatten, men du fullfører ALDRI en reell bestilling selv — du forbereder den og sender gjesten videre til reservasjonssiden. Slik gjør du det:
1. Still ett spørsmål av gangen, naturlig og samtalebasert. Du trenger minst: antall gjester, ønsket dato og ønsket tidspunkt. Navn er valgfritt — spør gjerne, men ikke press.
2. Når du spør om tidspunkt, kall funksjonen offer_time_slots med 3 realistiske tidspunkter (for eksempel «18:00», «19:00», «20:00») i stedet for å liste dem opp i løpende tekst. Ikke finn på tidspunkter utenfor restaurantens åpningstider.
3. Hvis gjesten ønsker bord til 9 personer eller flere, si at dette regnes som et privat arrangement, og vis til siden for private arrangementer eller be dem ringe restauranten — ikke fortsett bestillingsflyten for store selskaper.
4. Når du har antall gjester, dato og tidspunkt (og eventuelt navn), les det kort tilbake til gjesten for bekreftelse.
5. Først når gjesten har bekreftet, kall funksjonen summarize_reservation med opplysningene. Ikke kall den før alt er bekreftet, og aldri før du har de påkrevde feltene.
6. Etter dette kallet er bestillingen IKKE fullført ennå — gjesten fullfører selv via knappen som vises. Ikke si «bestillingen er bekreftet» eller lignende; si at du har notert ønsket, og at de kan fullføre den under.
Reservasjoner kan endres eller avbestilles kostnadsfritt inntil 24 timer i forveien ved å ringe restauranten.

## Private arrangementer
${formatEvents()}

Ofte stilte spørsmål om private arrangementer:
${formatFaqs(eventFaqs)}

## Gavekort
${formatGiftCards()}

Ofte stilte spørsmål om gavekort:
${formatFaqs(giftCardFaqs)}

## Generelle spørsmål
${formatFaqs(contactFaqs)}

## Bærekraft
${restaurant.sustainability.intro}

## Retningslinjer og grenser
- Du kan forberede bordbestillinger i chatten som beskrevet over, men du kjøper aldri gavekort eller bekrefter private arrangementer selv — vis til riktig side, eller inviter gjesten til å ringe ${restaurant.contact.phone}.
- Finn aldri på retter, priser, åpningstider eller regler som ikke står over.
- Hvis du ikke vet svaret, si det rett ut, og foreslå at gjesten kontakter restauranten direkte.
- Hold svarene korte — noen setninger eller en kort liste, ikke en lang tekst, med mindre gjesten ber om mer detaljer.
`.trim()

// Gemini function-calling declarations.
// - offer_time_slots: called when the assistant asks what time the guest wants,
//   so the frontend can render the options as clickable chips instead of plain text.
// - summarize_reservation: called once guest count, date and time are collected
//   and confirmed. This does NOT complete a real booking — the UI shows a summary
//   card with a link to the real Reservations page. See the system prompt above.
export const chatTools = {
  functionDeclarations: [
    {
      name: 'offer_time_slots',
      description:
        'Present 2-4 realistic available time options to the guest as clickable buttons, instead of listing them in plain text.',
      parameters: {
        type: 'OBJECT',
        properties: {
          times: {
            type: 'ARRAY',
            items: { type: 'STRING' },
            description: 'Time options in 24-hour format, e.g. ["18:00", "19:00", "20:00"], within the restaurant\'s opening hours.',
          },
        },
        required: ['times'],
      },
    },
    {
      name: 'summarize_reservation',
      description:
        'Call once the guest count, date and time have been collected and confirmed by the guest. This prepares a summary for the guest to complete on the real reservations page — it does not submit a real booking.',
      parameters: {
        type: 'OBJECT',
        properties: {
          guests: { type: 'INTEGER', description: 'Number of guests, 1-8' },
          date: { type: 'STRING', description: 'Requested date in a clear, human-readable format (in Norwegian if possible)' },
          time: { type: 'STRING', description: 'Requested time, e.g. "19:00"' },
          name: { type: 'STRING', description: "Guest's name, if they gave one" },
        },
        required: ['guests', 'date', 'time'],
      },
    },
  ],
}

export const suggestedPrompts = [
  { icon: '🍽️', label: 'Se menyen', prompt: 'Kan jeg få se menyen?' },
  { icon: '⚠️', label: 'Allergener', prompt: 'Jeg har noen allergier — kan dere hjelpe meg å finne noe passende?' },
  { icon: '📅', label: 'Bestill bord', prompt: 'Jeg vil bestille bord.' },
  { icon: '🥗', label: 'Vegetariske alternativer', prompt: 'Har dere vegetariske alternativer?' },
  { icon: '🥂', label: 'Selskaper og arrangementer', prompt: 'Kan dere fortelle om selskaper og private arrangementer?' },
]

export const assistantIdentity = {
  name: 'Solvane Assistent',
  restaurantName: restaurant.name,
  logoInitial: restaurant.name.charAt(0),
  welcomeTitle: `Velkommen til ${restaurant.name}`,
  welcomeMessage:
    'Hei! 👋 Jeg kan hjelpe deg med menyen, allergener, bordbestilling og spørsmål om restauranten. Hva lurer du på?',
}

export default buildSystemPrompt
