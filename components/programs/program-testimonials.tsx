import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export function ProgramTestimonials() {
  const testimonials = [
    {
      name: "Punam Devi",
      location: "Hiranpur Block, Jharkhand",
      quote:
        "Before joining HAPEF's mushroom program, I struggled to support my family of four with just my husband's farming income. The training changed everything. Now I earn ₹3,000 monthly from mushroom cultivation and have become financially independent. My children can attend better schools, and I'm even training other women in my village.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      impact: "300% income increase",
    },
    {
      name: "Dularas Kiski",
      location: "Hiranpur Block, Jharkhand",
      quote:
        "The training was excellent and the ongoing support helped me overcome initial challenges. Now I'm training other women in my village to start their own mushroom farms.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      impact: "Community leader",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg border border-green-200">
            <Star className="h-5 w-5 text-green-600 animate-pulse" />
            <span className="text-green-800 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <Star className="h-5 w-5 text-green-600 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from the entrepreneurs who have transformed their lives through our mushroom cultivation program.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="w-16 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></span>
            <span className="w-16 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Decorative Quote Background */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote className="h-32 w-32 text-green-600 rotate-12" />
              </div>

              <CardContent className="p-8 relative z-10">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Quote className="h-6 w-6 text-green-600" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg mb-8 leading-relaxed italic font-medium border-l-4 border-green-500 pl-4">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 text-xl mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.location}
                  </p>
                </div>


              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
