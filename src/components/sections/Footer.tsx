import { GithubLogo } from '@phosphor-icons/react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <GithubLogo size={28} weight="fill" />
              <span className="text-xl font-bold">Azure DevOps → GitHub Event</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Hosted by Microsoft, GitHub & Eficode
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex flex-wrap gap-6 text-sm">
              <button className="hover:text-accent transition-colors">Privacy Policy</button>
              <button className="hover:text-accent transition-colors">Terms of Service</button>
              <button className="hover:text-accent transition-colors">Contact</button>
            </div>
            <p className="text-xs text-primary-foreground/60">
              © 2026 All rights reserved
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>
            This event is designed for developers, DevOps engineers, and technical leaders
          </p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="font-semibold text-accent">GitHub</span>
            <span>·</span>
            <span className="font-semibold text-secondary">Microsoft</span>
            <span>·</span>
            <span className="font-semibold text-primary-foreground">Eficode</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
