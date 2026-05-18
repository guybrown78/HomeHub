import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Cookie Policy | HomeHub',
  description: 'HomeHub Cookie Policy. Learn about how we use cookies and how to manage your preferences.',
}

const cookieTypes = [
  {
    name: 'Strictly Necessary Cookies',
    required: true,
    description: 'These cookies are essential for the Platform to function and cannot be switched off. They are usually set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.',
    examples: 'Session cookies, authentication tokens, CSRF protection cookies',
  },
  {
    name: 'Analytics Cookies',
    required: false,
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the Platform and deliver a better user experience.',
    examples: 'Google Analytics (_ga, _gid), Hotjar (hjid)',
  },
  {
    name: 'Functional Cookies',
    required: false,
    description: 'These cookies enable enhanced functionality and personalisation such as remembering your preferences, language settings, and login details between visits.',
    examples: 'Preference cookies, language cookies',
  },
  {
    name: 'Marketing Cookies',
    required: false,
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites.',
    examples: 'LinkedIn Insight Tag, Google Ads conversion tracking',
  },
]

export default function CookiesPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Cookie Policy</h1>
            <p className="mt-4 text-white/60">Last updated: January 2026</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16">
        <Container>
          <div className="max-w-3xl space-y-8">
            <div className="prose prose-gray">
              <h2>What are cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>

              <h2>How we use cookies</h2>
              <p>
                HomeHub uses cookies to ensure the Platform functions correctly, to understand how you use our services, and to personalise your experience. We do not use cookies to identify you personally unless you have explicitly consented.
              </p>
            </div>

            <div className="space-y-6">
              {cookieTypes.map((type) => (
                <div key={type.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">{type.name}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${type.required ? 'bg-brand-100 text-brand-700' : 'bg-gray-100 text-gray-600'}`}>
                      {type.required ? 'Always Active' : 'Optional'}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{type.description}</p>
                  <p className="mt-2 text-xs text-gray-400">
                    <span className="font-medium">Examples:</span> {type.examples}
                  </p>
                </div>
              ))}
            </div>

            <div className="prose prose-gray">
              <h2>Managing your cookie preferences</h2>
              <p>
                You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of the Platform may no longer be fully accessible.
              </p>
              <h3>Browser controls</h3>
              <p>
                Most browsers allow you to manage cookie settings. You can typically find these in the &ldquo;Settings&rdquo;, &ldquo;Preferences&rdquo; or &ldquo;Privacy&rdquo; section of your browser.
              </p>
              <h3>Opt-out links</h3>
              <ul>
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                <li>LinkedIn: Manage preferences in your LinkedIn account settings</li>
              </ul>

              <h2>Changes to this policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting a notice on the Platform.
              </p>

              <h2>Contact us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at privacy@homehub.co.uk.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
