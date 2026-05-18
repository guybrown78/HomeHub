import { Hero } from '@/components/Hero'
import { AudienceRouting } from '@/components/AudienceRouting'
import { PlatformOverview } from '@/components/PlatformOverview'
import { HowItWorks } from '@/components/HowItWorks'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { LandlordBenefits } from '@/components/LandlordBenefits'
import { SocialProof } from '@/components/SocialProof'
import { Resources } from '@/components/Resources'
import { FinalCTA } from '@/components/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceRouting />
      <PlatformOverview />
      <HowItWorks />
      <PrimaryFeatures />
      <LandlordBenefits />
      <SocialProof />
      <Resources />
      <FinalCTA />
    </>
  )
}
