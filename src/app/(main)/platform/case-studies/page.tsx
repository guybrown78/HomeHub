import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'Case Studies | HomeHub',
  description:
    'Real-world outcomes from housing providers using HomeHub to improve resident engagement, streamline repairs, and meet compliance obligations.',
}

const plannedSections = [
  {
    title: 'Housing provider stories',
    description:
      'Detailed accounts from housing associations and local authorities who have piloted or deployed HomeHub — covering context, challenges, and outcomes.',
  },
  {
    title: 'Resident impact examples',
    description:
      'Stories from a resident perspective: how HomeHub changed the experience of reporting issues, receiving updates, and engaging with their housing provider.',
  },
  {
    title: 'Operational improvements',
    description:
      'Measurable outcomes including reductions in call volume, faster repair resolution times, and lower admin overhead for housing teams.',
  },
  {
    title: 'Compliance outcomes',
    description:
      'Examples of how HomeHub has supported housing providers in meeting Awaab\'s Law, damp and mould obligations, and audit trail requirements.',
  },
  {
    title: 'Retrofit support examples',
    description:
      'Case examples showing how HomeHub has supported resident communication and engagement during retrofit and energy improvement programmes.',
  },
  {
    title: 'Statistics & measurable results',
    description:
      'Headline data points and outcome summaries — response times, engagement rates, call reductions, and compliance metrics — to support commercial conversations.',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Platform
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Real-world outcomes from housing providers using HomeHub to improve resident
              engagement, streamline repairs, and stay compliant. Evidence-based stories that
              demonstrate practical, measurable value.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/partners"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                Our Partners
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. Case study content, outcome
            statistics, and testimonials will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Case Studies page will build commercial trust through credible, outcome-focused storytelling — less marketing, more evidence."
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
