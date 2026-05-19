import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'Partners & Sponsors | HomeHub',
  description:
    'HomeHub works alongside housing innovators, retrofit specialists, and organisations committed to better outcomes for residents and communities.',
}

const plannedSections = [
  {
    title: 'Partners & sponsors',
    description:
      'A logo grid and short descriptions of the organisations HomeHub works alongside — housing associations, retrofit bodies, technology partners, and funding sponsors.',
  },
  {
    title: 'Retrofit partnerships',
    description:
      'How HomeHub collaborates with retrofit contractors, energy assessors, and programme delivery organisations to support net zero housing programmes.',
  },
  {
    title: 'Housing innovation',
    description:
      'Organisations and initiatives in the housing sector that share HomeHub\'s commitment to better resident outcomes, digital engagement, and operational efficiency.',
  },
  {
    title: 'Shared goals',
    description:
      'The values and objectives HomeHub looks for in partners — a commitment to residents, openness to collaboration, and a shared belief in the value of digital housing tools.',
  },
  {
    title: 'Sponsor highlights',
    description:
      'Featured sponsorship slots recognising organisations that have supported HomeHub\'s development, pilot programmes, and community engagement activities.',
  },
  {
    title: 'Partnership opportunities',
    description:
      'An open invitation for housing providers, contractors, and technology organisations to explore partnership arrangements — with a simple CTA to start a conversation.',
  },
]

export default function PartnersPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Partners
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Partners &amp; Sponsors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              HomeHub works alongside housing innovators, retrofit specialists, and
              organisations committed to better outcomes for residents and communities.
              We are stronger together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" color="accent">
                Become a Partner
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/about"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                About HomeHub
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. Partner logos, sponsor
            details, and partnership content will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Partners page will be clean and professional — reinforcing legitimacy and commercial confidence through the organisations HomeHub works alongside."
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
