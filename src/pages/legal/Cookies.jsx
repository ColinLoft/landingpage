import LegalPage from "@/components/LegalPage";

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      lead="What cookies and similar technologies this site uses, and why."
      updated="October 2026"
      sections={[
        { h: "What we use", p: "This site uses only essential technologies: session and authentication cookies that keep the site working, and basic anonymized analytics to understand overall traffic." },
        { h: "What we don't use", p: "We do not use advertising cookies, cross-site trackers, or profiling tools. We do not sell information about visitors." },
        { h: "Managing cookies", p: "You can control or delete cookies through your browser settings. Blocking essential cookies may prevent parts of the site from working correctly." },
        { h: "Questions", p: "If you have questions about this policy, reach out through our contact form." },
      ]}
    />
  );
}