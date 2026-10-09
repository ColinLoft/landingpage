import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Landmark, Trees, GraduationCap, Heart, Mail, Handshake } from "lucide-react";

export default function Partners() {
  return (
    <StoryPage
      eyebrow="Company"
      title="Partners make the mission possible."
      lead="Agencies, institutions, companies and landowners — the system gets built faster with the right people beside us."
      image={IMG.team}
      accent="signal"
      blocks={[
        {
          type: "narrative",
          kicker: "Why partner",
          title: "A small team can build it. It takes partners to deploy it.",
          body: "We build the hardware and the software. Partners bring the land, the knowledge, the funding and the reach to put it where it's needed — and to make it better with every deployment.",
          bullets: ["Direct involvement in the build", "A system shaped around your terrain and needs"],
          image: IMG.workshop,
        },
        {
          type: "tabs",
          kicker: "Who we partner with",
          title: "Find where you fit",
          tabs: [
            { icon: Landmark, label: "Fire districts & municipalities", kicker: "Public safety", heading: "Extend your reach without a six-figure contract", body: "Give your community 24/7 wildfire vigilance and shorten the gap between ignition and response.", bullets: ["You bring: coverage priorities and local knowledge", "You get: priority node deployment and a direct line to the team"] },
            { icon: Trees, label: "Landowners & conservation groups", kicker: "Land", heading: "Protect land that can't be staffed around the clock", body: "From ranches to watersheds and preserves, nodes on your fence lines and ridges keep watch when no one else can.", bullets: ["You bring: access to terrain and mount points", "You get: continuous detection and response coverage"] },
            { icon: GraduationCap, label: "Universities & researchers", kicker: "Research", heading: "Make the science better", body: "Fire behavior, sensing, autonomy and safety all benefit from fresh eyes and rigorous review.", bullets: ["You bring: expertise, review and test partnerships", "You get: real hardware and real field data to study"] },
            { icon: Heart, label: "Sponsors & foundations", kicker: "Funding", heading: "Fund what actually changes the outcome", body: "Support goes straight into building nodes, testing aircraft and deploying systems on real land.", bullets: ["You bring: funding and credibility", "You get: transparent reporting on what your support built"] },
          ],
        },
        {
          type: "steps",
          title: "How a partnership starts",
          items: [
            { title: "Say hello", desc: "Tell us who you are, what you protect or what you'd like to support." },
            { title: "Scope together", desc: "We talk through your terrain, risks and goals, and sketch a realistic plan." },
            { title: "Agree on a pilot", desc: "Start with a small, clear deployment or project so everyone learns quickly." },
            { title: "Deploy and learn", desc: "Place the system, watch real events, and tune it with what we learn." },
          ],
        },
        {
          type: "cards",
          kicker: "Ways to get involved",
          title: "Not sure where to start?",
          items: [
            { icon: Mail, title: "Start a conversation", desc: "Tell us about your land, your organization or your idea. We read and answer every message.", link: { to: "/company/contact", label: "Talk to us" } },
            { icon: Handshake, title: "Deploy a pilot", desc: "Interested in nodes on your land? We'll scope a layout with you.", link: { to: "/solutions/who-its-for", label: "See who it's for" } },
            { icon: GraduationCap, title: "Collaborate on research", desc: "Bring your expertise to the sensing, autonomy or safety work.", link: { to: "/technology/how-it-works", label: "See how it works" } },
          ],
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Do we need to fund anything to start a conversation?", a: "No. Start by telling us what you're trying to protect or support, and we'll go from there." },
            { q: "Can we shape what you build?", a: "Yes — partners get direct collaboration with the founding team, and real deployments shape how the system evolves." },
            { q: "Do you only work on wildfire?", a: "Wildfire is first. Hurricanes, floods, tornadoes and droughts are next, and partners help decide the order." },
          ],
        },
      ]}
    />
  );
}