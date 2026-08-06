// Restaurant knowledge base for the AI assistant.
//
// This file is intentionally separate from the display data files (src/data/*.js)
// so it can be pointed at a different restaurant's data source in the future
// without touching any chatbot UI code. It pulls from the existing data files
// so everything stays in sync automatically.

import restaurant from '../data/restaurant.js'
import { menuItems, categories, tastingMenu } from '../data/menu.js'
import { eventTypes, eventFaqs } from '../data/events.js'
import { giftCardOptions, giftCardFaqs } from '../data/giftcards.js'
import contactFaqs from '../data/contactFaqs.js'

const formatMenu = () =>
  categories
    .map((cat) => {
      const items = menuItems.filter((item) => item.category === cat.id)
      const lines = items.map((item) => {
        const dietary = item.dietary.length ? ` [${item.dietary.join(', ')}]` : ''
        const allergens = item.allergens.length ? ` (contains: ${item.allergens.join(', ')})` : ''
        return `  - ${item.name} — $${item.price}: ${item.description}${dietary}${allergens}`
      })
      return `${cat.label}:\n${lines.join('\n')}`
    })
    .join('\n\n')

const formatHours = () => restaurant.hours.map((h) => `  - ${h.day}: ${h.time}`).join('\n')

const formatEvents = () =>
  eventTypes
    .map((e) => `  - ${e.title} (${e.capacity}): ${e.description}`)
    .join('\n')

const formatGiftCards = () =>
  giftCardOptions
    .map((g) => `  - ${g.custom ? 'Custom amount' : `$${g.amount}`}: ${g.description}`)
    .join('\n')

const formatFaqs = (faqs) => faqs.map((f) => `  Q: ${f.question}\n  A: ${f.answer}`).join('\n\n')

export const buildSystemPrompt = () => `
You are the AI concierge for ${restaurant.name}, a ${restaurant.cuisine} restaurant in ${restaurant.contact.address.city}, ${restaurant.contact.address.state}.

Speak warmly, briefly, and with the same understated, confident tone as the restaurant's own writing — never gushing or overly salesy. Use short paragraphs. Use markdown lists when listing multiple items (dishes, hours, events).

## Restaurant Story
${restaurant.story.paragraphs.join('\n\n')}

## Chef
${restaurant.chef.name}, ${restaurant.chef.title}. ${restaurant.chef.bioShort}

## Cuisine & Tasting Menu
${tastingMenu.name}: ${tastingMenu.courses} courses, $${tastingMenu.price} per guest (wine pairing +$${tastingMenu.winePairingPrice}). ${tastingMenu.description}

## Full Menu
${formatMenu()}

## Hours
${formatHours()}

## Location & Contact
Address: ${restaurant.contact.address.full}
Phone: ${restaurant.contact.phone}
Email: ${restaurant.contact.email}

## Reservations
You can take a reservation directly in this chat. When a guest wants to book a table:
1. Ask for the missing details conversationally, a couple at a time — don't dump a long form at them. You need: full name, email, date, time, and party size. Phone and special requests are optional; ask once, don't push if declined.
2. If the party size is 9 or more, tell them to use the Private Events page or call instead — do not collect a reservation for large parties.
3. Once you have name, email, date, time and guest count, briefly read the details back to the guest for confirmation before submitting.
4. Only after the guest confirms, call the submit_reservation function with the collected details. Do not call it before confirming, and do not call it if any required field is missing.
Reservations can be modified or canceled up to 24 hours in advance by calling the restaurant.

## Private Events
${formatEvents()}

Private event FAQ:
${formatFaqs(eventFaqs)}

## Gift Cards
${formatGiftCards()}

Gift card FAQ:
${formatFaqs(giftCardFaqs)}

## General FAQ
${formatFaqs(contactFaqs)}

## Sustainability
${restaurant.sustainability.intro}

## Policies & Boundaries
- This is a demo website. Reservations can be collected in-chat as described above. For anything else that would require real action — buying a gift card, planning a private event, canceling an existing booking — explain that this assistant is a preview and direct the guest to the relevant page, or to call ${restaurant.contact.phone}.
- Never invent dishes, prices, hours or policies that aren't listed above.
- If you don't know something, say so plainly and suggest contacting the restaurant directly.
- Keep replies concise — a few sentences or a short list, not an essay, unless the guest asks for detail.
`.trim()

// Gemini function-calling declaration. The model calls this once it has
// gathered and confirmed the required fields — see the Reservations section
// of the system prompt above for the conversational flow.
export const reservationTool = {
  functionDeclarations: [
    {
      name: 'submit_reservation',
      description:
        'Submit a completed table reservation once the guest has provided and confirmed name, email, date, time and party size.',
      parameters: {
        type: 'OBJECT',
        properties: {
          name: { type: 'STRING', description: "Guest's full name" },
          email: { type: 'STRING', description: "Guest's email address" },
          phone: { type: 'STRING', description: "Guest's phone number, if provided" },
          date: { type: 'STRING', description: 'Reservation date in a clear format, e.g. "2026-09-14" or "September 14, 2026"' },
          time: { type: 'STRING', description: 'Reservation time, e.g. "7:00 PM"' },
          guests: { type: 'INTEGER', description: 'Number of guests, 1-8' },
          specialRequests: { type: 'STRING', description: 'Any special requests, allergies, or occasion notes, if provided' },
        },
        required: ['name', 'email', 'date', 'time', 'guests'],
      },
    },
  ],
}

export const suggestedPrompts = [
  "Show today's specials",
  'Book a table',
  'Do you have vegetarian options?',
  'Are there gluten-free dishes?',
  'What are your opening hours?',
  'Tell me about private events',
  'Where are you located?',
]

export const assistantIdentity = {
  name: `${restaurant.name} Assistant`,
  restaurantName: restaurant.name,
  logoInitial: restaurant.name.charAt(0),
  welcomeTitle: `Welcome to ${restaurant.name}`,
  welcomeMessage:
    "I'm your AI concierge — ask me about the menu, hours, reservations, private events or gift cards.",
}

export default buildSystemPrompt
