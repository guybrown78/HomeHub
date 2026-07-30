'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { LuPlay } from 'react-icons/lu'

export function YouTubeEmbed({
  videoId,
  title,
  className,
}: {
  videoId: string
  title: string
  className?: string
}) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className={clsx('relative aspect-video overflow-hidden rounded-2xl', className)}>
      {playing ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-950/40 transition-colors group-hover:bg-brand-950/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
              <LuPlay className="ml-1 h-6 w-6 text-brand-950" strokeWidth={2} />
            </div>
          </div>
        </button>
      )}
    </div>
  )
}
