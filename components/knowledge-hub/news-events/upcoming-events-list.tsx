"use client"

import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function UpcomingEventsList() {

  const upcomingEvents = [
    {
      id: 1,
      title: "Farmers Field School",
      description: "A community-driven initiative to provide warmth and comfort to those in need during the winter season.",
      date: "2026-03-31",
      dateRange: "31 March",
      fullDate: "Tuesday, March 31, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "Hiranpur, Pakur",
      participants: 50,
      category: "Community Meetings",
      featured: true,
      registrationOpen: true,
      image: "/upcoming-blanket-drive.jpg"
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
            className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 rounded-2xl group"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden h-72 md:h-full">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors z-10" />
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <Badge className={`${getCategoryColor(event.category)} shadow-sm backdrop-blur-md border-0`}>
                    {event.category}
                  </Badge>
                  {event.featured && (
                    <Badge className="bg-orange-500 text-white shadow-sm border-0">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-50 text-green-600 rounded-lg shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{event.dateRange}</p>
                        <p className="text-xs text-gray-500">{event.fullDate}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{event.time}</p>
                        <p className="text-xs text-gray-500">Duration: 4 Hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{event.location}</p>
                        <p className="text-xs text-gray-500">Pakur District</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-50 text-purple-600 rounded-lg shrink-0">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{event.participants} Participants</p>
                        <p className="text-xs text-gray-500">Expected Turnout</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
