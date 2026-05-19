import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'Energy – Smart Energy Management | HomeHub',
  description:
    'Help residents understand and reduce their energy use. HomeHub Energy brings smart insights, EPC data, and retrofit guidance to the palm of their hand.',
}

const plannedSections = [
  {
    title: 'Energy insights & bill breakdown',
    description:
      'Resident-facing views of energy usage, estimated costs, and contextual guidance to help households understand their bills and reduce consumption.',
  },
  {
    title: 'EPC data & efficiency ratings',
    description:
      'Surface Energy Performance Certificate data directly within the app, giving residents and landlords a clear picture of property efficiency and improvement potential.',
  },
  {
    title: 'Retrofit engagement & funding',
    description:
      'Guide residents through available retrofit schemes and funding pathways. Communicate planned works, explain benefits, and gather resident responses.',
  },
  {
    title: 'Fuel poverty identification',
    description:
      'Automatically flag households at risk of fuel poverty so housing providers can intervene proactively with targeted support, advice, and referrals.',
  },
  {
    title: 'Net zero progress tracking',
    description:
      'Track energy performance across a housing portfolio over time, supporting net zero commitments with auditable data and trend reporting.',
  },
  {
    title: 'Resident education & tips',
    description:
      'Deliver seasonal energy advice, practical tips, and guides that help residents reduce costs and engage with their home\'s energy performance.',
  },
]

export default function EnergyPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Platform
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Energy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Help residents understand their energy use, engage with retrofit programmes, and take
              meaningful steps toward a more efficient home — all within the HomeHub app.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/landlords/retrofit-funding"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                Retrofit &amp; Funding
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
              description="The Energy page will be product-led and lifestyle-focused, helping both landlords and residents understand the practical value of HomeHub's energy features."
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
