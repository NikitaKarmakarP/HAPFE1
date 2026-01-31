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
    <section id="impact-by-numbers" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-100/30 to-pink-100/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-gray-900">Impact by </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every statistic represents real lives transformed, communities empowered, and sustainable change created
            through our dedicated programs.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <span className="w-16 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full opacity-50"></span>
            <span className="w-3 h-3 bg-indigo-400 rounded-full opacity-50"></span>
            <span className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full opacity-50"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden hover:-translate-y-2"
            >
              {/* Card Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <CardContent className="p-8 text-center relative z-10">
                <div
                  className={`w-20 h-20 bg-${stat.color}-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-${stat.color}-100`}
                >
                  <stat.icon className={`h-10 w-10 text-${stat.color}-600`} />
                </div>
                <div className={`text-5xl font-extrabold text-${stat.color}-600 mb-3 tracking-tight`}>{stat.value}</div>
                <div className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{stat.title}</div>
                <p className="text-gray-600 leading-relaxed font-medium">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
