import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Plane, Droplets, Sun, Wrench } from "lucide-react";

export default function Aircraft() {
  return (
    <StoryPage
      eyebrow="Technology"
      title="Aircraft — the response, not just the report."
      lead="A solar-autonomous response helicopter that doesn't just find the fire — it carries water to the scene and puts it out."
      image={IMG.copter}
      accent="glacial"
      blocks={[
        {
          type: "stats",
          kicker: "At a glance",
          title: "Built for one job: water on the fire, fast.",
          items: [
            { value: 4, label: "Gallon water payload", note: "Sized for fires caught while small" },
            { text: "Hover", label: "Holds position for precise drops", note: "Why it's a helicopter" },
            { text: "Minutes", label: "Detection to water", note: "The design target" },
            { text: "Always", label: "Human override", note: "From launch to landing" },
          ],
          accent: "glacial",
        },
        {
          type: "chapters",
          kicker: "Mission profile",
          title: "One flight, five chapters",
          intro: "Scroll to follow a single response from launch to landing.",
          chapters: [
            { kicker: "Chapter 01 · Launch", title: "Confirmation triggers the launch", body: "The moment the software confirms a fire, the helicopter launches on its own. Nobody has to be awake, at a desk or in range of a radio.", bullets: ["Autonomous launch on confirmed detection", "Flight path computed from the node's coordinates"], stat: { value: "0:10", label: "Launch" }, image: IMG.copter },
            { kicker: "Chapter 02 · Transit", title: "Flying to the fire, watched the whole way", body: "The aircraft follows its computed route while an operator sees live telemetry and camera feeds from the first second.", bullets: ["Geofenced flight zones", "Live telemetry to the operator"], stat: { value: "Live", label: "Telemetry" }, image: IMG.ops },
            { kicker: "Chapter 03 · Approach", title: "Finding the hotspot", body: "On approach the aircraft uses the node's confirmed location and its own sensing to line up on the hottest part of the fire.", bullets: ["Hover for a stable aim point", "Operator can adjust or take control"], stat: { value: "Hover", label: "Stable aim" }, image: IMG.thermal },
            { kicker: "Chapter 04 · Drop", title: "Water on target", body: "Holding position, the helicopter releases its 4-gallon payload directly on the fire — early enough that it makes a difference.", bullets: ["4-gallon onboard payload", "Delivered while the fire is small"], stat: { value: "4 gal", label: "Payload" }, image: IMG.fire },
            { kicker: "Chapter 05 · Return", title: "Home, logged and ready", body: "The aircraft returns home, the full mission is logged, and the team reviews what happened so the next response is better.", bullets: ["Automatic return-to-home", "Complete mission log for review"], stat: { value: "Logged", label: "Every flight" }, image: IMG.node },
          ],
          accent: "glacial",
        },
        {
          type: "tabs",
          kicker: "Design decisions",
          title: "Why we built it this way",
          tabs: [
            { icon: Plane, label: "Why a helicopter", kicker: "Airframe", heading: "Because it can hover", body: "A fixed-wing aircraft flies past in one pass; a small multirotor can't carry a useful payload. A helicopter holds position and drops precisely on a hotspot.", bullets: ["Precise, repeatable drops", "Works where roads don't reach"] },
            { icon: Droplets, label: "Why 4 gallons", kicker: "Payload", heading: "Sized for the moment that matters", body: "We're not fighting a crown fire. We're hitting a fire while it's still campfire-sized. At that stage, speed beats volume.", bullets: ["Optimized for early suppression", "Keeps the aircraft light and fast"] },
            { icon: Sun, label: "Why solar-assisted", kicker: "Power", heading: "Ready when the alert comes", body: "Solar assistance helps keep the aircraft charged and on standby without constant human attention or grid dependence.", bullets: ["Lower upkeep at remote sites", "Stays on standby between missions"] },
            { icon: Wrench, label: "Why in-house", kicker: "Build", heading: "We can fix what we build", body: "Designing and building every part ourselves means we understand every failure mode — and can improve the aircraft after each flight.", bullets: ["Fast design iteration", "Full knowledge of every subsystem"] },
          ],
          accent: "glacial",
        },
        {
          type: "narrative",
          kicker: "The build",
          title: "Designed and built by five high schoolers",
          body: "Every airframe is assembled by hand in our workshop. Building it ourselves keeps costs low enough that response can be affordable — not a luxury only large agencies can buy.",
          bullets: ["Hand-assembled in our workshop", "Tested, measured and reviewed after every flight"],
          image: IMG.workshop,
          accent: "glacial",
        },
        {
          type: "specs",
          title: "The aircraft, at a glance",
          items: [
            { label: "Payload", value: "4 gallons of water" },
            { label: "Launch", value: "Autonomous, on confirmed detection" },
            { label: "Control", value: "Operator-in-the-loop with instant override" },
            { label: "Power", value: "Solar-assisted electric" },
            { label: "Hover capability", value: "Holds position for precise drops" },
            { label: "Built", value: "In-house, by the founding team" },
          ],
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Why a helicopter instead of a fixed-wing aircraft?", a: "Hovering. A helicopter can hold position and drop water precisely on a hotspot — a fixed-wing flies past in one pass, and small drones can't carry a payload." },
            { q: "4 gallons sounds small. Is it?", a: "It is — on purpose. We're not fighting a crown fire; we're hitting a fire while it's the size of a campfire. At that stage, minutes matter more than volume." },
            { q: "Who flies it?", a: "The aircraft flies itself. An operator supervises every mission and can take manual control at any moment, from launch to landing." },
          ],
        },
      ]}
    />
  );
}