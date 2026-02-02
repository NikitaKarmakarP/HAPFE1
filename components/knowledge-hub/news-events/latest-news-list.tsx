"use client"
import { Calendar, Clock, User, Tag, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
    image: "/local-farmers-mushroom.jpg",
  },
]


export function LatestNewsList() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="space-y-12 py-8">



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

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div></div>

                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg transition-all rounded-full px-6">
                        Read Full Article
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[95vh] p-0 overflow-hidden border-0 shadow-3xl bg-white rounded-2xl">
                      <div className="overflow-y-auto h-full max-h-[95vh]">
                        <div className="relative h-80 md:h-[500px] w-full group">
                          <img
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            className="object-cover w-full h-full brightness-95 group-hover:brightness-100 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-3xl">
                            <div className="flex items-center gap-3 mb-4">
                              <span className="bg-orange-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">{featuredArticle.category}</span>

                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2 tracking-tight font-serif">{featuredArticle.title}</h2>

                          </div>
                        </div>

                        <div className="p-8 md:p-16 max-w-4xl mx-auto">
                          <div className="prose prose-lg prose-slate max-w-none">
                            <p className="lead text-xl md:text-2xl text-gray-700 font-medium mb-10 border-l-4 border-orange-500 pl-6 italic leading-relaxed">
                              {featuredArticle.excerpt}
                            </p>
                            <div className="text-gray-800 leading-8 whitespace-pre-wrap text-lg font-light tracking-wide">
                              {featuredArticle.content}
                            </div>
                          </div>


                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-50"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: featuredArticle.title,
                          text: featuredArticle.excerpt,
                          url: window.location.href,
                        }).catch(console.error);
                      } else {
                        // Fallback copy to clipboard
                        navigator.clipboard.writeText(window.location.href);
                      }
                    }}
                  >
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

