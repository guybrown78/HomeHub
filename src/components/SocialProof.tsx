import Image, { type StaticImageData } from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { Section } from '@/components/Section'
import { LuShieldCheck, LuGlobe, LuLock, LuTrophy } from 'react-icons/lu'
import northernHousingWinner from '@/images/awards/northern-housing-awards-2026-winner.jpeg'
import energyEfficiencyConsultantWinner from '@/images/awards/energy-efficiency-awards-2025-consultant-winner.jpg'
import energyEfficiencyProductThirdPlace from '@/images/awards/energy-efficiency-awards-2025-product-third-place.png'
import teesBusinessNetZeroWinner from '@/images/awards/tees-business-awards-2026-net-zero-winner.jpg'
import teesBusinessInnovationWinner from '@/images/awards/tees-business-awards-2026-innovation-winner.jpeg'
import teesTechFinalist from '@/images/awards/tees-tech-awards-2025-tech-for-good-finalist.png'
import energyEfficiencyAwards2026Logo from '@/images/awards/energy-efficiency-awards-2026-logo.png'
import railwayHaLogo from '@/images/partners/railway-ha-logo.png'
import northStarLogo from '@/images/partners/north-star-logo.svg'

const clients: { name: string; href: string; logo: StaticImageData }[] = [
  { name: 'Railway Housing Association', href: 'https://www.railwayha.co.uk/', logo: railwayHaLogo },
  { name: 'North Star Housing Group', href: 'https://www.northstarhg.co.uk/', logo: northStarLogo },
]

type AwardStatus = 'Winner' | 'Shortlisted' | 'Third Place'

const statusStyles: Record<AwardStatus, string> = {
  Winner: 'bg-accent-400 text-brand-950',
  Shortlisted: 'border border-border-strong text-fg-muted',
  'Third Place': 'bg-amber-100 text-amber-800',
}

const awards: {
  body: string
  category: string
  status: AwardStatus
  year: string
  href: string
  image?: StaticImageData
}[] = [
  {
    body: 'Northern Housing Awards',
    category: 'Best Digital Transformation',
    status: 'Winner',
    year: '2026',
    href: 'https://northernhousingawards.co.uk/2026-winners/',
    image: northernHousingWinner,
  },
  {
    body: 'The Energy Efficiency Awards',
    category: 'Energy Champion of the Year — Collective Achievement',
    status: 'Winner',
    year: '2026',
    href: 'https://theenergyawards.com/2026/en/page/2025-winners',
    image: energyEfficiencyAwards2026Logo,
  },
  {
    body: 'The Energy Efficiency Awards',
    category: 'Energy Champion of the Year — Individual Achievement',
    status: 'Shortlisted',
    year: '2026',
    href: 'https://theenergyawards.com/2026/en/page/2025-winners',
    image: energyEfficiencyAwards2026Logo,
  },
  {
    body: 'Tees Business Awards',
    category: 'Net Zero Award',
    status: 'Winner',
    year: '2026',
    href: 'https://teesbusiness.co.uk/2026/04/24/tees-business-awards-2026-winners-roll-call/',
    image: teesBusinessNetZeroWinner,
  },
  {
    body: 'Tees Business Awards',
    category: 'Innovation Award',
    status: 'Winner',
    year: '2026',
    href: 'https://teesbusiness.co.uk/2026/04/24/tees-business-awards-2026-winners-roll-call/',
    image: teesBusinessInnovationWinner,
  },
  {
    body: 'Tees Tech Awards',
    category: 'Tech for Good Award',
    status: 'Shortlisted',
    year: '2025',
    href: 'https://teesbusiness.co.uk/2025/06/06/tees-tech-awards-2025-rollcall/',
    image: teesTechFinalist,
  },
  {
    body: 'National Energy Efficiency Awards',
    category: 'Energy Consultant / Consultancy',
    status: 'Winner',
    year: '2025',
    href: 'https://www.energyefficiencyawards.co.uk',
    image: energyEfficiencyConsultantWinner,
  },
  {
    body: 'National Energy Efficiency Awards',
    category: 'Product',
    status: 'Third Place',
    year: '2025',
    href: 'https://www.energyefficiencyawards.co.uk',
    image: energyEfficiencyProductThirdPlace,
  },
]

const trust = [
  { Icon: LuGlobe, label: 'UK Housing Focus' },
  { Icon: LuLock, label: 'GDPR Compliant' },
  { Icon: LuShieldCheck, label: 'Secure by Design' },
]

export function SocialProof() {
  return (
    <Section className="bg-bg-muted py-16 sm:py-20">
      <Container>
        {/* Clients */}
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fg-subtle">
            Trusted by
          </p>
          <h2 className="mt-2 text-lg font-semibold text-fg-muted">
            Working with organisations across housing and retrofit
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-8 flex flex-wrap items-center justify-center gap-4" stagger={0.1}>
          {clients.map((client) => (
            <FadeInItem key={client.name}>
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-border bg-card py-2 pr-5 pl-3 transition-all hover:border-brand-200 hover:shadow-sm"
              >
                <span className="relative h-6 w-16 flex-none">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain object-left"
                    sizes="64px"
                  />
                </span>
                <span className="text-sm font-semibold text-fg-muted">{client.name}</span>
              </a>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Awards */}
        <FadeIn delay={0.15} className="mt-12 border-t border-border pt-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-subtle">
              Awards &amp; Recognition
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-fg-muted">
              Recognised across five industry awards programmes spanning housing, energy and
              enterprise.
            </p>
          </div>

          <FadeInStagger
            className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
            stagger={0.05}
          >
            {awards.map((award) => (
              <FadeInItem key={`${award.body}-${award.category}-${award.year}`}>
                <a
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative flex h-24 items-center justify-center border-b border-border bg-white p-3 sm:h-28">
                    {award.image ? (
                      <Image
                        src={award.image}
                        alt={`${award.body} ${award.year} — ${award.status}`}
                        fill
                        className="object-contain p-3"
                        sizes="(min-width: 640px) 200px, 45vw"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                        <LuTrophy className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[award.status]}`}
                    >
                      {award.status}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-fg-subtle">
                        {award.body} · {award.year}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold leading-snug text-fg">
                        {award.category}
                      </p>
                    </div>
                  </div>
                </a>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </FadeIn>

        {/* Trust badges */}
        <FadeInStagger className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-border pt-10 sm:flex-row sm:gap-12" stagger={0.1}>
          {trust.map(({ Icon, label }) => (
            <FadeInItem key={label} className="flex items-center gap-2 text-fg-muted">
              <Icon className="h-4 w-4 text-brand-600" strokeWidth={2} />
              <span className="text-sm font-medium">{label}</span>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </Section>
  )
}
