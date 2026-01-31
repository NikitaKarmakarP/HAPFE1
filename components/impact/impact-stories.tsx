import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ImpactStories() {
  const stories = [
    {
      name: "Punam Devi",
      location: "Pakur District, Jharkhand",
      program: "Mushroom Entrepreneurship",
      story:
        "Before joining HAPEF's mushroom program, I struggled to support my family of four with just my husband's farming income. The training changed everything. Now I earn ₹3,000 monthly from mushroom cultivation and have become financially independent. My children can attend better schools, and I'm even training other women in my village.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "300% income increase",
      rating: 5,
      beforeIncome: "₹0",
      afterIncome: "₹3,000",
    },
    {
      name: "Ram Kumar",
      location: "Hiranpur Block, Jharkhand",
      program: "Climate-Resilient Agriculture",
      story:
        "Climate change was destroying our traditional farming methods. HAPEF taught us drought-resistant techniques and crop diversification. Our village now has food security year-round, and water usage has reduced by 40%. The entire community has benefited from these sustainable practices.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "60% yield increase",
      rating: 5,
      beforeIncome: "₹25,000",
      afterIncome: "₹45,000",
    },
    {
      name: "Sunita Kumari",
      location: "Pakur District, Jharkhand",
      program: "Community Leadership",
      story:
        "I was just a housewife with no voice in community decisions. Through HAPEF's leadership program, I learned to speak up, organize, and lead. Today, I'm the village head and have initiated several development projects. I've helped establish a women's self-help group that now has 50 members.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "Community leader",
      rating: 5,
      beforeIncome: "₹0",
      afterIncome: "₹12,000",
    },
  ]

  return (
    <section id="stories-of-transformation" className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-green-100/20 to-teal-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-emerald-100/20 to-green-50/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100/50 px-4 py-2 rounded-full border border-green-200 mb-6 backdrop-blur-sm">
            <Quote className="h-4 w-4 text-green-700" />
            <span className="text-sm font-semibold text-green-800 tracking-wide uppercase">Real Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Transformation</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Behind every statistic is a human story of courage, determination, and transformation. Meet some of the
            incredible people whose lives have been changed through HAPEF's programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 bg-white relative overflow-hidden flex flex-col h-full hover:-translate-y-2 rounded-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-8 relative">
                  <Quote className="h-10 w-10 text-green-100 absolute -top-4 -left-2 transform -scale-x-100" />
                  <p className="text-gray-600 leading-relaxed italic relative z-10 text-lg">"{story.story}"</p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-6 pt-6 border-t border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center text-green-700 font-bold text-xl ring-4 ring-white shadow-sm">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-green-700 transition-colors">{story.name}</h4>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {story.location.split(',')[0]}
                      </div>
                      <p className="text-xs font-semibold text-teal-600 mt-0.5 uppercase tracking-wide">{story.program}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100 shadow-inner group-hover:border-green-100 transition-colors">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Monthly Income</span>
                      <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">{story.impact}</span>
                    </div>

                    <div className="flex items-center justify-between relative">
                      {/* Connecting Line */}
                      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>

                      <div className="text-center bg-white px-2 relative z-0">
                        <div className="text-xs text-gray-400 mb-1 font-medium">Before</div>
                        <div className="font-bold text-gray-600 text-lg">{story.beforeIncome}</div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-white border border-green-100 flex items-center justify-center shadow-sm text-green-500">
                        <ArrowRight className="h-4 w-4" />
                      </div>

                      <div className="text-center bg-white px-2 relative z-0">
                        <div className="text-xs text-green-600 mb-1 font-bold">After</div>
                        <div className="font-bold text-green-700 text-xl">{story.afterIncome}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50 px-0 hover:px-4 transition-all duration-300 font-medium group/btn"
                        >
                          Read Full Story <ArrowRight className="ml-1 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center text-green-700 font-bold text-2xl ring-4 ring-white shadow-sm">
                              {story.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <DialogTitle className="text-2xl font-bold text-gray-900">{story.name}</DialogTitle>
                              <DialogDescription className="text-gray-500">{story.location}</DialogDescription>
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {story.program}
                          </div>
                          <div className="relative pl-6 border-l-4 border-green-200">
                            <Quote className="h-8 w-8 text-green-100 absolute -top-2 -left-3 bg-white" />
                            <p className="text-gray-700 text-lg leading-relaxed italic">"{story.story}"</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mt-6 bg-gray-50 p-6 rounded-xl">
                            <div>
                              <p className="text-sm text-gray-500 font-medium uppercase">Impact Metric</p>
                              <p className="text-2xl font-bold text-green-600">{story.impact}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 font-medium uppercase">Financial Growth</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="line-through text-gray-400 text-sm">{story.beforeIncome}</span>
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                <span className="text-xl font-bold text-gray-900">{story.afterIncome}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            View All Success Stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
