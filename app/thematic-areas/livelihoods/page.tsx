import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"

export default function LivelihoodsPage() {
  const programs = [
    {
      title: "Skill Development Training",
      description: "Comprehensive training programs in various trades and vocational skills.",
      icon: "🛠️"
    },
    {
      title: "Microenterprise Development",
      description: "Supporting small business creation and growth through mentorship and resources.",
      icon: "🏪"
    },
    {
      title: "Financial Inclusion",
      description: "Connecting communities with financial services and literacy programs.",
      icon: "💰"
    },
    {
      title: "Agricultural Enhancement",
      description: "Improving farming techniques and connecting farmers to better markets.",
      icon: "🌾"
    },
    {
      title: "Women's Economic Empowerment",
      description: "Specialized programs to enhance women's participation in economic activities.",
      icon: "👩‍💼"
    },
    {
      title: "Youth Employment",
      description: "Creating opportunities and pathways for young people to enter the workforce.",
      icon: "👨‍🎓"
    }
  ]

  const impacts = [
    { number: "5,000+", label: "Communities Impacted" },
    { number: "500+", label: "Farmers Trained" }
  ]

  // Thematic Impact Highlights - SDG images
  const highlightImages = [
    "/sdg1.jpg",
    "/sdg2.jpg",
    "/sdg4.jpg",
    "/sdg5.jpg",
    "/sdg6.jpg",
    "/sdg7.jpg",
    "/sdg8.jpg",
    "/sdg10.jpg",
    "/sdg12.jpg",
    "/sdg13.jpg",
    "/sdg15.jpg",
    "/sdg17.jpg",
  ]

  const livelihoodStories = [
    {
      name: "Punam Devi",
      location: "Hiranpur Block, Pakur District • Mushroom Entrepreneur",
      quote: "Before joining HAPEF's mushroom program, I struggled to support my family of four with just my husband's farming income. The training changed everything. Now I earn ₹3,000 monthly from mushroom cultivation and have become financially independent. My children can attend better schools, and I'm even training other women in my village.",
    },
    {
      name: "Karmela Tudu",
      location: "Village Head • Community Leader",
      quote: "Our entire village has benefited from HAPEF's sustainable agriculture programs. We now have better crop yields and improved food security for all families.",
    }
  ]

  const sectors = [
    { name: "Agriculture & Farming", percentage: 35, color: "bg-green-500" },
    { name: "Small Business & Trade", percentage: 25, color: "bg-blue-500" },
    { name: "Handicrafts & Artisan", percentage: 20, color: "bg-purple-500" },
    { name: "Technology & Services", percentage: 20, color: "bg-orange-500" }
  ]

  const sdgs = [
    { number: 1, title: "No Poverty", color: "bg-red-500", description: "Inclusive growth and income security." },
    { number: 2, title: "Zero Hunger", color: "bg-yellow-500", description: "Nutrition, food security, and agri-value chains." },
    { number: 5, title: "Gender Equality", color: "bg-pink-500", description: "Women's economic empowerment and agency." },
    { number: 8, title: "Decent Work & Growth", color: "bg-amber-600", description: "Jobs, skills, and microenterprise support." },
    { number: 10, title: "Reduced Inequalities", color: "bg-purple-600", description: "Opportunities for marginalized groups." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-green-900/90 to-green-700/90 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80">
          <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-600 opacity-20"></div>
          {/* 
          Uncomment and use this when you have an actual image:
          <Image
            src="/images/livelihoods-banner.jpg"
            alt="Livelihoods Development"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-200 font-medium">Thematic Area</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Livelihoods
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              Creating sustainable income opportunities and improving economic conditions for vulnerable populations through skill development and enterprise support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#our-approach">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 w-full sm:w-auto">
                  Our Approach
                </Button>
              </Link>
              <Link href="#view-impact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 w-full sm:w-auto">
                  View Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 mb-6 group cursor-default shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                <span className="text-gray-900">Sustainable </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-gradient-x">
                  Economic Opportunities
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-full mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our livelihoods programs focus on creating pathways out of poverty by developing skills, supporting entrepreneurship, and connecting people with sustainable income opportunities.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work across multiple sectors including agriculture, small business development, handicrafts, and emerging technology services to ensure diverse economic opportunities for all community members.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation-Driven</h3>
                    <p className="text-gray-600">Leveraging new technologies and market trends</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Market-Linked</h3>
                    <p className="text-gray-600">Connecting producers directly with buyers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="/q.jpg"
                  alt="Sustainable Economic Opportunities"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="our-approach" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 mb-6 group cursor-default shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              <span className="text-gray-900">Our Livelihood </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Programs
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive programs designed to create sustainable economic opportunities across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>




      {/* Impact Statistics */}
      <section id="view-impact" className="py-20 bg-green-600 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Livelihood Impact
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Transforming lives through sustainable economic opportunities and skill development.
            </p>
          </div>

          <div className="flex justify-center gap-8 md:gap-16">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{impact.number}</div>
                <div className="text-green-200 font-medium">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Impact Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6 group cursor-default shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Global Alignment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              <span className="text-gray-900">Thematic Impact </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Highlights
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Aligning with Sustainable Development Goals to create lasting positive change.
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

      <ProgramTestimonials
        testimonials={livelihoodStories}
        title="Success Stories"
        description="Real stories of transformation from our livelihood development programs."
        badge="Voices of Change"
        accentColor="orange"
      />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Livelihood Development
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Join us in creating sustainable economic opportunities for vulnerable communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/partner">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                Partner With Us
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Support Our Work
              </Button>
            </Link>
            <Link href="/thematic-areas">
              <Button size="lg" variant="ghost" className="text-white hover:bg-green-500">
                Back to Thematic Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
