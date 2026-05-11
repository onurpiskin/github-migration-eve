import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import tillSpindlerImg from '@/assets/images/till-spindler.jpg'
import microsoftLogo from '@/assets/images/microsoft-logo.svg'
import githubLogo from '@/assets/images/github-logo.svg'
import eficodeLogo from '@/assets/images/eficode-logo.svg'

const speakers = [
  {
    name: 'Artur Speth',
    role: 'Solution Engineer',
    company: 'Microsoft',
    initials: 'AS',
    color: 'bg-secondary/20',
    image: undefined,
    logo: microsoftLogo
  },
  {
    name: 'Julia Kordick',
    role: 'Solution Engineer',
    company: 'GitHub',
    initials: 'JK',
    color: 'bg-accent/20',
    image: undefined,
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
    image: undefined,
    logo: eficodeLogo
  },
  {
    name: 'Federica Ioris',
    role: 'Senior Account Manager',
    company: 'GitHub',
    initials: 'FI',
    color: 'bg-accent/20',
    image: undefined,
    logo: githubLogo
  },
  {
    name: 'Onur Pişkin',
    role: 'Senior Account Manager',
    company: 'GitHub',
    initials: 'OP',
    color: 'bg-accent/20',
    image: undefined,
    logo: githubLogo
  }
]

export default function Speakers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="speakers" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="perspective-1000"
            >
              <div className="relative w-full h-[320px] group [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                <Card className="absolute inset-0 p-6 text-center [backface-visibility:hidden]">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={speaker.image} alt={speaker.name} />
                      <AvatarFallback className={`${speaker.color} text-2xl font-semibold`}>
                        {speaker.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{speaker.role}</p>
                  <p className="text-sm font-medium text-accent mb-4">{speaker.company}</p>
                  <div className="flex gap-3 justify-center">
                    <button className="text-muted-foreground hover:text-secondary transition-colors">
                      <LinkedinLogo size={20} weight="fill" />
                    </button>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <GithubLogo size={20} weight="fill" />
                    </button>
                  </div>
                </Card>

                <Card className="absolute inset-0 p-6 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] bg-card">
                  <img 
                    src={speaker.logo} 
                    alt={`${speaker.company} logo`}
                    className="w-full h-auto max-h-32 object-contain"
                  />
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
