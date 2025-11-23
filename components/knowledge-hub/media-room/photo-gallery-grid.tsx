"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Eye, Download, X } from "lucide-react"

interface Photo {
  id: string
  title: string
  description: string
  image: string
  category: string
  date: string
  location: string
  photographer?: string
  tags: string[]
}

export function PhotoGalleryGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const photos: Photo[] = [
    {
      id: "1",
      title: "Mushroom Cultivation Training",
      description: "Farmers learning modern mushroom cultivation techniques in our training facility.",
      image: "/placeholder.svg?height=400&width=600&text=Mushroom+Training",
      category: "Programs",
      date: "2024-01-15",
      location: "Birbhum District",
      photographer: "HAPEF Team",
      tags: ["agriculture", "training", "mushroom", "farmers"],
    },
    {
      id: "2",
      title: "Community Health Camp",
      description: "Free health checkup camp organized for rural communities with medical professionals.",
      image: "/placeholder.svg?height=400&width=600&text=Health+Camp",
      category: "Community Events",
      date: "2024-01-20",
      location: "Purulia Village",
      photographer: "Dr. Sharma",
      tags: ["health", "community", "medical", "rural"],
    },
    {
      id: "3",
      title: "Women's Self-Help Group Meeting",
      description: "Monthly meeting of women's self-help group discussing microfinance and business opportunities.",
      image: "/placeholder.svg?height=400&width=600&text=SHG+Meeting",
      category: "Programs",
      date: "2024-01-25",
      location: "Bankura District",
      photographer: "Sunita Devi",
      tags: ["women", "empowerment", "microfinance", "business"],
    },
    {
      id: "4",
      title: "Climate-Smart Agriculture Workshop",
      description: "Farmers participating in hands-on training for drought-resistant farming techniques.",
      image: "/placeholder.svg?height=400&width=600&text=Climate+Agriculture",
      category: "Training Sessions",
      date: "2024-02-01",
      location: "Hooghly District",
      photographer: "HAPEF Team",
      tags: ["climate", "agriculture", "workshop", "sustainability"],
    },
    {
      id: "5",
      title: "New Water Pump Installation",
      description: "Installation of solar-powered water pump system for irrigation in drought-affected area.",
      image: "/placeholder.svg?height=400&width=600&text=Water+Pump",
      category: "Infrastructure",
      date: "2024-02-05",
      location: "Murshidabad District",
      photographer: "Engineering Team",
      tags: ["infrastructure", "water", "solar", "irrigation"],
    },
    {
      id: "6",
      title: "Leadership Team Meeting",
      description: "Quarterly leadership team meeting discussing program strategies and community feedback.",
      image: "/placeholder.svg?height=400&width=600&text=Leadership+Meeting",
      category: "Leadership",
      date: "2024-02-10",
      location: "HAPEF Office, Kolkata",
      photographer: "Admin Team",
      tags: ["leadership", "strategy", "meeting", "planning"],
    },
    {
      id: "7",
      title: "Children's Education Program",
      description: "Children participating in our after-school education and skill development program.",
      image: "/placeholder.svg?height=400&width=600&text=Education+Program",
      category: "Programs",
      date: "2024-02-15",
      location: "Nadia District",
      photographer: "Teacher Priya",
      tags: ["education", "children", "skills", "development"],
    },
    {
      id: "8",
      title: "Annual Celebration Event",
      description: "Community celebration marking the 5th anniversary of HAPEF with cultural performances.",
      image: "/placeholder.svg?height=400&width=600&text=Anniversary+Celebration",
      category: "Celebrations",
      date: "2024-02-20",
      location: "Community Center, Kolkata",
      photographer: "Event Team",
      tags: ["celebration", "anniversary", "culture", "community"],
    },
    {
      id: "9",
      title: "Organic Farming Training",
      description: "Demonstration of organic composting and natural pest control methods for sustainable farming.",
      image: "/placeholder.svg?height=400&width=600&text=Organic+Farming",
      category: "Training Sessions",
      date: "2024-02-25",
      location: "Bardhaman District",
      photographer: "Agricultural Expert",
      tags: ["organic", "farming", "composting", "sustainable"],
    },
  ]

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  return (
    <div>
      {/* Enhanced Photo Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {photos.map((photo, index) => (
          <Card key={photo.id} className="group hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 bg-gradient-to-br from-white via-white to-gray-50/50 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  onClick={() => openLightbox(photo)}
                />
                {/* Enhanced overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
                {/* Beautiful category badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 shadow-lg backdrop-blur-sm px-3 py-1">
                    {photo.category}
                  </Badge>
                </div>
                {/* Decorative corner element */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-gray-50/30">
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-1 text-lg group-hover:text-emerald-700 transition-colors duration-300">{photo.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{photo.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-emerald-500" />
                    <span className="font-medium">{new Date(photo.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-blue-500" />
                    <span className="truncate font-medium">{photo.location}</span>
                  </div>
                </div>
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Load More Button */}
      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 hover:border-emerald-300 hover:from-emerald-100 hover:to-blue-100 text-emerald-700 hover:text-emerald-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <Eye className="h-5 w-5 mr-2" />
          Load More Photos
        </Button>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedPhoto.image || "/placeholder.svg"}
                alt={selectedPhoto.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedPhoto.title}</h3>
                    <p className="text-gray-600 mb-4">{selectedPhoto.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{new Date(selectedPhoto.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{selectedPhoto.location}</span>
                  </div>
                  {selectedPhoto.photographer && (
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Photographer:</span>
                      <span className="font-medium">{selectedPhoto.photographer}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{selectedPhoto.category}</Badge>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-gray-600 text-sm">Tags:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedPhoto.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
