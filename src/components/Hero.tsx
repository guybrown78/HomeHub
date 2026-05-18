import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { LuChevronRight } from 'react-icons/lu'

export function Hero() {
  return (
    <div className="overflow-hidden rounded-t-5xl bg-bg py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Built for housing
            </span>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-brand-950 sm:text-6xl">
              Managing homes, residents and repairs{' '}
              <span className="text-brand-600">in one place</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-fg-muted">
              HomeHub helps landlords improve resident engagement, manage repairs,
              support retrofit programmes, and stay compliant — while giving
              residents a simple way to report issues and manage their home.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreLink color="black" />
              <GooglePlayLink color="black" />
              <Button href="/book-demo" variant="solid" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold text-brand-950">500+</p>
                <p className="text-sm text-fg-muted">Properties managed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-950">94%</p>
                <p className="text-sm text-fg-muted">Resident satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-950">3×</p>
                <p className="text-sm text-fg-muted">Faster issue resolution</p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-6 lg:row-span-2 lg:mt-0">
            <div className="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>

              <div className="absolute left-0 top-12 z-20 hidden rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5 animate-float lg:block">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Repair Resolved</p>
                    <p className="text-xs text-gray-500">Damp issue — 24 Maple St</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 bottom-36 z-20 hidden rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5 animate-float-delayed lg:block">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent-100">
                    <svg className="h-4 w-4 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">EPC Rating: C</p>
                    <p className="text-xs text-gray-500">Improved from D</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative -mt-4 lg:col-span-6 lg:mt-0">
            <div className="h-28" />
          </div>
        </div>
      </Container>
    </div>
  )
}
