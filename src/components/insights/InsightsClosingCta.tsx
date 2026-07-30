import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { LuChevronRight } from 'react-icons/lu'

export function InsightsClosingCta({
  heading,
  description,
  secondaryButton,
}: {
  heading: string
  description: string
  secondaryButton?: { label: string; href: string }
}) {
  return (
    <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-fg sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-lg text-fg-muted">{description}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/book-demo">
              Book a Demo
              <LuChevronRight className="ml-0.5 h-4 w-4" />
            </Button>
            {secondaryButton && (
              <Button href={secondaryButton.href} variant="outline">
                {secondaryButton.label}
              </Button>
            )}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
