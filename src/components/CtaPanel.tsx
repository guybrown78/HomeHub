import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'

export function CtaPanel() {
  return (
    <section 
			// className="relative z-10 -mt-10 rounded-t-5xl bg-amber-300 pt-12 pb-24 sm:pt-16 sm:pb-28"
			className="overflow-hidden py-6 lg:py-12 bg-gradient-to-tr from-accent-400 to-ink via-100% to-50%"
		>
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/40 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-brand-950 sm:text-3xl">
              For Landlords &amp; Providers
            </h2>
            <p className="mt-4 text-brand-950/75 leading-relaxed">
              See how HomeHub can transform your property management and resident engagement.
            </p>
            <div className="mt-8">
              <Button href="/book-demo" variant="outline" color="violet" className="px-6 py-3 text-base">
                Book a Demo
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-white/40 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-brand-950 sm:text-3xl">
              For Residents
            </h2>
            <p className="mt-4 text-brand-950/75 leading-relaxed">
              Download the app to connect with your housing provider and manage your home.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreLink color="black" />
              <GooglePlayLink color="black" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
