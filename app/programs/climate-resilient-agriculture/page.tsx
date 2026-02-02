import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"
import { ContactSection } from "@/components/contact-section"

export default function ClimateResilientAgriculturePage() {
  const programData = {
    title: "Climate-Resilient Agriculture",
    subtitle: "Building Resilient Communities Through Sustainable Agriculture",
    description:
      "Our Climate-Resilient Agriculture program empowers farmers with sustainable practices, climate adaptation strategies, and community-based solutions to build resilient communities and address environmental challenges.",
    image: "/cl1.jpg",
    stats: [
      { number: "4000+", label: "Farmers Supported" },
      { number: "40", label: "Villages Covered" },
      { number: "5+", label: "Demonstration Villages" },
      { number: "80%", label: "Adoption Rates" },
    ],
  }

  const details = {
    overview:
      "The Climate-Resilient Agriculture program addresses the urgent need for sustainable farming practices in the face of climate change. We work directly with farming communities to implement drought-resistant crops, water conservation techniques, and soil health management strategies.",
    objectives: [
      "Promote climate-smart agricultural practices",
      "Build community resilience to climate shocks",
      "Improve food security and nutrition",
      "Enhance farmer incomes through sustainable methods",
      "Strengthen local agricultural value chains",
    ],
    activities: [
      {
        title: "Drought-Resistant Crop Training",
        description:
          "Teaching farmers to cultivate crops that can withstand water scarcity and extreme weather conditions.",
      },
      {
        title: "Water Conservation Systems",
        description:
          "Installing rainwater harvesting systems and efficient irrigation methods to optimize water usage.",
      },
      {
        title: "Soil Health Management",
        description: "Implementing organic farming practices and soil testing to maintain and improve soil fertility.",
      },
      {
        title: "Climate Information Services",
        description:
          "Providing weather forecasting and climate advisory services to help farmers make informed decisions.",
      },
      {
        title: "Community Seed Banks",
        description: "Establishing local seed banks to preserve indigenous varieties and ensure seed security.",
      },
      {
        title: "Farmer Field Schools",
        description:
          "Conducting hands-on training sessions where farmers learn through practical demonstration and peer learning.",
      },
    ],
    beneficiaries:
      "Small and marginal farmers, women farmers, youth in agriculture, and rural communities in climate-vulnerable areas across West Bengal and neighboring states.",
    timeline:
      "This is an ongoing program that started in 2019 and continues to expand to new regions based on community needs and climate vulnerability assessments.",
  }



  const testimonials = [
    {
      name: "Karolina Kisku",
      location: "Hiranpur Block, Jharkhand",
      quote:
        "I used to rely on chemical farming, but thanks to HAPEF's Bio-input Resource Centre's entrepreneurship model, I've shifted to natural farming. Not only is it better for the soil, but I've also saved on my input costs.",
    },
  ]

  const ctaData = {
    title: "Support Climate-Resilient Agriculture",
    description:
      "Help us expand sustainable farming practices and build resilient communities that can adapt to climate change challenges.",
    primaryButton: {
      text: "Donate Now",
      href: "/donate",
    },
    secondaryButton: {
      text: "Learn More",
      href: "/contact",
    },
    image: "/cl3.jpg",
  }

  return (
    <main className="min-h-screen">
      <ProgramHero data={programData} />
      <ProgramDetails {...details} benefitsImage="/cl2.jpg" benefitsImageAlt="Climate-resilient agriculture benefits" />
      <ProgramTestimonials
        testimonials={testimonials}
        title="Success Stories"
        description="Hear from the entrepreneurs who have transformed their lives through our mushroom cultivation program."
      />
      <ProgramCTA {...ctaData} />
      <ContactSection />
    </main>
  )
}
