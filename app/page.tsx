import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { InteractiveSection } from "@/components/interactive-section"
import { IndicatorTest } from "@/components/indicator-test"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InteractiveSection />
        <IndicatorTest />
      </main>
      <Footer />
    </div>
  )
}
