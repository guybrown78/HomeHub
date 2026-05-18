import { Container } from '@/components/Container'
import { FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { Section } from '@/components/Section'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { Button } from '@/components/Button'
import { LuChevronRight } from 'react-icons/lu'

export function FinalCTA() {
  return (
    <Section className="bg-bg-muted py-20 sm:py-32">
      <Container>
        <FadeInStagger className="grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.12}>
          {/* For Housing Providers */}
          <FadeInItem><div
            data-theme="brand"
            className="relative flex flex-col overflow-hidden rounded-4xl bg-bg p-10"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-fg-muted">
                For Housing Providers
              </span>
              <h2 className="mt-4 text-2xl font-bold text-fg sm:text-3xl">
                See how HomeHub can support your organisation.
              </h2>
              <p className="mt-3 text-fg-muted">
                Book a demo and discover how HomeHub transforms how you manage
                homes and engage residents.
              </p>
              <div className="mt-8">
                <Button href="/book-demo" variant="solid" color="white">
                  Book a Demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div></FadeInItem>

          {/* For Residents */}
          <FadeInItem><div
            data-theme="accent"
            className="relative flex flex-col overflow-hidden rounded-4xl bg-bg p-10"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-950/5"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-brand-950/5"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                For Residents
              </span>
              <h2 className="mt-4 text-2xl font-bold text-fg sm:text-3xl">
                Download the app and start managing your home today.
              </h2>
              <p className="mt-3 text-fg-muted">
                Report issues, track updates, access documents, and get support
                directly from your landlord.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <AppStoreLink color="black" />
                <GooglePlayLink color="black" />
              </div>
            </div>
          </div></FadeInItem>
        </FadeInStagger>
      </Container>
    </Section>
  )
}
