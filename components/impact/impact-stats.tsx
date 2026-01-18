import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Award, Calendar, Heart, Sprout } from "lucide-react"

export function ImpactStats() {
  const stats = [
    {
      icon: Users,
      title: "Lives Transformed",
      value: "5,000+",
      description: "Individuals directly impacted by our programs",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Geographic Reach",
      value: "40+",
      description: "Villages across Jharkhand and West Bengal",
      color: "blue",
    },
    {
      icon: Sprout,
      title: "Farmers Trained",
      value: "500+",
      description: "In sustainable agriculture practices",
      color: "emerald",
    },
    {
      icon: Heart,
      title: "Families Supported",
      value: "100+",
      description: "Through various welfare programs",
      color: "red",
    },
    {
      icon: Award,
      title: "Success Rate",
      value: "80%",
      description: "Average success rate across programs",
      color: "purple",
    },
    {
      icon: Calendar,
      title: "Years of Service",
      value: "3+",
      description: "Continuous community development",
      color: "orange",
    },
  ]

  return (
    <section id="impact-by-numbers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact by Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every statistic represents real lives transformed, communities empowered, and sustainable change created
            through our dedicated programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div
                  className={`w-16 h-16 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
