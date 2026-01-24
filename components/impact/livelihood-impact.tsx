import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Users, TrendingUp, Heart } from "lucide-react"

export function LivelihoodImpact() {
  const initiatives = [
    {
      title: "Mushroom Cultivation",
      description: "Empowering women through sustainable mushroom farming, providing training and market linkages.",
      impact: "300% Income Increase",
      icon: Sprout,
      color: "green",
    },
    {
      title: "Skill Development",
      description: "Vocational training programs that equip rural youth with marketable skills for better employment.",
      impact: "500+ Youth Trained",
      icon: Users,
      color: "blue",
    },
    {
      title: "Micro-entrepreneurship",
      description: "Supporting small businesses with seed funding and mentorship to create local economic growth.",
      impact: "150+ Small Businesses",
      icon: TrendingUp,
      color: "purple",
    },
    {
      title: "Community Support",
      description: "Strengthening community bonds through collective action and mutual support systems.",
      impact: "75+ Villages Reached",
      icon: Heart,
      color: "red",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Livelihood Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programs are designed to create sustainable economic opportunities and improve the quality of life for rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gray-50">
              <CardContent className="p-8">
                <div
                  className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`h-7 w-7 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className={`text-lg font-bold text-${item.color}-600`}>{item.impact}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
