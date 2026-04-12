// components/ui/StaticPageLayout.jsx
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function StaticPageLayout({ title, subtitle, children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10">
        
        <Breadcrumb crumbs={[
          { label: title }
        ]} />

        {/* HERO HEADER */}
        <div className="mt-6 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-500 mt-2 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
          <div className="prose prose-sm md:prose-base max-w-none text-gray-600">
            {children}
          </div>
        </div>

      </div>
    </div>
  )
}