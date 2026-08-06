import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Reservations from './pages/Reservations.jsx'
import PrivateEvents from './pages/PrivateEvents.jsx'
import GiftCards from './pages/GiftCards.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/menu', element: <Menu /> },
  { path: '/reservations', element: <Reservations /> },
  { path: '/private-events', element: <PrivateEvents /> },
  { path: '/gift-cards', element: <GiftCards /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
]

export default routes
