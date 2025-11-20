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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Structure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures participants receive comprehensive support from training to market success.
          </p>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Program Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
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
