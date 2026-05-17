import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Guides & Documentation | HomeHub Resources',
  description: 'Practical guides for housing providers and residents. From compliance checklists to retrofit planning — everything you need to get the most from HomeHub.',
}

const guideCategories = [
  {
    category: 'Getting Started',
    guides: [
      { title: 'Setting Up Your Housing Provider Account', description: 'Step-by-step guide to onboarding your organisation onto HomeHub.' },
      { title: 'Inviting Residents to the Platform', description: 'How to roll out HomeHub to your residents effectively and drive adoption.' },
      { title: 'Configuring Your Property Portfolio', description: 'Import and manage your properties, units, and tenancy data.' },
    ],
  },
  {
    category: 'Compliance',
    guides: [
      { title: 'Tenant Satisfaction Measures (TSM) Guide', description: 'How to use HomeHub to meet your TSM reporting obligations.' },
      { title: 'Safety Certificate Management', description: 'Set up automated tracking and reminders for gas, electrical, and fire safety compliance.' },
      { title: 'EPC Compliance and MEES Planning', description: 'Understanding Minimum Energy Efficiency Standards and planning your upgrade pathway.' },
    ],
  },
  {
    category: 'Resident Engagement',
    guides: [
      { title: 'Best Practices for Digital Communication', description: 'How to use HomeHub messaging to reach residents effectively without overwhelming them.' },
      { title: 'Running Resident Surveys', description: 'Design, deploy, and analyse resident satisfaction surveys using the HomeHub platform.' },
      { title: 'Building Community on HomeHub', description: 'Tips for activating the community features and driving meaningful resident connections.' },
    ],
  },
]

export default function GuidesPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Resources</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Guides
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Practical, actionable guides to help housing providers and residents get the most from HomeHub and navigate the housing landscape with confidence.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="space-y-16">
            {guideCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-2xl font-bold text-gray-900">{cat.category}</h2>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {cat.guides.map((guide) => (
                    <div key={guide.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="mb-3 h-1 w-10 rounded-full bg-amber-400" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-violet-950">{guide.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{guide.description}</p>
                      <p className="mt-4 text-xs font-semibold text-violet-950">Read guide →</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-violet-50 p-8">
            <h2 className="text-xl font-bold text-violet-950">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="mt-2 text-gray-600">Our support team is here to help. Get in touch and we&apos;ll point you in the right direction.</p>
            <div className="mt-4">
              <Button href="/contact">Contact Support</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
