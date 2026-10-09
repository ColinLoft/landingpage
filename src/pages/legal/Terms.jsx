import LegalPage from "@/components/LegalPage";

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      lead="The terms that govern your use of this website."
      updated="October 2026"
      sections={[
        { h: "Acceptance of terms", p: "By using this website, you agree to these terms. If you do not agree, please do not use the site." },
        { h: "Purpose of this site", p: "This website describes our nonprofit mission and technology, and provides a way to contact us. Information here is provided for general informational purposes and may change as our work evolves." },
        { h: "Use of contact forms", p: "You agree to use contact forms lawfully and to provide accurate information. We may decline or ignore submissions that are unlawful, abusive, or irrelevant to the mission." },
        { h: "Intellectual property", p: "All content, imagery, and descriptions of our technology on this site are the property of our organization unless otherwise noted." },
        { h: "Disclaimer", p: "The site is provided 'as is' without warranties of any kind. Descriptions of technology in development do not constitute an offer, guarantee, or statement of availability." },
        { h: "Changes", p: "We may update these terms from time to time. Continued use of the site constitutes acceptance of any changes." },
      ]}
    />
  );
}