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
      name: "Government of Jharkhand",
      type: "Strategic Partnership",
      logo: "/jharkhand-govt.png",
      description: "Partnering for inclusive growth and sustainable development in Jharkhand.",
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
        <div className="mb-24">
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <h3 className="relative inline-block text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-600 to-emerald-900 mb-6 tracking-tight">
              Strategic Partnerships
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50"></div>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed mt-8">
              Collaborating with leading institutions to drive impact.
            </p>
          </div>

          <div className="flex justify-center px-4">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-[3rem] p-2 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] transition-all duration-700 max-w-5xl w-full"
              >
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-[3rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700 -z-10"></div>

                <div className="bg-gradient-to-br from-white via-emerald-50/20 to-white rounded-[2.5rem] p-8 md:p-16 h-full flex flex-col md:flex-row items-center gap-12 relative overflow-hidden backdrop-blur-xl border border-white/50">

                  {/* Decorative background logo opacity */}
                  <div className="absolute -right-24 -top-24 w-[30rem] h-[30rem] bg-gradient-to-br from-emerald-100/30 to-teal-50/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply"></div>

                  <div className="relative shrink-0 group-hover:-translate-y-2 transition-transform duration-700">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center relative z-10 p-8 border-[6px] border-emerald-50/50">
                      {/* Actual Govt Logo */}
                      <div className="relative w-full h-full p-2">
                        <img
                          src={partner.logo}
                          alt="Government of Jharkhand Logo"
                          className="w-full h-full object-contain filter hover:brightness-110 transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold uppercase tracking-[0.25em] px-6 py-2.5 rounded-full shadow-xl whitespace-nowrap z-20 border-2 border-white ring-4 ring-emerald-100">
                      Official Partner
                    </div>
                  </div>

                  <div className="text-center md:text-left flex-1 relative z-10 pt-6 md:pt-0">
                    <div className="inline-flex items-center gap-3 mb-6 bg-emerald-50 px-5 py-2 rounded-full border border-emerald-100 shadow-sm">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase">{partner.type}</span>
                    </div>

                    <h4 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                      {partner.name}
                    </h4>

                    <div className="relative">
                      <span className="absolute -left-6 -top-6 text-8xl text-emerald-100 serif font-serif select-none pointer-events-none">"</span>
                      <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium italic relative z-10 pl-2">
                        {partner.description}
                      </p>
                    </div>
                  </div>
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
