import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Hammer, Plane, Users, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <StoryPage
      eyebrow="Company"
      title="Five high schoolers. One workshop. A planet to protect."
      lead="We're a team of five high schoolers on a mission to save the world — starting with the disasters that take homes, habitats and lives."
      image={IMG.team}
      accent="signal"
      blocks={[
        {
          type: "stats",
          kicker: "Who we are",
          title: "Small team. Serious hardware.",
          items: [
            { value: 5, label: "Founders", note: "All high schoolers" },
            { text: "In-house", label: "Hardware and software", note: "Designed and built by the team" },
            { text: "Nonprofit", label: "Mission over margin", note: "Built to protect, not to profit" },
            { value: 1, label: "Mission", note: "Stop natural disasters from taking what can't be replaced" },
          ],
        },
        {
          type: "chapters",
          kicker: "Our story",
          title: "How we got here",
          chapters: [
            { kicker: "Chapter 01", title: "A question we couldn't shake", body: "Why does detection spot fires that nothing then puts out? We looked at how natural disasters are handled and saw a gap nobody was closing: detection existed, but it stopped at the alert. Nobody was building the response.", stat: { value: "Why?", label: "Where it began" }, image: IMG.aftermath },
            { kicker: "Chapter 02", title: "The first node", body: "Hand-built, solar powered and pointed at a test ridge — the first version of a watchtower that never blinks. It taught us what real terrain does to real hardware.", stat: { value: "Node 1", label: "First build" }, image: IMG.node },
            { kicker: "Chapter 03", title: "Learning to fly", body: "Designing, building and flying the response helicopter ourselves — including every setback that taught us something. Each flight made the next version safer.", stat: { value: "In-house", label: "Every airframe" }, image: IMG.copter },
            { kicker: "Chapter 04", title: "Out of the workshop", body: "Next is first partner deployments on real land, and then the next disaster class. The mission compounds from here.", stat: { value: "Next", label: "Partner pilots" }, image: IMG.workshop },
          ],
        },
        {
          type: "narrative",
          kicker: "Why high schoolers",
          title: "We shouldn't wait for permission to engineer serious things",
          body: "The people who will live with the climate future are the ones who are young today. We believe the next generation can engineer the answers the planet needs — and that starts with building real hardware that works.",
          bullets: ["Hardware designed and manufactured by the team", "Software and autonomy built in-house", "Every hour and dollar goes into the mission"],
          image: IMG.workshop,
          flip: true,
        },
        {
          type: "cards",
          kicker: "What we value",
          title: "Four things we won't compromise on",
          items: [
            { icon: Hammer, title: "Build it ourselves", desc: "If we can't build it, we don't understand it — and if we don't understand it, we can't make it safe." },
            { icon: Plane, title: "Respond, don't just report", desc: "An alert is the beginning of the job. The job ends when the danger is handled." },
            { icon: ShieldCheck, title: "Humans stay in control", desc: "Autonomy for speed; people for judgment. Override is always one action away." },
            { icon: Users, title: "Open to everyone", desc: "Mentors, partners, volunteers and communities all shape what we build." },
          ],
          cols: 2,
        },
        {
          type: "quote",
          quote: "We don't want to just watch the world burn from a safe distance. We want to be the response — and we're building it ourselves.",
          by: "The Founders",
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Are you really high schoolers?", a: "Yes — all five founders. Our age is part of the point: you don't have to wait to start engineering solutions that matter." },
            { q: "Is Season Report a company?", a: "No. We're a mission-driven nonprofit." },
            { q: "How can I help?", a: "Reach out. Donors, mentors, municipalities, landowners and volunteers all have a place in the mission." },
          ],
        },
      ]}
    />
  );
}