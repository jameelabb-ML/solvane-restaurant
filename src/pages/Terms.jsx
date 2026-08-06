import LegalPage from '../components/common/LegalPage.jsx'

const sections = [
  {
    heading: '1. Acceptance of Terms',
    paragraphs: [
      'By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use this site.',
    ],
  },
  {
    heading: '2. Reservations',
    paragraphs: [
      'Reservation requests submitted through this site are subject to availability and confirmation. We recommend arriving within 15 minutes of your reserved time; tables held beyond that window may be released. Reservations can be modified or canceled up to 24 hours in advance by contacting us directly.',
    ],
  },
  {
    heading: '3. Gift Cards',
    paragraphs: [
      'Gift cards do not expire and may be redeemed for dining, private events, or beverage purchases. Gift cards are non-refundable and cannot be exchanged for cash except where required by law.',
    ],
  },
  {
    heading: '4. Intellectual Property',
    paragraphs: [
      'All content on this site, including text, images, and branding, is the property of Solvane and may not be reproduced or used without permission.',
    ],
  },
  {
    heading: '5. Limitation of Liability',
    paragraphs: [
      'This website is provided "as is." While we strive for accuracy, menu items, pricing, and availability are subject to change without notice.',
    ],
  },
  {
    heading: '6. Changes to These Terms',
    paragraphs: [
      'We may update these Terms & Conditions from time to time. Continued use of this site after changes are posted constitutes acceptance of the revised terms.',
    ],
  },
]

export default function Terms() {
  return <LegalPage title="Terms & Conditions" updated="January 2026" sections={sections} />
}
