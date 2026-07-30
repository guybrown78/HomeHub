import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Blob } from '@/components/ui/Blob'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuArrowRight,
  LuTarget,
  LuChartBar,
  LuMessageSquare,
  LuShieldCheck,
  LuAccessibility,
  LuMapPin,
  LuUserRound,
  LuBuilding2,
  LuEye,
  LuMessageCircle,
  LuUsers,
  LuFlame,
  LuLifeBuoy,
  LuActivity,
  LuSmile,
  LuBookOpenCheck,
  LuHandshake,
  LuPhoneOff,
  LuCircleCheck,
  LuSearch,
  LuClipboardList,
  LuUsersRound,
  LuFileText,
  LuAward,
  LuLayers,
  LuRefreshCw,
} from 'react-icons/lu'

export const metadata = {
  title: 'Resident Engagement Platform for Social Landlords | HomeHub',
  description:
    'Reach the right residents, measure engagement and build resident trust with a resident engagement platform built for social landlords, housing associations and councils.',
}

// ─── Inline components ───────────────────────────────────────────────────────

function EngagementDashboardPreview() {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
            Engagement overview
          </p>
          <p className="mt-0.5 text-lg font-bold text-fg">This month</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
          <div className="h-3 w-3 rounded-full bg-brand-400" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          { label: 'Active residents', value: '612', trend: '+8%' },
          { label: 'Response rate', value: '61%', trend: '+5 pts' },
          { label: 'Messages sent', value: '34', trend: 'this month' },
          { label: 'Neighbourhoods reached', value: '18', trend: 'of 22' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-bg-muted p-3">
            <p className="text-xs text-fg-muted">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-fg">{stat.value}</p>
            <p className="text-xs font-semibold text-emerald-600">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold text-fg-muted">Engagement by neighbourhood</p>
        <div className="flex h-14 items-end gap-1.5">
          {[52, 68, 41, 77, 60, 48, 65].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-brand-200 transition-all hover:bg-brand-400"
              style={{ height: `${(h / 77) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { label: 'Estate newsletter', status: 'High engagement', dot: 'bg-emerald-400' },
          { label: 'Parking consultation', status: 'Awaiting responses', dot: 'bg-accent-400' },
          { label: 'Winter heating advice', status: 'Widely read', dot: 'bg-emerald-400' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-bg-muted px-3 py-2"
          >
            <span className="text-xs font-medium text-fg">{item.label}</span>
            <div className="flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${item.dot}`} />
              <span className="text-xs text-fg-muted">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilityCards = [
  {
    Icon: LuTarget,
    title: 'Targeted communication',
    description:
      'Send updates to exactly the residents they affect, by property, building, estate, resident group or support need.',
    resident: 'Residents receive information relevant to their home and circumstances.',
    landlord: 'Housing teams reduce broad, unnecessary communication and the confusion it can cause.',
    blobColor: 'oklch(0.946 0.024 295)',
  },
  {
    Icon: LuChartBar,
    title: 'Measurable engagement',
    description:
      'See whether updates have been opened and how residents are responding, not just whether they were sent.',
    resident: 'Residents get communication shaped by what actually reaches them.',
    landlord: 'Housing teams gain clear evidence of reach and participation to guide their approach.',
    blobColor: 'oklch(0.962 0.028 85)',
  },
  {
    Icon: LuMessageSquare,
    title: 'Resident feedback and participation',
    description:
      'Give residents simple, accessible ways to respond, ask questions and share their views.',
    resident: 'Residents can raise what matters to them without a formal process.',
    landlord: 'Housing teams identify themes, concerns and opportunities for further engagement.',
    blobColor: 'oklch(0.978 0.025 150)',
  },
  {
    Icon: LuShieldCheck,
    title: 'Trust through transparency',
    description:
      'Keep communication consistent and visible, so residents can see what is happening and why.',
    resident: 'Residents understand decisions that affect their home and community.',
    landlord: 'Housing providers build resident trust and reduce avoidable enquiries.',
    blobColor: 'oklch(0.946 0.024 295)',
  },
  {
    Icon: LuAccessibility,
    title: 'Digital inclusion and accessibility',
    description:
      'Present information in plain language and multiple formats, designed for residents with different levels of digital confidence.',
    resident: 'Every resident can access the information that matters to them.',
    landlord: 'Housing teams reach a wider share of their residents through one platform.',
    blobColor: 'oklch(0.962 0.028 85)',
  },
  {
    Icon: LuMapPin,
    title: 'Community and neighbourhood updates',
    description:
      'Share property, estate and neighbourhood information, from planned works to local events and support services.',
    resident: 'Residents stay informed about their home and their local area.',
    landlord: 'Housing teams strengthen participation and visibility across their communities.',
    blobColor: 'oklch(0.978 0.025 150)',
  },
]

const targetingDimensions = [
  'Individual property',
  'Building or block',
  'Street',
  'Estate',
  'Neighbourhood',
  'Resident group',
  'Housing type',
  'Service',
  'Support requirement',
]

const engagementUnderstanding = [
  { Icon: LuEye, label: 'Whether residents have opened or viewed an update' },
  { Icon: LuMessageCircle, label: 'Which messages receive responses' },
  { Icon: LuMapPin, label: 'Which neighbourhoods are engaging' },
  { Icon: LuUsers, label: 'Which resident groups are participating' },
  { Icon: LuFlame, label: 'Which subjects generate the most interest' },
  { Icon: LuRefreshCw, label: 'Where additional communication may help' },
  { Icon: LuLifeBuoy, label: 'Where residents may need further support' },
  { Icon: LuActivity, label: 'How engagement changes over time' },
]

const outcomes = [
  { Icon: LuSmile, label: 'Improved resident satisfaction' },
  { Icon: LuBookOpenCheck, label: 'Better informed residents' },
  { Icon: LuHandshake, label: 'Stronger resident trust' },
  { Icon: LuPhoneOff, label: 'Fewer avoidable enquiries' },
  { Icon: LuCircleCheck, label: 'Reduced confusion' },
  { Icon: LuSearch, label: 'Earlier identification of concerns' },
  { Icon: LuUsers, label: 'Increased participation' },
  { Icon: LuClipboardList, label: 'Better consultation responses' },
  { Icon: LuUsersRound, label: 'Stronger community involvement' },
  { Icon: LuFileText, label: 'Clear evidence of engagement activity' },
  { Icon: LuAward, label: 'Better social value reporting' },
  { Icon: LuLayers, label: 'Improved coordination between housing teams' },
]

const residentLandlordPairs = [
  'Residents receive information relevant to their home, while landlords reduce broad and unnecessary communications.',
  'Residents understand what is happening in their area, while housing teams gain clear evidence of reach and participation.',
  'Residents have simple ways to respond, while landlords can identify themes, concerns and opportunities for further engagement.',
  'Residents can find support and local opportunities, while landlords strengthen participation across their communities.',
  'Residents remain informed throughout repairs and planned works, while housing teams reduce uncertainty and avoidable enquiries.',
]

const connectedModules = [
  {
    name: 'Resolve',
    description: 'Keep residents updated after they report a repair or housing issue.',
    href: '/platform/resolve',
  },
  {
    name: 'Energy',
    description: 'Share property specific energy information, retrofit updates and practical advice.',
    href: '/platform/energy',
  },
  {
    name: 'Community',
    description: 'Give residents access to local events, neighbourhood updates and community support.',
    href: '/platform/community',
  },
  {
    name: 'Compliance & Regulation',
    description: 'Connect resident communication, transparency and evidence to wider landlord responsibilities.',
    href: '/landlords/compliance-regulation',
  },
  {
    name: 'Download the app',
    description: 'See how residents access HomeHub and the information connected to their home.',
    href: '/residents/download-app',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResidentEngagementPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="overflow-hidden bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Landlords
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Resident engagement you can see, measure and improve
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                HomeHub gives housing providers a direct, ongoing connection with residents, not
                just a channel for repair updates and formal notices.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
                Reach the right residents with relevant information, understand how communication
                is received, and give residents simple ways to respond and take part.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book-demo" color="accent">
                  Book a Demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
                <Button
                  href="/platform/community"
                  variant="outline"
                  color="violet"
                  className="border-white/30 text-white hover:border-white/60"
                >
                  Explore the Community Platform
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <EngagementDashboardPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Opening value section ── */}
      <Section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              heading="An ongoing relationship, not a one-way notice"
              description="Resident communication does not need to begin only when a repair is reported, a complaint is made or a consultation is required. HomeHub gives housing providers a consistent way to stay in contact with residents throughout the relationship, connecting communication, services and participation in one accessible platform. It brings together targeted messaging, resident feedback, community updates and engagement reporting, so residents get relevant information and housing teams get a clearer picture of how it lands."
              align="center"
            />
          </FadeIn>
        </Container>
      </Section>

      {/* ── Six capability cards ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="What HomeHub gives housing teams"
              heading="Communicate, measure and build participation in one place"
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {capabilityCards.map(({ Icon, title, description, resident, landlord, blobColor }) => (
              <FadeInItem key={title}>
                <Card className="flex h-full flex-col">
                  <div
                    className="relative flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-2xl"
                    style={{ backgroundColor: blobColor }}
                  >
                    <Blob
                      fill="white"
                      fillOpacity={0.32}
                      className="absolute -right-4 -top-4 h-14 w-14 rotate-12"
                    />
                    <Blob
                      fill="white"
                      fillOpacity={0.18}
                      className="absolute -bottom-5 -left-4 h-12 w-12 -rotate-45"
                    />
                    <Icon className="relative z-10 h-7 w-7 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>

                  <div className="mt-5 flex-1 space-y-3 rounded-xl bg-bg-muted p-4">
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100">
                        <LuUserRound className="h-3.5 w-3.5 text-brand-700" strokeWidth={2} />
                      </div>
                      <p className="text-sm leading-snug text-fg-muted">
                        <span className="block text-xs font-bold uppercase tracking-wide text-brand-700">
                          Residents
                        </span>
                        {resident}
                      </p>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-card">
                        <LuBuilding2 className="h-3.5 w-3.5 text-fg-subtle" strokeWidth={2} />
                      </div>
                      <p className="text-sm leading-snug text-fg-muted">
                        <span className="block text-xs font-bold uppercase tracking-wide text-fg-subtle">
                          Landlords
                        </span>
                        {landlord}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Targeted communication ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Targeted communication
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Reach exactly the residents a message is for
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Resident communication does not need to be broad to be effective. HomeHub lets
                housing teams target updates with precision, so residents receive information
                relevant to their home, their circumstances and their local area.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                Targeted communication also helps housing teams reduce broad, unnecessary or
                confusing messages, sent to residents the update was never really for.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Target communication by
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {targetingDimensions.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Measurable engagement ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Measurable engagement
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Understand what is working, not just what was sent
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Sending a message is not the same as reaching a resident. HomeHub turns
                communication into information housing teams can act on, helping demonstrate
                social value and improve the approach over time.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  HomeHub helps landlords understand
                </p>
                <ul className="mt-5 space-y-4">
                  {engagementUnderstanding.map(({ Icon, label }) => (
                    <li key={label} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white/10">
                        <Icon className="h-4 w-4 text-accent-400" strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-medium text-white/80">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Landlord outcomes ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Landlord outcomes"
              heading="A stronger case for every part of the service"
              description="Better resident engagement supports outcomes across housing, communications and governance teams, from day-to-day satisfaction to the evidence used in wider reporting."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2"
            stagger={0.05}
          >
            {outcomes.map(({ Icon, label }) => (
              <FadeInItem key={label} className="flex items-center gap-4">
                <Icon className="h-5 w-5 flex-none text-brand-700" strokeWidth={1.75} />
                <p className="font-medium text-fg">{label}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-fg-muted">
              HomeHub also helps housing providers keep communication consistent across repairs,
              energy and community services, so residents get one experience instead of several
              disconnected ones.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Resident experience ── */}
      <Section data-theme="brand-light" className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              The resident experience
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              A relationship that works in both directions
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Residents notice when communication is genuine. Clear ways to respond, accessible
              feedback, visible updates and evidence that their input has been considered all
              turn a notice into a conversation, and continue after feedback is submitted, not
              only before it.
            </p>
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-12 max-w-3xl space-y-4"
            stagger={0.08}
          >
            {residentLandlordPairs.map((pair) => (
              <FadeInItem key={pair}>
                <div className="flex gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                  <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                  <p className="text-sm leading-relaxed text-fg">{pair}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Connected platform ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Connected across HomeHub
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Part of a connected resident experience
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-fg-muted">
              Resident engagement does not sit apart from repairs, energy or compliance. HomeHub
              connects communication across every service, so residents get one consistent
              experience and housing teams get one consistent record.
            </p>
          </FadeIn>

          <FadeInStagger
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {connectedModules.map((mod) => (
              <FadeInItem key={mod.name}>
                <Link
                  href={mod.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <p className="text-base font-bold text-fg">{mod.name}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                      {mod.description}
                    </p>
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
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              See what stronger resident engagement looks like
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Book a demo to see how HomeHub can help your organisation communicate more
              effectively, increase participation and measure resident engagement across every
              home and community you manage.
            </p>
            <p className="mt-3 text-fg-muted">
              Prefer to talk it through first?{' '}
              <Link href="/contact" className="font-medium text-brand-700 underline hover:text-brand-800">
                Contact our team
              </Link>
              .
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book-demo">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button href="/platform/community" variant="outline">
                Explore the Community Platform
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
