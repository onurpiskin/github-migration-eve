import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkle } from '@phosphor-icons/react'
import CopilotBackground from '@/components/CopilotBackground'

interface CallToActionProps {
  onRegisterClick: () => void
}

export default function CallToAction({ onRegisterClick }: CallToActionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-accent via-accent/90 to-secondary overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, oklch(0.75 0.19 145) 0%, oklch(0.68 0.17 145) 100%)`
          }}
        />
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.98 0 0 / 0.2) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            background: `radial-gradient(ellipse at top left, oklch(0.60 0.15 240 / 0.2) 0%, transparent 50%),
                         radial-gradient(ellipse at bottom right, oklch(0.20 0.01 240 / 0.15) 0%, transparent 50%)`
          }}
        />
      </div>
      
      <CopilotBackground density="medium" variant="dark" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-accent-foreground"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6"
          >
            <Sparkle size={20} weight="fill" />
            Limited Seats Available
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Development Workflow?
          </h2>

          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Don't miss this opportunity to learn from the best. Register now to secure your spot at this exclusive event.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <Button
              size="lg"
              onClick={onRegisterClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-7 h-auto rounded-lg shadow-2xl hover:shadow-xl transition-all hover:scale-105"
            >
              Secure Your Spot
              <ArrowRight className="ml-2" weight="bold" size={20} />
            </Button>
            <span className="text-sm font-medium text-accent-foreground/80">Limited Seats Available</span>
          </motion.div>

          <p className="text-sm mt-6 opacity-75">
            September 15, 2026 · 12:30 – 17:00 · Microsoft Köln
          </p>
        </motion.div>
      </div>
    </section>
  )
}
