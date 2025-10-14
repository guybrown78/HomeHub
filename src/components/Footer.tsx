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
    <footer className="rounded-t-5xl bg-violet-950 pt-6 sm:pt-4">
      <Container>
        <div className="flex flex-col items-start justify-between  pt-8 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-white">
              <Logomark className="h-10 w-10 flex-none fill-[#FFA500]" />
              <div className="ml-4">
                <p className="text-base font-semibold">HomeHub</p>
                <p className="mt-1 text-sm">
                  Let&apos;s make tenant engagement better, together.
                </p>
              </div>
            </div>
            {/* <nav className="mt-11 flex gap-8"><NavLinks /></nav> */}
          </div>
          <div className="flex flex-col items-start lg:items-end mt-8 lg:mt-0">
            <Link
              href="/policies/privacy"
              className="text-xs text-gray-50 underline hover:text-white"
            >
              Privacy Policy
            </Link>
            <div className="mt-2">
              <p className="text-xs text-gray-50">
                &copy; Copyright {new Date().getFullYear()}. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
