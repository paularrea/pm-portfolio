import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import EcommerceCase from './pages/EcommerceCase'
import FormsCase from './pages/FormsCase'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/ecommerce" element={<EcommerceCase />} />
        <Route path="/work/forms" element={<FormsCase />} />
      </Routes>
    </>
  )
}
