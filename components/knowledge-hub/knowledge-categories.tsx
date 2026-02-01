import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Users, BookOpen, Video, Download, MessageCircle, ArrowRight } from "lucide-react"

export function KnowledgeCategories() {
  const categories = [
    {
      icon: Sprout,
      title: "Agriculture & Farming",
      description: "Sustainable farming techniques, mushroom cultivation guides, and climate-resilient practices",
      count: "25 Resources",
      color: "from-emerald-500 to-green-600",
      lightColor: "bg-emerald-50 text-emerald-600",
      shadow: "shadow-emerald-100/50",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Community engagement strategies, leadership development, and social impact methodologies",
      count: "18 Resources",
      color: "from-blue-500 to-indigo-600",
      lightColor: "bg-blue-50 text-blue-600",
      shadow: "shadow-blue-100/50",
    },
    {
      icon: BookOpen,
      title: "Training Materials",
      description: "Comprehensive training modules, workshop guides, and educational content for programs",
      count: "30 Resources",
      color: "from-purple-500 to-violet-600",
      lightColor: "bg-purple-50 text-purple-600",
      shadow: "shadow-purple-100/50",
    },
    {
      icon: Video,
      title: "Video Library",
      description: "Training videos, success stories, and documentary content from our field work",
      count: "25 Videos",
      color: "from-rose-500 to-red-600",
      lightColor: "bg-rose-50 text-rose-600",
      shadow: "shadow-rose-100/50",
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Forms, templates, reports, and other downloadable resources for program implementation",
      count: "15 Files",
      color: "from-orange-500 to-amber-600",
      lightColor: "bg-orange-50 text-orange-600",
      shadow: "shadow-orange-100/50",
    },
    {
      icon: MessageCircle,
      title: "Success Stories",
      description: "Real stories from beneficiaries, case studies, and impact documentation",
      count: "20 Stories",
      color: "from-teal-500 to-cyan-600",
      lightColor: "bg-teal-50 text-teal-600",
      shadow: "shadow-teal-100/50",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6 group cursor-default shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Organized Knowledge</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="text-gray-900">Resource </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Categories
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Explore our comprehensive collection of resources organized by category to help you find exactly what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`group relative border-0 shadow-xl hover:shadow-2xl ${category.shadow} transition-all duration-500 cursor-pointer rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md hover:-translate-y-2`}
            >
              <CardContent className="p-10 relative z-10">
                {/* Glowing Icon Container */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  {category.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className={`px-4 py-1.5 ${category.lightColor} rounded-full text-xs font-bold tracking-tight shadow-sm`}>
                    {category.count}
                  </span>
                </div>
              </CardContent>

              {/* Subtle background glow on hover */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
