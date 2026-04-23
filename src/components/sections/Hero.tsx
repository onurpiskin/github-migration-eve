import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from '@phosphor-icons/react'

interface HeroProps {
  onRegisterClick: () => void
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, oklch(0.98 0 0 / 0.05) 35px, oklch(0.98 0 0 / 0.05) 70px)`
        }} />
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={onRegisterClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Register Now
              <ArrowRight className="ml-2" weight="bold" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-base px-8 py-6 h-auto rounded-lg backdrop-blur-sm"
            >
              View Agenda
            </Button>
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
