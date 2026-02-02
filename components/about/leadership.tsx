"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Linkedin, GraduationCap, Calendar, Users, Award, Target, X, MapPin, Phone, Globe, Star, Sparkles, Tv, Monitor, Quote } from "lucide-react"

const executiveTeam = [
  {
    name: "Kanchan Kumar Mandal",
    role: "Cluster Coordinator",
    image: "/k.jpg",
    bio: "Empowering rural communities through sustainable agriculture, convergence, and livelihood initiatives.",
    details: `Kanchan Kumar Mandal is currently working with HAPEF as a Cluster Coordinator, where he plays a key role in empowering rural communities through sustainable agriculture, convergence, and livelihood initiatives. With over a decade of grassroots experience, he has worked with renowned organizations such as the World Health Organization, Evidence Action, Sathee and Aangan Trust, and Action for Social Advancement, contributing to impactful projects including polio eradication campaigns, coverage evaluation surveys, child safety programs, prevalence studies, and livelihood promotion. A graduate in Sociology (Hons.) from K.K.M. College, Pakur, Kanchan is skilled in livelihood development, field monitoring, data analysis, and community mobilization. His strong analytical mindset, deep commitment to rural development, and ability to engage communities make him a driving force behind HAPEF’s mission of creating long-term positive change.`,
    email: "",
    linkedin: "https://www.linkedin.com/in/sneha-roy-048b7520a/",
    expertise: ["Livelihood Development", "Field Monitoring", "Community Mobilization"],
  },
]

const boardMembers = [
  {
    name: "Bappa Mridha",
    role: "Founder & Director",
    designation: "Founder & Director",
    image: "/bappa.jpg",
    bio: "Visionary leader driving HAPEF's mission to transform rural communities through sustainable development and innovative solutions.",
    details: `Bappa Mridha is the Founder and Director of HAPEF. He holds a Master’s degree in Agriculture and Rural Development from the Ramakrishna Mission Vivekananda Educational and Research Institute, and is currently pursuing a Master of Social Work from IGNOU. With over five years of experience in the livelihood and regenerative agriculture sectors, his expertise includes smallholder agriculture, entrepreneurship, natural resource management, and the formation of farmer collectives for agri-value chain integration. He is currently associated with PRADAN and has previously contributed to various CSR initiatives and government development projects.`,
    email: "bappa.hapef@gmail.com",
    linkedin: "https://www.linkedin.com/in/bappa-mridha-42b73a207/",
    experience: "Rural Development Pioneer",
    specialization: "Community Empowerment & Leadership",
  },
  {
    name: "Annyesha Purkait",
    role: "Co-founder & Director",
    designation: "Co-founder & Director",
    image: "/ann.jpg",
    bio: "Co-founder & Director with experience spanning government and non-profit sectors.",
    details: `Annyesha Purkait is the Co-founder and Director of HAPEF. She is currently working as a Young Professional at the National Institute of Disaster Management (NIDM), Ministry of Home Affairs, Government of India. She holds a Master’s degree in Environment and Disaster Management from the Ramakrishna Mission Vivekananda Educational and Research Institute and is presently pursuing a Master of Social Work from IGNOU. With over three years of hands-on experience across both government and non-profit sectors, she has worked extensively on project coordination, training design and delivery, stakeholder engagement and disaster risk reduction & environmental advocacy. She was previously associated with SwitchON Foundation, where she built clean air networks and before that with Sarva Seva Samity Sanstha (4S India), where she oversaw multi-state operations.`,
    email: "annyesha.hapef@gmail.com",
    linkedin: "https://www.linkedin.com/in/annyesha-purkait-2a561a1b8/",
    experience: "Program Development, DRR, Environmental Advocacy",
    specialization: "Stakeholder Engagement & Training",
  },
  {
    name: "Sourav Bhanja",
    role: "Co-founder & Director",
    designation: "Co-founder & Director",
    image: "/sourav.jpg",
    bio: "Dedicated to building sustainable agricultural programs and fostering community partnerships for lasting impact.",
    details: `Sourav Bhanja is the Co-founder and Director of HAPEF. He holds a Bachelor's degree in Civil Engineering. With experience in implementing sustainable development projects, his expertise includes watershed development, rainwater conservation, and community-based livelihood enhancement. He is currently working on the Jharkhand Jalchhajan Yojana, a watershed development initiative, across 20 villages in the Khunti block of Khunti district, Jharkhand. Previously, Sourav worked as a Block Coordinator in a welfare project under PRADAN.`,
    email: "sourav@hapef.org",
    linkedin: "https://www.linkedin.com/in/sneha-roy-048b7520a/",
    experience: "Agricultural Development Specialist",
    specialization: "Sustainable Agriculture & Partnerships",
  },
  {
    name: "Bapi Mridha",
    role: "Co-founder & Director",
    designation: "Co-founder & Director",
    image: "/bapi.jpg",
    bio: "Co-founder and Director of HAPEF, dedicated to transforming the agricultural landscape.",
    details: `Bapi Mridha, Co-founder and Director of HAPEF, is a visionary leader dedicated to transforming the agricultural landscape. He holds a Diploma degree in Agriculture Science and Management from the University of Kalyani and is currently pursuing a Master of Social Work from IGNOU, further enhancing his expertise in creating sustainable impact. With extensive experience in livelihood and regenerative agriculture sectors, he has  expertise in smallholder agriculture, entrepreneurship, climate-resilient agriculture, and farmer collective formation. Currently, he is associated with PRADAN, driving innovative solutions to empower rural communities.`,
    email: "bapi.hapef@gmail.com",
    linkedin: "https://www.linkedin.com/in/bapi-mridha-3561b829a/",
    experience: "Entrepreneurship Development Leader",
    specialization: "Skill Development & Innovation",
  },
]

