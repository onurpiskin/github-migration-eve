import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'

interface NavigationProps {
  isVisible: boolean
  onRegisterClick: () => void
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Details', href: '#details' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Demos', href: '#demos' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Location', href: '#location' },
]

export default function Navigation({ isVisible, onRegisterClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-sm"
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <button
                  onClick={() => handleNavClick('#hero')}
                  className="font-bold text-lg text-foreground hover:text-accent transition-colors"
                >
                  Azure DevOps → GitHub
                </button>

                <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={onRegisterClick}
                    size="sm"
                    className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Register
                  </Button>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-foreground"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-card border-b border-border shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onRegisterClick()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
