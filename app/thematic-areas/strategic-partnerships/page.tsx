import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function StrategicPartnershipsPage() {
  const partnershipTypes = [
    {
      title: "Government Partnerships",
      description: "Collaborating with government agencies to align with policy frameworks and scale impact.",
      icon: "🏛️"
    },
    {
      title: "Corporate Partnerships",
      description: "Engaging with private sector for CSR initiatives and sustainable business solutions.",
      icon: "🏢"
    },
    {
      title: "Academic Collaborations",
      description: "Partnering with various universities and institutions for knowledge and innovation.",
      icon: "🎓"
    },
    {
      title: "International Partnerships",
      description: "Global collaborations for knowledge exchange and resource mobilization.",
      icon: "🌍"
    },
    {
      title: "Civil Society Networks",
      description: "Building alliances with NGOs and community organizations for collective action.",
      icon: "🤝"
    },
    {
      title: "Technology Partnerships",
      description: "Leveraging technology solutions through strategic tech partnerships.",
      icon: "💻"
    }
  ]

  const impacts = [
    { number: "50+", label: "Active Partners" },
    { number: "₹10Cr+", label: "Resources Mobilized" },
    { number: "25", label: "Joint Programs" },
    { number: "95%", label: "Partnership Satisfaction" }
  ]

  // Thematic Impact Highlights - SDG images
  const highlightImages = [
    "/sdg1.jpg",
    "/sdg2.jpg",
    "/sdg3.jpg",
    "/sdg4.jpg",
    "/sdg5.jpg",
    "/sdg8.jpg",
    "/sdg10.jpg",
    "/sdg13.jpg",
    "/sdg17.jpg",
  ]

  const partnerCategories = [
    { name: "Government Agencies", count: 15, color: "bg-orange-500" },
    { name: "Corporate Partners", count: 12, color: "bg-blue-500" },
    { name: "Academic Institutions", count: 8, color: "bg-green-500" },
    { name: "International Organizations", count: 6, color: "bg-purple-500" },
    { name: "Civil Society", count: 9, color: "bg-red-500" }
  ]

  const sdgs = [
    { number: 1, title: "No Poverty", color: "bg-red-500", description: "Ending poverty through inclusive growth." },
    { number: 2, title: "Zero Hunger", color: "bg-yellow-500", description: "Food security and sustainable agriculture." },
    { number: 5, title: "Gender Equality", color: "bg-pink-500", description: "Empower women and girls in all spheres." },
    { number: 8, title: "Decent Work & Growth", color: "bg-amber-600", description: "Productive employment and entrepreneurship." },
    { number: 17, title: "Partnerships", color: "bg-blue-600", description: "Strengthen global partnerships for goals." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-orange-900/90 to-orange-700/90 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-700/80">
          <div className="w-full h-full bg-gradient-to-br from-orange-800 to-orange-600 opacity-20"></div>
          {/* 
          Uncomment and use this when you have an actual image:
          <Image
            src="/images/strategic-partnerships-banner.jpg"
            alt="Strategic Partnerships"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
              <span className="text-orange-200 font-medium">Thematic Area</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Building collaborative partnerships with diverse stakeholders to enhance developmental outcomes and promote sustainable solutions for emerging challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Our Partners
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Partnership Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Collaborative Development Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our strategic partnerships are built on the principle that complex development challenges require collaborative solutions. We work with diverse stakeholders to leverage complementary strengths and resources.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through strategic alliances, we amplify our impact, share knowledge, and create sustainable solutions that benefit communities while advancing the broader development agenda.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Shared Vision</h3>
                    <p className="text-gray-600">Aligning goals for maximum collective impact</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Synergistic Collaboration</h3>
                    <p className="text-gray-600">Leveraging complementary strengths and resources</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/a.jpg"
                  alt="Collaborative Development Approach"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with diverse stakeholders across sectors to create comprehensive development solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {partnership.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {partnership.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {partnership.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Thematic Impact Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thematic Impact Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Aligning with Sustainable Development Goals
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {highlightImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden ring-1 ring-gray-200">
                <Image src={src} alt={`Highlight ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      


      {/* Impact Statistics */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Impact
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Measurable results from our strategic partnership initiatives and collaborative programs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{impact.number}</div>
                <div className="text-orange-200 font-medium">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach to build and maintain effective partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Identification</h3>
              <p className="text-gray-600">
                Strategic assessment of potential partners and alignment opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Engagement</h3>
              <p className="text-gray-600">
                Building relationships and establishing mutual understanding and trust.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                📋
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Formalization</h3>
              <p className="text-gray-600">
                Developing formal agreements and collaborative frameworks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                📈
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Joint program implementation and continuous relationship management.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Us for Greater Impact
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Join our network of strategic partners and amplify your development impact through collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/partner">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Become a Partner
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Explore Opportunities
              </Button>
            </Link>
            <Link href="/thematic-areas">
              <Button size="lg" variant="ghost" className="text-white hover:bg-orange-500">
                Back to Thematic Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}