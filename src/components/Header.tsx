'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { navSections } from '@/libs/navigation'

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 6h14M5 18h14M5 12h14" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NavDropdown({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsOpen(true)
  }

  const close = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 120)
  }

  return (
    <div onMouseEnter={open} onMouseLeave={close} className="relative">
      <button
        className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-brand-950"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            onMouseEnter={open}
            onMouseLeave={close}
            className="absolute left-0 top-full z-50 mt-2 w-56"
          >
            <div className="overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5">
              <div className="p-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-950"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav>
        <Container className="flex items-center justify-between py-6">
          <Link href="/" aria-label="Home">
            <Logo className="h-9 w-auto" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navSections.map((section) => (
              <NavDropdown key={section.title} title={section.title} links={section.links} />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button href="/demo">Book a Demo</Button>
            </div>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg stroke-gray-700 hover:bg-gray-100 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-gray-100 bg-white shadow-lg lg:hidden"
          >
            <Container className="py-6">
              {navSections.map((section) => (
                <div key={section.title} className="mb-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    {section.title}
                  </p>
                  <div className="space-y-1">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-950"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-100 pt-4">
                <Button href="/demo" className="w-full justify-center">
                  Book a Demo
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
