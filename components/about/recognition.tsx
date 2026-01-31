import { Award, Trophy, Star, Medal, Users } from "lucide-react"

export function Recognition() {
  const awards = [
    {
      title: "Excellence in Rural Development",
      organization: "Ministry of Rural Development, India",
      year: "2023",
      description:
        "Recognized for outstanding contribution to rural livelihood enhancement through innovative agricultural programs.",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      title: "Best NGO for Community Impact",
      organization: "West Bengal State Government",
      year: "2023",
      description: "Awarded for exceptional work in community empowerment and sustainable development initiatives.",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Innovation in Agriculture Award",
      organization: "Indian Council of Agricultural Research",
      year: "2022",
      description: "Honored for pioneering mushroom cultivation techniques and climate-resilient farming practices.",
      icon: Star,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Social Impact Recognition",
      organization: "United Nations Development Programme",
      year: "2022",
      description:
        "Acknowledged for significant contribution to poverty alleviation and sustainable development goals.",
      icon: Medal,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ]

  const partnerships = [
    {
      name: "Ministry of Rural Development",
      type: "Government Partnership",
      description: "Collaborative programs for rural livelihood enhancement",
    },
    {
      name: "NABARD",
      type: "Financial Institution",
      description: "Support for microfinance and rural development projects",
    },
    {
      name: "Indian Council of Agricultural Research",
      type: "Research Institution",
      description: "Technical collaboration for agricultural innovation",
    },
    {
      name: "West Bengal State Rural Livelihood Mission",
      type: "State Government",
      description: "Joint initiatives for community empowerment",
    },
  ]

  return (
    <section
      id="media-coverage"
      className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-amber-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/30 to-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-50/40 to-teal-50/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 px-5 py-2.5 rounded-full border border-yellow-200 shadow-sm mb-8 transform hover:scale-105 transition-transform duration-300">
            <Trophy className="h-5 w-5 text-yellow-600 animate-pulse" />
            <span className="text-sm font-semibold text-yellow-800 tracking-wide">Recognition & Awards</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Honors &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600">
              Recognition
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our unwavering dedication to rural development and community empowerment has been recognized by prestigious
            organizations across India, affirming our commitment to excellence.
          </p>

          <div className="mt-8 flex justify-center gap-2">
            <span className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-50"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full opacity-50"></span>
            <span className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full opacity-50"></span>
          </div>
        </div>

        {/* Awards Grid - Main Feature */}
        <div className="mb-24 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100 rounded-[2.5rem] blur-xl opacity-30"></div>
          <div className="max-w-5xl mx-auto relative transform transition-all hover:-translate-y-1 duration-500">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500 border border-gray-100">
              <div className="md:flex h-full">
                {/* Image Section */}
                <div className="md:w-1/2 relative h-72 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img
                    src="/aw.jpg"
                    alt="Award Ceremony"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r" />

                  {/* Overlay Badge on Image */}
                  <div className="absolute bottom-6 left-6 z-20 md:hidden">
                    <span className="inline-block px-4 py-1.5 bg-yellow-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                      Top Honor
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white relative">
                  <div className="hidden md:inline-flex items-center gap-2 bg-yellow-100/80 px-4 py-1.5 rounded-full w-fit mb-6">
                    <Trophy className="h-4 w-4 text-yellow-700" />
                    <span className="text-xs font-bold text-yellow-800 uppercase tracking-wide">Top Achievement</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-yellow-700 transition-colors duration-300">
                    Excellence in Rural Development
                  </h3>

                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <p className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 animate-gradient-x mb-1">
                      Department of Agriculture,
                    </p>
                    <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient-x">
                      District Agriculture, Animal Husbandry, and Allied Departments
                    </p>
                  </div>

                  <p className="text-gray-600 font-bold leading-relaxed mb-8 text-[15px]">
                    Recognized for outstanding participation and significant contribution in promoting agricultural awareness, encouraging innovative farming practices, and supporting farmer development through active involvement in the District Level Agriculture Exhibition, fostering knowledge sharing and sustainable agricultural growth.
                  </p>

                  <div className="flex items-center gap-6 mt-auto">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-700">District Level Recognition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                      <span className="text-sm font-bold text-gray-400">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Partnerships */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Strategic Partnerships</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">Collaborating with leading institutions to drive impact.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-slate-100 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:rotate-6 transition-transform duration-300">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">{partner.name}</h4>
                  <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full mb-4">
                    {partner.type}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Recognition
