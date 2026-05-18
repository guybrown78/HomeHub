import Link from 'next/link'
import clsx from 'clsx'

export function GooglePlayLink({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <Link
      href="#"
      aria-label="Get it on Google Play"
      className={clsx(
        'inline-flex h-10 items-center gap-2.5 rounded-lg px-3.5 transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      {/* Google Play triangle icon */}
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 flex-none"
        aria-hidden="true"
        fill="none"
      >
        <path d="M3.18 23.76A1.97 1.97 0 0 1 2 22V2A1.97 1.97 0 0 1 3.18.24L13.9 12 3.18 23.76z" fill="#EA4335" />
        <path d="M17.84 16.09L5.06 23.47c-.58.33-1.19.36-1.71.12L13.9 12l3.94 4.09z" fill="#FBBC04" />
        <path d="M21.97 13.6c.34-.44.53-.99.53-1.6 0-.61-.19-1.16-.53-1.6L18.3 8.1 13.9 12l4.4 4.09 3.67-2.49z" fill="#4285F4" />
        <path d="M3.35.41C3.87.17 4.48.2 5.06.53L17.84 7.9 13.9 12 3.18.24A1.7 1.7 0 0 1 3.35.41z" fill="#34A853" />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="text-[9px] font-medium opacity-80">GET IT ON</span>
        <span className="text-sm font-semibold">Google Play</span>
      </div>
    </Link>
  )
}
