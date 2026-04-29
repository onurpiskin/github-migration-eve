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

const REGISTRATION_URL = 'https://forms.office.com/r/Yhx7HY9mY6?origin=lprLink'

function App() {
  const openRegistration = () => {
    window.open(REGISTRATION_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onRegisterClick={openRegistration} />
      
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
