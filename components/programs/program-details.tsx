import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, BookOpen, Sprout, TrendingUp } from "lucide-react"

export function ProgramDetails({
  benefitsImage,
  benefitsImageAlt,
}: {
  benefitsImage?: string
  benefitsImageAlt?: string
} = {}) {
  const phases = [
    {
      title: "Capacity Building",
      description:
        "Comprehensive training on sustainable agricultural practices, climate adaptation strategies, and community mobilization.",
      icon: BookOpen,
      duration: "Ongoing",
      color: "green",
    },
    {
      title: "Farm-Level Implementation",
      description:
        "Hands-on support for farmers to adopt climate-resilient practices, including soil health improvement and water conservation.",
      icon: Sprout,
      duration: "Season-based",
      color: "emerald",
    },
    {
      title: "Community Engagement",
      description:
        "Community-based initiatives promoting climate-resilient agriculture, including farmer field schools and community seed banks.",
      icon: Users,
      duration: "Year-round",
      color: "blue",
    },
    {
      title: "Sustainability & Scaling",
      description:
        "Mentorship, market linkages, and policy advocacy to ensure long-term sustainability and scaling up of climate-resilient agriculture practices.",
      icon: TrendingUp,
      duration: "Long-term",
      color: "purple",
    },
  ]

  const benefits = [
    "Sustainable income generation for rural families",
    "Empowerment of women through entrepreneurship",
    "Low investment, high return agricultural practice",
    "Environmentally friendly farming method",
    "Year-round cultivation possibility",
    "Nutritious food production for communities",
    "Skills development and capacity building",
    "Market access and business development",
  ]

  return (
    <section id="details" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full mb-6 shadow-lg border border-green-200">
            <BookOpen className="h-5 w-5 text-green-600 animate-pulse" />
            <span className="text-green-800 font-semibold text-sm uppercase tracking-wide">Our Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
              Program Structure
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures participants receive comprehensive support from training to market success.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="w-16 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></span>
            <span className="w-16 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {phases.map((phase, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-${phase.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <phase.icon className={`h-8 w-8 text-${phase.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full mb-4 shadow-md">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-800 font-semibold text-xs uppercase tracking-wide">Key Benefits</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Program Benefits
                </span>
              </h3>
            </div>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-emerald-50/50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-12 lg:mt-16">
            <img
              src={benefitsImage || "/placeholder.svg?height=500&width=600"}
              alt={benefitsImageAlt || "Program illustration"}
              className="rounded-2xl shadow-xl"
            />

          </div>
        </div>
      </div>
    </section>
  )
}
