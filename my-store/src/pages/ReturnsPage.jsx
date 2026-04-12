import StaticPageLayout from '@/components/ui/StaticPageLayout'
import HighlightBox from '@/components/ui/HighlightBox'

export default function ReturnsPage() {
  return (
    <StaticPageLayout
      title="Return Policy"
      subtitle="Simple, transparent returns handled via Amazon."
    >
      <HighlightBox>
        All returns are processed through Amazon’s return system.
      </HighlightBox>

      <ul className="mt-4">
        <li>✔ Easy return process</li>
        <li>✔ Fast refunds</li>
        <li>✔ Product-specific eligibility</li>
      </ul>
    </StaticPageLayout>
  )
}