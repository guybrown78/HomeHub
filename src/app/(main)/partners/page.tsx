import Image, { type StaticImageData } from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { LuChevronRight, LuArrowUpRight, LuMapPin } from 'react-icons/lu'
import railwayHaLogo from '@/images/partners/railway-ha-logo.png'
import northStarLogo from '@/images/partners/north-star-logo.svg'
import anelecLogo from '@/images/partners/anelec-logo.png'

export const metadata = {
  title: 'Partners & Sponsors | HomeHub',
  description:
    'HomeHub works alongside housing innovators, retrofit specialists, and organisations committed to better outcomes for residents and communities.',
}

const partners: {
  name: string
  logo: StaticImageData
  href: string
  stat: string
  description: string
}[] = [
  {
    name: 'Railway Housing Association',
    logo: railwayHaLogo,
    href: 'https://www.railwayha.co.uk/',
    stat: 'Est. 1919 · 1,620 homes across 20 local authorities',
    description:
      'A not-for-profit housing provider founded in 1919, Railway Housing Association owns and manages homes across the North of England — from Darlington and Durham to Hull, Leeds, Newcastle and York. HomeHub works with Railway Housing to support their digital engagement with residents, from repairs reporting to tenancy management.',
  },
  {
    name: 'North Star Housing Group',
    logo: northStarLogo,
    href: 'https://www.northstarhg.co.uk/',
    stat: 'Est. 1974 · Tees Valley, North Yorkshire & the North East',
    description:
      'North Star Housing Group provides safe, affordable homes and supported housing across Tees Valley, North Yorkshire, County Durham and Tyne and Wear, under the ethos of "creating homes, building futures." HomeHub partners with North Star to help their team streamline issue reporting and keep residents informed.',
  },
]

const sponsor = {
  name: 'Anelec Group',
  logo: anelecLogo,
  href: 'https://www.anelec.co.uk/',
  stat: 'North Yorkshire · Electrical, mechanical & renewable energy',
  description:
    'Anelec Group is an engineering and energy services company based in North Yorkshire, delivering electrical, mechanical, renewables and safety solutions to housing, industrial and public-sector clients across the North East. Anelec sponsors HomeHub\'s work supporting the housing sector\'s transition to more efficient, better-maintained homes.',
}

function PartnerCard({
  name,
  logo,
  href,
  stat,
  description,
}: {
  name: string
  logo: StaticImageData
  href: string
  stat: string
  description: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative flex h-32 items-center justify-center border-b border-border bg-white p-6 sm:h-36">
        <Image src={logo} alt={`${name} logo`} fill className="object-contain p-6" sizes="(min-width: 640px) 400px, 90vw" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="text-lg font-semibold text-fg">{name}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-fg-subtle">
            <LuMapPin className="h-3.5 w-3.5 flex-none" strokeWidth={2} />
            {stat}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-fg-muted">{description}</p>
        <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-semibold text-brand-700 group-hover:text-brand-900">
          Visit website
          <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  )
}

export default function PartnersPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Partners
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Partners &amp; Sponsors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              HomeHub works alongside housing innovators, retrofit specialists, and
              organisations committed to better outcomes for residents and communities.
              We are stronger together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" color="accent">
                Become a Partner
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/about"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                About HomeHub
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Housing partners"
            heading="Organisations we work alongside"
            description="HomeHub partners with housing providers across the North of England, supporting how they engage residents and manage their homes day to day."
          />
          <FadeInStagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
            {partners.map((partner) => (
              <FadeInItem key={partner.name}>
                <PartnerCard {...partner} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      <Section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Sponsor"
            heading="Supporting HomeHub's growth"
            description="HomeHub is proud to be sponsored by organisations who share our commitment to better housing outcomes across the North East."
          />
          <FadeIn className="mx-auto mt-10 max-w-md">
            <PartnerCard {...sponsor} />
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
