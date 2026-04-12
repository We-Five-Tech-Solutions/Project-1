import StaticPageLayout from "@/components/ui/StaticPageLayout";
import Section from "@/components/ui/Section";
import HighlightBox from "@/components/ui/HighlightBox";

export default function PrivacyPage() {
  return (
    <StaticPageLayout
      title="Privacy Policy"
      subtitle="Your data is handled with care and transparency."
    >
      <HighlightBox>We do not sell or misuse your personal data.</HighlightBox> <br />

      <Section title="What we collect">
        <ul className="list-disc pl-5 space-y-1">
          <li>Browsing activity</li>
          <li>Cart preferences</li>
        </ul>
      </Section>

      <Section title="How we use it">
        <p>To improve your shopping experience and recommendations.</p>
      </Section>

      <Section title="Third-party services">
        <p>
          All purchases are handled via Amazon. Their privacy policy applies.
        </p>
      </Section>
    </StaticPageLayout>
  );
}
