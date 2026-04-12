// pages/ShippingPage.jsx
import StaticPageLayout from '@/components/ui/StaticPageLayout'

export default function ShippingPage() {
  return (
    <StaticPageLayout title="Shipping Policy">
      <p>
        We do not handle shipping directly. All products are shipped via Amazon.
      </p>

      <ul>
        <li>✔ Fast delivery options</li>
        <li>✔ Tracking available</li>
        <li>✔ Delivery times depend on location</li>
      </ul>
    </StaticPageLayout>
  )
}