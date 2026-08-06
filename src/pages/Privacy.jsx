import LegalPage from '../components/common/LegalPage.jsx'

const sections = [
  {
    heading: '1. Overview',
    paragraphs: [
      'This Privacy Policy describes how Solvane ("we", "us", "our") would handle information collected through this website. Solvane is a fictional restaurant created for web design portfolio purposes, and this policy is a professional placeholder illustrating the structure of a real restaurant privacy policy.',
    ],
  },
  {
    heading: '2. Information We Collect',
    paragraphs: [
      'In a live version of this site, we would collect information you provide directly, such as your name, email address, phone number and reservation details when you submit a form.',
      'We would also collect limited technical information, such as browser type and general usage patterns, to improve site performance.',
    ],
  },
  {
    heading: '3. How Information Would Be Used',
    paragraphs: [
      'Information submitted through reservation, contact, or inquiry forms would be used solely to respond to your request, manage your visit, and improve our service — never sold to third parties.',
    ],
  },
  {
    heading: '4. Cookies',
    paragraphs: [
      'This demo site may use minimal local storage (such as your theme preference) to improve your browsing experience. No third-party advertising trackers are used.',
    ],
  },
  {
    heading: '5. Your Rights',
    paragraphs: [
      'In a production environment, you would have the right to request access to, correction of, or deletion of your personal information by contacting us directly.',
    ],
  },
  {
    heading: '6. Contact',
    paragraphs: [
      'Questions about this placeholder policy can be directed to reservations@solvanerestaurant.com (a fictional address used for demonstration purposes only).',
    ],
  },
]

export default function Privacy() {
  return <LegalPage title="Privacy Policy" updated="January 2026" sections={sections} />
}
