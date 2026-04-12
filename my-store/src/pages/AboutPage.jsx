import StaticPageLayout from '@/components/ui/StaticPageLayout'
import Section from '@/components/ui/Section'
import InfoGrid from '@/components/ui/InfoGrid'

export default function AboutPage() {
  return (
    <StaticPageLayout
      title="About Us"
      subtitle="Discover trusted pet and fitness products, curated for quality and performance."
    >
      <Section title="Who we are">
        <p>
          We bring together premium products from Petology, Fitlastics, and Bodylastics —
          helping you shop smarter with trusted Amazon-backed purchases.
        </p>
      </Section>

      <Section title="Our mission">
        <p>
          To simplify your buying journey by offering only high-quality,
          reliable, and value-driven products.
        </p>
      </Section>

      <Section title="Why shop with us">
        <InfoGrid
          items={[
            { title: 'Curated Products', desc: 'Only top-rated & tested items' },
            { title: 'Best Prices', desc: 'We highlight the best deals available' },
            { title: 'Amazon Trust', desc: 'Secure checkout & fast delivery' },
          ]}
        />
      </Section>
    </StaticPageLayout>
  )
}