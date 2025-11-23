import { Camera, Sparkles, Heart, Users } from "lucide-react"

export function PhotoGalleryHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 text-emerald-400 animate-bounce">
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="absolute top-32 right-32 text-blue-400 animate-bounce delay-300">
        <Heart className="h-6 w-6" />
      </div>
      <div className="absolute bottom-32 left-16 text-purple-400 animate-bounce delay-700">
        <Users className="h-7 w-7" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 via-white/80 to-white/90 backdrop-blur-lg px-6 py-3 rounded-full border border-emerald-200/50 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <Camera className="h-5 w-5 text-emerald-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-semibold text-emerald-800 tracking-wide uppercase">Visual Stories</span>
          </div>

          {/* Enhanced heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
              Photo Gallery
            </span>
            {/* Animated underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            {/* Decorative sparkles */}
            <div className="absolute -top-4 -left-6 text-yellow-400 animate-bounce">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="absolute -top-2 -right-6 text-emerald-400 animate-bounce delay-500">
              <Sparkles className="h-5 w-5" />
            </div>
          </h1>
        </div>
      </div>
    </section>
  )
}
