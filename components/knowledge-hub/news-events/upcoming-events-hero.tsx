interface UpcomingEventsHeroProps {
  title: string
  description: string
  breadcrumb: string
}

export function UpcomingEventsHero({ title, description, breadcrumb }: UpcomingEventsHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <nav className="mb-4">
            <span className="text-green-200 text-sm">Knowledge Hub / {breadcrumb}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}
