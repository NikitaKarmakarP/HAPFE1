import { ImpactStories } from "@/components/impact/impact-stories"

export default function StoriesPage() {
    return (
        <main className="min-h-screen pt-20">
            <div className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-24 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-green-100/40 to-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-teal-100/40 to-green-50/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-100 mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-semibold text-green-800 tracking-wide uppercase">Impact Stories</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                        All <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Success Stories</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                        Discover how HAPEF is transforming lives and communities across <span className="font-medium text-gray-900">Jharkhand</span> and <span className="font-medium text-gray-900">West Bengal</span> through sustainable development and empowerment.
                    </p>
                </div>
            </div>

            <ImpactStories hideViewAll={true} />
        </main>
    )
}
