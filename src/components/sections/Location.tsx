import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, NavigationArrow } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="location" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Event Location
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us at the Microsoft office in the heart of Cologne
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-secondary" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Microsoft Köln</h3>
                      <p className="text-muted-foreground">
                        Holzmarkt 2<br />
                        50676 Köln<br />
                        Germany
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Arrival Instructions</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Please arrive at 12:00 PM for registration and check-in. The venue is easily accessible by public transport - take the U-Bahn to Heumarkt station (5-minute walk).
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Parking</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Visitor parking is available at Parkhaus am Heumarkt, approximately 200m from the venue.
                      </p>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Holzmarkt+2+50676+Köln"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors mt-4"
                    >
                      <NavigationArrow size={18} weight="bold" />
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="bg-muted h-64 md:h-auto relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <MapPin size={48} weight="duotone" className="mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Interactive Map</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
