import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"


export default function EnvironmentSustainabilityPage() {
  const initiatives = [
    {
      title: "Climate Change Adaptation",
      description: "Building community resilience to climate change impacts through adaptive strategies.",
      icon: "🌡️"
    },
    {
      title: "Natural Resource Management",
      description: "Sustainable management of water, forests, and land resources for long-term conservation.",
      icon: "🌳"
    },
    {
      title: "Disaster Risk Reduction",
      description: "Comprehensive disaster management and risk reduction programs for vulnerable communities.",
      icon: "🛡️"
    },
    {
      title: "Renewable Energy Solutions",
      description: "Promoting clean energy alternatives and reducing carbon footprint in rural areas.",
      icon: "☀️"
    },
    {
      title: "Waste Management Systems",
      description: "Implementing sustainable waste management and recycling programs.",
      icon: "♻️"
    },
    {
      title: "Biodiversity Conservation",
      description: "Protecting local ecosystems and promoting biodiversity conservation efforts.",
      icon: "🦋"
    }
  ]

  const impacts = [
    { number: "100+", label: "Trees Planted" },
    { number: "10+", label: "Communities Trained" }
  ]

  // Thematic Impact Highlights - SDG images
  const highlightImages = [
    "/sdg1.jpg",
    "/sdg2.jpg",
    "/sdg3.jpg",
    "/sdg6.jpg",
    "/sdg7.jpg",
    "/sdg12.jpg",
    "/sdg13.jpg",
    "/sdg14.jpg",
    "/sdg15.jpg",
    "/sdg17.jpg",
  ]



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-emerald-900/90 to-emerald-700/90 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/80">
          <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-emerald-600 opacity-20"></div>
          {/* 
          Uncomment and use this when you have an actual image:
          <Image
            src="/images/environment-sustainability-banner.jpg"
            alt="Environment Sustainability & Disaster Management"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
              <span className="text-emerald-200 font-medium">Thematic Area</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Environment Sustainability & Disaster Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
              Promoting environmental conservation and building resilience against natural disasters through community-based approaches and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Our Initiatives
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Climate Action
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
                Building Environmental Resilience
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our environmental sustainability and disaster management programs address the growing challenges of climate change, environmental degradation and climate-induced as well as socio-economic disasters affecting vulnerable communities.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work on multiple fronts - from conservation and sustainable resource management to disaster risk reduction and climate adaptation - ensuring communities are resilient and environmentally sustainable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sustainable Practices</h3>
                    <p className="text-gray-600">Promoting eco-friendly and sustainable development practices</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Resilient Futures</h3>
                    <p className="text-gray-600">Empowering communities to build resilience and respond effectively to disasters.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/e1.jpg"
                  alt="Building Environmental Resilience"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Initiatives Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Environmental Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs addressing environmental challenges and building disaster resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {initiative.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {initiative.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {initiative.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Impact Statistics */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Environmental Impact
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Measurable results from our environmental sustainability and disaster management efforts.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {impacts.map((impact, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{impact.number}</div>
                  <div className="text-emerald-200 font-medium">{impact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thematic Impact Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thematic Impact Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aligning with Sustainable Development Goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlightImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm group">
                <Image
                  src={src}
                  alt={`Impact highlight ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Climate Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/e2.jpg"
                  alt="Climate Action & Adaptation"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Climate Action & Adaptation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our climate action programs help communities adapt to changing environmental conditions while contributing to global climate mitigation efforts.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-lg mt-1">
                    🌡️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Temperature Monitoring</h3>
                    <p className="text-gray-600">Real-time climate monitoring and early warning systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-lg mt-1">
                    💧
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Water Conservation</h3>
                    <p className="text-gray-600">Rainwater harvesting and efficient water management systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-lg mt-1">
                    🌾
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Climate-Smart Agriculture</h3>
                    <p className="text-gray-600">Drought-resistant crops and sustainable farming practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Environmental Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real impact from our environmental and disaster management initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                  🌳
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Village Forest Revival</h3>
                  <p className="text-gray-600 mb-4">
                    "Our village transformed from barren land to a green oasis. The community forest now provides livelihood and protects us from floods."
                  </p>
                  <div className="text-sm text-emerald-600 font-medium">Sundarbans Community Leader</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                  ☀️
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Solar Energy Adoption</h3>
                  <p className="text-gray-600 mb-4">
                    "The solar energy project reduced our electricity costs by 70% and made our village carbon neutral."
                  </p>
                  <div className="text-sm text-emerald-600 font-medium">Renewable Energy Beneficiary</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Environmental Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            Partner with us to build environmental resilience and combat climate change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/partner">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Partner With Us
              </Button>
            </Link>
            <Link href="/get-involved/volunteer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Volunteer
              </Button>
            </Link>
            <Link href="/thematic-areas">
              <Button size="lg" variant="ghost" className="text-white hover:bg-emerald-500">
                Back to Thematic Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
