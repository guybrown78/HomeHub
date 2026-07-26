import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { DashboardPreview } from '@/components/ui/DashboardPreview'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuArrowRight,
  LuCircleX,
  LuWrench,
  LuLifeBuoy,
  LuFileText,
  LuMegaphone,
  LuMessageSquare,
  LuScale,
  LuDroplets,
  LuClipboardCheck,
  LuHistory,
  LuBookOpenCheck,
  LuEye,
  LuCompass,
  LuLockOpen,
  LuRefreshCw,
  LuUsers,
  LuShieldCheck,
  LuTriangleAlert,
  LuFlame,
  LuZap,
  LuBrush,
  LuHammer,
  LuOctagonAlert,
} from 'react-icons/lu'

export const metadata = {
  title: 'Compliance and Regulation for Social Landlords | HomeHub',
  description:
    'Help residents report concerns, access important information and receive clear updates. Discover how HomeHub supports communication, visibility and stronger compliance processes for social landlords.',
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const communicationChallenges = [
  'Important letters or emails are missed',
  'Residents are unsure how to report hazards',
  'Repair and inspection updates are difficult to follow',
  'Different teams provide different information',
  'Guidance is hard to find after it has been issued',
  'Communication records are spread across separate channels',
]

const informationChannels = [
  {
    Icon: LuShieldCheck,
    title: 'Property and safety updates',
    description:
      'Share information about inspections, planned works, safety activity and changes affecting a resident’s home.',
  },
  {
    Icon: LuWrench,
    title: 'Repair communication',
    description:
      'Keep residents informed about reported problems, progress and next steps without relying entirely on inbound calls.',
  },
  {
    Icon: LuLifeBuoy,
    title: 'Guidance and support',
    description: 'Make practical guidance, support services and escalation routes easier to access.',
  },
  {
    Icon: LuFileText,
    title: 'Documents',
    description:
      'Give residents access to relevant policies, property information and useful documents through the app.',
  },
  {
    Icon: LuMegaphone,
    title: 'Community announcements',
    description: 'Publish updates about local services, events, programmes and changes affecting an area.',
  },
  {
    Icon: LuMessageSquare,
    title: 'Direct messaging',
    description: 'Provide a clearer route for landlord-to-resident communication and ongoing updates.',
  },
]

const supportWays = [
  {
    number: '01',
    Icon: LuScale,
    title: 'Awaab’s Law readiness',
    description:
      'Support timely communication around hazards such as damp and mould by giving residents a clear route to report concerns and receive progress updates. HomeHub helps make the communication surrounding an issue easier to follow, supporting the operational processes your organisation puts in place to respond.',
  },
  {
    number: '02',
    Icon: LuDroplets,
    title: 'Damp and mould visibility',
    description:
      'Give residents a straightforward way to raise property concerns and provide the information your team needs to begin investigating them. Reports can include relevant details and supporting evidence, helping teams understand the issue before deciding the appropriate action.',
  },
  {
    number: '03',
    Icon: LuClipboardCheck,
    title: 'Evidence-based issue records',
    description:
      'Create a clearer digital record of reported property problems, including when an issue was raised and how it progressed. This supports internal reviews, complaint handling and conversations between housing, compliance, repairs and resident-support teams.',
  },
  {
    number: '04',
    Icon: LuHistory,
    title: 'Communication records',
    description:
      'Keep relevant resident updates connected to the issue or activity they relate to. This reduces reliance on disconnected communication and gives teams a clearer view of the information that has been provided.',
  },
  {
    number: '05',
    Icon: LuBookOpenCheck,
    title: 'Regulatory communication',
    description:
      'Publish updated guidance when policies, standards or operational requirements change. HomeHub helps landlords make important information available consistently across selected homes, buildings, estates or the wider portfolio.',
  },
  {
    number: '06',
    Icon: LuEye,
    title: 'Visibility and accountability',
    description:
      'Give authorised teams a clearer view of reported concerns, resident communication and outstanding activity. Better visibility helps teams identify where follow-up may be needed and supports more accountable service delivery.',
  },
]

const resolveConcerns = [
  { Icon: LuDroplets, label: 'Damp and mould' },
  { Icon: LuHammer, label: 'Leaks and water damage' },
  { Icon: LuFlame, label: 'Heating and hot-water problems' },
  { Icon: LuZap, label: 'Electrical concerns' },
  { Icon: LuBrush, label: 'Blocked toilets and drainage' },
  { Icon: LuOctagonAlert, label: 'Damage and disrepair' },
  { Icon: LuTriangleAlert, label: 'Safety-related property issues' },
]

const transparencyPoints = [
  {
    Icon: LuCompass,
    title: 'Clearer expectations',
    description: 'Explain what residents can expect from a service, what information they need to provide and what happens next.',
  },
  {
    Icon: LuLockOpen,
    title: 'Accessible information',
    description: 'Make policies, guidance and support information available through the resident app.',
  },
  {
    Icon: LuRefreshCw,
    title: 'Consistent updates',
    description: 'Help different teams communicate using clear and consistent information.',
  },
  {
    Icon: LuUsers,
    title: 'Better resident understanding',
    description: 'Reduce uncertainty by keeping residents informed about issues, works and service changes.',
  },
  {
    Icon: LuLifeBuoy,
    title: 'Stronger complaints support',
    description: 'Maintain a clearer history of relevant communication when concerns are reviewed or escalated.',
  },
  {
    Icon: LuEye,
    title: 'More visible accountability',
    description: 'Help authorised teams understand which issues require attention, follow-up or further communication.',
  },
]

const connectedModules = [
  {
    name: 'Resolve',
    description: 'Give residents a clear way to report property problems and follow their progress.',
    href: '/platform/resolve',
  },
  {
    name: 'Energy',
    description: 'Share home-energy information, EPC insights and guidance connected to energy efficiency and retrofit.',
    href: '/platform/energy',
  },
  {
    name: 'Community',
    description: 'Publish local updates, events, support services and information affecting residents.',
    href: '/platform/community',
  },
  {
    name: 'Messaging',
    description: 'Send direct, targeted communication to residents, properties or wider groups.',
  },
  {
    name: 'Documents',
    description: 'Make relevant property, tenancy and compliance information easier to access.',
  },
  {
    name: 'Tenant Voice',
    description: 'Give residents clearer opportunities to provide feedback and contribute to service improvement.',
  },
  {
    name: 'AI support',
    description: 'Help residents navigate the platform and find relevant information more easily as HomeHub’s AI capabilities develop.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ComplianceRegulationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="overflow-hidden bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Compliance and regulation
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Make important information clear, accessible and accountable
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                HomeHub helps social landlords, housing associations and councils communicate
                essential property, safety, repair and tenancy information directly to residents.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
                Bring updates, guidance, documents and issue reporting into one accessible
                platform, helping your teams communicate consistently and maintain clearer
                records across the resident journey.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book-demo" color="accent">
                  Book a demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
                <Button
                  href="/"
                  variant="outline"
                  color="violet"
                  className="border-white/30 text-white hover:border-white/60"
                >
                  Explore HomeHub
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/50">
                Built for UK social housing providers and the residents they support.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <DashboardPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Policies only work when residents receive the right information ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Compliance depends on clear communication
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Policies only work when residents receive the right information
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Meeting regulatory responsibilities involves more than maintaining internal
                policies and completing inspections.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                Residents need to understand what is happening in their home, how to report a
                concern, what action is being taken and where they can find further support.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                When communication is spread across letters, emails, websites, phone calls and
                different internal systems, important information can be missed. Residents may
                not know where to look, while housing teams can struggle to maintain a clear and
                consistent picture of what has been communicated.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub gives landlords a direct digital channel for sharing information and
                keeping residents updated throughout the process.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Common communication challenges
                </p>
                <ul className="mt-5 space-y-4">
                  {communicationChallenges.map((item) => (
                    <li key={item} className="flex gap-3">
                      <LuCircleX className="mt-0.5 h-5 w-5 flex-none text-rose-400" strokeWidth={1.75} />
                      <span className="text-sm leading-relaxed text-fg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Put important housing information where residents can find it ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="A clearer way to keep residents informed"
              heading="Put important housing information where residents can find it"
              description="HomeHub gives residents one accessible place to receive landlord updates, review useful guidance and find information connected to their home and community. Housing teams can communicate with individual residents, groups of properties, buildings, estates or the wider housing portfolio. Residents can revisit information when they need it, rather than relying on a letter, email or notice that may no longer be available."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {informationChannels.map(({ Icon, title, description }) => (
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
        </Container>
      </Section>

      {/* ── Six ways HomeHub supports housing providers ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Supporting stronger compliance processes
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Improve consistency across every resident interaction
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              HomeHub supports the communication and evidence surrounding your existing
              compliance processes. It does not replace your housing-management systems, repairs
              teams or statutory responsibilities. It helps connect those activities to the
              resident, so information is clearer and communication is easier to manage.
            </p>
          </FadeIn>

          <p className="mt-16 text-sm font-semibold uppercase tracking-widest text-fg-muted">
            Six ways HomeHub supports housing providers
          </p>

          <FadeInStagger className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2" stagger={0.08}>
            {supportWays.map(({ number, Icon, title, description }) => (
              <FadeInItem key={number}>
                <div className="flex gap-6 border-t border-border pt-6">
                  <span className="text-4xl font-bold text-brand-100 sm:text-5xl">{number}</span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                      <h3 className="text-base font-semibold text-fg">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Respond clearly when property concerns are raised (Resolve) ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Respond clearly when property concerns are raised
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Help residents report problems before they become more serious
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Residents need a clear and trusted route for reporting concerns about their home.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub Resolve allows residents to report issues digitally and provide useful
                information about what has happened. Reports are time and date stamped and can be
                directed to the relevant contractor or team member.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                Residents can then receive updates as the issue progresses, helping them
                understand what is happening without repeatedly contacting the landlord. For
                housing providers, this creates a clearer journey from initial report through to
                action and resolution.
              </p>

              <p className="mt-6 text-sm text-white/40">
                For emergencies, residents should continue to use your published emergency
                contact routes.
              </p>

              <FadeIn delay={0.2} className="mt-10">
                <Button href="/platform/resolve" variant="solid" color="white">
                  Explore Resolve
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
              </FadeIn>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  HomeHub Resolve can support concerns including
                </p>
                <ul className="mt-5 space-y-4">
                  {resolveConcerns.map(({ Icon, label }) => (
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

      {/* ── Support transparency and consumer standards ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Support transparency and consumer standards"
              heading="Give residents clearer information about their home and services"
              description="Transparency is a central part of building trust between landlords and residents. Residents should be able to understand how to access services, report concerns, follow progress and find the information that affects their tenancy and home. HomeHub helps housing providers make this information more visible and easier to revisit. This can support wider work around consumer standards, complaints, Tenant Satisfaction Measures and resident scrutiny by providing a clearer communication channel between the landlord and the people receiving its services."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2"
            stagger={0.08}
          >
            {transparencyPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title} className="flex gap-4">
                <Icon className="mt-0.5 h-6 w-6 flex-none text-brand-700" strokeWidth={1.75} />
                <div>
                  <p className="font-semibold text-fg">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-fg-muted">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Connect compliance activity across HomeHub ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Connect compliance activity across HomeHub
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              One resident experience across multiple housing services
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-fg-muted">
              Compliance-related communication does not sit within one department. A repair may
              involve housing officers, contractors, compliance teams and resident-support
              services. Retrofit activity may require property information, appointment updates,
              documents and ongoing engagement. Community support may need to reach specific
              residents quickly. HomeHub brings these touchpoints into a more connected resident
              experience.
            </p>
          </FadeIn>

          <FadeInStagger
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {connectedModules.map((mod) =>
              mod.href ? (
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
              ) : (
                <FadeInItem key={mod.name}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-border bg-bg-muted p-5">
                    <div>
                      <p className="text-base font-bold text-fg">{mod.name}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              ),
            )}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Built to support your existing teams and systems ── */}
      <Section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Built to support your existing teams and systems
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Add a clearer resident communication layer
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              HomeHub is designed to support the work already taking place across your
              organisation. It does not replace compliance specialists, repairs systems,
              housing-management platforms, asset-management systems, formal complaints processes
              or statutory inspections.
            </p>
            <p className="mt-4 text-lg text-fg-muted">
              Instead, it helps connect residents with the information and services surrounding
              those processes. Housing teams gain a more consistent route for communication.
              Residents gain a clearer understanding of what is happening. Compliance and
              governance teams gain better visibility of the resident-facing activity supporting
              their wider responsibilities.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              Make compliance communication easier to manage
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              See how HomeHub can help your organisation communicate important information,
              support residents and create greater visibility across your housing portfolio.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book-demo">
                Book a demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
