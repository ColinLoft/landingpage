import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Heart, Landmark, Trees, Users } from "lucide-react";

export default function Impact() {
  return (
    <StoryPage
      eyebrow="Impact"
      title="What we're here to change."
      lead="Statistics, mission footage and stories from the field — the receipts behind the mission."
      image={IMG.earth}
      accent="signal"
      blocks={[
        {
          type: "stats",
          kicker: "The stakes",
          title: "The scale of the problem we're built to shrink.",
          items: [
            { value: 52000, suffix: "+", label: "Wildfires per year", note: "United States, annual average" },
            { value: 350, prefix: "$", suffix: "B", label: "Annual disaster damage", note: "Global economic cost" },
            { value: 1.5, decimals: 1, suffix: "M", label: "Acres burned yearly", note: "U.S. land lost to wildfire" },
            { value: 70, suffix: "+", label: "Named storms globally", note: "Hurricanes and typhoons" },
          ],
        },
        {
          type: "chapters",
          kicker: "From the field",
          title: "Detection and response, on the record",
          intro: "Test footage and stories from the build — updated as we fly.",
          chapters: [
            { kicker: "Field test", title: "First node deployed on a ridge line", body: "Our solar-powered node running continuous thermal and low-light watch through the night — the first proof that the watchtower idea holds up outside the workshop.", bullets: ["Continuous overnight operation", "Solar-powered, no wiring"], stat: { value: "Node 1", label: "Ridge line" }, image: IMG.node },
            { kicker: "Response drill", title: "Detection-to-response flight drill", body: "From confirmed ignition to water on target — autonomous flight with our operator in the loop, watching every step.", bullets: ["Autonomous launch and flight", "Operator oversight throughout"], stat: { value: "Live", label: "Drill" }, image: IMG.copter },
            { kicker: "The team", title: "Building it all in-house", body: "Five founders, one workshop. Every sensor, airframe and line of code made by us.", bullets: ["Hardware built in our workshop", "Software written by the team"], stat: { value: "5", label: "Founders" }, image: IMG.team },
          ],
        },
        {
          type: "quote",
          quote: "We don't want to just watch the world burn from a safe distance. We want to be the response — and we're building it ourselves.",
          by: "The Founders",
        },
        {
          type: "cards",
          kicker: "Be part of the impact",
          title: "Four ways to help",
          items: [
            { icon: Heart, title: "Donors & sponsors", desc: "Fund the nodes, test flights and deployments that turn the mission into coverage.", link: { to: "/company/contact", label: "Support the mission" } },
            { icon: Landmark, title: "Agencies & municipalities", desc: "Bring detection and response to the communities you protect.", link: { to: "/solutions/who-its-for", label: "See who it's for" } },
            { icon: Trees, title: "Landowners", desc: "Put nodes on your land and keep a watch that never sleeps.", link: { to: "/technology/sensors", label: "See the sensors" } },
            { icon: Users, title: "Mentors & volunteers", desc: "Lend your skills to a team of high schoolers building something that matters.", link: { to: "/company/careers", label: "See roles" } },
          ],
          cols: 4,
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Where do the statistics come from?", a: "Public sources including NOAA, NIFC, EM-DAT and the IPCC. They describe the scale of the problem we're working on, not results from our own system." },
            { q: "What does supporting the mission pay for?", a: "Building more nodes, testing aircraft and deploying the system on real land. We're a nonprofit, so support goes to the work." },
            { q: "How will I know what my support did?", a: "We share progress openly — test results, deployments and what we learned. Reach out and we'll keep you updated." },
          ],
        },
      ]}
    />
  );
}