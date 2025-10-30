import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Heart, Calendar } from "lucide-react"

export function BlanketProgramDetails() {
  const phases = [
    {
      title: "Community Assessment",
      description:
        "Identifying vulnerable families and assessing their needs through community surveys and local partnerships.",
      icon: Users,
      duration: "October",
      color: "blue",
    },
    {
      title: "Resource Mobilization",
      description: "Procuring high-quality blankets and coordinating with donors and volunteers for distribution.",
      icon: Heart,
      duration: "November",
      color: "red",
    },
    {
      title: "Distribution Drive",
      description: "Organized distribution events in villages, ensuring blankets reach the most vulnerable families.",
      icon: MapPin,
      duration: "December",
      color: "green",
    },
    {
      title: "Follow-up Support",
      description: "Monitoring the impact and providing additional support where needed during winter months.",
      icon: Calendar,
      duration: "January",
      color: "purple",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Implementation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures that blankets reach those who need them most, creating maximum impact during
            the winter season.
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
                <span
                  className={`inline-block px-3 py-1 bg-${phase.color}-100 text-${phase.color}-700 rounded-full text-xs font-medium`}
                >
                  {phase.duration}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
