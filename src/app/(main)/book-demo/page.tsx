import { type Metadata } from 'next'
import { DemoBookingForm } from '@/components/DemoBookingForm'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import {
  LuCalendar,
  LuMonitor,
  LuMessageCircle,
  LuCircleCheck,
  LuShieldCheck,
  LuLock,
  LuPhone,
} from 'react-icons/lu'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'See how HomeHub can help your organisation manage homes, engage residents, and stay compliant. Book a personalised demo with our team.',
}

const whatToExpect = [
  {
    Icon: LuCalendar,
    title: '30-minute personalised walkthrough',
    description: 'We tailor every demo to your organisation, portfolio size, and priorities.',
  },
  {
    Icon: LuMonitor,
    title: 'See the platform in action',
    description: 'A live walkthrough of Resolve, Energy, Community, and Documents.',
  },
  {
    Icon: LuMessageCircle,
    title: 'Q&A with our team',
    description: "Ask anything. We're here to answer honestly, not just to sell.",
  },
  {
    Icon: LuCircleCheck,
    title: 'No commitment required',
    description: "There's no pressure. If we're not the right fit, we'll say so.",
  },
]

const trustSignals = [
  { Icon: LuShieldCheck, label: 'GDPR compliant' },
  { Icon: LuLock, label: 'Secure by design' },
  { Icon: LuCalendar, label: 'Response within 1 working day' },
]

export default function BookDemoPage() {
  return (
    <>
    <Section first className="overflow-hidden bg-bg">
      <div className="grid grid-cols-1 lg:grid-cols-5">

        {/* ── Left: Form ─────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:col-span-3 lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-xl">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Book a Demo
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              See HomeHub in action
            </h1>
            <p className="mt-4 text-lg text-fg-muted">
              Fill in your details and we&apos;ll be in touch within one working
              day to arrange a time that suits you.
            </p>

            <div className="mt-8">
              <DemoBookingForm />
            </div>
          </div>
        </div>

        {/* ── Right: Reassurance ─────────────────────────────── */}
        <div
          data-theme="brand"
          className="flex flex-col justify-center rounded-t-5xl bg-bg px-6 py-16 sm:px-10 lg:rounded-none lg:col-span-2 lg:px-12"
        >
          <div className="mx-auto w-full max-w-sm">

            <h2 className="text-xl font-bold text-fg">What to expect</h2>
            <ul className="mt-6 space-y-5">
              {whatToExpect.map(({ Icon, title, description }) => (
                <li key={title} className="flex gap-3.5">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-4 w-4 text-accent-300" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-fg-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="my-8 border-t border-border" />

            <blockquote>
              <p className="text-sm leading-relaxed text-fg-muted">
                &ldquo;HomeHub gave us a clear picture of what was happening
                across our portfolio. The resident engagement improvement was
                immediate — we saw fewer inbound calls within the first
                month.&rdquo;
              </p>
              <footer className="mt-3">
                <p className="text-sm font-semibold text-fg">Sarah T.</p>
                <p className="text-xs text-fg-muted">Housing Manager, West Midlands</p>
              </footer>
            </blockquote>

            <div className="my-8 border-t border-border" />

            <ul className="space-y-2">
              {trustSignals.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 flex-none text-accent-300" strokeWidth={2} />
                  <span className="text-xs font-medium text-fg-muted">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-2.5 rounded-xl bg-white/5 p-4">
              <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/10">
                <LuPhone className="h-4 w-4 text-fg-muted" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-semibold text-fg">Prefer to talk?</p>
                <a
                  href="mailto:home@homehubinfo.co.uk"
                  className="text-xs text-fg-muted underline-offset-2 hover:underline"
                >
                  home@homehubinfo.co.uk
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>

    {/* ── FAQ break before footer ─────────────────────────── */}
    <Section className="relative z-10 bg-bg-muted">
        <Container>
          <div className="mx-auto max-w-3xl py-16 sm:py-20">
            <h2 className="text-xl font-bold text-fg">Common questions about the demo</h2>
            <dl className="mt-8 divide-y divide-border">
              {[
                {
                  q: "How long does the demo take?",
                  a: "Around 30 minutes. We keep it focused and won't waste your time — if it's not a fit we'll say so early.",
                },
                {
                  q: "Who should attend from our side?",
                  a: "Whoever is involved in the decision — housing managers, IT leads, or directors. The more context we have, the more useful the session.",
                },
                {
                  q: "Do we need to prepare anything?",
                  a: "Nothing at all. It helps to have a rough sense of your portfolio size and current pain points, but we'll guide the conversation.",
                },
                {
                  q: "What happens after the demo?",
                  a: "We'll follow up with a summary and any materials relevant to your organisation. There's no pressure and no automatic sales process.",
                },
                {
                  q: "Can we see specific features?",
                  a: "Yes — let us know in the message field what you'd like to focus on and we'll tailor the walkthrough accordingly.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="py-5">
                  <dt className="font-semibold text-fg">{q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-fg-muted">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>
    </>
  )
}
