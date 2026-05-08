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
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-primary"
          >
            <path d="M9.5 2C8.67 2 8 2.67 8 3.5V4.79C6.76 5.36 5.82 6.43 5.36 7.71L4 7.29C3.45 7.11 2.86 7.42 2.68 7.97C2.5 8.52 2.81 9.11 3.36 9.29L4.72 9.71C4.66 10.13 4.63 10.56 4.63 11C4.63 11.44 4.66 11.87 4.72 12.29L3.36 12.71C2.81 12.89 2.5 13.48 2.68 14.03C2.86 14.58 3.45 14.89 4 14.71L5.36 14.29C5.82 15.57 6.76 16.64 8 17.21V18.5C8 19.33 8.67 20 9.5 20C10.33 20 11 19.33 11 18.5V17.92C11.33 17.97 11.66 18 12 18C12.34 18 12.67 17.97 13 17.92V18.5C13 19.33 13.67 20 14.5 20C15.33 20 16 19.33 16 18.5V17.21C17.24 16.64 18.18 15.57 18.64 14.29L20 14.71C20.55 14.89 21.14 14.58 21.32 14.03C21.5 13.48 21.19 12.89 20.64 12.71L19.28 12.29C19.34 11.87 19.37 11.44 19.37 11C19.37 10.56 19.34 10.13 19.28 9.71L20.64 9.29C21.19 9.11 21.5 8.52 21.32 7.97C21.14 7.42 20.55 7.11 20 7.29L18.64 7.71C18.18 6.43 17.24 5.36 16 4.79V3.5C16 2.67 15.33 2 14.5 2C13.67 2 13 2.67 13 3.5V4.08C12.67 4.03 12.34 4 12 4C11.66 4 11.33 4.03 11 4.08V3.5C11 2.67 10.33 2 9.5 2ZM12 6C14.76 6 17 8.24 17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11C7 8.24 9.24 6 12 6ZM12 8C10.34 8 9 9.34 9 11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 11C15 9.34 13.66 8 12 8Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
