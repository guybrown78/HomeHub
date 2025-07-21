import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-violet-950 pt-10 sm:pt-16 rounded-t-5xl">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-white">
              <Logomark className="h-10 w-10 flex-none fill-[#FFA500]" />
              <div className="ml-4">
                <p className="text-base font-semibold">HomeHub</p>
                <p className="mt-1 text-sm">Let&apos;s make tenant engagement better, together.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              {/* <NavLinks /> */}
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <p className="mt-6 text-sm text-gray-50 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          </div>
        </div>

      </Container>
    </footer>
  )
}
