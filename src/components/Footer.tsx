import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { navSections, footerPolicyLinks } from '@/libs/navigation'
import { FooterNavAccordion } from '@/components/FooterNavAccordion'

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YouTubeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="rounded-t-5xl bg-brand-950 pt-12 sm:pt-16">
      <Container>
        <div className="border-b border-white/10 pb-12">
          {/* Brand + nav grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr]">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3 text-white">
                <Logomark className="h-8 w-8 flex-none fill-[#FFA500]" />
                <span className="text-lg font-bold">HomeHub</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                Connect communities, streamline issue reporting and ensure compliance with our intuitive platform designed for everyone.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.linkedin.com/company/homehub-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href="http://www.youtube.com/@HomeHubInfo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <YouTubeIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Desktop nav columns */}
            {navSections.map((section) => (
              <div key={section.title} className="hidden lg:block">
                <h3 className="text-sm font-bold text-white">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile accordion nav */}
          <div className="mt-8 lg:hidden">
            <FooterNavAccordion />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerPolicyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-white/50">
            &copy; Copyright {new Date().getFullYear()} HomeHub. All rights reserved.
          </p>
          <p className="hidden text-xs text-white/50 lg:block">
            Let&apos;s make tenant engagement better, together.
          </p>
          {/* <Link href="/design-system" className="text-xs text-white/30 transition-colors hover:text-white/60">
            ↗ Design System
          </Link> */}
        </div>
      </Container>
    </footer>
  )
}
