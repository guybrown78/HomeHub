import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { DashboardPreview } from '@/components/ui/DashboardPreview'
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


export function LandlordBenefits() {
  return (
    <Section className="bg-bg py-20 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeIn>
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
            </FadeIn>

            <FadeInStagger className="mt-8 space-y-5" stagger={0.1}>
              {benefits.map(({ Icon, title, description }) => (
                <FadeInItem key={title} className="flex gap-4">
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
                </FadeInItem>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.2} className="mt-10">
              <Button href="/book-demo">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="relative">
            <div
              className="absolute -inset-6 rounded-3xl bg-brand-50"
              aria-hidden="true"
            />
            <div className="relative">
              <DashboardPreview />
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
