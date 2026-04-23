import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ShareNetwork, X, XLogo, LinkedinLogo, EnvelopeSimple, Link as LinkIcon, Check } from '@phosphor-icons/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ShareEventProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  showLabel?: boolean
}

export default function ShareEvent({ variant = 'ghost', size = 'sm', showLabel = true }: ShareEventProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const eventDetails = {
    title: 'From Azure DevOps to GitHub: Migrate, Integrate & Accelerate with GitHub Copilot',
    date: 'June 9, 2026',
    location: 'Microsoft Köln, Germany',
    url: typeof window !== 'undefined' ? window.location.href : '',
  }

  const shareText = `Join me at "${eventDetails.title}" on ${eventDetails.date} at ${eventDetails.location}! ${eventDetails.url}`
  const shareTextShort = `Join me at this exciting GitHub event on ${eventDetails.date}! ${eventDetails.url}`

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTextShort)}`
    window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=550,height=420')
  }

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventDetails.url)}`
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer,width=550,height=550')
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent(eventDetails.title)
    const body = encodeURIComponent(
      `Hi,\n\nI wanted to share this exciting event with you:\n\n${eventDetails.title}\n\nDate: ${eventDetails.date}\nLocation: ${eventDetails.location}\n\nLearn more and register here:\n${eventDetails.url}\n\nHope to see you there!`
    )
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(eventDetails.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className="gap-2">
          <ShareNetwork weight="fill" />
          {showLabel && 'Share'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Share Event</DialogTitle>
          <DialogDescription>
            Spread the word about this exciting GitHub event!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTwitterShare}
              className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-foreground/20 hover:bg-muted transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center group-hover:scale-110 transition-transform">
                <XLogo size={20} weight="fill" className="text-white" />
              </div>
              <span className="font-medium text-sm">Twitter</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLinkedInShare}
              className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-foreground/20 hover:bg-muted transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-transform">
                <LinkedinLogo size={20} weight="fill" className="text-white" />
              </div>
              <span className="font-medium text-sm">LinkedIn</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEmailShare}
              className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-foreground/20 hover:bg-muted transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <EnvelopeSimple size={20} weight="fill" className="text-accent-foreground" />
              </div>
              <span className="font-medium text-sm">Email</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopyLink}
              className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-foreground/20 hover:bg-muted transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check size={20} weight="bold" className="text-secondary-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="link"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <LinkIcon size={20} weight="bold" className="text-secondary-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="font-medium text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
            </motion.button>
          </div>

          <div className="pt-2">
            <div className="bg-muted rounded-lg p-3 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Share URL:</p>
              <p className="text-sm font-mono text-foreground break-all">{eventDetails.url}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
