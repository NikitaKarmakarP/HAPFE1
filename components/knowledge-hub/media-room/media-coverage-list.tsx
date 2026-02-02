"use client"

import { Calendar, ExternalLink, Newspaper, Tv, Radio, Globe, Search, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const mediaTypes = [
  { id: "all", label: "All Media", icon: Globe },
  { id: "print", label: "Print Media", icon: Newspaper },
  { id: "tv", label: "Television", icon: Tv },
  { id: "radio", label: "Radio", icon: Radio },
  { id: "online", label: "Online Media", icon: Globe },
]

const mediaCoverage = [
  {
    id: 1,
    title: "Featured on ETV Bharat Jharkhand",
    publication: "ETV Bharat",
    type: "tv",
    date: "2025-02-04",
    summary:
      "HAPEF's rural development work and community impact highlighted on regional television, focusing on sustainable agricultural practices.",
    url: "https://www.etvbharat.com/hi/!state/women-becoming-self-reliant-by-strawberry-and-mushroom-farming-in-pakur-jharkhand-news-jhs25020402231",
    image: "/media-etv-bharat.jpg",
  },
  {
    id: 2,
    title: "Documentary on DD National",
    publication: "DD National",
    type: "tv",
    date: "2025-02-05",
    summary:
      "30-minute documentary showcasing HAPEF's impact on rural communities aired nationally, featuring success stories from diverse beneficiaries.",
    url: "https://www.youtube.com/watch?v=KUQRnMppXKc",
    image: "/media-dd-national.jpg",
  },
]

export function MediaCoverageList() {
  const filteredCoverage = mediaCoverage

  const getTypeIcon = (type: string) => {
    const mediaType = mediaTypes.find((mt) => mt.id === type)
    return mediaType ? mediaType.icon : Globe
  }


  const getTypeColor = (type: string) => {
    switch (type) {
      case "print":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "tv":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "radio":
        return "bg-green-100 text-green-800 border-green-200"
      case "online":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-900">
            Media Coverage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore how HAPEF is making headlines and driving change across major media platforms.
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      {/* Search and Filter Bar Removed */}


      {/* Media Coverage Grid */}
      <div className="grid grid-cols-1 gap-8">
        <AnimatePresence>
          {filteredCoverage.map((item, index) => {
            const TypeIcon = getTypeIcon(item.type)
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 group bg-white">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 lg:w-1/4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.type === 'tv' && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <button
                            onClick={() => window.open(item.url, "_blank")}
                            className="bg-white/90 rounded-full p-3 shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pb-3 hover:bg-white"
                          >
                            <PlayCircle className="h-8 w-8 text-green-700" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className={`px-3 py-1 text-xs border ${getTypeColor(item.type)}`}>
                          <TypeIcon className="h-3 w-3 mr-1.5" />
                          {item.publication}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <Button
                          variant="ghost"
                          onClick={() => window.open(item.url, "_blank")}
                          className="text-green-700 hover:text-green-800 hover:bg-green-50 px-0 hover:px-4 transition-all"
                        >
                          Read Full Coverage
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>

                        <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                          {item.type} Media
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {filteredCoverage.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24 bg-gray-50 rounded-2xl border border-dashed border-gray-200"
        >
          <div className="bg-white p-4 rounded-full inline-block shadow-sm mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No media coverage found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We haven't added any media coverage items yet.
          </p>
        </motion.div>
      )}
    </div>
  )
}

