import Hero from '@/components/sections/Hero'
import Navigation from '@/components/sections/Navigation'
import About from '@/components/sections/About'
import EventDetails from '@/components/sections/EventDetails'
import Agenda from '@/components/sections/Agenda'
import DemoHighlights from '@/components/sections/DemoHighlights'
import Speakers from '@/components/sections/Speakers'
import Location from '@/components/sections/Location'
import FAQ from '@/components/sections/FAQ'
import CallToAction from '@/components/sections/CallToAction'
import Footer from '@/components/sections/Footer'

const REGISTRATION_URL = 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbR7-_Ey3GyI1GgFpm0Eq6nfVUN0xWRjdDRVc5WjlEMUw0RkRYWkpERjVVUC4u&origin=lprLink&route=shorturl'

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
        <FAQ />
        <CallToAction onRegisterClick={openRegistration} />
      </main>

      <Footer />
    </div>
  )
}

export default App
