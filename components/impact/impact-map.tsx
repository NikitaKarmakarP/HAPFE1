"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Globe, Sparkles, Navigation } from "lucide-react"

export function ImpactMap() {
  const regions = [
    {
      name: "Pakur District",
      state: "Hiranpur Block, Jharkhand",
      color: "from-green-500 to-emerald-600",
      bgLight: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-100",
      description: "Focusing on resilient agriculture and community empowerment in remote tribal regions."
    },
    {
      name: "Kolkata Region",
      state: "South 24 Parganas, West Bengal",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
      description: "Supporting rural families through training hubs and resource centers in West Bengal."
    },
  ]

  return (
    <section id="geographic-impact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-6">
            <Globe className="h-4 w-4 text-emerald-600 animate-spin-slow" />
            <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wider">Our Presence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Geographic Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our programs span across multiple regions, creating a network of sustainable development and community empowerment. We focus primarily on Pakur, Jharkhand and South 24 Parganas, West Bengal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7368.123456789!2d87.8333!3d24.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzAwLjAiTiA4N8KwNTAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HAPEF Impact Areas Map"
                className="grayscale-[20%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-emerald-100 flex items-center gap-2">
                <Navigation className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-bold text-gray-800">Operational Areas</span>
              </div>
            </div>
          </div>

          {/* Regions Section */}
          <div className="space-y-8">
            {regions.map((region, index) => (
              <Card 
                key={index} 
                className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl transform hover:-translate-y-2`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className={`w-full md:w-4 bg-gradient-to-b ${region.color}`}></div>
                    <div className="flex-1 p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 ${region.bgLight} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                          <MapPin className={`h-8 w-8 ${region.iconColor}`} />
                        </div>
                        <Sparkles className="h-6 w-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {region.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <p className="text-emerald-700 font-semibold text-sm tracking-wide uppercase">
                          {region.state}
                        </p>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {region.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}
