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
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuArrowRight,
  LuCamera,
  LuBell,
  LuBellRing,
  LuMessageCircle,
  LuMapPin,
  LuFileText,
  LuFolder,
  LuLightbulb,
  LuShieldCheck,
  LuBookOpen,
  LuHouse,
  LuUsers,
  LuVote,
  LuCircleCheck,
  LuDroplets,
  LuDoorClosed,
  LuThermometer,
  LuToilet,
  LuLayers,
  LuClipboardList,
  LuCalendarCheck,
  LuHistory,
  LuUserRound,
  LuBuilding2,
  LuHandHeart,
  LuAward,
  LuMegaphone,
  LuHeartHandshake,
  LuSmartphone,
  LuListChecks,
  LuBanknote,
} from 'react-icons/lu'

export const metadata = {
  title: 'For Residents & Tenants | HomeHub',
  description:
    'Report a repair, follow its progress, and stay connected with your housing provider — all from your phone. HomeHub keeps everything about your home in one clear place.',
}

// ─── Inline components ───────────────────────────────────────────────────────

function ReportProblemPreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-100">
            <LuDroplets className="h-3.5 w-3.5 text-accent-700" strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold text-fg">Report a Problem</span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs text-fg-subtle">What&rsquo;s the problem?</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {['Leaking tap', 'Damp & mould', 'Heating', 'Blocked toilet'].map((label, i) => (
              <span
                key={label}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  i === 1 ? 'bg-accent-400 text-brand-950' : 'bg-bg-muted text-fg-muted'
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-bg-muted px-4 py-3">
          <p className="text-xs text-fg-subtle">What&rsquo;s happened</p>
          <p className="mt-1.5 text-sm text-fg">
            Mould appearing around the bathroom window, getting worse over the last week.
          </p>
        </div>

        <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-border-strong bg-bg-muted">
          <div className="text-center">
            <LuCamera className="mx-auto h-8 w-8 text-fg-subtle" strokeWidth={1.5} />
            <p className="mt-1.5 text-xs text-fg-subtle">2 photos added</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3">
          <LuCircleCheck className="h-4 w-4 flex-none text-emerald-600" strokeWidth={2} />
          <p className="text-xs font-medium text-emerald-700">
            Report received — reference #HH-4821
          </p>
        </div>
      </div>
    </div>
  )
}

function RepairTimelinePreview() {
  const steps = [
    { label: 'Report received', time: 'Mon, 09:14', done: true },
    { label: 'Triaged and allocated', time: 'Mon, 11:40', done: true },
    { label: 'Appointment confirmed', time: 'Thu, 9am–12pm', done: true },
    { label: 'Repair completed', time: 'Awaiting visit', done: false },
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
        Your repair · #HH-4821
      </p>
      <p className="mt-1 text-base font-bold text-fg">Bathroom damp &amp; mould</p>

      <div className="mt-6 space-y-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-6 w-6 flex-none items-center justify-center rounded-full ${
                  step.done ? 'bg-brand-700' : 'border-2 border-border-strong bg-card'
                }`}
              >
                {step.done && <LuCircleCheck className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-0.5 flex-1 ${step.done ? 'bg-brand-700' : 'bg-border'}`} />
              )}
            </div>
            <div className="pb-6">
              <p className={`text-sm font-semibold ${step.done ? 'text-fg' : 'text-fg-subtle'}`}>
                {step.label}
              </p>
              <p className="text-xs text-fg-muted">{step.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MessageThreadPreview() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
        Messages · Riverside Housing
      </p>
      <div className="mt-4 space-y-3">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-bg-muted px-4 py-2.5">
          <p className="text-sm text-fg">
            Thanks for the photos. We&rsquo;ve booked a contractor for Thursday morning.
          </p>
          <p className="mt-1 text-[11px] text-fg-subtle">Housing team · 11:42</p>
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-accent-400 px-4 py-2.5">
          <p className="text-sm font-medium text-brand-950">
            That works, I&rsquo;ll make sure someone&rsquo;s in.
          </p>
          <p className="mt-1 text-[11px] text-brand-950/60">You · 11:45</p>
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-bg-muted px-4 py-2.5">
          <p className="text-sm text-fg">
            Perfect. We&rsquo;ll send a reminder the day before your appointment.
          </p>
          <p className="mt-1 text-[11px] text-fg-subtle">Housing team · 11:46</p>
        </div>
      </div>
    </div>
  )
}

