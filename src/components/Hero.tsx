'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  LuCircleCheck,
  LuZap,
  LuMessageCircle,
  LuFileText,
  LuCalendar,
  LuWrench,
  LuLeaf,
  LuInbox,
} from 'react-icons/lu'

import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { Section } from '@/components/Section'
import { LuChevronRight } from 'react-icons/lu'

type Notification = {
  icon: React.ComponentType<React.SVGAttributes<SVGElement> & { strokeWidth?: number | string }>
  iconBg: string
  iconColor: string
  title: string
  subtitle: string
}

const notifications: Notification[] = [
  {
    icon: LuCircleCheck,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Repair Resolved',
    subtitle: 'Damp issue — 24 Maple St',
  },
  {
    icon: LuZap,
    iconBg: 'bg-accent-100',
    iconColor: 'text-accent-700',
    title: 'EPC Rating: C',
    subtitle: 'Improved from D',
  },
  {
    icon: LuMessageCircle,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'New Message',
    subtitle: 'From your housing officer',
  },
  {
    icon: LuFileText,
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-700',
    title: 'Document Ready',
    subtitle: 'Gas Safety Certificate',
  },
  {
    icon: LuCalendar,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Inspection Booked',
    subtitle: 'Mon 12 Jun, 10:00am',
  },
  {
    icon: LuWrench,
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    title: 'Issue Logged',
    subtitle: 'Boiler fault — 8 Oak Ave',
  },
  {
    icon: LuLeaf,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Retrofit Complete',
    subtitle: 'Solar panels installed',
  },
  {
    icon: LuInbox,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'You Have a New Request',
    subtitle: 'Leaking tap — 14 Elm Court',
  },
]

function FloatingAlert({
  pool,
  startIndex,
  className,
  initialDelay,
  floatDuration = 5,
}: {
  pool: Notification[]
  startIndex: number
  className: string
  initialDelay: number
  floatDuration?: number
}) {
  const [index, setIndex] = useState(startIndex % pool.length)
  const [visible, setVisible] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const add = (ms: number, fn: () => void) => {
      const t = setTimeout(fn, ms)
      timers.current.push(t)
    }

    function cycle(delay: number) {
      add(delay, () => {
        setVisible(true)
        // Show for 7–11 seconds
        add(7000 + Math.random() * 4000, () => {
          setVisible(false)
          // Wait for fade-out, then advance and schedule next appearance
          add(1800, () => {
            setIndex((i) => (i + 1) % pool.length)
            // Gap before next appearance: 2–4 seconds
            cycle(2000 + Math.random() * 2000)
          })
        })
      })
    }

    cycle(initialDelay)

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const n = pool[index]

  return (
    <div className={`absolute z-20 ${className}`}>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          >
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: floatDuration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-max rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-full ${n.iconBg}`}
                >
                  <n.icon className={`h-4 w-4 ${n.iconColor}`} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">{n.title}</p>
                  <p className="text-xs text-gray-500">{n.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Hero() {
  return (
    <Section first className="overflow-hidden bg-bg py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Built for housing
            </span>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-brand-950 sm:text-6xl">
              Managing homes, residents and repairs{' '}
              <span className="text-brand-600">in one place</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-fg-muted">
              HomeHub helps landlords improve resident engagement, manage repairs,
              support retrofit programmes, and stay compliant — while giving
              residents a simple way to report issues and manage their home.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreLink color="black" />
              <GooglePlayLink color="black" />
              <Button href="/book-demo" variant="solid" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold text-brand-950">500+</p>
                <p className="text-sm text-fg-muted">Properties managed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-950">94%</p>
                <p className="text-sm text-fg-muted">Resident satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-950">3×</p>
                <p className="text-sm text-fg-muted">Faster issue resolution</p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-6 lg:row-span-2 lg:mt-0">
            <div className="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>

              {/* Slot 1 — top left, starts immediately */}
              <FloatingAlert
                pool={notifications}
                startIndex={0}
                initialDelay={500}
                className="left-0 top-16"
                floatDuration={5}
              />

              {/* Slot 2 — upper right, starts after ~3.5s */}
              <FloatingAlert
                pool={notifications}
                startIndex={3}
                initialDelay={3500}
                className="right-0 top-32"
                floatDuration={6.5}
              />

              {/* Slot 3 — lower right, starts after ~7s */}
              <FloatingAlert
                pool={notifications}
                startIndex={5}
                initialDelay={7000}
                className="right-0 bottom-44"
                floatDuration={5.8}
              />
            </div>
          </div>

          <div className="relative -mt-4 lg:col-span-6 lg:mt-0">
            <div className="h-28" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