const advisoryBoard = [
  {
    name: "Dr. Bikash Ghosh",
    role: "Advisory Member, HAPEF Ex-Professor, Bidhan Chandra Krishi Viswavidyalaya",
    institution: "Bidhan Chandra Krishi Viswavidyalaya",
    image: "/Bikash.jpg",
    bio: "Ex-Professor, Bidhan Chandra Krishi Viswavidyalaya",
    details: `Dr. Bikash Ghosh is an Advisory Member of HAPEF. He is a renowned horticulturist and retired Professor from the Department of Fruits and Orchard Management at Bidhan Chandra Krishi Viswavidyalaya, West Bengal. With over four decades of experience in academics, research, and fieldwork, he has made significant contributions to fruit crop husbandry, particularly in mango, citrus, guava, litchi, and ber. He has mentored numerous M.Sc. and Ph.D. scholars and has published more than 40 research papers in reputed journals. Dr. Ghosh has led and collaborated on major projects funded by ICAR, DBT, and the Department of Food Processing Industries and Horticulture. His work on orchard rejuvenation, crop regulation, and organic nutrition has had a lasting impact on both the scientific community and farming practices. He has represented India at international symposia in countries including Indonesia, Portugal, China, and Thailand. Dr. Ghosh has actively contributed to academic collaboration with Bangladesh by presenting a paper at an international symposium in Maymensingh in 2009 and serving as an external Ph.D. thesis evaluator for Khulna University in 2016. He continues to advise academic institutions, serve as a thesis examiner, and contribute actively to national horticultural development initiatives.`,
    email: "sk.mishra@hapef.org",
    linkedin: "https://www.linkedin.com/in/sneha-roy-048b7520a/",
    expertise: ["Agricultural Research", "Innovation Strategy", "Technology Transfer"],
    achievements: "50+ Research Publications, National Agriculture Award",
  },
  {
    name: "Dr. Lavanya Sravani Bulguri",
    role: "Advisory Member, HAPEF Ph.D Agricultural Entomology, Bidhan Chandra Krishi Viswavidyalaya",
    institution: "Bidhan Chandra Krishi Viswavidyalaya",
    image: "/l.jpg",
    bio: "Ph.D Agricultural Entomology, Bidhan Chandra Krishi Viswavidyalaya",
    details: `Dr. Lavanya Sravani Bulguri is an advisory member of HAPEF. She holds a doctoral degree in Agricultural Entomology from Bidhan Chandra Krishi Viswavidyalaya (BCKV), West Bengal. Her expertise spans several key areas, including eco-friendly stored grain pest management, ecological pest management of chilli, insect rearing and biocontrol agent production, fruit fly mass production, and honeybee rearing and handling. During her Master's degree at Central Agricultural University, Imphal, she was awarded the University Gold Medal. Dr. Bulguri has also contributed to academia as a part-time lecturer at the Susurijo Institute of Agricultural Science, Technology and Management in West Bengal and RNB Global University in Rajasthan. A life member of the Society for Biocontrol Advancement, she has received numerous honors for her contributions to Agricultural Entomology. In 2019, she was awarded the Birth Anniversary Celebration Award for Distinction in the Study of Agriculture by the Maharaja Narasingh Memorial Committee, Imphal. Dr. Bulguri's commitment to her field is further demonstrated by her extensive publications, including articles and book chapters, as well as her active participation in conferences, workshops, and training programs.`,
    expertise: [
      "Eco-friendly Stored Grain Pest Management",
      "Ecological Pest Management (Chilli)",
      "Insect Rearing & Biocontrol Production"
    ],
    achievements: "University Gold Medal; Honors in Agricultural Entomology; Extensive publications",
  },
]

