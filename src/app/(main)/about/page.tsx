import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'About HomeHub',
  description:
    'We\'re building a platform that makes it easier for housing providers and residents to connect, communicate, and solve problems together.',
}

const plannedSections = [
  {
    title: 'Mission & story',
    description:
      'The origin of HomeHub — the housing challenges that inspired it, the team behind it, and the mission to make housing management simpler and more human for everyone involved.',
  },
  {
    title: 'The problem we are solving',
    description:
      'An honest look at the current state of resident-landlord communication — the call volumes, the missed appointments, the compliance pressures — and why a better approach is needed.',
  },
  {
    title: 'Platform vision',
    description:
      'Where HomeHub is heading — the long-term vision for a platform that supports every aspect of home management, from repairs to energy to community engagement.',
  },
  {
    title: 'The team',
    description:
      'The people building HomeHub — their backgrounds in housing, technology, and resident engagement, and what drives them to keep improving the platform.',
  },
  {
    title: 'Values',
    description:
      'The principles that guide how HomeHub is built and run — transparency, accessibility, community focus, and a genuine commitment to resident outcomes.',
  },
  {
    title: 'Get involved',
    description:
      'An invitation to housing providers, residents, contractors, and partners who share HomeHub\'s goals — to collaborate, pilot, or simply get in touch.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              About
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About HomeHub
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              We are building a platform that makes it easier for housing providers and
              residents to connect, communicate, and solve problems together. Better housing
              starts with better communication.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. Full content, team imagery,
            and mission-focused storytelling will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The About page will feel authentic and mission-led — humanising HomeHub, explaining the problem it solves, and building trust with both housing providers and residents."
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
