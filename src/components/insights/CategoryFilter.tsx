'use client'

import clsx from 'clsx'

export function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[]
  active: string
  onChange: (category: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={clsx(
            'rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer',
            active === category ? 'bg-brand-950 text-white' : 'bg-bg-muted text-fg-muted hover:bg-border',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
