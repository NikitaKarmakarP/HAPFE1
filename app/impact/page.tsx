import { ImpactHero } from "@/components/impact/impact-hero"
import { ImpactStats } from "@/components/impact/impact-stats"
import { LivelihoodImpact } from "@/components/impact/livelihood-impact"
import { ImpactStories } from "@/components/impact/impact-stories"
import { ImpactMap } from "@/components/impact/impact-map"
import { ContactSection } from "@/components/contact-section"

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <ImpactHero />
      <ImpactStats />
      <LivelihoodImpact />
      <ImpactStories />
      <ImpactMap />
      <ContactSection />
    </main>
  )
}
