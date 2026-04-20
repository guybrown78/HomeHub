'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from '@/libs/gtagHelper'

export default function GoogleAnalyticsPageTracker({
  GA_MEASUREMENT_ID,
  ADS_MEASUREMENT_ID,
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = searchParams.toString()
    const url = query ? `${pathname}?${query}` : pathname

    pageview({
      gaId: GA_MEASUREMENT_ID,
      adsId: ADS_MEASUREMENT_ID,
      url,
    })
  }, [pathname, searchParams, GA_MEASUREMENT_ID, ADS_MEASUREMENT_ID])

  return null
}