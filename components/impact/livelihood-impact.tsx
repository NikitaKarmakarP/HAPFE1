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
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 mb-6">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-semibold text-green-800 uppercase tracking-wider">Sustainable Growth</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Livelihood <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Impact</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our programs are designed to create sustainable economic opportunities and improve the quality of life for rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <Card key={index} className="group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 shadow-sm bg-white hover:-translate-y-2 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div
                  className={`w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${item.color}-100 transition-all duration-300`}
                >
                  <item.icon className={`h-7 w-7 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed flex-grow">{item.description}</p>

                {/* Decorative bottom line */}
                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-300 opacity-60 group-hover:w-full transition-all duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
