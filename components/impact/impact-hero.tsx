import { TrendingUp, Users, MapPin, Award } from "lucide-react"

export function ImpactHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm mb-6">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Measuring Our Impact</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming Lives
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Across Rural India
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every number tells a story of hope, resilience, and positive change. Discover how HAPEF's programs are
            creating lasting impact in rural communities across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Lives Impacted */}
          <div className="text-center group p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6 inline-block relative">
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20 group-hover:opacity-40 animate-pulse rounded-full"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Users className="h-10 w-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 mb-3 tracking-tight">
              5000+
            </div>
            <div className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">Lives Impacted</div>
            <div className="text-sm text-gray-500 font-medium">Direct beneficiaries</div>
          </div>

          {/* Programs */}
          <div className="text-center group p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6 inline-block relative">
              <div className="absolute inset-0 bg-purple-400 blur-xl opacity-20 group-hover:opacity-40 animate-pulse rounded-full"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <MapPin className="h-10 w-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-fuchsia-600 mb-3 tracking-tight">
              4
            </div>
            <div className="text-xl font-bold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors">Programs</div>
            <div className="text-sm text-gray-500 font-medium">Active initiatives</div>
          </div>

          {/* Districts */}
          <div className="text-center group p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6 inline-block relative">
              <div className="absolute inset-0 bg-orange-400 blur-xl opacity-20 group-hover:opacity-40 animate-pulse rounded-full"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Award className="h-10 w-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-600 mb-3 tracking-tight">
              2
            </div>
            <div className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-700 transition-colors">Districts</div>
            <div className="text-sm text-gray-500 font-medium">Regional presence</div>
          </div>
        </div>
      </div>
    </section>
  )
}
