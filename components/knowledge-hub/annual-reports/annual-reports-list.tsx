import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileCheck2, Calendar, Users, Briefcase, MapPin } from "lucide-react"

type Report = {
  year: number
  slug: string
  title: string
  summary: string
  pdfUrl: string
  coverImage: string
  metrics: { label: string; value: string; icon: "users" | "briefcase" | "map" }[]
  highlights: string[]
}

const iconMap = {
  users: <Users className="h-4 w-4" />,
  briefcase: <Briefcase className="h-4 w-4" />,
  map: <MapPin className="h-4 w-4" />,
}

const reports: Report[] = [
  {
    year: 2025,
    slug: "2024-2025",
    title: "Annual Report 2024-2025",
    summary:
      "Highlights of our programs, outreach, and audited financials for the fiscal year 2024-2025.",
    pdfUrl: "#",
    coverImage: "/annual-report-cover.jpg",
    metrics: [
      { label: "Lives Impacted", value: "5,000+", icon: "users" },
      { label: "Programs", value: "4", icon: "briefcase" },
      { label: "Districts", value: "2", icon: "map" },
    ],
    highlights: [
      "Strengthened monitoring and evaluation systems",
      "Expanded training for micro-entrepreneurs",
      "Enhanced partnerships and resource mobilization",
    ],
  },

]

export function AnnualReportsList() {
  return (
    <section id="reports" className="py-12">
      <div className="space-y-8">
        {reports.map((report) => (
          <Card
            key={report.year}
            id={`report-${report.slug}`}
            className="border-0 shadow-xl overflow-hidden group"
          >
            <CardHeader className="pb-2 bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/20">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">{report.title}</CardTitle>
                    <div className="flex items-center gap-2 text-blue-100 text-xs">
                      <Calendar className="h-3.5 w-3.5" /> FY {report.slug}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Badge className="bg-white/20 text-white">Audited</Badge>
                  <Badge className="bg-white/20 text-white">Impact</Badge>
                  <Badge className="bg-white/20 text-white">Finance</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Cover */}
                <div className="relative rounded-xl overflow-hidden md:col-span-1">
                  <img
                    src={report.coverImage}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-black/5" />
                </div>

                {/* Summary + metrics */}
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-relaxed mb-4">{report.summary}</p>

                  <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {report.metrics.map((m, i) => (
                      <div key={i} className="rounded-lg bg-blue-50 p-4 text-blue-800">
                        <div className="flex items-center gap-2 text-xs font-medium">
                          {iconMap[m.icon]}
                          <span>{m.label}</span>
                        </div>
                        <div className="text-xl font-bold mt-1">{m.value}</div>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}