import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider from './context/ThemeProvider.jsx'
import Layout from './components/layout/Layout.jsx'
import LoadingScreen from './components/common/LoadingScreen.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import PageTransition from './components/common/PageTransition.jsx'
import routes from './routes.jsx'
import NotFound from './pages/NotFound.jsx'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Routes location={location}>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PageTransition key={location.pathname}>{route.element}</PageTransition>}
        />
      ))}
      <Route path="*" element={<PageTransition key={location.pathname}><NotFound /></PageTransition>} />
    </Routes>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
      <Analytics />
    </ThemeProvider>
  )
}

export default App
