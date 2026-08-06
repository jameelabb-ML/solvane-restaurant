import LegalPage from '../components/common/LegalPage.jsx'

const sections = [
  {
    heading: '1. Overview',
    paragraphs: [
      'This Privacy Policy describes how Solvane ("we", "us", "our") collects, uses, and protects information gathered through this website.',
    ],
  },
  {
    heading: '2. Information We Collect',
    paragraphs: [
      'We collect information you provide directly, such as your name, email address, phone number, and reservation details when you submit a form.',
      'We may also collect limited technical information, such as browser type and general usage patterns, to improve site performance.',
    ],
  },
  {
    heading: '3. How Information Is Used',
    paragraphs: [
      'Information submitted through reservation, contact, or inquiry forms is used solely to respond to your request, manage your visit, and improve our service — never sold to third parties.',
    ],
  },
  {
    heading: '4. Cookies & Local Storage',
    paragraphs: [
      'This site uses minimal local storage — for example, to remember your theme preference and recent conversation with our AI assistant. No third-party advertising trackers are used.',
    ],
  },
  {
    heading: '5. Your Rights',
    paragraphs: [
      'You have the right to request access to, correction of, or deletion of your personal information by contacting us directly.',
    ],
  },
  {
    heading: '6. Contact',
    paragraphs: [
      'Questions about this policy can be directed to reservations@solvanerestaurant.com.',
    ],
  },
]

export default function Privacy() {
  return <LegalPage title="Privacy Policy" updated="January 2026" sections={sections} />
}
