import { ProgramHero } from "@/components/programs/program-hero"
import { BlanketProgramDetails } from "@/components/programs/blanket-program-details"
import { ProgramCTA } from "@/components/programs/program-cta"
import { ContactSection } from "@/components/contact-section"

export default function ChristmasBlanketDistributionPage() {
  const programData = {
    title: "Christmas Blanket Distribution",
    subtitle: "Providing Warmth and Comfort to Rural Communities",
    description:
      "Our annual Christmas Blanket Distribution program ensures that vulnerable families in rural areas stay warm during harsh winter months, demonstrating our commitment to community welfare.",
    image: "/bi.jpg",
    stats: [
      { number: "100+", label: "Blankets Distributed" },
      { number: "20", label: "Villages Covered" },
      { number: "100+", label: "Families Helped" },
    ],
  }

  return (
    <main className="min-h-screen">
      <ProgramHero data={programData} />
      <BlanketProgramDetails />
      <ProgramCTA
        title="Will You Bring Hope this Winter?"
        description="Join our Blanket Distribution Drive and become part of a growing network of compassionate individuals supporting rural communities, empowered by your contributions."
        image="/b59.jpg"
      />
      <ContactSection />
    </main>
  )
}
