import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Hammer, Eye, Users, Lightbulb } from "lucide-react";

const FOUNDERS = [
  { badge: "01", title: "Founder 01", tag: "Team Lead & Systems", desc: "Leads the mission end to end — from node design to flight testing." },
  { badge: "02", title: "Founder 02", tag: "Hardware & Fabrication", desc: "Builds the sensor nodes and airframes, hand by hand." },
  { badge: "03", title: "Founder 03", tag: "Software & Autonomy", desc: "Writes the detection pipeline and flight control stack." },
  { badge: "04", title: "Founder 04", tag: "Imaging & Sensors", desc: "Tunes thermal, low-light and RGB detection to fire signatures." },
  { badge: "05", title: "Founder 05", tag: "Operations & Outreach", desc: "Runs field operations, partnerships and the story of the mission." },
];

export default function OurTeam() {
  return (
    <StoryPage
      eyebrow="Company"
      title="The five behind the mission."
      lead="A team of high schoolers building world-class detection and response hardware — every part of it in-house."
      image={IMG.workshop}
      accent="signal"
      blocks={[
        { type: "cards", kicker: "The founding five", title: "Who builds what", items: FOUNDERS },
        {
          type: "stats",
          kicker: "By the numbers",
          title: "Small team, full stack.",
          items: [
            { value: 5, label: "Founders" },
            { text: "1 workshop", label: "Where everything is built" },
            { text: "In-house", label: "Hardware, software and autonomy" },
          ],
        },
        {
          type: "narrative",
          kicker: "How we work",
          title: "Five specialties, one build",
          body: "Detection only works if the sensors, the software and the aircraft agree with each other. That means our hardware, imaging, software and operations people sit in the same room and solve problems together — not in handoffs.",
          bullets: ["Hardware and software built side by side", "Everyone sees every test result", "Field operations feed straight back into design"],
          image: IMG.team,
          flip: true,
        },
        {
          type: "cards",
          kicker: "Team culture",
          title: "What it's like to work with us",
          items: [
            { icon: Hammer, title: "We build things", desc: "Opinions are welcome; prototypes are better." },
            { icon: Eye, title: "We show our work", desc: "Test results, mistakes and fixes are shared openly." },
            { icon: Lightbulb, title: "We learn fast", desc: "Every flight and field test changes the next version." },
            { icon: Users, title: "We bring people in", desc: "Mentors and volunteers make the whole team stronger.", link: { to: "/company/careers", label: "See open roles" } },
          ],
          cols: 4,
        },
        {
          type: "quote",
          quote: "We don't want to just watch the world burn from a safe distance. We want to be the response.",
          by: "The Founders",
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Will the team grow?", a: "Yes. This is our founding five; as the mission grows, so does the team — see Careers." },
            { q: "Can mentors or professionals get involved?", a: "Absolutely. We welcome engineers, pilots, firefighters and researchers who want to help — reach out through the contact page." },
          ],
        },
      ]}
    />
  );
}