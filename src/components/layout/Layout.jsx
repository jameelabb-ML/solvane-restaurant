import Navbar from '../navigation/Navbar.jsx'
import Footer from './Footer.jsx'
import BackToTop from '../common/BackToTop.jsx'
import ChatbotWidget from '../chatbot/ChatbotWidget.jsx'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream-200 dark:bg-charcoal-900">
      <Navbar />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
      <BackToTop />
      <ChatbotWidget />
    </div>
  )
}
