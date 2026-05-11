import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface CopilotBackgroundProps {
  density?: 'low' | 'medium' | 'high'
  variant?: 'light' | 'dark'
}

export default function CopilotBackground({ density = 'medium', variant = 'light' }: CopilotBackgroundProps) {
  const icons = useMemo(() => {
    const iconCount = density === 'low' ? 8 : density === 'medium' ? 15 : 25
    
    return Array.from({ length: iconCount }, (_, i) => {
      const sizeCategory = Math.random()
      let size: number
      let opacity: number
      let blur: number
      
      if (sizeCategory < 0.3) {
        size = Math.random() * 60 + 120
        opacity = variant === 'light' ? 0.015 : 0.02
        blur = 2
      } else if (sizeCategory < 0.7) {
        size = Math.random() * 40 + 60
        opacity = variant === 'light' ? 0.025 : 0.035
        blur = 1
      } else {
        size = Math.random() * 30 + 30
        opacity = variant === 'light' ? 0.04 : 0.05
        blur = 0.5
      }
      
      return {
        id: i,
        size,
        opacity,
        blur,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 30 + 25,
        delay: Math.random() * 10,
        rotationRange: Math.random() * 10 + 5,
      }
    })
  }, [density, variant])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute will-change-transform"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            opacity: icon.opacity,
            filter: `blur(${icon.blur}px)`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() > 0.5 ? 15 : -15, 0],
            rotate: [0, icon.rotationRange, -icon.rotationRange, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className="w-full h-full text-primary drop-shadow-sm"
            style={{ transform: 'translateZ(0)' }}
          >
            <path d="M512 0L64 298.7v426.6L512 1024l448-298.7V298.7L512 0zm0 128l358.4 238.9v290.2L512 896 153.6 657.1V366.9L512 128z"/>
            <circle cx="384" cy="448" r="48"/>
            <circle cx="640" cy="448" r="48"/>
            <path d="M332.8 588.8c25.6 51.2 89.6 89.6 179.2 89.6s153.6-38.4 179.2-89.6H332.8z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
