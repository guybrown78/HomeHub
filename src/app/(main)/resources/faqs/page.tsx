import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: "FAQ's | HomeHub",
  description: 'Answers to frequently asked questions about HomeHub — for housing providers, residents, and contractors.',
}

const faqGroups = [
  {
    group: 'For Housing Providers',
    faqs: [
      {
        q: 'How long does it take to implement HomeHub?',
        a: 'Most housing providers are fully onboarded within 4–8 weeks. We handle the technical setup, data migration, and staff training as part of the implementation process.',
      },
      {
        q: 'Does HomeHub integrate with our existing housing management system?',
        a: 'Yes. HomeHub integrates with all major housing management systems including Aareon, Civica, MRI, and Capita. Our team will assess your current setup during the onboarding process.',
      },
      {
        q: 'How is resident data handled and protected?',
        a: 'HomeHub is fully GDPR compliant and ISO 27001 certified. All data is stored on UK servers and we never share resident data with third parties without explicit consent.',
      },
      {
        q: 'Can we customise HomeHub with our branding?',
        a: 'Yes. The resident-facing app can be white-labelled with your organisation\'s name, logo, and colour scheme at no additional cost.',
      },
      {
        q: 'What support is available after go-live?',
        a: 'All plans include access to our customer success team, online documentation, and a dedicated account manager for enterprise customers.',
      },
    ],
  },
  {
    group: 'For Residents',
    faqs: [
      {
        q: 'Is HomeHub free for residents?',
        a: 'Yes. HomeHub is completely free for residents whose housing provider is on the platform. There are no subscription fees or in-app purchases.',
      },
      {
        q: 'What devices does HomeHub work on?',
        a: 'HomeHub is available as a native app on iOS (iPhone) and Android smartphones. A web version is also available for residents who prefer to use a desktop or tablet.',
      },
      {
        q: 'My landlord isn\'t on HomeHub. Can I still use it?',
        a: 'The core features of HomeHub require your housing provider to be a customer. However, you can still access energy advice and homeowner tools through the standalone app.',
      },
      {
        q: 'How do I report a repair through HomeHub?',
        a: 'Simply open the app, tap \'Report a Repair\', describe the issue, add photos if helpful, and submit. You\'ll receive real-time updates as your repair progresses.',
      },
    ],
  },
  {
    group: 'Pricing & Commercial',
    faqs: [
      {
        q: 'How is HomeHub priced?',
        a: 'HomeHub is priced per-unit on an annual subscription basis. Pricing varies based on portfolio size and the features included. Contact us for a tailored quote.',
      },
      {
        q: 'Is there a minimum contract length?',
        a: 'Our standard contracts are 12 months, with multi-year options available that offer additional savings. We offer a 90-day pilot programme for organisations who want to prove value before committing.',
      },
      {
        q: 'Do you offer a free trial?',
        a: 'We offer a structured 90-day pilot rather than a free trial, which includes full implementation support and success metrics agreed upfront. Book a demo to find out more.',
      },
    ],
  },
]

export default function FaqsPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Resources</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              FAQ&apos;s
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Got a question about HomeHub? We&apos;ve answered the most common ones below. If you don&apos;t find what you&apos;re looking for, our team is here to help.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl space-y-16">
            {faqGroups.map((group) => (
              <div key={group.group}>
                <h2 className="text-2xl font-bold text-gray-900">{group.group}</h2>
                <div className="mt-6 space-y-6">
                  {group.faqs.map((faq) => (
                    <div key={faq.q} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                      <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl rounded-2xl bg-brand-50 p-8">
            <h2 className="text-xl font-bold text-brand-950">Still have questions?</h2>
            <p className="mt-2 text-gray-600">
              Our team is happy to answer any questions you have about HomeHub.
            </p>
            <div className="mt-4 flex gap-4">
              <Button href="/contact">Contact Us</Button>
              <Button href="/demo" variant="outline" color="violet">Book a Demo</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
