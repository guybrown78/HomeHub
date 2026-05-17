import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Partners & Sponsors | HomeHub',
  description: 'HomeHub works with leading organisations in housing, energy, and technology. Explore our partner ecosystem and find out how to work with us.',
}

const partnerTypes = [
  {
    type: 'Technology Partners',
    description: 'We integrate with the leading housing management, CRM, and data platforms to deliver a seamless experience for housing providers.',
    partners: ['Aareon', 'Civica', 'MRI Software', 'Capita', 'Salesforce'],
  },
  {
    type: 'Retrofit & Energy Partners',
    description: 'Our energy and retrofit partners help residents and housing providers access funding, expertise, and installation services.',
    partners: ['PAS 2035 Accredited Assessors', 'ECO4 Installers', 'SHDF Delivery Partners'],
  },
  {
    type: 'Sector Partners',
    description: 'We work closely with the organisations shaping the future of housing in the UK.',
    partners: ['National Housing Federation', 'Chartered Institute of Housing', 'Housing Technology'],
  },
]

const partnerBenefits = [
  {
    title: 'Technical Integration',
    description: 'Our open API and established integration framework makes connecting your platform to HomeHub straightforward and secure.',
  },
  {
    title: 'Co-Marketing Opportunities',
    description: 'Reach housing providers and residents through joint content, events, and digital campaigns with HomeHub\'s growing audience.',
  },
  {
    title: 'Referral Programme',
    description: 'Earn commission for introducing housing providers to HomeHub, with a structured partner tier programme offering increasing benefits.',
  },
  {
    title: 'Shared Expertise',
    description: 'Collaborate with our team on research, thought leadership, and sector events to position your organisation as a housing sector leader.',
  },
]

export default function PartnersPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Company</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Partners &amp; Sponsors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Great housing outcomes are built through collaboration. HomeHub works with technology providers, retrofit specialists, and sector organisations who share our commitment to better housing.
            </p>
            <div className="mt-10">
              <Button href="/contact">Become a Partner</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="space-y-12">
            {partnerTypes.map((pt) => (
              <div key={pt.type} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">{pt.type}</h2>
                <p className="mt-2 text-gray-600">{pt.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {pt.partners.map((p) => (
                    <span key={p} className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-950">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why partner with HomeHub?</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {partnerBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 h-1 w-12 rounded-full bg-amber-400" />
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-violet-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-violet-950">Ready to explore a partnership?</h2>
            <p className="mt-3 text-gray-600">
              Get in touch with our partnerships team to discuss how we can work together.
            </p>
            <div className="mt-6">
              <Button href="/contact">Contact Our Team</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
