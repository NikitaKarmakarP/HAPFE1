import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"
import { ContactSection } from "@/components/contact-section"

export default function MushroomEntrepreneurshipPage() {
  const programData = {
    title: "Mushroom Entrepreneurship Program",
    subtitle: "Empowering Rural Families Through Sustainable Mushroom Cultivation",
    description:
      "We offer training, resources, and support to help rural families, particularly women, start and grow profitable mushroom farming businesses.",
    image: "/mo.jpg",
    stats: [
      { number: "200+", label: "Families Trained" },
      { number: "300%", label: "Average Income Increase" },
      { number: "25", label: "Villages Covered" },
      { number: "85%", label: "Success Rate" },
    ],
  }

  return (
    <main className="min-h-screen">
      <ProgramHero data={programData} />
      <ProgramDetails benefitsImage="/mo1.jpg" benefitsImageAlt="Mushroom program benefits" />
      <ProgramImpact />
      <ProgramTestimonials />
      <ProgramCTA />
      <ContactSection />
    </main>
  )
}
