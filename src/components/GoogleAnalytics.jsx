'use client'

import Script from 'next/script'
import { Suspense } from 'react'
import GoogleAnalyticsPageTracker from './GoogleAnalyticsPageTracker'

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
  ADS_MEASUREMENT_ID,
}) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });

            gtag('config', '${ADS_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Suspense fallback={null}>
        <GoogleAnalyticsPageTracker
          GA_MEASUREMENT_ID={GA_MEASUREMENT_ID}
          ADS_MEASUREMENT_ID={ADS_MEASUREMENT_ID}
        />
      </Suspense>
    </>
  )
}