import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CalendarBlank, Clock, MapPin, Users } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CopilotBackground from '@/components/CopilotBackground'

const details = [
  {
    icon: CalendarBlank,
    label: 'Date',
    value: 'June 9, 2026',
    color: 'text-accent'
  },
  {
    icon: Clock,
    label: 'Time',
    value: '12:30 – 17:00',
    subtitle: 'Doors open at 12:00',
    color: 'text-secondary'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Microsoft Köln',
    subtitle: 'Holzmarkt 2, 50676 Köln, Germany',
    color: 'text-accent'
  },
  {
    icon: Users,
    label: 'Format',
    value: 'In-Person Event',
    subtitle: 'Interactive & Collaborative',
    color: 'text-secondary'
  }
]

const formats = [
  'Vision Talks',
  'Live Demos',
  'Strategy Sessions',
  'Q&A',
  'Networking'
]

export default function EventDetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      id="details" 
      className="relative py-24 md:py-36 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/30" />
      <CopilotBackground density="low" variant="light" />
      
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px),
                         repeating-linear-gradient(-45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)`
      }} />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            Event Details
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A full afternoon of technical deep-dives, live demonstrations, and expert insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto mb-16">
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="group relative p-8 h-full bg-card/80 backdrop-blur-sm border-border/60 hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/60 via-secondary/60 to-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
                  
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={detail.color} weight="duotone" />
                  </div>
                  
                  <div className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-3 letter-spacing-wide">
                    {detail.label}
                  </div>
                  
                  <div className="text-xl md:text-2xl font-bold mb-2 text-foreground leading-tight">
                    {detail.value}
                  </div>
                  
                  {detail.subtitle && (
                    <div className="text-sm text-muted-foreground/70 leading-relaxed">
                      {detail.subtitle}
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/60 p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
              What to Expect
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10" aria-label="Event formats">
              {formats.map((format, index) => (
                <motion.div
                  key={format}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.6 + (index * 0.08),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <div className="cursor-default rounded-md border border-border/70 bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground shadow-none">
                    {format}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mb-8 h-px w-full max-w-lg bg-border/80" />

            <div className="flex flex-col items-center gap-3">
              <div className="flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Button 
                  size="lg" 
                  className="min-h-12 rounded-full px-8 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:min-w-44"
                  onClick={() => window.open('https://forms.office.com/Pages/DesignPageV2.aspx?origin=RevampFRE&subpage=design&id=v4j5cvGGr0GRqy180BHbR7-_Ey3GyI1GgFpm0Eq6nfVUN0xWRjdDRVc5WjlEMUw0RkRYWkpERjVVUC4u&topview=Prefill', '_blank', 'noopener,noreferrer')}
                >
                  Register Now
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="min-h-12 rounded-full border-2 px-8 text-base font-semibold transition-all duration-300 hover:scale-105 hover:bg-accent/5 sm:min-w-56"
                  onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Full Agenda
                </Button>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Limited Seats Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
