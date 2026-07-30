import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
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
        <FadeIn className="mx-auto max-w-2xl text-center">
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
        </FadeIn>

        <div className="relative mt-16">
          {/* Horizontal connector line (desktop only) */}
          <div
            className="absolute left-1/6 right-1/6 top-8 hidden h-0.5 rounded-full bg-brand-200 lg:block"
            aria-hidden="true"
          />

          <FadeInStagger className="grid grid-cols-1 gap-10 lg:grid-cols-3" stagger={0.12}>
            {steps.map((step, index) => (
              <FadeInItem key={step.number}>
              <div className="group flex flex-col items-center text-center">
                {/* Icon circle — no padding above so center sits exactly on the line (top-8 = h-8 = half of h-16) */}
                <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-bg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:ring-brand-200">
                  <step.Icon
                    className="h-7 w-7 text-primary-fg"
                    strokeWidth={1.75}
                  />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-fg transition-transform duration-300 group-hover:scale-110">
                    {index + 1}
                  </span>
                </div>

                {/* Text block lifts independently on hover */}
                <div className="mt-6 rounded-2xl px-5 pb-4 pt-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-50/70">
                  <h3 className="text-lg font-bold text-fg transition-colors duration-200 group-hover:text-brand-700">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">
                    {step.description}
                  </p>
                </div>
              </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </Section>
  )
}
