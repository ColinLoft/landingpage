import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Radar, Code2, Plane, Eye } from "lucide-react";

export default function Wildfire() {
  return (
    <StoryPage
      eyebrow="Solutions"
      title="Wildfire: detect fast. Respond faster."
      lead="Wildfire detection already exists — but it's expensive, and finding a fire isn't the same as putting it out. We built a system that does both, end to end."
      image={IMG.fire}
      accent="signal"
      blocks={[
        {
          type: "stats",
          kicker: "The problem",
          title: "Detection found the fire. Nothing put it out.",
          items: [
            { value: 52000, suffix: "+", label: "Wildfires every year", note: "U.S. annual average (NIFC)" },
            { value: 1.5, decimals: 1, suffix: "M", label: "Acres burned yearly", note: "U.S. land lost to wildfire" },
            { text: "Minutes", label: "Our target: confirmation to water", note: "The window where a fire is still small" },
          ],
        },
        {
          type: "narrative",
          kicker: "The gap",
          title: "The minutes nobody owns",
          body: "Today's detection networks can spot a fire — but the alert goes to a person, the person calls dispatch, and crews drive to the scene. Every one of those handoffs is time the fire spends growing. We built the system to close that gap instead of reporting on it.",
          bullets: [
            "Existing detection is expensive to deploy at scale",
            "An alert alone doesn't slow the fire down",
            "Response time is the biggest factor in final damage",
          ],
          image: IMG.aftermath,
        },
        {
          type: "scrub",
          kicker: "Interactive · Try it",
          title: "Scrub through the first minutes of a fire",
          intro: "Drag the slider and watch the same ignition play out two ways — a detection-only network versus the Season Report node-and-helicopter system.",
          bars: [
            { label: "Relative fire size · detection only", tone: "slate" },
            { label: "Relative fire size · with Season Report", tone: "signal" },
          ],
          caption: "Illustrative model of relative fire growth to show the idea — not measured data.",
          stops: [
            { label: "0 min", title: "A spark catches on a ridge line", desc: "Dry grass, a bit of wind. The fire is the size of a campfire — the easiest it will ever be to stop.", values: [3, 3] },
            { label: "1 min", title: "A node sees the heat", desc: "The thermal camera on the nearest node picks up a heat signature long before a person would notice smoke.", values: [6, 6] },
            { label: "2 min", title: "Three spectrums agree", desc: "Thermal, low-light and RGB all confirm. With Season Report the helicopter launches on its own. A detection-only alert is still waiting for someone to read it.", values: [9, 9] },
            { label: "5 min", title: "Water reaches the fire", desc: "The helicopter hovers over the hotspot and drops its payload while the fire is small. The detection-only fire keeps growing.", values: [22, 3] },
            { label: "30 min", title: "Crews are still on the road", desc: "Ground crews are still on their way. The Season Report fire is out and logged; the other has become a real wildfire.", values: [55, 0] },
            { label: "2 hrs", title: "Resources arrive to a very different day", desc: "One crew arrives to cold ground and a mission log. The other arrives to a fire that is already out of reach.", values: [90, 0] },
          ],
        },
        {
          type: "tabs",
          kicker: "The system",
          title: "Four parts, one response",
          tabs: [
            { icon: Radar, label: "Sensor Node", kicker: "Watch", heading: "Solar nodes that never blink", body: "Thermal, low-light and RGB cameras plus environmental sensors, mounted on poles, walls, fences or ridge lines. Fully solar powered — no wiring, no grid.", bullets: ["24/7 multi-spectral watch", "Self-sustaining on sunlight"] },
            { icon: Code2, label: "Detection Software", kicker: "Decide", heading: "Evidence has to agree", body: "Software fuses every camera and sensor feed and scores confidence. Only a confirmed fire moves to dispatch, so alerts are worth acting on.", bullets: ["Cross-spectrum confirmation", "Confidence-gated alerts"] },
            { icon: Plane, label: "Response Aircraft", kicker: "Act", heading: "A helicopter that carries water", body: "On confirmation, an autonomous helicopter launches with a 4-gallon payload, flies to the fire and drops water on target.", bullets: ["Autonomous launch and flight", "Precise hover-and-drop"] },
            { icon: Eye, label: "Operator Station", kicker: "Oversee", heading: "A human in the loop, always", body: "An operator watches every mission live and can take manual control at any moment, from launch to landing.", bullets: ["Live camera and telemetry", "Instant manual override"] },
          ],
        },
        {
          type: "narrative",
          kicker: "Control",
          title: "Autonomous first, human always in control",
          body: "The system responds on its own so it never waits — but an operator observes every mission in real time and can take over at any moment. Speed without giving up judgment.",
          bullets: ["Autonomous dispatch and flight", "Operator observes every response live", "Manual override at any moment"],
          image: IMG.copter,
          flip: true,
        },
        {
          type: "faq",
          title: "Straight answers",
          items: [
            { q: "How is this different from detection that already exists?", a: "Detection networks can already find fires. Almost none can do anything about it — the alert goes to a person and response takes hours. Ours ends with water on the fire." },
            { q: "What if nobody is watching the operator screen?", a: "Nothing breaks. The system is autonomous first — it detects, confirms and responds on its own. The operator is there to supervise and take over, not to babysit every second." },
            { q: "What does a node need to run?", a: "Sunlight. Each node is solar powered with battery backup — no wiring, no grid connection, no ongoing site infrastructure." },
            { q: "Where can nodes actually go?", a: "Anywhere the land needs watching: poles, walls, fences, ridge lines. Terrain and mount height set how much ground each node covers." },
          ],
        },
      ]}
    />
  );
}