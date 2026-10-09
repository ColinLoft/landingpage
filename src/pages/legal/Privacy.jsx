import LegalPage from "@/components/LegalPage";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead="How we collect, use, and protect information on this site."
      updated="October 2026"
      sections={[
        { h: "Information we collect", p: "We collect information you provide directly — such as your name, email, organization, and message when you submit our contact form. This information is used solely to respond to your inquiry." },
        { h: "How we use it", p: "Contact submissions are stored securely and shared only with members of our team for the purpose of responding to you. We do not sell or rent your information to anyone." },
        { h: "Analytics", p: "We may use basic, anonymized analytics to understand site traffic and improve the site. This data does not identify individual visitors." },
        { h: "Data retention", p: "We keep contact submissions only as long as needed to respond and maintain a record of interest in the mission, unless you ask us to delete them." },
        { h: "Your choices", p: "You may request access to, correction of, or deletion of your information at any time by contacting us through the site." },
        { h: "Contact", p: "Questions about this policy can be sent through our contact form. As a 501(c)(3) nonprofit organization, we are committed to handling your information responsibly." },
      ]}
    />
  );
}