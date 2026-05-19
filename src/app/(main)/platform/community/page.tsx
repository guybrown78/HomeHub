import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'Community – Resident Engagement | HomeHub',
  description:
    'Build stronger relationships between housing providers and residents through targeted communication, community updates, and digital engagement tools.',
}

const plannedSections = [
  {
    title: 'Announcements & updates',
    description:
      'Send targeted announcements to residents by property, neighbourhood, or tenancy type. Keep residents informed about works, changes, and important notices.',
  },
  {
    title: 'Community messaging',
    description:
      'Two-way messaging between residents and housing teams — enabling faster responses, clearer communication, and a better resident experience.',
  },
  {
    title: 'Resident engagement tools',
    description:
      'Surveys, polls, and check-ins that help housing providers understand resident needs, gather feedback, and demonstrate responsiveness.',
  },
  {
    title: 'Digital inclusion support',
    description:
      'Simple, accessible interfaces designed to support residents with varying levels of digital confidence, including older and vulnerable residents.',
  },
  {
    title: 'Trust & transparency features',
    description:
      'Visible communication records and response tracking that help build trust between residents and their housing provider over time.',
  },
  {
    title: 'Social value reporting',
    description:
      'Engagement data and resident interaction metrics that support social value reporting, TPAS assessments, and Housing Ombudsman evidence requirements.',
  },
]

export default function CommunityPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Platform
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Community
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Build stronger relationships between housing providers and residents through targeted
              communication, community updates, and digital engagement tools that go beyond
              reporting repairs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/landlords/resident-engagement"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                Resident Engagement
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. Full content, UI visuals, and
            design will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Community page will position HomeHub as more than a repairs platform — it will demonstrate how the platform supports ongoing resident relationships, trust, and social value."
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
