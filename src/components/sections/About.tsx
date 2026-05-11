import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GitBranch, TrendUp, Shield, Users } from '@phosphor-icons/react'
import CopilotBackground from '@/components/CopilotBackground'

const features = [
  {
    icon: GitBranch,
    title: 'Seamless Migration',
    description: 'Whether you\'re fully migrating or adopting a hybrid approach, we\'ll guide you through proven strategies for transitioning repos, pipelines, and workflows from Azure DevOps to GitHub.'
  },
  {
    icon: TrendUp,
    title: 'Accelerated Development',
    description: 'Leverage GitHub Actions, Codespaces, and Copilot to dramatically increase developer velocity and streamline your CI/CD pipelines with cloud-native automation.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Adopt advanced security scanning, dependency management, and compliance tooling built directly into GitHub\'s platform for comprehensive protection.'
  },
  {
    icon: Users,
    title: 'Better Collaboration',
    description: 'Foster team productivity with pull request workflows, code reviews, project boards, and discussions all in one unified platform developers love.'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="relative py-20 md:py-32 bg-background overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full" 
          style={{
            background: `radial-gradient(circle, oklch(0.68 0.17 145 / 0.08) 0%, transparent 70%)`
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full" 
          style={{
            background: `radial-gradient(circle, oklch(0.60 0.15 240 / 0.08) 0%, transparent 70%)`
          }}
        />
      </div>
      
      <CopilotBackground density="low" variant="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Transition to GitHub?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            GitHub is the platform where modern software is built. Join millions of developers and organizations who have made the shift to faster, more collaborative, and more secure development workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon size={28} className="text-accent" weight="duotone" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
