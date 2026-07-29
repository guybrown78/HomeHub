import Image from 'next/image'
import Link from 'next/link'
import tenantSupportScreen from '@/images/tenant-support.png'
import qrCode from '@/images/qr-code.svg'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { PhoneFrame } from '@/components/PhoneFrame'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { Button } from '@/components/Button'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuWrench,
  LuMessageCircle,
  LuFileText,
  LuMapPin,
  LuLightbulb,
  LuActivity,
  LuHouse,
} from 'react-icons/lu'

export const metadata = {
  title: 'Download the HomeHub App | HomeHub',
  description:
    'Download HomeHub on iOS or Android. Connect with your housing provider, report repairs, access documents, and manage your home from your phone.',
}

const homeInfoPoints = [
  { Icon: LuWrench, label: 'Report a repair and follow its progress' },
  { Icon: LuMessageCircle, label: 'Message your housing provider directly' },
  { Icon: LuFileText, label: 'Access tenancy documents and guides' },
  { Icon: LuMapPin, label: 'Stay up to date with community and estate news' },
  { Icon: LuLightbulb, label: "Get practical advice about your home's energy use" },
  { Icon: LuActivity, label: 'Track updates on repairs and planned works' },
]

const steps = [
  {
    number: '1',
    title: 'Download the app',
    description:
      'Available free on the App Store and Google Play. Search for HomeHub or use the links below.',
  },
  {
    number: '2',
    title: 'Create your account',
    description: 'Sign up with your email address and verify your identity. Takes less than two minutes.',
  },
  {
    number: '3',
    title: 'Connect to your provider',
    description: 'Enter your address or housing provider code to link your account to your home.',
  },
  {
    number: '4',
    title: 'Start using HomeHub',
    description: 'Report repairs, check your documents, stay informed, and connect with your community.',
  },
]

const faqs = [
  {
    question: 'Is HomeHub free to download?',
    answer:
      'Yes. HomeHub is free to download and use if your landlord, council or housing association has made it available to you.',
  },
  {
    question: 'Which devices does HomeHub support?',
    answer:
      'HomeHub is available on iOS and Android phones and tablets, through the App Store and Google Play.',
  },
  {
    question: "What if my housing provider isn't on HomeHub yet?",
    answer:
      "You'll still be able to create an account, but you won't be able to connect it to your home until your provider signs up. Ask them to get in touch with us.",
  },
  {
    question: 'Do I need an invite code to sign up?',
    answer:
      "Not always. Some housing providers send an invite code or link, but you can usually also connect by entering your address once you've created your account.",
  },
  {
    question: 'Can I use HomeHub on more than one device?',
    answer:
      'Yes. Sign in with the same account on any supported device and your information stays in sync.',
  },
  {
    question: 'What can I do once I sign in?',
    answer:
      'Report and track repairs, message your housing provider, access documents, follow community updates and get advice about your home.',
  },
]

export default function DownloadAppPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="overflow-hidden bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Residents
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Download HomeHub
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                Your home, your community, your way. Download HomeHub free on iOS and Android and
                connect with your housing provider today.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <AppStoreLink color="white" />
                <GooglePlayLink color="white" />
              </div>
              <div className="mt-6">
                <Link
                  href="#getting-started"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  See how it works
                  <LuChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <Image
                  src={tenantSupportScreen}
                  alt="Reporting a repair and viewing housing provider support in the HomeHub app"
                />
              </PhoneFrame>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Why residents use HomeHub ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              heading="Everything about your home, in one app"
              description="Information about your home can easily end up spread across phone calls, letters, text messages and emails. HomeHub brings it all together, so what matters to you is easier to find and easier to follow."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
            stagger={0.06}
          >
            {homeInfoPoints.map(({ Icon, label }) => (
              <FadeInItem key={label} className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
                </div>
                <p className="text-sm text-fg-muted">{label}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Getting started ── */}
      <Section id="getting-started" data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Getting started"
              heading="Set up your account in minutes"
              description="No paperwork, no calls, no queues — just download, sign up and connect to your home."
              align="center"
            />
          </FadeIn>

          <div className="relative mt-16">
            <div
              className="absolute left-1/8 right-1/8 top-8 hidden h-0.5 rounded-full bg-white/10 lg:block"
              aria-hidden="true"
            />
            <FadeInStagger className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {steps.map((step) => (
                <FadeInItem key={step.number}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-bg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <span className="text-lg font-bold text-primary-fg">{step.number}</span>
                    </div>
                    <div className="mt-6 rounded-2xl px-4 pb-4 pt-3">
                      <h3 className="text-base font-bold text-fg">{step.title}</h3>
                      <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-fg-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:flex-row sm:justify-between">
              <div className="flex flex-col items-center gap-4 sm:items-start">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                  Download free
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <AppStoreLink color="white" />
                  <GooglePlayLink color="white" />
                </div>
                <p className="text-center text-sm text-fg-muted sm:text-left">
                  Available on iOS and Android, free for every resident whose housing provider
                  uses HomeHub.
                </p>
              </div>
              <div className="flex flex-none flex-col items-center gap-2">
                <div className="rounded-xl bg-white p-3">
                  <Image src={qrCode} alt="QR code to download the HomeHub app" className="h-20 w-20" />
                </div>
                <p className="text-xs text-fg-muted">Scan to download</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Is your housing provider on HomeHub? ── */}
      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <FadeIn>
            <Card theme="accent" className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/60">
                  <LuHouse className="h-5 w-5 text-fg" strokeWidth={1.75} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-fg sm:text-2xl">
                    Is your housing provider on HomeHub?
                  </h2>
                  <p className="mt-2 max-w-xl text-fg-muted">
                    HomeHub is available to residents whose housing provider has signed up to the
                    platform. If your landlord isn&apos;t using HomeHub yet, ask them to get in
                    touch.
                  </p>
                </div>
              </div>
              <Button href="/contact" className="flex-none">
                Ask your landlord to sign up
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* ── FAQs ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Download FAQs"
              heading="Common questions about getting started"
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.06}>
            {faqs.map(({ question, answer }) => (
              <FadeInItem key={question}>
                <Card className="h-full">
                  <h3 className="text-base font-semibold text-fg">{question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{answer}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              Have another question?{' '}
              <Link href="/resources/faqs" className="font-medium text-brand-700 underline hover:text-brand-800">
                Visit our full FAQs
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="font-medium text-brand-700 underline hover:text-brand-800">
                get in touch
              </Link>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              Your home, connected to your phone
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Download HomeHub free today and get everything about your home in one place.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
