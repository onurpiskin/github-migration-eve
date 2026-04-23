import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Coffee, Presentation, Robot, CircleDashed, UsersFour, Chat } from '@phosphor-icons/react'

const agendaItems = [
  {
    time: '12:30 – 13:00',
    title: 'Welcome & Coffee',
    description: 'Registration, networking, and refreshments',
    icon: Coffee,
    color: 'text-amber-600'
  },
  {
    time: '13:00 – 13:45',
    title: 'Benefits of GitHub',
    description: 'Platform overview, competitive advantages, and success stories',
    icon: Presentation,
    color: 'text-secondary'
  },
  {
    time: '13:45 – 14:30',
    title: 'Future of GitHub & Copilot',
    description: 'AI-powered development workflows and the future of software engineering',
    icon: Robot,
    color: 'text-accent'
  },
  {
    time: '14:30 – 14:45',
    title: 'Break',
    description: 'Coffee, snacks, and networking',
    icon: CircleDashed,
    color: 'text-muted-foreground'
  },
  {
    time: '14:45 – 15:30',
    title: 'Setup, Integration & Migration',
    description: 'Live demos of migration tools, hybrid scenarios, and best practices',
    icon: UsersFour,
    color: 'text-secondary'
  },
  {
    time: '15:30 – 16:00',
    title: 'Q&A',
    description: 'Open discussion with our experts',
    icon: Chat,
    color: 'text-primary'
  },
  {
    time: '16:00 – 17:00',
    title: 'Networking & Closing',
    description: 'Connect with speakers, attendees, and event partners',
    icon: UsersFour,
    color: 'text-accent'
  }
]

export default function Agenda() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="agenda" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Event Agenda
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully curated schedule designed to maximize learning and networking
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            {agendaItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 md:pl-24 pb-12 last:pb-0"
                >
                  <div className="absolute left-0 md:left-8 top-0 w-0 h-0 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-sm">
                      <Icon size={20} className={item.color} weight="duotone" />
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-accent/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-md w-fit">
                        {item.time}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
