import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'Retrofit & Funding | HomeHub for Landlords',
  description:
    'Support retrofit programme delivery through resident engagement, communication during works, and evidence gathering for funding applications.',
}

const plannedSections = [
  {
    title: 'Retrofit journey communication',
    description:
      'Keep residents informed before, during, and after retrofit works — explaining what is happening, why, and what to expect — reducing anxiety and improving cooperation.',
  },
  {
    title: 'Resident engagement during works',
    description:
      'Tools to gather resident feedback, manage appointment scheduling, and maintain two-way communication throughout the retrofit programme.',
  },
  {
    title: 'Funding support & awareness',
    description:
      'Help residents and housing providers understand available retrofit funding schemes — from ECO4 to the Warm Homes Plan — with tailored guidance based on property data.',
  },
  {
    title: 'Evidence gathering',
    description:
      'Collect and store resident responses, engagement records, and programme data in formats suitable for funding applications and post-programme reporting.',
  },
  {
    title: 'Programme coordination',
    description:
      'How HomeHub supports contractors and housing providers in coordinating multi-property retrofit programmes — with visibility across works status and resident readiness.',
  },
  {
    title: 'Net zero progress tracking',
    description:
      'Track EPC improvements, energy savings, and net zero progress across a housing portfolio before and after retrofit intervention.',
  },
]

export default function RetrofitFundingPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Landlords
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Retrofit &amp; Funding
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Successful retrofit programmes depend on communication and engagement, not just
              installation. HomeHub supports resident buy-in, programme coordination, and the
              evidence gathering that funding applications require.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/platform/energy"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                See Energy Platform
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. Full content, retrofit journey
            visuals, and programme coordination diagrams will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Retrofit & Funding page will position HomeHub within the sustainability and retrofit space — showing how engagement and communication are as important as the physical works."
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
