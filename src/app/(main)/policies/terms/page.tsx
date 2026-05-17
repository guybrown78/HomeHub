import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Terms of Service | HomeHub',
  description: 'HomeHub Terms of Service. Please read these terms carefully before using our platform.',
}

export default function TermsPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-white/60">Last updated: January 2026</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16">
        <Container>
          <div className="prose prose-gray max-w-3xl">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using HomeHub (&ldquo;the Platform&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              HomeHub provides a digital platform connecting housing providers with their residents. The Platform includes features for repairs reporting, resident communication, compliance management, energy insights, and community engagement.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify HomeHub immediately of any unauthorised use of your account.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to use the Platform to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Transmit malicious code or interfere with the Platform&apos;s operation</li>
              <li>Collect data about other users without their consent</li>
              <li>Use the Platform for any commercial purpose not authorised by HomeHub</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Platform are owned by HomeHub and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>

            <h2>6. Privacy</h2>
            <p>
              Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, HomeHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              HomeHub reserves the right to modify these Terms at any time. We will notify users of significant changes via the Platform or by email. Your continued use of the Platform after changes constitutes acceptance of the updated Terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>10. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at legal@homehub.co.uk.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
