import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Coffee, Presentation, Robot, CircleDashed, UsersFour, Chat } from '@phosphor-icons/react'
import CopilotBackground from '@/components/CopilotBackground'

const agendaItems = [
  {
    time: '12:30 – 13:00',
    title: 'Welcome & Coffee',
    description: 'Registration, networking, and refreshments',
    icon: Coffee,
    color: 'text-amber-600',
    isMainSession: false
  },
  {
    time: '13:00 – 13:45',
    title: 'Session 1: Why GitHub | Key Benefits and Migration Drivers (Microsoft)',
    description: 'Platform overview, competitive advantages, and real-world success stories',
    icon: Presentation,
    color: 'text-secondary',
    isMainSession: true,
    gradient: 'from-secondary/10 to-secondary/5',
    borderColor: 'border-secondary/40'
  },
  {
    time: '13:45 – 14:30',
    title: 'Session 2: Shaping the Future with GitHub & Copilot (GitHub)',
    description: 'AI-driven development workflows and the next era of software engineering',
    icon: Robot,
    color: 'text-accent',
    isMainSession: true,
    gradient: 'from-accent/10 to-accent/5',
    borderColor: 'border-accent/40'
  },
  {
    time: '14:30 – 14:45',
    title: 'Break',
    description: 'Coffee, snacks, and networking',
    icon: CircleDashed,
    color: 'text-muted-foreground',
    isMainSession: false
  },
  {
    time: '14:45 – 15:30',
    title: 'Session 3: Unlocking GitHub\'s Potential (Eficode)',
    description: 'Setup, integration, and migration in practice, including live demos, hybrid scenarios, and best practices',
    icon: UsersFour,
    color: 'text-primary',
    isMainSession: true,
    gradient: 'from-primary/10 to-primary/5',
    borderColor: 'border-primary/40'
  },
  {
    time: '15:30 – 16:00',
    title: 'Q&A',
    description: 'Open discussion with our experts',
    icon: Chat,
    color: 'text-primary',
    isMainSession: false
  },
  {
    time: '16:00 – 17:00',
    title: 'Networking & Closing',
    description: 'Connect with speakers, attendees, and event partners',
    icon: UsersFour,
    color: 'text-accent',
    isMainSession: false
  }
]

export default function Agenda() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="agenda" className="relative py-20 md:py-32 bg-background" ref={ref}>
      <CopilotBackground density="medium" variant="light" />
      <div className="container mx-auto px-4 relative z-10">
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
                    <div className={`w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-sm ${
                      item.isMainSession 
                        ? `border-2 ${item.borderColor} bg-gradient-to-br ${item.gradient}` 
                        : 'border-2 border-border'
                    }`}>
                      <Icon 
                        size={item.isMainSession ? 24 : 20} 
                        className={item.color} 
                        weight={item.isMainSession ? "fill" : "duotone"} 
                      />
                    </div>
                  </div>

                  <div className={`rounded-lg p-6 transition-all ${
                    item.isMainSession 
                      ? `bg-gradient-to-br ${item.gradient} border-2 ${item.borderColor} hover:shadow-lg hover:scale-[1.02]` 
                      : 'bg-card border border-border hover:shadow-md hover:border-accent/30'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className={`${item.isMainSession ? 'text-xl md:text-2xl' : 'text-xl'} font-semibold`}>
                        {item.title}
                      </h3>
                      <div className={`text-sm font-medium px-3 py-1 rounded-md w-fit ${
                        item.isMainSession 
                          ? `${item.color} bg-card/80 border ${item.borderColor}` 
                          : 'text-muted-foreground bg-muted'
                      }`}>
                        {item.time}
                      </div>
                    </div>
                    <p className={item.isMainSession ? 'text-foreground/80 font-medium' : 'text-muted-foreground'}>
                      {item.description}
                    </p>
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
