import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Building2, Trees, Zap, Landmark, Users, Map as MapIcon } from "lucide-react";

export default function WhoItsFor() {
  return (
    <StoryPage
      eyebrow="Solutions"
      title="Built for everyone who watches the land."
      lead="If you're responsible for property, people or habitat in fire country, the Season Report system was built for you."
      image={IMG.node}
      accent="signal"
      blocks={[
        {
          type: "stats",
          kicker: "One system, many landscapes",
          title: "Flexible by design.",
          items: [
            { value: 6, label: "Kinds of land we protect", note: "From county lines to conservation land" },
            { value: 4, label: "Ways to mount a node", note: "Pole · wall · fence · ridge line" },
            { value: 0, label: "Wires to run", note: "Solar powered, self-sustaining" },
          ],
        },
        {
          type: "tabs",
          kicker: "Find yourself",
          title: "What it looks like for you",
          intro: "Pick the description closest to your situation.",
          tabs: [
            { icon: Building2, label: "Municipalities & counties", kicker: "Scenario", heading: "Vigilance for the whole community", body: "Give your community 24/7 wildfire vigilance without the six-figure detection contracts. Nodes along the edge of town watch the wildland-urban boundary and alert you the moment something ignites.", bullets: ["Nodes along vulnerable edges", "Response in minutes, not hours"] },
            { icon: Trees, label: "Landowners & ranchers", kicker: "Scenario", heading: "Your fence line is your front line", body: "Protect acreage, livestock and structures with nodes on your own fence lines and ridges. You choose what matters most; the system watches it for you.", bullets: ["No wiring across your property", "Coverage matched to your terrain"] },
            { icon: Zap, label: "Utilities & infrastructure", kicker: "Scenario", heading: "Watch the corridors that spark", body: "Transmission corridors, substations and rights-of-way are well-known ignition risks. Continuous watch along them means a spark is found, and handled, early.", bullets: ["Nodes along the route", "Earlier detection near critical assets"] },
            { icon: Landmark, label: "Fire agencies & districts", kicker: "Scenario", heading: "Cover the blind spots", body: "Extend detection into terrain your crews can't watch constantly, and shorten the gap between ignition and response.", bullets: ["Fill coverage gaps", "Full evidence handed to your crews"] },
            { icon: Users, label: "HOAs & communities", kicker: "Scenario", heading: "Shared protection for neighbors", body: "For neighborhoods at the wildland-urban interface, shared nodes give everyone the same early warning and response.", bullets: ["One system for the whole neighborhood", "Costs shared across households"] },
            { icon: MapIcon, label: "Conservation & land trusts", kicker: "Scenario", heading: "Guard habitat without permanent staff", body: "Safeguard habitats, watersheds and preserved land that can't be staffed around the clock.", bullets: ["Continuous watch on remote land", "Minimal footprint"] },
          ],
        },
        {
          type: "steps",
          title: "What deployment looks like",
          items: [
            { time: "Step 1", title: "Tell us about your land", desc: "Acreage, terrain, what's most valuable, and where fire worries you most." },
            { time: "Step 2", title: "We scope a layout", desc: "A proposed node placement that matches your terrain and priorities." },
            { time: "Step 3", title: "Nodes go up", desc: "Solar-powered nodes mount to poles, walls, fences or ridge lines — no wiring." },
            { time: "Step 4", title: "The system goes live", desc: "Detection runs around the clock, with response ready when it's confirmed." },
          ],
        },
        {
          type: "specs",
          title: "What we'll need from you",
          items: [
            { label: "Access", value: "Permission to mount nodes on your land or assets" },
            { label: "Mount points", value: "A pole, wall, fence post or ridge line with a clear view" },
            { label: "Sunlight", value: "Enough sun for the solar panel to keep the node charged" },
            { label: "A conversation", value: "Your priorities, so we can scope coverage for them" },
          ],
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Is this only for large organizations?", a: "No. Nodes are small and solar powered, so a single landowner can use them just as a county can." },
            { q: "What does it cost?", a: "It depends on your terrain and scope. Tell us about your land and we'll walk through it with you." },
            { q: "Do we have to run the aircraft ourselves?", a: "No. The aircraft is autonomous with an operator in the loop; we'll work out the operating arrangement with you." },
          ],
        },
      ]}
    />
  );
}