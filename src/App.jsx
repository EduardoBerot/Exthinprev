import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import MapSection from './components/MapSection.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [revealed, setRevealed] = useState(false)

  // trava o scroll enquanto a intro do vídeo roda
  useEffect(() => {
    document.body.style.overflow = revealed ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [revealed])

  return (
    <>
      <Navbar show={revealed} />
      <main>
        <Hero revealed={revealed} onReveal={() => setRevealed(true)} />
        <Services />
        <About />
        <MapSection />
      </main>
      <Footer />
      {revealed && <WhatsAppButton />}
    </>
  )
}
