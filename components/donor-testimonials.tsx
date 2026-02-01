"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import Link from "next/link"

export function DonorTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-green-600 rounded-full mr-3"></div>
            <span className="text-green-600 font-semibold uppercase tracking-wide">Testimonials</span>
            <div className="w-12 h-1 bg-green-600 rounded-full ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-green-600">Donors Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued donors and partners about their experience supporting our mission and the impact they've witnessed.
          </p>
        </div>

        {/* Testimonials Card (Single) */}
        <div className="mb-16 max-w-2xl mx-auto">
          <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
            <CardHeader className="p-8 pb-4">
              {/* Quote Icon and Rating */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-10 h-10 text-green-600 opacity-60" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-xl md:text-2xl leading-relaxed italic font-medium">
                "I’ve supported HAPEF for three years and have been highly satisfied with their work. I truly appreciate their community-driven approach and consistent communication, which clearly shows the positive change they are making."
              </blockquote>
            </CardHeader>

            <CardContent className="p-8 pt-4">
              {/* Donor Info */}
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center text-3xl mr-5 shadow-inner">
                  👨‍💼
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Sougata Nandi</h4>
                  <p className="text-green-600 font-semibold">Individual Donor</p>
                  <p className="text-gray-500 text-sm">Long-term Supporter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Community of Changemakers
            </h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Your support can transform lives and communities. Start your journey of impact with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                  Donate Now
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}