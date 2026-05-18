import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AppStoreLink } from '@/components/AppStoreLink'

function GooglePlayButton() {
  return (
    <Link
      href="#"
      aria-label="Get it on Google Play"
      className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-white hover:bg-gray-800 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M3.18 23.76c.3.17.64.24.99.2l12.7-11.56L13.5 9.03 3.18 23.76Z" />
        <path d="m20.49 10.39-2.83-1.63-3.68 3.35 3.68 3.35 2.85-1.64a1.79 1.79 0 0 0 0-3.43Z" />
        <path d="M2.19.54A1.79 1.79 0 0 0 1.5 2v20a1.79 1.79 0 0 0 .69 1.46l.1.08 11.21-11.2v-.27L2.29.46Z" />
        <path d="m16.87 12.4-3.27-3.27L2.29.46c.3-.19.68-.22 1.01-.06l13.57 7.82-3.17 2.88 3.17 1.3Z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-none">GET IT ON</div>
        <div className="text-sm font-semibold leading-tight">Google Play</div>
      </div>
    </Link>
  )
}

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
              <GooglePlayButton />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
