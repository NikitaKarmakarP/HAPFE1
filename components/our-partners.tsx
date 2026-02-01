"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import { useRef } from "react"

export function OurPartners() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const partners = [
    {
      name: "Government of Jharkhand",
      category: "Strategic Partnerships",
      logo: "/jharkhand-govt.png",
      description: "Partnering for inclusive growth and sustainable development in Jharkhand."
    },
    {
      name: "Government of West Bengal",
      category: "Government Partner",
      logo: "/wb-govt.png",
      description: "Strategic partnership for rural development initiatives across West Bengal."
    },

  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-blue-600 rounded-full mr-3"></div>
            <span className="text-blue-600 font-semibold uppercase tracking-wide">Partnerships</span>
            <div className="w-12 h-1 bg-blue-600 rounded-full ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with diverse organizations to amplify our impact and create sustainable solutions for community development.
          </p>
        </div>

        {/* Partners Carousel */}
        {/* Partners Grid */}
        <div className="mb-16 flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-1/3 max-w-sm">
              <div className="group relative h-full p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl transform rotate-1 scale-95 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Card className="relative h-full bg-white/80 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 rounded-2xl overflow-hidden border-0">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                  <CardHeader className="text-center pb-2 pt-8">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity" />
                      <div className="relative w-full h-full bg-gradient-to-br from-white to-blue-50 rounded-full flex items-center justify-center shadow-inner border border-blue-100 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                        {partner.logo.startsWith("/") ? (
                          <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover p-1 rounded-full" />
                        ) : (
                          <span className="text-4xl filter drop-shadow-sm transform group-hover:rotate-12 transition-transform duration-300">
                            {partner.logo}
                          </span>
                        )}
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-3 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {partner.name}
                    </CardTitle>

                    <div className="flex justify-center">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-colors duration-300 tracking-wide uppercase">
                        {partner.category}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-8 px-8">
                    <CardDescription className="text-center text-gray-600 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300 font-medium">
                      {partner.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}