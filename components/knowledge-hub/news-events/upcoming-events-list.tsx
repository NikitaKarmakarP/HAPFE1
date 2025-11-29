"use client"

import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function UpcomingEventsList() {

  const upcomingEvents = [
    {
      id: 1,
      title: "Blanket Distribution Drive",
      description: "A community-driven initiative to provide warmth and comfort to those in need during the winter season.",
      date: "2025-01-01",
      dateRange: "1-7 January",
      time: "10:00 AM - 2:00 PM",
      location: "Hiranpur, Pakur",
      participants: 50,
      category: "Community Meetings",
      featured: true,
      registrationOpen: true,
      image: "/placeholder.jpg"
    }
  ]

  const filteredEvents = upcomingEvents

  const getCategoryColor = (category: string) => {
    const colors = {
      "Training Workshops": "bg-blue-100 text-blue-800",
      "Community Meetings": "bg-green-100 text-green-800",
      "Health Camps": "bg-red-100 text-red-800",
      "Cultural Events": "bg-purple-100 text-purple-800",
      "Awareness Programs": "bg-yellow-100 text-yellow-800",
      "Skill Development": "bg-indigo-100 text-indigo-800",
      "Networking Events": "bg-pink-100 text-pink-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="w-full max-w-4xl">
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white border-0 ring-2 ring-green-500"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden h-64 md:h-full">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10 bg-gradient-to-br from-white via-green-50 to-green-50 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Badge className={`${getCategoryColor(event.category)} text-sm font-semibold px-4 py-1`}>
                      {event.category}
                    </Badge>
                    {event.featured && (
                      <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-sm font-semibold px-4 py-1">
                        ⭐ Featured
                      </Badge>
                    )}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
                    {event.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-white rounded-xl border-2 border-green-100">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">DATE</p>
                      <p className="text-base font-bold text-gray-900">{event.dateRange}</p>
                      <p className="text-sm text-gray-600">Wednesday, January 1, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">TIME</p>
                      <p className="text-base font-bold text-gray-900">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">LOCATION</p>
                      <p className="text-base font-bold text-gray-900">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">EXPECTED</p>
                      <p className="text-base font-bold text-gray-900">{event.participants}</p>
                      <p className="text-sm text-gray-600">participants</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Learn More
                  </Button>
                  {event.registrationOpen && (
                    <Button
                      size="lg"
                      className="flex-1 border-2 border-green-600 bg-white text-green-600 hover:bg-green-50 font-bold text-base py-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Register Now
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
