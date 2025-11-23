import { PhotoGalleryHero } from "@/components/knowledge-hub/media-room/photo-gallery-hero"
import { PhotoGalleryGrid } from "@/components/knowledge-hub/media-room/photo-gallery-grid"
import { ContactSection } from "@/components/contact-section"

export default function PhotoGalleryPage() {
  return (
    <main className="min-h-screen">
      <PhotoGalleryHero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <PhotoGalleryGrid />
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  )
}
