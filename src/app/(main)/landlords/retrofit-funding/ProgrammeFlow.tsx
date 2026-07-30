'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import clsx from 'clsx'
import { LuCheck } from 'react-icons/lu'

export type ProgrammeFlowStep = {
  number: string
  icon: React.ReactNode
  title: string
  description: string
}

const AUTO_ADVANCE_MS = 4800

export function ProgrammeFlow({ steps }: { steps: ProgrammeFlowStep[] }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: '-35% 0px -35% 0px' })
  const isRunning = isInView && !paused

  const step = steps[active]

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Step nodes + connector */}
      <div className="relative flex items-center justify-between">
        <div
          className="absolute left-5 right-5 top-5 h-0.5 bg-border sm:left-6 sm:right-6 sm:top-6"
          aria-hidden="true"
        />
        <div className="absolute left-5 right-5 top-5 sm:left-6 sm:right-6 sm:top-6">
          <motion.div
            className="h-0.5 bg-brand-600"
            aria-hidden="true"
            initial={false}
            animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        {steps.map((s, i) => {
          const isActive = i === active
          const isDone = i < active
          return (
            <button
              key={s.number}
              type="button"
              onClick={() => setActive(i)}
              className="group relative z-10 flex flex-col items-center gap-2.5"
              aria-current={isActive}
            >
              <span
                className={clsx(
                  'flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 sm:h-12 sm:w-12',
                  isActive
                    ? 'scale-110 border-brand-600 bg-primary text-primary-fg shadow-lg shadow-brand-950/20'
                    : isDone
                      ? 'border-brand-600 bg-brand-50 text-brand-700'
                      : 'border-border bg-card text-fg-subtle group-hover:border-brand-300 group-hover:text-brand-600',
                )}
              >
                {isDone ? <LuCheck className="h-4 w-4" strokeWidth={2.5} /> : s.number}
              </span>
              <span
                className={clsx(
                  'hidden max-w-[7rem] text-center text-xs font-medium leading-snug transition-colors sm:block',
                  isActive ? 'text-fg' : 'text-fg-subtle group-hover:text-fg-muted',
                )}
              >
                {s.title}
              </span>
            </button>
          )
        })}
      </div>

      {/* Detail panel */}
      <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-border/50">
          <div
            key={active}
            className="h-full bg-brand-500"
            style={{
              animationName: 'progress-fill',
              animationDuration: `${AUTO_ADVANCE_MS}ms`,
              animationTimingFunction: 'linear',
              animationFillMode: 'forwards',
              animationPlayState: isRunning ? 'running' : 'paused',
            }}
            onAnimationEnd={() => setActive((i) => (i + 1) % steps.length)}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700 [&>svg]:h-6 [&>svg]:w-6">
                {step.icon}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-500">
                  Step {step.number}
                </p>
                <h3 className="text-lg font-bold text-fg">{step.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">{step.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
