import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import {
  LuWrench,
  LuShield,
  LuMessageSquare,
  LuClipboard,
  LuZap,
  LuBell,
  LuHouse,
  LuMapPin,
  LuChevronRight,
} from 'react-icons/lu'

const providerFeatures = [
  {
    Icon: LuWrench,
    title: 'Repairs & Resolution',
    desc: 'Track every maintenance request from report to resolution with a full audit trail.',
  },
  {
    Icon: LuShield,
    title: 'Compliance Management',
    desc: 'Automated reminders for gas, fire, and electrical certificates before deadlines hit.',
  },
  {
    Icon: LuMessageSquare,
    title: 'Resident Communication',
    desc: 'Send targeted updates and surveys — keep residents informed and engaged at scale.',
  },
  {
    Icon: LuClipboard,
    title: 'Portfolio Reporting',
    desc: 'Property-level insights and one-click compliance exports across your whole portfolio.',
  },
]

const residentFeatures = [
  {
    Icon: LuZap,
    title: 'Energy & EPC Insights',
    desc: "Understand your home's energy rating and get personalised tips to cut bills.",
  },
  {
    Icon: LuBell,
    title: 'Raise a Repair',
    desc: 'Report maintenance issues and track progress in real time — no phone queues.',
  },
  {
    Icon: LuHouse,
    title: 'Your Property Guidebook',
    desc: 'Everything you need to know about your home, from contacts to appliance guides.',
  },
  {
    Icon: LuMapPin,
    title: 'Local Support Network',
    desc: 'Connect with local services and community resources close to where you live.',
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for housing providers and residents"
      className="py-20 sm:py-32"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-fg">
            Everything under one roof.
          </h2>
          <p className="mt-4 text-lg text-fg-muted">
            Whether you manage hundreds of properties or just your own home —
            HomeHub is built to make every experience better.
          </p>
        </div>

        {/* Dual audience panels */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* ── Housing Providers ─────────────────────────────── */}
          <div
            data-theme="brand"
            className="relative overflow-hidden rounded-4xl bg-bg p-8 lg:p-10"
          >
            {/* Decorative blob */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 opacity-[0.07]"
              aria-hidden
            >
              <svg viewBox="0 0 240 240" fill="none">
                <path
                  d="M190 35 C228 35,244 75,228 132 C212 189,168 226,112 220 C56 214,18 174,14 118 C10 62,48 16,105 12 C162 8,152 35,190 35Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="relative">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-fg-muted">
                For Housing Providers
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-fg lg:text-3xl">
                Manage smarter,
                <br />
                deliver better.
              </h3>
              <p className="mt-2 text-sm text-fg-muted">
                Give your team the tools to deliver excellent service across
                your entire portfolio — from day one.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {providerFeatures.map(({ Icon, title, desc }) => (
                  <li key={title} className="flex gap-3.5">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10">
                      <Icon
                        className="h-5 w-5 text-accent-300"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-fg">{title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-fg-muted">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/demo" variant="solid" color="white">
                  Book a demo
                  <LuChevronRight className="-mr-0.5 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* ── Residents ─────────────────────────────────────── */}
          <div
            data-theme="accent"
            className="relative overflow-hidden rounded-4xl bg-bg p-8 lg:p-10"
          >
            {/* Decorative blob */}
            <div
              className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 opacity-[0.12]"
              aria-hidden
            >
              <svg viewBox="0 0 224 224" fill="none">
                <path
                  d="M175 30 C210 30,224 68,210 120 C196 172,158 208,105 202 C52 196,17 160,13 108 C9 56,44 12,97 8 C150 4,140 30,175 30Z"
                  fill="currentColor"
                  className="text-brand-950"
                />
              </svg>
            </div>

            <div className="relative">
              <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                For Residents
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-fg lg:text-3xl">
                Your home,
                <br />
                your way.
              </h3>
              <p className="mt-2 text-sm text-fg-muted">
                Get the support, information, and tools you need to truly feel
                at home — wherever that is.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {residentFeatures.map(({ Icon, title, desc }) => (
                  <li key={title} className="flex gap-3.5">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-100">
                      <Icon
                        className="h-5 w-5 text-brand-700"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-fg">{title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-fg-muted">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <a
                  href="#register"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-opacity hover:opacity-60"
                >
                  Register your interest
                  <LuChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
