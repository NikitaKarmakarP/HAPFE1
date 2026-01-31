import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, Award, DollarSign, Calendar } from "lucide-react"

export function ProgramsStats() {
  const stats = [
    {
      icon: Users,
      title: "Total Beneficiaries",
      value: "5000+",
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
      icon: DollarSign,
      title: "Farmers Trained",
      value: "500+",
      description: "Additional income generated for families",
      color: "emerald",
    },
    {
      icon: TrendingUp,
      title: "Success Rate",
      value: "90%",
      description: "Average success rate across all programs",
      color: "purple",
    },
    {
      icon: Calendar,
      title: "Program Duration",
      value: "3+",
      description: "Years of continuous program implementation",
      color: "orange",
    },
    {
      icon: Award,
      title: "Recognition",
      value: "1+",
      description: "Awards and recognitions received",
      color: "pink",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            <TrendingUp className="h-4 w-4" />
            <span>Measurable Outcomes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Impact</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our programs have created measurable, lasting impact across multiple dimensions of rural development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
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
