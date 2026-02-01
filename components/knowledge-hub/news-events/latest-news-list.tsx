import { Calendar, Clock, User, Tag, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const newsArticles = [
  {
    id: 1,
    title: "Local Farmers Achieve 300% Income Increase Through HAPEF's Mushroom Program",
    excerpt:
      "Success stories from rural communities showcase the transformative impact of sustainable mushroom cultivation training and ongoing support.",
    content:
      "In a remarkable demonstration of community empowerment, farmers participating in HAPEF's Mushroom Entrepreneurship Program have reported an average income increase of 300% within their first year...",
    author: "Sarah Johnson",
    date: "2024-01-18",
    readTime: "5 min read",
    category: "Success Stories",
    tags: ["Mushroom Farming", "Income Generation", "Rural Development"],
    featured: true,
    views: 1250,
    likes: 89,
    image: "/placeholder.svg?height=300&width=600",
  },
]


export function LatestNewsList() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="space-y-12 py-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <Card className="overflow-hidden border-0 shadow-xl bg-white max-w-5xl mx-auto group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-70" />
              <img
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-medium text-white">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-orange-50/50 to-white">
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                  {new Date(featuredArticle.date).toLocaleDateString()}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-orange-500" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-xs">
                    {featuredArticle.author.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{featuredArticle.author}</span>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg transition-all rounded-full px-6">
                    Read Full Article
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-50">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Regular Articles */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {regularArticles.map((article) => (
          <Card key={article.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <div className="grid md:grid-cols-4 gap-0">
              <div className="md:col-span-1 relative overflow-hidden h-48 md:h-full">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:col-span-3 p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium">
                      Read More <span className="ml-1">→</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {regularArticles.length === 0 && !featuredArticle && (
        <div className="text-center py-12 text-gray-500">No news articles found.</div>
      )}
    </div>
  )
}

