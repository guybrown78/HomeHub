export const pageview = ({ gaId, adsId, url }) => {
  if (!window.gtag) return

  window.gtag('config', gaId, {
    page_path: url,
  })

  if (adsId) {
    window.gtag('config', adsId, {
      page_path: url,
    })
  }
}