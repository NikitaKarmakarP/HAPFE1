import { Newspaper, Tv, Radio, Globe } from "lucide-react"

export function MediaCoverageHero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Newspaper className="h-12 w-12" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Media Coverage</h1>
        </div>
      </div>
    </div>
  )
}
