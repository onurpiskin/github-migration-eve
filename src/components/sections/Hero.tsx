import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from '@phosphor-icons/react'
import ShareEvent from '@/components/ShareEvent'
import CountdownTimer from '@/components/CountdownTimer'
import CopilotBackground from '@/components/CopilotBackground'
import copilotLogo from '@/assets/images/copilot-logo-large.svg'

interface HeroProps {
  onRegisterClick: () => void
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const eventDate = new Date('2026-06-09T12:30:00')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, oklch(0.3 0.02 240) 0%, oklch(0.18 0.01 240) 100%)`
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.98 0 0 / 0.1) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            background: `radial-gradient(ellipse at top, oklch(0.60 0.15 240 / 0.15) 0%, transparent 60%),
                         radial-gradient(ellipse at bottom right, oklch(0.68 0.17 145 / 0.1) 0%, transparent 50%)`
          }}
        />
      </div>
      
      <CopilotBackground density="medium" variant="dark" />
      
      <div className="absolute inset-0 opacity-5 flex items-center justify-center">
        <img 
          src={copilotLogo} 
          alt="" 
          className="w-full max-w-3xl h-auto object-contain filter blur-sm"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center text-primary-foreground"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground font-medium text-sm backdrop-blur-sm border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              June 9, 2026 · Köln, Germany
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            From Azure DevOps to GitHub
          </h1>

          <p className="text-xl md:text-2xl font-semibold mb-8 text-primary-foreground/90">
            Migrate, Integrate & Accelerate with GitHub Copilot
          </p>

          <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed text-primary-foreground/80">
            Join us for an exclusive in-person event where engineering leaders and developers explore the future of software development. Learn proven strategies for transitioning from Azure DevOps to GitHub, discover hybrid integration patterns, and unlock the full potential of AI-powered development with GitHub Copilot.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <CountdownTimer targetDate={eventDate} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6 items-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col items-center gap-2">
                <Button
                  size="lg"
                  onClick={onRegisterClick}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Register Now
                  <ArrowRight className="ml-2" weight="bold" />
                </Button>
                <span className="text-xs font-medium text-primary-foreground/70">Limited Seats Available</span>
              </div>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-base px-8 py-6 h-auto rounded-lg backdrop-blur-sm"
              >
                View Agenda
              </Button>
              <div className="[&_button]:bg-primary-foreground/10 [&_button]:border-primary-foreground/30 [&_button]:text-primary-foreground [&_button]:hover:bg-primary-foreground/20 [&_button]:backdrop-blur-sm [&_button]:font-semibold [&_button]:text-base [&_button]:px-8 [&_button]:py-6 [&_button]:h-auto [&_button]:rounded-lg [&_svg]:text-primary-foreground">
                <ShareEvent variant="outline" size="lg" showLabel={true} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
