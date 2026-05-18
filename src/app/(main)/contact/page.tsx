import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Contact Us | HomeHub',
  description: 'Get in touch with the HomeHub team. Whether you\'re a housing provider, resident, or prospective partner, we\'d love to hear from you.',
}

const contactOptions = [
  {
    title: 'Book a Demo',
    description: 'See HomeHub in action with a personalised walkthrough for your organisation.',
    cta: 'Book a Demo',
    href: '/demo',
  },
  {
    title: 'Sales Enquiries',
    description: 'Talk to our team about pricing, implementation, and how HomeHub fits your needs.',
    cta: 'Email Sales',
    href: 'mailto:sales@homehub.co.uk',
  },
  {
    title: 'Partnership Opportunities',
    description: 'Explore how your organisation can work with HomeHub to improve housing outcomes.',
    cta: 'Email Partnerships',
    href: 'mailto:partnerships@homehub.co.uk',
  },
  {
    title: 'Support',
    description: 'Already a customer? Our support team is here to help with technical questions.',
    cta: 'Get Support',
    href: 'mailto:support@homehub.co.uk',
  },
]

export default function ContactPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Company</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Whether you want to see a demo, discuss a partnership, or just find out more about HomeHub, we&apos;d love to hear from you.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">How can we help?</h2>
              <div className="mt-8 space-y-6">
                {contactOptions.map((option) => (
                  <div key={option.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{option.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{option.description}</p>
                    </div>
                    <div className="flex items-center">
                      <Button href={option.href} className="whitespace-nowrap text-xs">
                        {option.cta}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-brand-950 p-8 text-white sm:p-10">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-white/70 text-sm">We aim to respond to all enquiries within one business day.</p>
                <form className="mt-8 space-y-5" action="#" method="POST">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 block w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-amber-400"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5 block w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-amber-400"
                      placeholder="jane@organisation.co.uk"
                    />
                  </div>
                  <div>
                    <label htmlFor="organisation" className="block text-sm font-medium text-white/80">
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      className="mt-1.5 block w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-amber-400"
                      placeholder="Housing Association Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1.5 block w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-amber-400 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <Button type="submit" className="w-full justify-center">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