function NotificationsPreview() {
  const notifications = [
    { Icon: LuCalendarCheck, title: 'Appointment confirmed', body: 'Thursday, 9am–12pm for your repair', time: '2h ago' },
    { Icon: LuBellRing, title: 'Planned works nearby', body: 'Communal lighting upgrade starts Monday', time: '1d ago' },
    { Icon: LuLightbulb, title: 'New energy advice', body: 'Simple ways to cut your heating costs', time: '2d ago' },
    { Icon: LuMapPin, title: 'Local event', body: 'Community coffee morning, Saturday 10am', time: '3d ago' },
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">Notifications</p>
      <div className="mt-4 space-y-3">
        {notifications.map(({ Icon, title, body, time }) => (
          <div key={title} className="flex gap-3 rounded-xl bg-bg-muted p-3.5">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-50">
              <Icon className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-semibold text-fg">{title}</p>
                <p className="flex-none text-[11px] text-fg-subtle">{time}</p>
              </div>
              <p className="mt-0.5 text-xs leading-snug text-fg-muted">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SurveyPreview() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
        Quick question
      </p>
      <p className="mt-2 text-base font-semibold text-fg">
        How satisfied were you with your recent repair?
      </p>
      <div className="mt-5 space-y-2.5">
        {[
          { label: 'Very satisfied', pct: 68 },
          { label: 'Satisfied', pct: 22 },
          { label: 'Not satisfied', pct: 10 },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-xs">
              <span className="text-fg-muted">{row.label}</span>
              <span className="font-semibold text-fg-muted">{row.pct}%</span>
            </div>
            <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-bg-muted">
              <div
                className="h-full rounded-full bg-accent-400"
                style={{ width: `${row.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-fg-subtle">Takes 10 seconds · Helps shape local services</p>
    </div>
  )
}

function DocumentsPreview() {
  const documents = [
    { Icon: LuFileText, title: 'Tenancy agreement', meta: 'PDF · Updated Jan 2026' },
    { Icon: LuThermometer, title: 'EPC certificate', meta: 'Rating C · Home' },
    { Icon: LuShieldCheck, title: 'Gas safety certificate', meta: 'Valid until Oct 2026' },
    { Icon: LuBookOpen, title: 'Property guidebook', meta: 'How your home works' },
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
        Your documents
      </p>
      <div className="mt-4 space-y-2.5">
        {documents.map(({ Icon, title, meta }) => (
          <div key={title} className="flex items-center gap-3 rounded-xl bg-bg-muted px-4 py-3">
            <Icon className="h-4 w-4 flex-none text-brand-700" strokeWidth={1.75} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-fg">{title}</p>
              <p className="text-xs text-fg-muted">{meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const homeInfoPoints = [
  { Icon: LuClipboardList, label: 'Reported repairs and their progress' },
  { Icon: LuMessageCircle, label: 'Messages from your landlord' },
  { Icon: LuCalendarCheck, label: 'Appointment information' },
  { Icon: LuHouse, label: 'Property information' },
  { Icon: LuLightbulb, label: 'Energy advice' },
  { Icon: LuHeartHandshake, label: 'Local support' },
  { Icon: LuUsers, label: 'Community updates' },
  { Icon: LuFolder, label: 'Useful documents and guidance' },
]

const problemExamples = [
  { Icon: LuDroplets, label: 'A leaking tap' },
  { Icon: LuDoorClosed, label: 'A broken door or window' },
  { Icon: LuThermometer, label: 'Heating that isn’t working' },
  { Icon: LuLayers, label: 'Damp or mould' },
  { Icon: LuToilet, label: 'A blocked toilet' },
  { Icon: LuBuilding2, label: 'Damage in a shared area' },
]

const reportSteps = [
  { number: '01', title: 'Choose the type of problem', description: 'Pick from a simple list, so your report reaches the right team straight away.' },
  { number: '02', title: 'Explain what has happened', description: 'A few short lines is all it takes to describe the issue in your own words.' },
  { number: '03', title: 'Add photos and useful details', description: 'A clear photo helps your housing team understand the problem and plan the right response.' },
  { number: '04', title: 'Submit and get confirmation', description: 'Your report is logged instantly, so you know it has been received.' },
]

const repairUpdatePoints = [
  { Icon: LuCircleCheck, label: 'Confirmation that your issue has been received' },
  { Icon: LuBell, label: 'Updates when the status of your repair changes' },
  { Icon: LuCalendarCheck, label: 'Appointment details, kept close at hand' },
  { Icon: LuMessageCircle, label: 'Messages from your housing team or contractor' },
  { Icon: LuFileText, label: 'Requests for any extra information' },
  { Icon: LuHandHeart, label: 'Confirmation once the work is complete' },
]

const stayConnectedPoints = [
  { Icon: LuMessageCircle, label: 'Receive important messages from your landlord' },
  { Icon: LuUserRound, label: 'Respond to questions when they need an answer' },
  { Icon: LuClipboardList, label: 'Add information to a reported issue' },
  { Icon: LuCalendarCheck, label: 'View appointment and service updates' },
  { Icon: LuHouse, label: 'Receive information relevant to your property' },
  { Icon: LuHistory, label: 'Revisit useful messages whenever you need to' },
]

const supportPoints = [
  { Icon: LuLightbulb, title: 'Energy-saving guidance', description: 'Practical tips to help you use less energy and manage your bills.' },
  { Icon: LuThermometer, title: 'Your home’s energy performance', description: 'Clear information about how efficient your home is, and what it means for you.' },
  { Icon: LuHouse, title: 'Home-maintenance advice', description: 'Simple guidance on looking after your home day to day.' },
  { Icon: LuBanknote, title: 'Support programmes', description: 'Information about the support that may be available to you.' },
  { Icon: LuFileText, title: 'Tenancy and property guidance', description: 'Straightforward answers about your tenancy and your home.' },
  { Icon: LuShieldCheck, title: 'Safety information', description: 'What you need to know to keep your home safe.' },
]

const communityPoints = [
  { Icon: LuMapPin, title: 'Local events', description: 'Find out what’s happening near you.' },
  { Icon: LuUsers, title: 'Resident groups', description: 'Connect with others living in your community.' },
  { Icon: LuHeartHandshake, title: 'Support services', description: 'Discover local help that’s available to you.' },
  { Icon: LuVote, title: 'Consultations and surveys', description: 'Have your say on decisions that affect your home.' },
]

const voicePoints = [
  { label: 'Respond to questions from your landlord' },
  { label: 'Complete short surveys' },
  { label: 'Share feedback about a service or repair' },
  { label: 'Contribute ideas for your home or neighbourhood' },
  { label: 'Comment on local priorities' },
  { label: 'Take part in resident activities' },
]

const easeOfUsePoints = [
  { Icon: LuSmartphone, title: 'Built for your phone', description: 'Everything works simply, wherever you are.' },
  { Icon: LuListChecks, title: 'Clear steps', description: 'Every action is short, simple and easy to follow.' },
  { Icon: LuBookOpen, title: 'Plain language', description: 'No jargon, just information written the way people actually talk.' },
  { Icon: LuFolder, title: 'Information kept together', description: 'Everything about your home stays in one familiar place.' },
]

const getHomeHubSteps = [
  { number: '1', title: 'Your landlord introduces HomeHub', description: 'Your housing provider will let you know HomeHub is available to you.' },
  { number: '2', title: 'Follow the invitation instructions', description: 'You’ll receive simple instructions to set up your account.' },
  { number: '3', title: 'Download the HomeHub app', description: 'Available free on the App Store and Google Play.' },
  { number: '4', title: 'Sign in and explore your home', description: 'Access everything connected to your home in one place.' },
]

const faqs = [
  {
    question: 'What can I use HomeHub for?',
    answer:
      'You can report repairs, follow their progress, message your housing provider, find information about your home, and stay up to date with local news and support.',
  },
  {
    question: 'How do I get access to HomeHub?',
    answer:
      'HomeHub is provided through your landlord, council or housing association. Once they’ve introduced you to HomeHub, you can download the app and sign in with your details.',
  },
  {
    question: 'How do I report a repair?',
    answer:
      'Open the app, choose the type of problem, describe what’s happened, and submit your report. You’ll get instant confirmation that it’s been received.',
  },
  {
    question: 'Can I add photographs to my report?',
    answer:
      'Yes. Adding a photo helps your housing team understand the issue and arrange the right response, without you needing to explain everything over the phone.',
  },
  {
    question: 'Can I follow the progress of my repair?',
    answer:
      'Yes. You’ll see updates as your repair moves forward, including appointment details and confirmation once the work is complete.',
  },
  {
    question: 'Is HomeHub free for residents?',
    answer:
      'Yes, HomeHub is free to download and use if your landlord, council or housing association has made it available to you.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TenantsPage() {
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
                Report a problem, follow your repair, and stay connected with your landlord
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                HomeHub gives you a simple way to manage everything connected to your home,
                from reporting a problem to receiving updates and finding information, all
                from your phone.
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
                  How to Get Started
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

      {/* ── Everything about your home in one place ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              heading="Everything about your home, in one place"
              description="Information about your home can easily end up spread across phone calls, letters, text messages, emails and different websites. HomeHub brings it all together, so what matters to you is easier to find and easier to follow."
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

      {/* ── Report a problem in seconds ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeIn>
                <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                  Reporting a problem
                </p>
                <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                  Report a problem in seconds
                </h2>
                <p className="mt-4 text-lg text-fg-muted">
                  Whether it&rsquo;s a leaking tap, a broken window or damp and mould, HomeHub
                  gives you a quick, convenient way to let your housing provider know, without
                  repeating the same information through multiple calls or messages.
                </p>
              </FadeIn>

              <FadeInStagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3" stagger={0.05}>
                {problemExamples.map(({ Icon, label }) => (
                  <FadeInItem key={label}>
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5">
                      <Icon className="h-4 w-4 flex-none text-brand-700" strokeWidth={1.75} />
                      <span className="text-xs font-medium text-fg">{label}</span>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>

              <FadeIn delay={0.2}>
                <p className="mt-6 text-fg-muted">
                  Clear information and photographs help your housing team understand the issue
                  and organise the right response, first time.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.15}>
              <ReportProblemPreview />
            </FadeIn>
          </div>

          <div className="relative mt-24">
            <div
              className="absolute left-1/8 right-1/8 top-8 hidden h-0.5 rounded-full bg-brand-200 lg:block"
              aria-hidden="true"
            />
            <FadeInStagger className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {reportSteps.map((step) => (
                <FadeInItem key={step.number}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-bg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <span className="text-lg font-bold text-primary-fg">{step.number}</span>
                    </div>
                    <div className="mt-6 rounded-2xl px-4 pb-4 pt-3">
                      <h3 className="text-base font-bold text-fg">{step.title}</h3>
                      <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-fg-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </Section>

      {/* ── Follow your repair ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Following repair progress
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Know what&rsquo;s happening, every step of the way
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Reporting a problem is only half the story. HomeHub keeps your report and every
                update together in one place, so you&rsquo;re never left wondering what happens
                next.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                See the latest update, follow the progress of your report, and know the moment
                its status changes.
              </p>

              <FadeInStagger className="mt-8 space-y-4" stagger={0.08}>
                {repairUpdatePoints.map(({ Icon, label }) => (
                  <FadeInItem key={label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white/10">
                      <Icon className="h-4 w-4 text-accent-400" strokeWidth={1.75} />
                    </div>
                    <span className="text-sm font-medium text-fg">{label}</span>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </FadeIn>

            <FadeIn delay={0.15}>
              <RepairTimelinePreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Stay connected with your landlord ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Staying connected
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Stay connected with your landlord
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub gives you a clearer, more direct connection with your housing provider,
                so you feel better informed and they get the information they need, without
                messages getting lost along the way.
              </p>

              <FadeInStagger className="mt-8 space-y-4" stagger={0.08}>
                {stayConnectedPoints.map(({ Icon, label }) => (
                  <FadeInItem key={label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-50">
                      <Icon className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
                    </div>
                    <span className="text-sm font-medium text-fg">{label}</span>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </FadeIn>

            <FadeIn delay={0.15}>
              <MessageThreadPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Useful support for your home ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Support and guidance"
              heading="Useful support for your home"
              description="HomeHub goes beyond repairs. Find practical information and support connected to your home, whenever you need it."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {supportPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.15} className="mx-auto mt-10 max-w-3xl">
            <Link
              href="/platform/energy"
              className="group flex items-center justify-between rounded-2xl border border-brand-100 bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                  Energy Insights
                </p>
                <p className="mt-0.5 text-base font-bold text-fg">
                  See how HomeHub Energy helps you understand your home
                </p>
              </div>
              <LuArrowRight
                className="h-5 w-5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
                strokeWidth={1.75}
              />
            </Link>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Updates that matter to you ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Notifications and updates
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Updates that matter to you
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Repair status changes, appointment confirmations, planned works, safety notices
                and local news. Important information reaches you in one clear place, relevant
                to your home and your local area.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <NotificationsPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Be part of your community ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Community
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Be part of your community
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              HomeHub is more than a place to manage repairs. Discover what&rsquo;s happening
              locally, connect with useful support, and share your ideas.
            </p>
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {communityPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.15} className="mx-auto mt-10 max-w-3xl">
            <Link
              href="/platform/community"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Resident Engagement
                </p>
                <p className="mt-0.5 text-base font-bold text-fg">
                  Explore the HomeHub Community platform
                </p>
              </div>
              <LuArrowRight
                className="h-5 w-5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
                strokeWidth={1.75}
              />
            </Link>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Your voice matters ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Tenant voice
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Your voice matters
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub gives you an easy way to be heard. Whether it&rsquo;s a quick survey or
                an idea for your neighbourhood, sharing your view has never been more
                straightforward, and it helps your housing provider understand what matters to
                the people living in their homes.
              </p>

              <FadeInStagger
                className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
                stagger={0.06}
              >
                {voicePoints.map((point) => (
                  <FadeInItem key={point.label} className="flex items-start gap-2.5">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-700" strokeWidth={2} />
                    <span className="text-sm text-fg-muted">{point.label}</span>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </FadeIn>

            <FadeIn delay={0.15}>
              <SurveyPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Your information, ready when you need it ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Documents and property information
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Your information, ready when you need it
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Spend less time searching through old letters and messages. HomeHub keeps useful
                information about your home, from documents and guidance to safety information
                and contacts, in one place.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <DocumentsPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Simple to use ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Simple to use"
              heading="Everything is designed to help you find what you need"
              description="HomeHub is built around everyday life, not housing jargon. Simple language, clear steps and recognisable actions mean you always know what happens next."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2"
            stagger={0.08}
          >
            {easeOfUsePoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="flex h-full items-start gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-fg">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">{description}</p>
                  </div>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── How to get HomeHub ── */}
      <Section id="getting-started" data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="How to get HomeHub"
              heading="Getting started takes minutes"
              description="If your landlord, council or housing association uses HomeHub, getting access is simple."
              align="center"
            />
          </FadeIn>

          <div className="relative mt-16">
            <div
              className="absolute left-1/8 right-1/8 top-8 hidden h-0.5 rounded-full bg-white/10 lg:block"
              aria-hidden="true"
            />
            <FadeInStagger className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {getHomeHubSteps.map((step) => (
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
                  Not sure where to start? See the full{' '}
                  <Link href="/residents/download-app" className="font-medium text-brand-700 underline hover:text-brand-800">
                    getting started guide
                  </Link>
                  .
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

      {/* ── Resident FAQs ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader eyebrow="Resident FAQs" heading="Common questions from residents" align="center" />
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

      {/* ── Part of HomeHub ── */}
      <Section className="bg-bg py-16 sm:py-20">
        <Container>
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Explore more
            </p>
            <h2 className="mt-2 text-2xl font-bold text-fg sm:text-3xl">
              See more of what HomeHub offers
            </h2>
          </FadeIn>

          <FadeInStagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {[
              { name: 'Resolve', tagline: 'Repairs & Issues', href: '/platform/resolve', border: 'border-rose-100' },
              { name: 'Energy', tagline: 'Energy Insights', href: '/platform/energy', border: 'border-accent-100' },
              { name: 'Community', tagline: 'Local & Engagement', href: '/platform/community', border: 'border-brand-100' },
              { name: 'Resident Guides', tagline: 'Guides & Advice', href: '/resources/guides', border: 'border-emerald-100' },
            ].map((mod) => (
              <FadeInItem key={mod.name}>
                <Link
                  href={mod.href}
                  className={`group flex h-full flex-col justify-between rounded-2xl border ${mod.border} bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      {mod.tagline}
                    </p>
                    <p className="mt-0.5 text-base font-bold text-fg">{mod.name}</p>
                  </div>
                  <LuArrowRight
                    className="mt-4 h-5 w-5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
                    strokeWidth={1.75}
                  />
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              HomeHub for Residents
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Your home. Your updates. All in one place.
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Report issues, follow repairs and access useful information about your home with
              HomeHub.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
            <p className="mt-6 text-sm text-fg-muted">
              Need a hand setting up?{' '}
              <Link href="#getting-started" className="font-medium text-brand-700 underline hover:text-brand-800">
                How to Get Started
              </Link>{' '}
              or{' '}
              <Link href="/resources/guides" className="font-medium text-brand-700 underline hover:text-brand-800">
                explore Resident Guides
              </Link>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
