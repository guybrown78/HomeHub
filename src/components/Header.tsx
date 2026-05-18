'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { LuChevronDown, LuX, LuMenu } from 'react-icons/lu'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { navSections, headerCtas } from '@/libs/navigation'

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NavDropdown({
  title,
  links,
  iconBg,
  iconColor,
  align = 'left',
}: {
  title: string
  links: { label: string; href: string; icon?: React.ComponentType<React.SVGAttributes<SVGElement> & { strokeWidth?: number | string }>; description?: string }[]
  iconBg: string
  iconColor: string
  align?: 'left' | 'right'
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
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${isOpen ? 'text-brand-950' : 'text-gray-600 hover:text-brand-950'}`}
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
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            onMouseEnter={open}
            onMouseLeave={close}
            className={`absolute top-full z-50 mt-3 w-72 ${align === 'right' ? 'right-0' : 'left-0'}`}
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
              <div className="p-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  >
                    {link.icon && (
                      <div
                        className={`mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg ${iconBg} transition-colors group-hover:brightness-95`}
                      >
                        <link.icon className={`h-4 w-4 ${iconColor}`} strokeWidth={1.75} />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-950">
                        {link.label}
                      </p>
                      {link.description && (
                        <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                          {link.description}
                        </p>
                      )}
                    </div>
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

function MobileNavPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title))
  }

  // Lock body scroll and reset accordion when panel closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setOpenSection(null)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-brand-950/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Slide-in panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 z-[70] flex h-dvh w-[min(85vw,360px)] flex-col overflow-hidden rounded-l-3xl bg-white shadow-2xl"
          >
            {/* Panel header */}
            <div className="flex flex-none items-center justify-between px-5 py-5">
              <Link href="/" onClick={onClose}>
                <Logo className="h-8 w-auto" />
              </Link>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close navigation"
              >
                <LuX className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable accordion */}
            <div className="flex-1 overflow-y-auto px-5">
              {navSections.map((section) => {
                const isExpanded = openSection === section.title
                return (
                  <div key={section.title} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex w-full items-center justify-between py-4 text-left"
                      aria-expanded={isExpanded}
                    >
                      <span
                        className={`text-sm font-semibold transition-colors ${
                          isExpanded ? 'text-brand-950' : 'text-gray-700'
                        }`}
                      >
                        {section.title}
                      </span>
                      <LuChevronDown
                        className={`h-4 w-4 flex-none transition-all duration-200 ${
                          isExpanded ? 'rotate-180 text-brand-600' : 'text-gray-400'
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-0.5 pb-4">
                            {section.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                              >
                                {link.icon && (
                                  <div
                                    className={`mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg ${section.iconBg}`}
                                  >
                                    <link.icon
                                      className={`h-4 w-4 ${section.iconColor}`}
                                      strokeWidth={1.75}
                                    />
                                  </div>
                                )}
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-950">
                                    {link.label}
                                  </p>
                                  {link.description && (
                                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                                      {link.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* Bottom CTAs */}
            <div className="flex-none space-y-2 border-t border-gray-100 p-5">
              {headerCtas.map((cta) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={cta.variant}
                  onClick={onClose}
                  className="w-full justify-center"
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="relative z-50">
        <nav>
          <Container className="flex items-center justify-between py-6">
            <Link href="/" aria-label="Home">
              <Logo className="h-9 w-auto" />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navSections.map((section) => (
                <NavDropdown
                  key={section.title}
                  title={section.title}
                  links={section.links}
                  iconBg={section.iconBg}
                  iconColor={section.iconColor}
                  align={section.align}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-3 lg:flex">
                {headerCtas.map((cta, i) => (
                  <div key={cta.href} className={i === 0 ? 'hidden xl:block' : undefined}>
                    <Button href={cta.href} variant={cta.variant}>
                      {cta.label}
                    </Button>
                  </div>
                ))}
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation"
              >
                <LuMenu className="h-6 w-6" />
              </button>
            </div>
          </Container>
        </nav>
      </header>

      <MobileNavPanel
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
