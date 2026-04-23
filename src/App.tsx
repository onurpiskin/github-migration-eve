import { useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'
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

const REGISTRATION_URL = 'https://forms.office.com/Pages/DesignPageV2.aspx?origin=RevampFRE&subpage=design&id=v4j5cvGGr0GRqy180BHbR7-_Ey3GyI1GgFpm0Eq6nfVUN0xWRjdDRVc5WjlEMUw0RkRYWkpERjVVUC4u&topview=Prefill'

function App() {
  const { scrollY } = useScroll()
  const [isNavVisible, setIsNavVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsNavVisible(latest > 100)
    })
    return () => unsubscribe()
  }, [scrollY])

  const openRegistration = () => {
    window.open(REGISTRATION_URL, '_blank', 'noopener,noreferrer')
  }

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
    </div>
  )
}

export default App
