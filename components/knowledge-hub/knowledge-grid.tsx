import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Download, Eye } from "lucide-react"

interface Resource {
  type: string
  title: string
  description: string
  category: string
  image: string
  author?: string
  date?: string
  views?: number
  downloads?: number
}

export function KnowledgeGrid() {
  const resources: Resource[] = [
    {
      type: "photo",
      title: "Complete Mushroom Cultivation Manual",
      description: "Step-by-step guide for setting up and managing oyster mushroom cultivation units",
      category: "Agriculture",
      image: "/mushroom-manual-new.jpg",
    },
    {
      type: "photo",
      title: "Community Engagement Best Practices",
      description: "Learn effective strategies for engaging rural communities in development programs",
      category: "Community Development",
      image: "/community-engagement.jpg",
    },
    {
      type: "photo",
      title: "Success Story: Priya's Mushroom Enterprise",
      description: "How one woman transformed her family's livelihood through mushroom farming",
      category: "Success Stories",
      image: "/priya-success.jpg",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 mb-6 group cursor-default shadow-sm">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Fresh Content</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="text-gray-900">Latest </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Resources
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Stay updated with our newest guides, training materials, and success stories from the field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {resource.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-blue-600 font-medium">{resource.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  )
}
