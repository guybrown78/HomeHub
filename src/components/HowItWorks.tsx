import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { LuSettings, LuUsers, LuLayoutDashboard } from 'react-icons/lu'

const steps = [
  {
    number: '01',
    Icon: LuSettings,
    title: 'Set up your organisation',
    description:
      'Get started in minutes. Add your properties, configure your settings, and customise HomeHub for your team.',
  },
  {
    number: '02',
    Icon: LuUsers,
    title: 'Invite residents',
    description:
      'Send residents a simple invitation. They download the app and are connected to your housing team instantly.',
  },
  {
    number: '03',
    Icon: LuLayoutDashboard,
    title: 'Manage homes, repairs and engagement',
    description:
      'Track repairs, send updates, stay compliant, and keep residents engaged — all from one dashboard.',
  },
]

export function HowItWorks() {
  return (
    <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
            Getting started
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Simple to roll out, easy for residents to use
          </h2>
          <p className="mt-4 text-lg text-fg-muted">
            HomeHub is designed to be up and running quickly — no technical
            knowledge required.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Horizontal connector line (desktop only) */}
          <div
            className="absolute left-1/6 right-1/6 top-8 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Step icon circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-bg">
                  <step.Icon
                    className="h-7 w-7 text-primary-fg"
                    strokeWidth={1.75}
                  />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-fg">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-fg">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
