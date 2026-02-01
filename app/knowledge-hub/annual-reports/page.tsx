import { AnnualReportsHero } from "@/components/knowledge-hub/annual-reports/annual-reports-hero"
import { AnnualReportsList } from "@/components/knowledge-hub/annual-reports/annual-reports-list"
import { ContactSection } from "@/components/contact-section"

export default function AnnualReportsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnualReportsHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnnualReportsList />
      </div>

      <ContactSection />
    </div>
  )
}