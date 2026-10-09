import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Cpu, Wrench, Code2, Radio, Hammer, Plane, Users, Lightbulb } from "lucide-react";

const APPLY = { to: "/company/contact", label: "Apply" };

export default function Careers() {
  return (
    <StoryPage
      eyebrow="Company"
      title="Build the answer with us."
      lead="We're five founders today — and we're looking for people who'd rather engineer the response than watch from the sidelines."
      image={IMG.workshop}
      accent="signal"
      blocks={[
        {
          type: "cards",
          kicker: "Open roles",
          title: "Where you could fit",
          items: [
            { icon: Cpu, title: "Flight Systems Engineer", tag: "Intern", desc: "Work on autonomy, telemetry and flight safety for the response helicopter.", link: APPLY },
            { icon: Wrench, title: "Hardware & Fabrication", tag: "Intern", desc: "Design, print and assemble sensor node enclosures and mounts.", link: APPLY },
            { icon: Code2, title: "Software & Vision", tag: "Intern", desc: "Build the multi-spectral fire detection pipeline and command interface.", link: APPLY },
            { icon: Radio, title: "Field Operations", tag: "Volunteer", desc: "Help deploy, test and maintain nodes across partner terrain.", link: APPLY },
          ],
          cols: 2,
        },
        {
          type: "narrative",
          kicker: "Why join",
          title: "Work on something that has to actually work",
          body: "This isn't a demo for a pitch deck. It's hardware that goes on real land and has to hold up in real conditions — and the people building it see their work fly.",
          bullets: ["Real hardware, real flights, real consequences", "Direct work with the founding team", "A mission you can explain in one sentence"],
          image: IMG.team,
        },
        {
          type: "cards",
          kicker: "What you'll get",
          title: "More than a line on a résumé",
          items: [
            { icon: Hammer, title: "Hands-on ownership", desc: "Own a real part of the system, start to finish." },
            { icon: Plane, title: "Flight experience", desc: "Be part of testing autonomous aircraft the right way." },
            { icon: Users, title: "A small, close team", desc: "Work directly with the founders, not through layers." },
            { icon: Lightbulb, title: "Room to try ideas", desc: "Good ideas get tested — fast." },
          ],
          cols: 4,
        },
        {
          type: "steps",
          title: "How joining works",
          items: [
            { title: "Tell us what you'd bring", desc: "Use the contact form to say who you are, what you've built and what you'd like to work on." },
            { title: "Have a conversation", desc: "We talk through the mission, the role and whether it's a fit on both sides." },
            { title: "Start on something real", desc: "A small, real project that shows how we work together." },
            { title: "Grow into the team", desc: "Take on more of the system as you and the mission grow." },
          ],
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Do I need experience?", a: "Curiosity and a willingness to build matter most. Experience helps, but we care about what you've made and how you learn." },
            { q: "Are these paid roles?", a: "Right now our roles are internships and volunteer positions, because we're a young nonprofit. As the mission grows, so will the ways to be part of it." },
            { q: "Don't see your role?", a: "Tell us what you'd bring. Roles are opening as the mission grows." },
          ],
        },
      ]}
    />
  );
}