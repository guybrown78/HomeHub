'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { LuChevronDown } from 'react-icons/lu'
import { navSections } from '@/libs/navigation'

export function FooterNavAccordion() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggle = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title))
  }

  return (
    <div className="divide-y divide-white/10">
      {navSections.map((section) => {
        const isOpen = openSection === section.title
        return (
          <div key={section.title}>
            <button
              onClick={() => toggle(section.title)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`text-sm font-bold transition-colors ${
                  isOpen ? 'text-white' : 'text-white/70'
                }`}
              >
                {section.title}
              </span>
              <LuChevronDown
                className={`h-4 w-4 flex-none transition-all duration-200 ${
                  isOpen ? 'rotate-180 text-white' : 'text-white/40'
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 pb-4">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/60 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