const interns = [
  {
    name: "Sneha Roy",
    role: "Development Internship Trainee",
    university: "Jadavpur University (M.A in Sociology)",
    duration: "2 months",
    image: "/oo.jpg",
    bio: "Sociology student skilled in research methodology, fieldwork, data analysis, and community mobilization.",
    details: `Sneha Roy is pursuing her M.A in Sociology from Jadavpur University, with a strong academic foundation in research methodology, fieldwork, and data analysis. Her internship experience includes working on migration cases, hands-on experience with a community-led Bio-Resource Unit, and mushroom farming. She's gained hands-on experience in community mobilization, sustainable agriculture, and rural entrepreneurship through her work with Self-Help Groups and village institutions, building a strong foundation in rural development and inclusive community participation.`,
    email: "",
    linkedin: "https://www.linkedin.com/in/sneha-roy-048b7520a/",
    focus: ["Research Methodology", "Fieldwork", "Data Analysis", "Community Mobilization", "Sustainable Agriculture"],
    startDate: "May 2024",
  },
  {
    name: "Nikita Karmakar",
    role: "Development Internship Trainee (Full-stack Developer)",
    university: "Netaji Subhash Engineering College (Garia)",
    duration: "6 months",
    image: "/nikita.jpg",
    bio: "",
    details: `Nikita Karmakar is the Development Internship Trainee (Full-stack Developer) at HAPEF. She holds a B.Tech in Computer Science & Engineering from Netaji Subhash Engineering College (Garia). Nikita's expertise includes programming languages like Java, JavaScript, and Python, as well as front-end and back-end development frameworks. She's proficient in databases like MongoDB and MySQL, and tools like Git, GitHub, and Docker. Nikita also has knowledge of machine learning with TensorFlow and OpenCV. With strong analytical and collaboration skills, she handles website designing, content creation, and documentation, leveraging her technical skills to drive innovation and adaptability in her role.`,
    email: "nikita.intern@hapef.org",
    linkedin: "https://www.linkedin.com/in/nikita-karmakar/",
    focus: ["JavaScript", "React", "Node.js", "MongoDB", "MySQL"],
    startDate: "February 2024",
  },
  {
    name: "Sunandini Das",
    role: "Development Internship Trainee",
    university: "Presidency University, Kolkata",
    duration: "3 months",
    image: "/s.jpg",
    bio: "Sociology student skilled in qualitative and quantitative research, data analysis, and social impact reporting.",
    details: `Sunandini Das is a highly motivated Sociology student currently pursuing a Bachelor of Arts from Presidency University, Kolkata. Her academic coursework has provided her with strong skills in qualitative and quantitative research, data analysis, and report writing. She is proficient in tools such as MS Word, Excel, SPSS, and PowerPoint. Previously, Sunandini worked with orphanages and old age homes to identify their needs, collected and analyzed data for project evaluation, prepared social impact reports, and contributed to developing community support programs. Sunandini has also published a paper in Narthaki titled "The use of Mudras in Odissi dance: A symbolic language of expression and spirituality". Her strong research skills are further demonstrated through her BA dissertation, "Constraints of Tradition: Odissi Dance and Pedagogy". In addition to her research work, she was a core committee member of the Presidency University Dance Forum and the Eastern Dance Society, where she organized events and managed teams, demonstrating leadership skills.`,
    email: "priyanka.intern@hapef.org",
    linkedin: "https://www.linkedin.com/in/sunandinidas/",
    focus: ["Qualitative Research", "Quantitative Research", "Data Analysis"],
    startDate: "February 2025",
  },
  {
    name: "Paramita Dey",
    role: "Development Internship Trainee",
    university: "IGNOU (MSW); B.Com (Accounts Hons)",
    duration: "1 month",
    image: "/paro.jpg",
    bio: "Development Internship Trainee supporting documentation, coordination, communication, and operations for field projects.",
    details: `Paramita Dey is a Development Internship Trainee at HAPEF. She is pursuing a Master of Social Work (MSW) from IGNOU, after completing her B.Com (Accounts Hons) degree. During her internship, she has provided administrative support, documentation, communication, coordination, and operations management for various field-level projects. Paramita gained practical experience in program documentation, administrative coordination, community-level communication, and operational support by working closely with field teams and grassroots institutions. Through this internship, she has built a strong foundation in rural development practice, with a focus on inclusive community participation, efficient program management, and livelihood promotion.`,
    email: "",
    linkedin: "https://www.linkedin.com/in/sneha-roy-048b7520a/",
    focus: ["Program Documentation", "Administrative Coordination", "Community Communication", "Operations Support", "Livelihood Promotion", "Inclusive Participation"],
    startDate: "—",
  },
  {
    name: "Debasish Saha",
    role: "Development Internship Trainee",
    university: "IGNOU (MSW)",
    duration: "1 month",
    image: "/de.jpg",
    bio: "Worked on migration-affected cases, co-developed a Bio-Resource Unit, and conducted sessions on organic farming and financial planning.",
    details: `Debasish Saha is a Development Internship Trainee at HAPEF. He is pursuing Master of Social Work (MSW) from IGNOU. During his 30-day field internship, he worked on migration-affected cases, co-developed a community-led Bio-Resource Unit, and conducted sessions on organic farming and financial planning for grassroots communities. He gained hands-on experience in community mobilization, participatory planning, and livelihood promotion while working with Self-Help Groups (SHGs) and village institutions. This exposure enhanced his skills in sustainable agriculture, rural entrepreneurship, and inclusive community development. Through this internship, he built a strong foundation in rural development practice, with a focus on sustainable agriculture, livelihood enhancement, and inclusive community participation.`,
    email: "",
    linkedin: "https://www.linkedin.com/in/debasish-saha/",
    focus: ["Community Mobilization", "Participatory Planning", "Livelihood Promotion", "Sustainable Agriculture", "Rural Entrepreneurship", "Inclusive Development"],
    startDate: "—",
  }
]

