import Image from 'next/image'
import dampImage from '@/images/damp.jpeg'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuCamera,
  LuBell,
  LuZap,
  LuHardHat,
  LuChartBar,
  LuFileText,
  LuSmartphone,
  LuWrench,
  LuDroplets,
  LuShield,
  LuPhoneOff,
  LuUsers,
  LuChevronRight,
  LuCircleCheck,
  LuTriangleAlert,
  LuImage,
  LuCalendar,
  LuArrowRight,
  LuTrendingDown,
  LuLayoutDashboard,
} from 'react-icons/lu'
import Link from 'next/link'

export const metadata = {
  title: 'Resolve – Issue Reporting & Resolution | HomeHub',
  description:
    'Streamline repairs and issue reporting with HomeHub Resolve. Give residents a simple way to report problems and track resolution in real time.',
}

// ─── Inline components ───────────────────────────────────────────────────────

function ImagePlaceholder({
  description,
  aspect = 'aspect-[4/3]',
  dark = false,
}: {
  description: string
  aspect?: string
  dark?: boolean
}) {
  return (
    <div
      className={`flex ${aspect} items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center ${
        dark
          ? 'border-white/20 bg-white/5'
          : 'border-brand-200 bg-brand-50'
      }`}
    >
      <div>
        <LuImage
          className={`mx-auto h-10 w-10 ${dark ? 'text-white/30' : 'text-brand-300'}`}
          strokeWidth={1.5}
        />
        <p
          className={`mt-3 text-sm font-medium leading-snug ${
            dark ? 'text-white/50' : 'text-brand-500'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

function ResolveAppPreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
      {/* App header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/20">
            <LuWrench className="h-3.5 w-3.5 text-rose-300" strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold text-white">Report an Issue</span>
        </div>
        <span className="rounded-full bg-accent-400/20 px-2 py-0.5 text-xs font-semibold text-accent-300">
          In Progress
        </span>
      </div>

      {/* Issue card */}
      <div className="space-y-4 p-5">
        {/* Photo area */}
        <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5">
          <div className="text-center">
            <LuCamera className="mx-auto h-8 w-8 text-white/30" strokeWidth={1.5} />
            <p className="mt-1.5 text-xs text-white/40">Photo attached</p>
          </div>
        </div>

        {/* Category */}
        <div className="rounded-xl bg-white/5 px-4 py-3">
          <p className="text-xs text-white/40">Category</p>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Damp &amp; Mould</span>
            <span className="rounded-full bg-rose-500/20 px-2 py-0.5 text-xs font-semibold text-rose-300">
              Urgent
            </span>
          </div>
        </div>

        {/* Progress tracker */}
        <div className="space-y-2">
          {[
            { label: 'Issue reported', done: true },
            { label: 'Triage complete', done: true },
            { label: 'Contractor assigned', done: false },
            { label: 'Resolution confirmed', done: false },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                  step.done
                    ? 'bg-emerald-500/20'
                    : 'border border-white/20 bg-transparent'
                }`}
              >
                {step.done && (
                  <LuCircleCheck className="h-3 w-3 text-emerald-400" strokeWidth={2.5} />
                )}
              </div>
              <p
                className={`text-xs ${
                  step.done ? 'font-medium text-white/80' : 'text-white/30'
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>

        {/* Notification strip */}
        <div className="rounded-xl bg-brand-800/60 px-4 py-3">
          <div className="flex items-center gap-2">
            <LuBell className="h-3.5 w-3.5 flex-none text-accent-300" strokeWidth={2} />
            <p className="text-xs text-white/70">
              Resident notified — contractor visiting Thu 22 May, 9–12am
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    Icon: LuCamera,
    title: 'Simple Issue Reporting',
    description:
      'Residents report repairs in seconds via the app, with photo uploads and clear categorisation to help your team prioritise.',
  },
  {
    Icon: LuBell,
    title: 'Real-Time Status Updates',
    description:
      'Automated updates keep residents informed at every stage — reducing inbound calls and building trust through transparency.',
  },
  {
    Icon: LuZap,
    title: 'Smart Triage',
    description:
      'AI-assisted categorisation routes urgent issues immediately, ensuring emergency repairs are flagged and acted on without delay.',
  },
  {
    Icon: LuHardHat,
    title: 'Contractor Coordination',
    description:
      'Assign jobs to approved contractors, track progress, and maintain a full audit trail from first report to final sign-off.',
  },
  {
    Icon: LuChartBar,
    title: 'Performance Analytics',
    description:
      'Monitor repair volumes, response times, and resolution rates with a real-time dashboard to drive continuous improvement.',
  },
  {
    Icon: LuFileText,
    title: 'Compliance Audit Trail',
    description:
      'Every issue is logged with timestamps and actions taken, giving you the evidence you need for regulatory compliance.',
  },
]

const steps = [
  {
    number: '01',
    Icon: LuSmartphone,
    title: 'Reported in seconds',
    description: 'A resident reports a problem in less than 30 seconds.',
  },
  {
    number: '02',
    Icon: LuZap,
    title: 'Categorised & allocated',
    description:
      'The report is categorised, time and date stamped, and automatically allocated to the relevant contractor or team member.',
  },
  {
    number: '03',
    Icon: LuHardHat,
    title: 'Actioned & updated',
    description:
      'The team member actions the report and amends the status for the resident.',
  },
  {
    number: '04',
    Icon: LuCircleCheck,
    title: 'Resolved before it escalates',
    description: 'The issue is resolved before becoming a major issue.',
  },
]

const compliancePoints = [
  {
    Icon: LuDroplets,
    title: 'Damp & mould detection',
    description:
      'Residents can report moisture and mould with guided photo prompts. Issues are categorised by severity and escalated appropriately.',
  },
  {
    Icon: LuTriangleAlert,
    title: 'Awaab\'s Law timelines',
    description:
      'Resolve tracks investigation and remediation deadlines against Awaab\'s Law requirements, automatically alerting your team before breaches occur.',
  },
  {
    Icon: LuShield,
    title: 'Evidence-based audit trail',
    description:
      'Every action — report, inspection, remediation, sign-off — is logged with timestamps and responsible parties for regulatory defence.',
  },
  {
    Icon: LuCalendar,
    title: 'Repeat issue monitoring',
    description:
      'Pattern recognition flags properties with recurring damp or mould issues so underlying causes are investigated and resolved.',
  },
]

const landlordBenefits = [
  {
    Icon: LuPhoneOff,
    title: 'Fewer inbound calls',
    description:
      'Digital reporting and automated status updates dramatically reduce repair-related calls to your team.',
  },
  {
    Icon: LuTrendingDown,
    title: 'Lower admin overhead',
    description:
      'Automated job assignment, status tracking, and contractor coordination cut hours of manual admin work.',
  },
  {
    Icon: LuShield,
    title: 'Regulatory confidence',
    description:
      'Meet Awaab\'s Law, HHSRS, and Decent Homes Standard obligations with built-in timelines and audit trails.',
  },
  {
    Icon: LuUsers,
    title: 'Happier residents',
    description:
      'Transparent updates and faster resolution times lead to higher resident satisfaction and fewer formal complaints.',
  },
  {
    Icon: LuLayoutDashboard,
    title: 'Portfolio-wide visibility',
    description:
      'One dashboard shows repair volumes, contractor performance, and compliance status across your entire portfolio.',
  },
]

const stats = [
  { value: '40%', label: 'Fewer inbound repair calls' },
  { value: '3.2d', label: 'Average resolution time' },
  { value: '98%', label: 'Compliance rate on tracked issues' },
  { value: '4.8★', label: 'Average resident satisfaction' },
]

const otherModules = [
  {
    name: 'Energy',
    tagline: 'Energy Insights',
    href: '/platform/energy',
    iconBg: 'bg-accent-50',
    iconColor: 'text-accent-700',
    border: 'border-accent-100',
  },
  {
    name: 'Community',
    tagline: 'Resident Engagement',
    href: '/platform/community',
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-700',
    border: 'border-brand-100',
  },
  {
    name: 'Documents',
    tagline: 'Home Information',
    href: '/platform/resolve',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    border: 'border-emerald-100',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResolvePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="overflow-hidden bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Platform
              </p>
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Resolve
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                A smarter way to report, track, and resolve housing repairs. Give residents the
                transparency they deserve and give your team the tools to work efficiently.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book-demo" color="accent">
                  Book a Demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
                <Button
                  href="/landlords/repairs-resolution"
                  variant="outline"
                  color="violet"
                  className="border-white/30 text-white hover:border-white/60"
                >
                  Repairs &amp; Resolution
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-accent-400">{s.value}</p>
                    <p className="text-sm text-white/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <ResolveAppPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Features grid ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="What Resolve does"
              heading="Every stage of the repairs journey, covered"
              description="From the moment a resident submits a report to the day it's resolved, Resolve keeps everyone aligned, informed, and accountable."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {features.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50">
                    <Icon className="h-5 w-5 text-rose-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── How Resolve works ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="How it works"
              heading="From report to resolution in four steps"
              description="Resolve removes friction at every stage of the repairs lifecycle — for residents and housing teams alike."
              align="center"
            />
          </FadeIn>

          <div className="relative mt-16">
            {/* Connector line desktop */}
            <div
              className="absolute left-1/8 right-1/8 top-8 hidden h-0.5 rounded-full bg-brand-200 lg:block"
              aria-hidden="true"
            />

            <FadeInStagger className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {steps.map((step, index) => (
                <FadeInItem key={step.number}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-bg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:ring-brand-200">
                      <step.Icon className="h-7 w-7 text-primary-fg" strokeWidth={1.75} />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-fg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="mt-6 rounded-2xl px-4 pb-4 pt-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-50/70">
                      <h3 className="text-base font-bold text-fg transition-colors duration-200 group-hover:text-brand-700">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-fg-muted">
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

      {/* ── Awaab's Law compliance ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Compliance
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Built for Awaab&apos;s Law and damp &amp; mould compliance
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Awaab&apos;s Law places strict legal obligations on social landlords to investigate
                and remediate damp and mould within defined timeframes. Resolve makes compliance
                systematic, not manual.
              </p>

              <FadeInStagger className="mt-8 space-y-5" stagger={0.1}>
                {compliancePoints.map(({ Icon, title, description }) => (
                  <FadeInItem key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-semibold text-fg">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">{description}</p>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>

              <FadeIn delay={0.2} className="mt-10">
                <Button href="/landlords/compliance-regulation" variant="solid" color="white">
                  Compliance &amp; Regulation
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
              </FadeIn>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={dampImage}
                  alt="Damp and mould on a residential wall — the kind of issue Resolve helps housing providers identify, track, and remediate"
                  className="w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── For Housing Providers ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left: benefits */}
            <div>
              <FadeIn>
                <SectionHeader
                  eyebrow="For housing providers"
                  heading="Operational efficiency. Resident trust."
                  description="Resolve transforms your repairs service from a cost centre into a competitive advantage — reducing admin while improving outcomes."
                />
              </FadeIn>

              <FadeInStagger className="mt-10 space-y-5" stagger={0.1}>
                {landlordBenefits.map(({ Icon, title, description }) => (
                  <FadeInItem key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
                      <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-semibold text-fg">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">{description}</p>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>

              <FadeIn delay={0.2} className="mt-10">
                <Button href="/book-demo">
                  Book a Demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
              </FadeIn>
            </div>

            {/* Right: stats */}
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <p className="text-3xl font-bold text-brand-950">{s.value}</p>
                    <p className="mt-1.5 text-sm text-fg-muted">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Live repair status
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    { label: 'Open repairs', count: 12, color: 'bg-rose-400', pct: 35 },
                    { label: 'In progress', count: 28, color: 'bg-accent-400', pct: 70 },
                    { label: 'Resolved this month', count: 47, color: 'bg-emerald-400', pct: 95 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs">
                        <span className="text-fg">{row.label}</span>
                        <span className="font-semibold text-fg">{row.count}</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-bg-muted">
                        <div
                          className={`h-full rounded-full ${row.color}`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Part of the platform ── */}
      <Section className="bg-bg py-16 sm:py-20">
        <Container>
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Part of HomeHub
            </p>
            <h2 className="mt-2 text-2xl font-bold text-fg sm:text-3xl">
              Resolve works best alongside the full platform
            </h2>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Combine Resolve with Energy, Community, and Documents to give residents a complete home
              management experience — and your team a single operational view.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.08}>
            {otherModules.map((mod) => (
              <FadeInItem key={mod.name}>
                <Link
                  href={mod.href}
                  className={`group flex items-center justify-between rounded-2xl border ${mod.border} bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      {mod.tagline}
                    </p>
                    <p className="mt-0.5 text-base font-bold text-fg">{mod.name}</p>
                  </div>
                  <LuArrowRight
                    className="h-5 w-5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
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
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              Ready to transform your repairs service?
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              See how Resolve can reduce calls, improve compliance, and give residents the
              transparent service they deserve.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book-demo">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/landlords/repairs-resolution"
                variant="outline"
              >
                Repairs &amp; Resolution
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
