import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CalendarBlank, Clock, MapPin, ChatsCircle } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const details = [
  {
    icon: CalendarBlank,
    label: 'Date',
    value: 'June 9, 2026'
  },
  {
    icon: Clock,
    label: 'Time',
    value: '12:30 – 17:00',
    subtitle: 'Doors open at 12:00'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Microsoft Köln',
    subtitle: 'Holzmarkt 2, 50676 Köln, Germany'
  },
  {
    icon: ChatsCircle,
    label: 'Format',
    value: 'In-Person Event',
    subtitle: 'Talks, Demos, Q&A, Networking'
  }
]

export default function EventDetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="details" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Event Details
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A full afternoon of technical deep-dives, live demonstrations, and expert insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-secondary" weight="duotone" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    {detail.label}
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {detail.value}
                  </div>
                  {detail.subtitle && (
                    <div className="text-sm text-muted-foreground">
                      {detail.subtitle}
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap gap-3 justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm">Vision Talks</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Live Demos</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Strategy Sessions</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Q&A</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Networking</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
