import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GitBranch, FlowArrow, Robot, Shield, ChartLine, Database } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import CopilotBackground from '@/components/CopilotBackground'

const highlights = [
  {
    icon: FlowArrow,
    title: 'Developer Workflows',
    description: 'See GitHub Actions in action with advanced CI/CD pipelines, automated testing, and deployment strategies.'
  },
  {
    icon: GitBranch,
    title: 'Migration Toolkit',
    description: 'Tools and strategies for migrating repositories, pipelines, work items, and team structures from Azure DevOps.'
  },
  {
    icon: Robot,
    title: 'AI-Powered Features',
    description: 'GitHub Copilot for code completion, PR automation, and intelligent code reviews that accelerate development.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Advanced security scanning, dependency insights, secret scanning, and compliance automation built into the platform.'
  },
  {
    icon: ChartLine,
    title: 'Observability & Insights',
    description: 'Project analytics, code metrics, team productivity dashboards, and actionable insights for better decisions.'
  },
  {
    icon: Database,
    title: 'Hybrid Scenarios',
    description: 'Maintain Azure DevOps for specific workflows while leveraging GitHub for source control and CI/CD.'
  }
]

export default function DemoHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="demos" className="relative py-20 md:py-32 bg-muted/30" ref={ref}>
      <CopilotBackground density="low" variant="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Demo Highlights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Live demonstrations of key GitHub features and migration scenarios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="p-6 h-full hover:shadow-lg hover:scale-[1.02] transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:from-accent/30 group-hover:to-secondary/30 transition-colors">
                    <Icon size={28} className="text-accent" weight="duotone" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
