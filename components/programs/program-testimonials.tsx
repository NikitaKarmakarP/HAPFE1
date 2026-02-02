import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

interface Testimonial {
  name: string
  location: string
  quote: string
  image?: string
  impact?: string
}

interface ProgramTestimonialsProps {
  testimonials?: Testimonial[]
  title?: string
  description?: string
  badge?: string
  accentColor?: "green" | "blue" | "purple" | "orange"
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Punam Devi",
    location: "Hiranpur Block, Jharkhand",
    quote:
      "Before joining HAPEF's mushroom program, I struggled to support my family of four with just my husband's farming income. The training changed everything. Now I earn ₹3,000 monthly from mushroom cultivation and have become financially independent. My children can attend better schools, and I'm even training other women in my village.",
    impact: "300% Income Increase",
  },
  {
    name: "Dularas Kiski",
    location: "Hiranpur Block, Jharkhand",
    quote:
      "The training was excellent and the ongoing support helped me overcome initial challenges. Now I'm training other women in my village to start their own mushroom farms.",
    impact: "Community Leader",
  },
]

export function ProgramTestimonials({
  testimonials = defaultTestimonials,
  title = "Success Stories",
  description = "Hear from the individuals whose lives have been transformed through our programs.",
  badge = "Impact Stories",
  accentColor = "green",
}: ProgramTestimonialsProps) {
  const colorSchemes = {
    green: "from-green-600 via-emerald-600 to-teal-600",
    blue: "from-blue-600 via-indigo-600 to-blue-600",
    purple: "from-purple-600 via-violet-600 to-purple-600",
    orange: "from-orange-600 via-amber-600 to-orange-600",
  }

  const bgSchemes = {
    green: "from-green-50 via-emerald-50 to-teal-50",
    blue: "from-blue-50 via-indigo-50 to-blue-50",
    purple: "from-purple-50 via-violet-50 to-purple-50",
    orange: "from-orange-50 via-amber-50 to-orange-50",
  }

  const activeGrad = colorSchemes[accentColor]
  const activeBg = bgSchemes[accentColor]

  return (
    <section className={`py-24 bg-gradient-to-br ${activeBg} relative overflow-hidden`}>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-gradient-to-r ${activeGrad} opacity-10 rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r ${activeGrad} opacity-10 rounded-full blur-3xl animate-pulse delay-1000`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm border border-gray-100">
            <Star className={`h-5 w-5 text-${accentColor}-600 animate-pulse fill-current`} />
            <span className={`text-${accentColor}-800 font-bold text-xs uppercase tracking-widest`}>{badge}</span>
            <Star className={`h-5 w-5 text-${accentColor}-600 animate-pulse fill-current`} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeGrad}`}>
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            {description}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`w-12 h-1.5 bg-gradient-to-r from-transparent to-${accentColor}-500 rounded-full`}></span>
            <span className={`w-4 h-4 rounded-full bg-${accentColor}-500 shadow-lg shadow-${accentColor}-500/50`}></span>
            <span className={`w-12 h-1.5 bg-gradient-to-l from-transparent to-${accentColor}-500 rounded-full`}></span>
          </div>
        </div>

        {/* Testimonials Grid - Centered Flex */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-xl shadow-gray-200/50 hover:-translate-y-3 relative overflow-hidden flex flex-col w-full max-w-lg"
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${activeGrad}`}></div>

              <CardContent className="p-8 relative z-10 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-8">
                  <div className={`inline-flex p-4 bg-${accentColor}-50 rounded-2xl group-hover:bg-${accentColor}-500 group-hover:text-white transition-all duration-500`}>
                    <Quote className="h-6 w-6" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg mb-8 leading-relaxed italic font-medium flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author Section */}
                <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-${accentColor}-100 flex items-center justify-center text-${accentColor}-700 font-bold text-xl border-2 border-${accentColor}-200 shrink-0 shadow-inner`}>
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 text-lg truncate mb-0.5">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-medium flex items-center gap-1.5">
                      <svg className={`w-4 h-4 text-${accentColor}-500 shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{testimonial.location}</span>
                    </p>
                  </div>
                </div>

                {testimonial.impact && (
                  <div className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-${accentColor}-600 bg-${accentColor}-50 w-max px-3 py-1 rounded-full`}>
                    <span className={`w-1.5 h-1.5 rounded-full bg-${accentColor}-500 animate-pulse`}></span>
                    {testimonial.impact}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
