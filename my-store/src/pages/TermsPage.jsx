// pages/TermsPage.jsx
import StaticPageLayout from '@/components/ui/StaticPageLayout'

export default function TermsPage() {
  return (
    <StaticPageLayout title="Terms & Conditions">
      <p>
        By using this website, you agree to the following terms.
      </p>

      <h3>Use of Website</h3>
      <p>
        You may browse and use our platform for personal shopping purposes only.
      </p>

      <h3>Product Information</h3>
      <p>
        We strive for accuracy, but final product details and pricing are determined on Amazon.
      </p>

      <h3>Liability</h3>
      <p>
        We are not responsible for third-party purchases or delivery issues.
      </p>
    </StaticPageLayout>
  )
}