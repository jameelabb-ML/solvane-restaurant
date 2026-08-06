import LegalPage from '../components/common/LegalPage.jsx'

const sections = [
  {
    heading: '1. Acceptance of Terms',
    paragraphs: [
      'By accessing this website, you agree to these Terms & Conditions. Solvane is a fictional restaurant created for web design portfolio purposes; this page is a professional placeholder illustrating the structure of real restaurant terms of service.',
    ],
  },
  {
    heading: '2. Reservations',
    paragraphs: [
      'Reservation requests submitted through this site are illustrative only and are not processed or confirmed. In a live environment, reservations would be subject to availability and our cancellation policy.',
    ],
  },
  {
    heading: '3. Gift Cards',
    paragraphs: [
      'Gift card purchases shown on this site are for demonstration purposes only. No payment is collected, and no gift cards are issued through this demo.',
    ],
  },
  {
    heading: '4. Intellectual Property',
    paragraphs: [
      'All content on this site, including text, design and branding for the fictional Solvane restaurant, is provided for portfolio demonstration and may not be used to represent a real business.',
    ],
  },
  {
    heading: '5. Limitation of Liability',
    paragraphs: [
      'This website is a demonstration project. It is provided "as is" without warranties of any kind, and is not associated with any real restaurant, business or service.',
    ],
  },
  {
    heading: '6. Changes to These Terms',
    paragraphs: [
      'These placeholder terms may be updated at any time without notice, as this site exists solely as a portfolio example.',
    ],
  },
]

export default function Terms() {
  return <LegalPage title="Terms & Conditions" updated="January 2026" sections={sections} />
}
