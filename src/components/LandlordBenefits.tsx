import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import {
  LuPhoneOff,
  LuMessageSquare,
  LuShield,
  LuLeaf,
  LuHeart,
  LuChevronRight,
} from 'react-icons/lu'

const benefits = [
  {
    Icon: LuPhoneOff,
    title: 'Reduce inbound calls',
    description:
      'Residents can report and track issues digitally, dramatically reducing calls to your team.',
  },
  {
    Icon: LuMessageSquare,
    title: 'Improve resident engagement',
    description:
      'Keep communication simple, consistent, and targeted across your entire housing portfolio.',
  },
  {
    Icon: LuShield,
    title: 'Stay compliant',
    description:
      'Track repairs, damp and mould with clear audit trails and automated compliance reminders.',
  },
  {
    Icon: LuLeaf,
    title: 'Support retrofit programmes',
    description:
      'Use data and engagement tools to support retrofit funding applications and programme delivery.',
  },
  {
    Icon: LuHeart,
    title: 'Support vulnerable residents',
    description:
      'Create better visibility and targeted support for residents who need it most.',
  },
]

function DashboardPreview() {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
            Portfolio Overview
          </p>
          <p className="mt-0.5 text-lg font-bold text-fg">Q4 2024</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
          <div className="h-3 w-3 rounded-full bg-brand-400" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          { label: 'Open Repairs', value: '12', trend: '23% fewer', positive: true },
          { label: 'Compliance', value: '98%', trend: '+2 pts', positive: true },
          { label: 'Engaged Residents', value: '847', trend: '+14%', positive: true },
          { label: 'Avg. Resolution', value: '3.2d', trend: '1.8d faster', positive: true },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-bg-muted p-3">
            <p className="text-xs text-fg-muted">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-fg">{stat.value}</p>
            <p className="text-xs font-semibold text-emerald-600">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold text-fg-muted">
          Repairs this month
        </p>
        <div className="flex h-14 items-end gap-1.5">
          {[45, 62, 38, 71, 55, 49, 33].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-brand-200 transition-all hover:bg-brand-400"
              style={{ height: `${(h / 71) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { label: 'Gas certificates', status: 'Up to date', dot: 'bg-emerald-400' },
          { label: 'Electrical checks', status: '3 due soon', dot: 'bg-accent-400' },
          { label: 'Fire risk assessments', status: 'Up to date', dot: 'bg-emerald-400' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-bg-muted px-3 py-2"
          >
            <span className="text-xs font-medium text-fg">{item.label}</span>
            <div className="flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${item.dot}`} />
              <span className="text-xs text-fg-muted">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function LandlordBenefits() {
  return (
    <Section className="bg-bg py-20 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              For housing providers
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              The operational platform your team needs
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Built to help housing providers deliver better service, meet
              compliance requirements, and keep residents informed and engaged.
            </p>

            <ul className="mt-8 space-y-5">
              {benefits.map(({ Icon, title, description }) => (
                <li key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
                    <Icon
                      className="h-5 w-5 text-brand-700"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-fg">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/book-demo">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 rounded-3xl bg-brand-50"
              aria-hidden="true"
            />
            <div className="relative">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
