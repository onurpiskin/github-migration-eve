import { motion } from 'framer-motion'

interface CopilotBackgroundProps {
  density?: 'low' | 'medium' | 'high'
  opacity?: number
}

export default function CopilotBackground({ density = 'medium', opacity = 0.03 }: CopilotBackgroundProps) {
  const iconCount = density === 'low' ? 3 : density === 'medium' ? 5 : 8

  const icons = Array.from({ length: iconCount }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            opacity: opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 65 65"
            fill="currentColor"
            className="w-full h-full text-primary"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M32.5 0L0 18.75v27.5L32.5 65l32.5-18.75v-27.5L32.5 0zm0 8.125l23.75 13.75v27.5L32.5 56.875 8.75 43.125v-27.5l23.75-13.75z"/>
            <path d="M32.5 15.625c-9.5 0-17.5 7.5-17.5 17.5s8 17.5 17.5 17.5 17.5-7.5 17.5-17.5-8-17.5-17.5-17.5zm-7.5 15a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm15 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>
            <path d="M23.125 38.75c1.25 2.5 4.375 4.375 9.375 4.375s8.125-1.875 9.375-4.375H23.125z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
