import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import { gaEvent } from './analytics'
import Support from './pages/Support'
import TermsOfService from './components/TermsOfService'
import Contact from './components/Contact'

function GAListener() {
  const location = useLocation()

  useEffect(() => {
    let page_title = 'NutriTrack — Track Nutrition Smarter'
    if (location.pathname === '/privacy') page_title = 'Privacy • NutriTrack'
    else if (location.pathname === '/support-center') page_title = 'Support • NutriTrack'
    else if (location.pathname === '/terms-of-service') page_title = 'Terms of Service • NutriTrack'
    else if (location.pathname === '/contact-us') page_title = 'Contact Us • NutriTrack'

    document.title = page_title === 'NutriTrack — Track Nutrition Smarter' ? 'NutriTrack' : page_title

    if (import.meta.env.PROD) {
      gaEvent('page_view', {
        page_title,
        page_location: window.location.href,
        page_path: location.pathname,
      })
    }
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <GAListener />
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support-center" element={<Support />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}