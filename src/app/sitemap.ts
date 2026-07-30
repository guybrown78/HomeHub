import { type MetadataRoute } from 'next'
import { insights } from '@/data/insights'

const baseUrl = 'https://www.homehub.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/demo', changeFrequency: 'monthly' as const, priority: 0.9 },
    // Platform
    { url: '/platform/resolve', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/platform/energy', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/platform/community', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/platform/case-studies', changeFrequency: 'weekly' as const, priority: 0.7 },
    // Landlords
    { url: '/landlords/compliance-regulation', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/landlords/repairs-resolution', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/landlords/resident-engagement', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/landlords/retrofit-funding', changeFrequency: 'monthly' as const, priority: 0.8 },
    // Residents
    { url: '/residents/tenants', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/residents/homeowners', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/residents/contractors', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/residents/download-app', changeFrequency: 'monthly' as const, priority: 0.7 },
    // Resources
    // { url: '/resources/guides', changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: '/resources/insights', changeFrequency: 'weekly' as const, priority: 0.6 },
    ...insights.map((insight) => ({
      url: `/resources/insights/${insight.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    { url: '/resources/faqs', changeFrequency: 'monthly' as const, priority: 0.6 },
    // Company
    { url: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/partners', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    // Policies
    { url: '/policies/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/policies/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/policies/cookies', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  return routes.map(({ url, changeFrequency, priority }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
