import { Blob } from '@/components/ui/Blob'

export function IllustrationCard({
  blobColor,
  icon: Icon,
  title,
  description,
}: {
  blobColor: string
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div
        className="relative flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-2xl"
        style={{ backgroundColor: blobColor }}
      >
        <Blob
          fill="white"
          fillOpacity={0.25}
          className="absolute inset-0 h-full w-full"
        />
        <Icon className="relative z-10 h-9 w-9 text-brand-700" strokeWidth={1.75} />
      </div>
      <div>
        <p className="font-bold text-fg">{title}</p>
        <p className="mt-0.5 text-sm text-fg-muted">{description}</p>
      </div>
    </div>
  )
}
