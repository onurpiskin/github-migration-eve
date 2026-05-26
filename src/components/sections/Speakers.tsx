import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import arturSpethImg from '@/assets/images/artur.jpeg'
import juliaKordickImg from '@/assets/images/ai-julia.png'
import tillSpindlerImg from '@/assets/images/till.jpeg'
import magnusTimnerImg from '@/assets/images/magnus.jpeg'
import federicaIorisImg from '@/assets/images/federica.jpeg'
import onurPiskinImg from '@/assets/images/onur.png'
import microsoftLogo from '@/assets/images/microsoft-logo.svg'
import githubLogo from '@/assets/images/github-logo.svg'
import eficodeLogo from '@/assets/images/eficode-logo.svg'
import CopilotBackground from '@/components/CopilotBackground'

const speakers = [
  {
    name: 'Artur Speth',
    role: 'Solution Engineer',
    company: 'Microsoft',
    initials: 'AS',
    color: 'bg-secondary/20',
    image: arturSpethImg,
    logo: microsoftLogo
  },
  {
    name: 'Julia Kordick',
    role: 'Solution Engineer GBB',
    company: 'GitHub',
    initials: 'JK',
    color: 'bg-accent/20',
    image: juliaKordickImg,
    logo: githubLogo
  },
  {
    name: 'Till Spindler',
    role: 'Cloud Solution Expert',
    company: 'Eficode',
    initials: 'TS',
    color: 'bg-primary/20',
    image: tillSpindlerImg,
    logo: eficodeLogo
  },
  {
    name: 'Magnus Timner',
    role: 'VP and Co-founder',
    company: 'Solidify/Eficode',
    initials: 'MT',
    color: 'bg-primary/20',
    image: magnusTimnerImg,
    logo: eficodeLogo
  },
  {
    name: 'Federica Ioris',
    role: 'Senior Account Manager',
    company: 'GitHub',
    initials: 'FI',
    color: 'bg-accent/20',
    image: federicaIorisImg,
    logo: githubLogo
  },
  {
    name: 'Onur Pişkin',
    role: 'Senior Account Manager',
    company: 'GitHub',
    initials: 'OP',
    color: 'bg-accent/20',
    image: onurPiskinImg,
    logo: githubLogo
  }
]

export default function Speakers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="speakers" className="relative py-20 md:py-32 bg-background" ref={ref}>
      <CopilotBackground density="low" variant="light" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the Speakers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts and technical leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="flex h-full min-h-[310px] flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                <div className="flex flex-col items-center">
                  <Avatar className="mb-5 h-28 w-28 ring-4 ring-background shadow-md">
                    <AvatarImage src={speaker.image} alt={speaker.name} className="object-cover" />
                    <AvatarFallback className={`${speaker.color} text-xl font-semibold`}>
                      {speaker.initials}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="mb-2 text-lg font-semibold leading-tight">{speaker.name}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{speaker.role}</p>
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-accent">
                    <img 
                      src={speaker.logo} 
                      alt={`${speaker.company} logo`}
                      className="h-6 w-auto max-w-20 shrink-0 object-contain"
                    />
                    <span>{speaker.company}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
