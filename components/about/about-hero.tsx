"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Heart, Sparkles, Award, Globe, Sprout, BookOpen, Briefcase, GraduationCap, Mail, Linkedin, Eye, Star, TrendingUp, Lightbulb, Shield, Zap, Leaf, Building, UserCheck, Calendar, MapPin, Network, Handshake, Cpu, BookOpenCheck, Layers, BarChart3 } from "lucide-react"

export function AboutHero() {
  return (
    <section
      id="overview"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-40"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Beautiful & Clean */}
          <div className="space-y-8">
            {/* Elegant badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg">
              <Heart className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-800 tracking-wide">About HAPEF</span>
              <Sparkles className="h-4 w-4 text-emerald-500" />
            </div>

            {/* Beautiful title */}
            <div className="space-y-6 relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-sm"></div>
              <div className="absolute -top-2 -right-8 w-4 h-4 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-sm"></div>

              <h1 className="relative text-5xl lg:text-7xl font-bold leading-tight">
                {/* Main empowering text with enhanced gradient */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-600 via-teal-600 to-blue-700 drop-shadow-lg">
                  Empowering
                </span>

                {/* Rural Communities with beautiful styling */}
                <span className="block text-gray-900 text-4xl lg:text-5xl mt-4 font-bold">
                  Rural Communities
                </span>

                {/* Enhanced decorative flourish */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full shadow-xl shadow-emerald-500/40"></div>
                  <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-lg shadow-green-400/30"></div>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                </div>
              </h1>
            </div>

            {/* Elegant description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              HAPEF (Humanitarian Action for Poverty Eradication Foundation) is dedicated to creating sustainable pathways out of poverty for rural communities across India through innovative agricultural programs, community empowerment, and holistic development approaches.
            </p>

            {/* Beautiful buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/programs">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2">
                    Our Programs
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>

              <Link href="/impact">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2">
                    <Target className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    View Impact
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Beautiful Image */}
          <div className="relative group -mt-8">
            {/* Main image with elegant styling */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img
                src="/a1.jpg"
                alt="HAPEF team working with rural community members"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating elegant cards */}
            <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Community Driven</div>
                  <div className="text-sm text-emerald-600 font-medium">Grassroots Approach</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Sustainable Impact</div>
                  <div className="text-sm text-blue-600 font-medium">Long-term Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>









        {/* Our Story Section - Enhanced Beautiful Design */}
        <div id="our-story" className="mt-32 relative overflow-hidden">
          {/* Beautiful background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-sm"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Story Header */}
            <div className="text-center mb-20 relative">
              {/* Decorative elements around header */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-xl"></div>

              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-200/60 shadow-xl mb-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-bold text-blue-800 tracking-wider uppercase">Our Story</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>

              <div className="relative">
                <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-green-600 via-emerald-500 to-purple-600 drop-shadow-sm">
                    Our Journey
                  </span>

                  {/* Beautiful underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-400/40 animate-pulse"></div>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  </div>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-8">
                  From small beginnings to big change – discover how HAPEF has grown into a source of hope for rural communities across India.
                </p>
              </div>
            </div>

            {/* Enhanced Story Content with Image */}
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
              {/* Left Content - Enhanced Story Text */}
              <div className="space-y-8 relative">
                {/* Subtle background decoration */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-lg"></div>

                <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-blue-100/50 shadow-xl">
                  <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                    <p>
                      HAPEF was founded in 2022 by five young visionaries, inspired by two motivated young professionals, <span className="font-bold text-blue-600">Bappa Mridha</span> and <span className="font-bold text-purple-600">Annyesha Purkait</span>, who are committed here to transform the lives of rural communities through holistic and sustainable development. Established with the vision of eradicating poverty and promoting inclusive growth, HAPEF works tirelessly to uplift the most vulnerable and marginalized populations by ensuring access to dignified livelihoods, quality healthcare, environmental sustainability, and socio-economic empowerment.
                    </p>
                    <p>
                      HAPEF’s work on the ground focuses on the states of <span className="font-bold text-emerald-600">Jharkhand</span> and <span className="font-bold text-emerald-600">West Bengal</span>, targeting underserved and remote rural regions where development needs are urgent and multifaceted. These regions remain the heart of our work and a living example of the transformative potential of grassroots action.
                    </p>
                    <p>
                      Our professionals believe that grassroots work, driven by a strong commitment to giving back to society, empowers rural communities by creating innovative solutions in agriculture, climate change, and gender equality. We aim to build a future where every individual, regardless of socio-economic background, has the opportunity to thrive and lead a life of dignity.
                    </p>
                  </div>
                </div>


              </div>

              {/* Right Content - Enhanced Story Image */}
              <div className="relative group">
                {/* Enhanced main image with beautiful styling */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 transform group-hover:-rotate-1">
                  <img
                    src="/our.jpg"
                    alt="HAPEF founders working with rural community members in the field"
                    className="w-full h-[450px] lg:h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced floating story cards */}
                <div className="absolute -top-12 -left-8 bg-gradient-to-br from-white/70 to-blue-50/70 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-blue-200/40 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:rotate-2">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl">
                      <Sprout className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Grassroots Origin</div>
                      <div className="text-sm text-blue-600 font-semibold">Community-Driven Start</div>
                      <div className="text-xs text-blue-500 mt-1">From the ground up</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-8 bg-gradient-to-br from-white/70 to-purple-50/70 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-purple-200/40 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-2">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-xl">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Rapid Growth</div>
                      <div className="text-sm text-purple-600 font-semibold">Expanding Impact</div>
                      <div className="text-xs text-purple-500 mt-1">Scaling success</div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* Beautiful Mission Section */}
        <div className="mt-32 text-center relative">
          {/* Elegant background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-white/80 to-blue-50/50 rounded-3xl backdrop-blur-sm"></div>

          <div className="relative z-10 py-16 px-8">
            {/* Mission header */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg mb-8">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-800 tracking-wide uppercase">Our Mission</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-blue-600">
                  Transforming Lives
                </span>
                <span className="block text-gray-900 mt-2">Through Sustainable Development</span>
              </h2>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-5xl mx-auto">
                To eradicate rural poverty through sustainable agricultural practices, community empowerment, and
                innovative development programs that respect local knowledge while introducing modern techniques for
                lasting positive change.
              </p>
            </div>

            {/* Beautiful value cards */}
            <div className="grid md:grid-cols-3 gap-8 px-4">
              {/* Card 1: Community First */}
              <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] transition-all duration-500 border border-emerald-50 hover:-translate-y-2 z-10 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-green-100 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-50 to-transparent rounded-tr-[100%] transition-transform duration-500 group-hover:scale-110"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-emerald-200 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 mx-auto">
                    <Users className="h-9 w-9 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    Community First
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-medium">
                    Putting communities at the center of all our development initiatives with participatory approaches.
                  </p>

                  <div className="mt-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="h-1 w-12 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Card 2: Sustainable Solutions */}
              <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-500 border border-blue-50 hover:-translate-y-2 z-10 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-50 to-transparent rounded-tr-[100%] transition-transform duration-500 group-hover:scale-110"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-blue-200 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 mx-auto">
                    <Target className="h-9 w-9 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Sustainable Solutions
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-medium">
                    Creating long-term impact through environmentally conscious practices and innovative technologies.
                  </p>

                  <div className="mt-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="h-1 w-12 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Card 3: Holistic Development */}
              <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500 border border-purple-50 hover:-translate-y-2 z-10 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-pink-100 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-50 to-transparent rounded-tr-[100%] transition-transform duration-500 group-hover:scale-110"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-purple-200 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 mx-auto">
                    <GraduationCap className="h-9 w-9 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Holistic Development
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-medium">
                    Addressing multiple aspects of rural life for comprehensive growth and sustainable transformation.
                  </p>

                  <div className="mt-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="h-1 w-12 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mt-32">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full mb-8">
              <Target className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Our Vision</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                A World Where Every
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Rural Family Thrives
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
              We envision a future where every rural family has access to sustainable livelihoods, food security, and the opportunity to thrive through dignified work and community support.
            </p>
          </div>

          {/* Vision Content */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Vision Text */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 lg:p-12 border border-blue-100">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Our Vision for the Future
                  </span>
                </h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    At HAPEF, we envision a world where rural communities do more than survive; they <span className="font-semibold text-blue-600">thrive</span>. Every family should have access to sustainable livelihoods, quality education, healthcare and modern technology, enabling them to build secure and dignified lives.
                  </p>
                  <p>
                    We aim to see villages grow into <span className="font-semibold text-blue-600">vibrant centers of progress</span>, where traditional wisdom meet with modern solutions, promoting holistic development and creating sustainable models that can be replicated across India and beyond.
                  </p>
                </div>
              </div>

              {/* Right Column - Vision Cards */}
              <div className="space-y-8">
                {/* Sustainable Livelihoods Card */}
                <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] transition-all duration-500 border border-emerald-50 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-green-100 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="shrink-0 bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Sprout className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                        Sustainable Livelihoods
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        Creating lasting economic opportunities for rural families.
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Food Security Card */}
                <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] transition-all duration-500 border border-blue-50 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        Food Security
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        Ensuring every family has access to nutritious food.
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section - Enhanced Beautiful Design */}
        <div className="mt-32 relative overflow-hidden">
          {/* Beautiful background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-emerald-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-rose-300 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-emerald-200/30 to-rose-200/30 rounded-full blur-sm"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Values Header */}
            <div className="text-center mb-20 relative">
              {/* Decorative elements around header */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-emerald-100/50 to-rose-100/50 rounded-full blur-xl"></div>

              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/95 to-emerald-50/95 backdrop-blur-sm px-8 py-4 rounded-full border border-emerald-200/60 shadow-xl mb-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-bold text-emerald-800 tracking-wider uppercase">Our Values</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-rose-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>

              <div className="relative">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 drop-shadow-sm">
                    The Principles That
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 drop-shadow-sm mt-2">
                    Guide Our Work
                  </span>

                  {/* Beautiful underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                    <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-rose-500 rounded-full shadow-lg shadow-emerald-400/40 animate-pulse"></div>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                  </div>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mt-8">
                  Our values form the foundation of our work. They guide our decisions, shape our initiatives, and help us stay committed to our mission of serving rural communities.
                </p>
              </div>
            </div>

            {/* Enhanced Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {/* Sustainability */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:-translate-y-3 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Sprout className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-emerald-700 transition-colors duration-300">Sustainability</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We prioritize long-term environmental and social impact over short-term gains.</p>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Community Empowerment */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:-translate-y-3 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">Community Empowerment</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We believe in building self-reliant communities that can drive their own development.</p>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Transparency */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:-translate-y-3 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Eye className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-700 transition-colors duration-300">Transparency</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We maintain open and honest communication in all our operations and partnerships.</p>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-purple-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Innovation */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:-translate-y-3 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-700 transition-colors duration-300">Innovation</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We continuously seek creative solutions to address complex rural challenges.</p>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Dignity */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:-translate-y-3 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-rose-700 transition-colors duration-300">Dignity</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We respect and uphold the dignity and rights of all rural communities.</p>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-rose-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Excellence */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-yellow-100 hover:-translate-y-3 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-yellow-700 transition-colors duration-300">Excellence</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We strive for the highest standards in all our programs and initiatives.</p>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Strategic Approach Section */}
        <div className="mt-32 relative overflow-hidden">
          {/* Beautiful background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-emerald-300 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-gradient-to-br from-indigo-200/30 to-emerald-200/30 rounded-full blur-sm"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Strategic Approach Header */}
            <div className="text-center mb-20 relative">
              {/* Decorative elements around header */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-indigo-100/50 to-emerald-100/50 rounded-full blur-xl"></div>

              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/95 to-indigo-50/95 backdrop-blur-sm px-8 py-4 rounded-full border border-indigo-200/60 shadow-xl mb-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-bold text-indigo-800 tracking-wider uppercase">Our Strategic Approach</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>

              <div className="relative">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 drop-shadow-sm">
                    Strategic Framework for
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 drop-shadow-sm mt-2">
                    Sustainable Impact
                  </span>

                  {/* Beautiful underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
                    <div className="w-3 h-3 bg-gradient-to-br from-indigo-400 to-emerald-500 rounded-full shadow-lg shadow-indigo-400/40 animate-pulse"></div>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  </div>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mt-8">
                  Our strategic approach combines innovative methodologies with proven development practices to create lasting positive change in rural communities across India.
                </p>
              </div>
            </div>

            {/* Strategic Pillars Grid */}
            {/* Strategic Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 px-4">
              {/* Strategic Partnerships */}
              <div className="group relative bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.2)] transition-all duration-500 border border-indigo-50 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-indigo-200 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Handshake className="h-9 w-9 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-indigo-700 transition-colors duration-300">Strategic Partnerships</h3>
                  <p className="text-gray-600 text-center leading-relaxed font-medium">Building strong collaborations with government agencies, NGOs, and community organizations to maximize our impact.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Community-Led Development */}
              <div className="group relative bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.2)] transition-all duration-500 border border-emerald-50 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-emerald-200 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    <Users className="h-9 w-9 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-emerald-700 transition-colors duration-300">Community-Led Development</h3>
                  <p className="text-gray-600 text-center leading-relaxed font-medium">Empowering local communities to take ownership of their development journey and create sustainable solutions.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Innovation & Technology */}
              <div className="group relative bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)] transition-all duration-500 border border-blue-50 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-blue-200 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Cpu className="h-9 w-9 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">Innovation & Technology</h3>
                  <p className="text-gray-600 text-center leading-relaxed font-medium">Leveraging modern agricultural techniques and digital tools to enhance productivity and market access.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Knowledge Transfer */}
              <div className="group relative bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] transition-all duration-500 border border-orange-50 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-orange-200 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    <BookOpenCheck className="h-9 w-9 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-700 transition-colors duration-300">Knowledge Transfer</h3>
                  <p className="text-gray-600 text-center leading-relaxed font-medium">Creating comprehensive training programs that build skills and knowledge for long-term success.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Scalable Solutions */}
              <div className="group relative bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.2)] transition-all duration-500 border border-purple-50 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-purple-200 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Layers className="h-9 w-9 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-700 transition-colors duration-300">Scalable Solutions</h3>
                  <p className="text-gray-600 text-center leading-relaxed font-medium">Developing replicable models that can be adapted and implemented across different regions.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Impact Measurement */}
              <div className="group relative bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(20,184,166,0.2)] transition-all duration-500 border border-teal-50 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-teal-200 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    <BarChart3 className="h-9 w-9 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-teal-700 transition-colors duration-300">Impact Measurement</h3>
                  <p className="text-gray-600 text-center leading-relaxed font-medium">Implementing robust monitoring and evaluation systems to track progress and demonstrate results.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Our Strategic Impact Stats - Simply Beautiful */}
            <div className="relative py-12">
              <div className="text-center mb-16 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-emerald-100/50 to-blue-100/50 rounded-full blur-2xl"></div>

                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50/80 to-blue-50/80 backdrop-blur-sm px-6 py-2 rounded-full border border-emerald-100 shadow-sm mb-6 hover:shadow-md transition-shadow duration-300">
                  <BarChart3 className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">Key Outcomes</span>
                </div>

                <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-blue-700 drop-shadow-sm">
                    Our Strategic Impact
                  </span>
                </h3>

                <div className="relative inline-block">
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                    Measurable results that demonstrate the effectiveness of our strategic approach
                  </p>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Families Empowered */}
                {/* Families Empowered */}
                <div className="text-center group">
                  <div className="mb-6 inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Users className="h-9 w-9 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-green-500 mb-3 tracking-tight">
                    5000+
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">Families Empowered</div>
                  <div className="text-sm text-gray-500 font-medium">Direct beneficiaries of our programs</div>
                </div>

                {/* Villages Reached */}
                <div className="text-center group">
                  <div className="mb-6 inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      <MapPin className="h-9 w-9 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500 mb-3 tracking-tight">
                    40+
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">Villages Reached</div>
                  <div className="text-sm text-gray-500 font-medium">Communities across multiple states</div>
                </div>

                {/* Years of Service */}
                <div className="text-center group">
                  <div className="mb-6 inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Calendar className="h-9 w-9 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 mb-3 tracking-tight">
                    3+
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">Years of Service</div>
                  <div className="text-sm text-gray-500 font-medium">Continuous community impact</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Link href="/impact">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="flex items-center gap-2 text-base font-medium">
                      Explore Our Impact
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
