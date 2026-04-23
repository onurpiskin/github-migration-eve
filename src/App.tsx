import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import Navigation from '@/components/sections/Navigation'
import About from '@/components/sections/About'
import EventDetails from '@/components/sections/EventDetails'
import Agenda from '@/components/sections/Agenda'
import DemoHighlights from '@/components/sections/DemoHighlights'
import Speakers from '@/components/sections/Speakers'
import Location from '@/components/sections/Location'
import CallToAction from '@/components/sections/CallToAction'
import Footer from '@/components/sections/Footer'
import RegistrationModal from '@/components/modals/RegistrationModal'

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isNavVisible, setIsNavVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsNavVisible(latest > 100)
    })
    return () => unsubscribe()
  }, [scrollY])

  const openRegistration = () => setIsRegistrationOpen(true)
  const closeRegistration = () => setIsRegistrationOpen(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation isVisible={isNavVisible} onRegisterClick={openRegistration} />
      
      <main>
        <Hero onRegisterClick={openRegistration} />
        <About />
        <EventDetails />
        <Agenda />
        <DemoHighlights />
        <Speakers />
        <Location />
        <CallToAction onRegisterClick={openRegistration} />
      </main>

      <Footer />

      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={closeRegistration} 
      />
    </div>
  )
}

export default App
