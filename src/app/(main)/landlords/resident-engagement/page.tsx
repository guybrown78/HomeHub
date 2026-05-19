import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'Resident Engagement | HomeHub for Landlords',
  description:
    'Move beyond repairs with ongoing resident relationships, targeted communication, and measurable engagement across your housing portfolio.',
}

const plannedSections = [
  {
    title: 'Communication tools',
    description:
      'Targeted messaging by property, neighbourhood, or resident group — enabling housing providers to send the right message to the right residents at the right time.',
  },
  {
    title: 'Engagement metrics',
    description:
      'Measurable engagement data showing message open rates, response rates, and active resident counts — helping teams demonstrate social value and improve their approach.',
  },
  {
    title: 'Trust & transparency',
    description:
      'How visible, consistent communication builds resident trust over time — reducing formal complaints and improving satisfaction scores.',
  },
  {
    title: 'Digital inclusion',
    description:
      'Accessible, simple interfaces designed to reach residents with varying levels of digital confidence, including older and more vulnerable households.',
  },
  {
    title: 'Community updates',
    description:
      'Neighbourhood and estate-level updates that keep residents informed about planned works, local events, support services, and housing policy changes.',
  },
  {
    title: 'Accessibility features',
    description:
      'How HomeHub supports inclusive communication — plain language, multi-channel delivery — ensuring no resident is left behind.',
  },
]

export default function ResidentEngagementPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Landlords
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Resident Engagement
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Move beyond repairs. HomeHub helps housing providers build ongoing resident
              relationships through targeted communication, measurable engagement, and tools that
              make every resident feel heard.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/platform/community"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                See Community Platform
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. Full content, engagement
            dashboard visuals, and messaging UI designs will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Resident Engagement page will differentiate HomeHub from standard repairs platforms — showing social housing providers how engagement can be measured, managed, and improved."
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {plannedSections.map((section) => (
                <Card key={section.title}>
                  <h3 className="text-base font-semibold text-fg">{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {section.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