export function Leadership() {
  const [selectedMember, setSelectedMember] = useState<any>(null)

  const openMemberDetails = (member: any) => {
    setSelectedMember(member)
  }

  const closeMemberDetails = () => {
    setSelectedMember(null)
  }

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles className="h-6 w-6 text-blue-600 animate-pulse" />
            <span className="text-blue-800 font-semibold text-lg">Meet Our Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x">
              Leadership
            </span>
            <span className="text-gray-900"> Team</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the visionary leaders and dedicated professionals who guide HAPEF's mission to transform rural communities through sustainable development and innovative solutions.
          </p>
        </div>

        {/* Executive Leadership Team */}
        <div id="executive-team" className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-6">
              <Star className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Executive Leadership</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Core Leadership
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our executive team driving day-to-day operations and strategic initiatives with passion and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-8">
            {executiveTeam.map((member, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                onClick={() => openMemberDetails(member)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600 p-1 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{member.name}</h4>
                    <p className="text-green-600 font-semibold mb-3 text-sm uppercase tracking-wide">{member.role}</p>
                  </div>



                  <div className="flex justify-center space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent border-green-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `mailto:${member.email}`
                      }}
                    >
                      <Mail className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(member.linkedin, '_blank')
                      }}
                    >
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </Button>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👁</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div id="board-directors" className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full mb-6">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Board of Directors</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Strategic Governance
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence and sustainability through visionary governance and oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                onClick={() => openMemberDetails(member)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardContent className="p-6 relative z-10">
                  <div className="relative mb-6">
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 p-1 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>

                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">{member.name}</h4>
                    <p className="text-blue-600 font-semibold mb-2 text-xs uppercase tracking-wide">{member.role}</p>
                  </div>

                  <div className="flex justify-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1 bg-transparent border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 px-3 py-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `mailto:${member.email}`
                      }}
                    >
                      <Mail className="h-3 w-3 text-blue-600" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1 bg-transparent border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 px-3 py-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(member.linkedin, '_blank')
                      }}
                    >
                      <Linkedin className="h-3 w-3 text-indigo-600" />
                    </Button>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👁</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div id="advisory-board" className="mb-20 scroll-mt-28">
          <div className="text-center mb-12 relative">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-purple-50/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 shadow-md mb-6">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700 tracking-wider uppercase">Advisory Board</span>
              <Star className="h-4 w-4 text-purple-500" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-rose-600 drop-shadow-sm mb-4">
              Advisory Board
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advisors providing strategic guidance and specialized knowledge
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></span>
              <span className="w-2 h-2 rounded-full bg-purple-500/70 shadow-md"></span>
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
            {advisoryBoard.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white hover:scale-105 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 p-1">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white cursor-pointer"
                        onClick={() => openMemberDetails(member)}
                      />
                    </div>

                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-purple-600 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.institution}</p>
                  </div>



                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email {member.name}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {member.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Interns */}
        <div id="our-interns" className="mb-20 scroll-mt-28">
          <div className="text-center mb-12 relative">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-orange-50/90 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200 shadow-md mb-6">
              <Sparkles className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700 tracking-wider uppercase">Our Interns</span>
              <Users className="h-4 w-4 text-orange-500" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-amber-600 to-rose-600 drop-shadow-sm mb-4">
              Our Interns
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented young professionals bringing fresh perspectives and innovative ideas
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></span>
              <span className="w-2 h-2 rounded-full bg-orange-500/70 shadow-md"></span>
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {interns.map((intern, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-white opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-1">
                      <img
                        src={intern.image || "/placeholder.svg"}
                        alt={intern.name}
                        className="w-full h-full rounded-full object-cover bg-white cursor-pointer"
                        onClick={() => openMemberDetails(intern)}
                      />
                    </div>

                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{intern.name}</h4>
                    <p className="text-orange-600 font-medium mb-1">{intern.role}</p>
                    <p className="text-sm text-gray-500 mb-1">{intern.university}</p>
                    <p className="text-xs text-gray-400 mb-3">{intern.duration}</p>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(intern.linkedin || '#', '_blank');
                      }}
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {intern.name}</span>
                    </Button>
                  </div>


                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Notable Interns */}
        <div id="our-notable-interns" className="mb-20">
          <div className="text-center mb-12 relative">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-emerald-50/90 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg mb-6">
              <Users className="h-6 w-6 text-emerald-600 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-800 tracking-wide uppercase">Words From Our Interns</span>
              <Star className="h-5 w-5 text-emerald-500" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
                Words From Our Interns
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Exceptional individuals who have made significant contributions to our mission
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500/70 shadow-md"></span>
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[

              {
                name: "Nikita Karmakar",
                role: "Development Internship Trainee (Full-stack Developer)",
                university: "Netaji Subhash Engineering College (Garia)",
                image: "/nikita.jpg",
                quote: "Working here provided me with incredible hands-on experience in full-stack development. I was able to contribute to real-world projects that directly impact rural livelihoods.",
                startDate: "February 2026",
                linkedin: "https://www.linkedin.com/in/nikita-karmakar/",
              },
              {
                name: "Sneha Roy",
                role: "Development Internship Trainee",
                university: "Jadavpur University (M.A in Sociology)",
                image: "/oo.jpg",
                quote: "I’ve had the opportunity to learn through fieldwork in Pakur, engaging with the extremely underserved communities, gaining a deeper understanding of how mushroom cultivation and sustainable agriculture support and quietly transform livelihood generation.",
                startDate: "February 2026",
                linkedin: "https://www.linkedin.com/in/sneha-roy-048b7520a/",
              },

            ].map((intern, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Decorative Quote Icon Background */}
                <div className="absolute top-2 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-24 w-24 text-emerald-600 rotate-12" />
                </div>

                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-emerald-50 shadow-md">
                        <img
                          src={intern.image}
                          alt={intern.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 border-2 border-white">
                        <Quote className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 leading-tight">{intern.name}</h4>
                      <p className="text-sm text-emerald-600 font-medium">{intern.role}</p>
                      <p className="text-xs text-gray-400">{intern.university}</p>
                    </div>
                  </div>

                  <div className="relative flex-grow">
                    <Quote className="absolute -top-2 -left-2 h-4 w-4 text-emerald-300 opacity-50 transform -scale-x-100" />
                    <p className="text-gray-700 italic leading-relaxed pl-4 border-l-2 border-emerald-200">
                      "{intern.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1 text-emerald-400" />
                      {intern.startDate}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(intern.linkedin || '#', '_blank');
                        }}
                      >
                        <Linkedin className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Internship Program CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Join Our Internship Program</h3>
            <p className="text-xl mb-8 opacity-90">
              Are you passionate about rural development and social impact? Join our dynamic team and gain hands-on
              experience in creating meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved/internship">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Apply for Internship
                </Button>
              </Link>
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                >
                  Learn About Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Media Coverage Section */}
        <div id="media-coverage" className="mt-20 mb-16 scroll-mt-28">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg mb-8">
              <Monitor className="h-6 w-6 text-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Media Coverage</span>
              <Tv className="h-5 w-5 text-blue-500" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                Media Coverage
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our work has been featured in leading media outlets, showcasing our impact on rural communities across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Featured on ETV Bharat Jharkhand */}
            <a
              href="https://www.etvbharat.com/hi/!state/women-becoming-self-reliant-by-strawberry-and-mushroom-farming-in-pakur-jharkhand-news-jhs25020402231"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer block"
            >
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Tv className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Featured on ETV Bharat Jharkhand
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Television
                    </span>
                  </div>
                  <div className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                    February 2025
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    HAPEF's rural development work and community impact highlighted on regional television.
                  </p>
                </div>
              </div>
            </a>

            {/* Documentary on DD National */}
            <a
              href="https://www.youtube.com/watch?v=KUQRnMppXKc"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-white via-teal-50/30 to-green-50/30 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer block"
            >
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-teal-500 via-teal-600 to-green-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-teal-400 rounded-2xl animate-ping opacity-20"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                      Documentary on DD National
                    </h4>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      Television
                    </span>
                  </div>
                  <div className="text-teal-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                    February 2025
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    30-minute documentary showcasing HAPEF's impact on rural communities aired nationally.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Member Details Modal */}
        <Dialog open={!!selectedMember} onOpenChange={(open) => { if (!open) closeMemberDetails() }}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl border border-transparent bg-white/90 backdrop-blur-xl shadow-2xl ring-1 ring-black/5">
            {/* Decorative gradient glows */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-16 -right-16 h-56 w-56 bg-gradient-to-tr from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-2xl rounded-full" />
              <div className="absolute -bottom-12 -left-12 h-56 w-56 bg-gradient-to-tr from-emerald-400/20 via-blue-400/20 to-teal-400/20 blur-2xl rounded-full" />
            </div>

            {/* Close button */}
            <button
              aria-label="Close"
              onClick={closeMemberDetails}
              className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:outline-none"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Photo & quick actions */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-indigo-500/30 blur-lg" />
                  <div className="relative w-44 h-44 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
                    <img
                      src={(selectedMember?.image as string) || "/placeholder.jpg"}
                      alt={(selectedMember?.name as string) || "Member"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>


              </div>

              {/* Details */}
              <div className="md:col-span-2 p-8">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-extrabold tracking-tight">
                    <span className="text-gray-900">{selectedMember?.name}</span>
                  </DialogTitle>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                      {(selectedMember as any)?.role || (selectedMember as any)?.designation}
                    </span>
                  </div>
                </DialogHeader>

                <div className="mt-5">
                  <p className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">
                    {(selectedMember as any)?.details || selectedMember?.bio}
                  </p>
                </div>





                {/* Divider */}
                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* Secondary quick actions removed per request */}
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  )
}

export default Leadership

