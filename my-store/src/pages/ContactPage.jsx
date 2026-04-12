import StaticPageLayout from '@/components/ui/StaticPageLayout'

export default function ContactPage() {
  return (
    <StaticPageLayout
      title="Contact Us"
      subtitle="We’re here to help you anytime."
    >
      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="border rounded-xl p-4">
          <h3 className="font-semibold mb-2">Email Support</h3>
          <p className="text-sm text-gray-500">support@rgrglobalstore.com</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-semibold mb-2">Order Support</h3>
          <p className="text-sm text-gray-500">
            For delivery or returns, contact Amazon support.
          </p>
        </div>

      </div>
    </StaticPageLayout>
  )
}