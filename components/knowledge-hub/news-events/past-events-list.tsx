"use client"

import { Calendar, Clock, MapPin, Users, Award, Download } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export function PastEventsList() {

  const pastEvents = [
    {
      id: 1,
      title: "Blanket Distribution Drive",
      date: "2026-01-09",
      time: "10:00 AM - 2:00 PM",
      location: "Hiranpur, Pakur",
      category: "Community Meetings",
      participants: 50,
      description:
        "A community-driven initiative to provide warmth and comfort to those in need during the winter season.",
      image: "/blanket-drive-2025.jpg",
      outcomes: "Provided warmth and comfort to those in need.",
      materials: ["Event Report", "Photos"],
      featured: true,
      year: "2026",
    },
  ]





  const getCategoryColor = (category: string) => {
    const colors = {
      "Training Workshops": "bg-blue-100 text-blue-800",
      "Community Meetings": "bg-green-100 text-green-800",
      "Health Camps": "bg-red-100 text-red-800",
      "Cultural Events": "bg-purple-100 text-purple-800",
      "Awareness Programs": "bg-yellow-100 text-yellow-800",
      "Skill Development": "bg-indigo-100 text-indigo-800",
      "Awards & Recognition": "bg-pink-100 text-pink-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      {/* Search Bar */}


      {/* Events List */}
      <div className="space-y-6">
        {pastEvents.map((event) => (
          <Card
            key={event.id}
            className={`group text-left overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 ${event.featured
              ? "bg-gradient-to-br from-white via-indigo-50/30 to-blue-50/30 ring-1 ring-blue-200 shadow-blue-100/50"
              : "bg-white hover:bg-gray-50/50 ring-1 ring-gray-100"
              }`}
          >
            <div className="md:flex h-full">
              <div className="md:w-1/3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full min-h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2">
                    <Badge className={`${getCategoryColor(event.category)} shadow-lg backdrop-blur-md`}>
                      {event.category}
                    </Badge>
                    {event.featured && (
                      <Badge className="bg-gradient-to-r from-orange-400 to-pink-500 text-white border-0 shadow-lg animate-pulse">
                        <Award className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-8 flex flex-col">
                <div className="mb-6">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <Badge variant="outline" className="shrink-0 text-gray-500 border-gray-300">
                      {event.year}
                    </Badge>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-600 bg-white/60 p-4 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <span className="font-medium">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                        <Clock className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                        <Users className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{event.participants} participants</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-6">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="flex items-center gap-2 font-semibold text-amber-900 mb-2">
                      <Award className="h-4 w-4 text-amber-600" />
                      Key Outcomes
                    </h4>
                    <p className="text-gray-700 font-medium">{event.outcomes}</p>
                  </div>


                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {pastEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No past events found.</div>
        </div>
      )}
    </div>
  )
}
