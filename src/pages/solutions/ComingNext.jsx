import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Wind, Droplets, Flame, Sun, Radar, Plane, Code2, Eye } from "lucide-react";

export default function ComingNext() {
  return (
    <StoryPage
      eyebrow="Solutions"
      title="Wildfire is chapter one."
      lead="Our mission was never just fire. It was natural disasters — full stop. Here's where we're going next."
      image={IMG.storm}
      accent="glacial"
      blocks={[
        {
          type: "narrative",
          kicker: "The plan",
          title: "One platform. Many disasters.",
          body: "Wildfire is where we prove the model: sense the danger, confirm it, respond to it, and keep a human in control. Every disaster has the same shape — something to watch for, something to act on, and a clock running — so the platform carries over.",
          bullets: ["Sensing, response and software are reusable", "Each disaster adds new sensors and new response tools", "Operator-in-the-loop stays constant"],
          image: IMG.earth,
          accent: "glacial",
        },
        {
          type: "tabs",
          kicker: "What's next",
          title: "Four disasters, four chapters",
          tabs: [
            { icon: Wind, label: "Hurricanes", kicker: "Next", heading: "Storm damage assessment and rapid relief", body: "Extending autonomous response to storm damage assessment and relief delivery, so communities and responders can see what's happened and act faster.", bullets: ["Rapid aerial damage assessment", "Relief delivery where roads are cut"] },
            { icon: Droplets, label: "Floods", kicker: "Next", heading: "Aerial response for rising water", body: "Detection and aerial response for rising water and flash flood events, where hours decide outcomes.", bullets: ["Early water-level awareness", "Aerial support where access is lost"] },
            { icon: Flame, label: "Tornadoes", kicker: "In research", heading: "Detection and post-event response", body: "One of the most unpredictable disasters. Our focus is detection and fast post-event response.", bullets: ["Research phase", "Focus on rapid response"] },
            { icon: Sun, label: "Droughts", kicker: "In research", heading: "Long-duration monitoring at scale", body: "Long-duration monitoring of soil, vegetation and water stress, so problems are visible long before they become emergencies.", bullets: ["Research phase", "Focus on persistent sensing"] },
          ],
          accent: "glacial",
        },
        {
          type: "cards",
          kicker: "What carries over",
          title: "The parts we're not rebuilding from scratch",
          items: [
            { icon: Radar, title: "A sensing network", desc: "Solar, self-sustaining nodes that watch the land and adapt to new sensors." },
            { icon: Code2, title: "Detection software", desc: "A pipeline that fuses evidence and only escalates when it agrees." },
            { icon: Plane, title: "Autonomous aircraft", desc: "A response platform that can carry different payloads for different jobs." },
            { icon: Eye, title: "Operator in the loop", desc: "The same command interface and the same override, whatever the disaster." },
          ],
          cols: 4,
          accent: "glacial",
        },
        {
          type: "steps",
          title: "How a new disaster gets added",
          items: [
            { time: "Research", title: "Understand the disaster", desc: "Study how it forms, how it's handled today, and where the gap is." },
            { time: "Prototype", title: "Build the smallest test", desc: "A workshop-built prototype that tests the key idea." },
            { time: "Field test", title: "Try it on real conditions", desc: "Run it where the disaster actually happens and measure everything." },
            { time: "Deploy", title: "Release with partners", desc: "Put it into use with partners who need it and keep improving." },
          ],
        },
        {
          type: "quote",
          quote: "Our mission was never just fire. It was natural disasters, full stop.",
          by: "The Founders",
          accent: "glacial",
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "When will these be available?", a: "Wildfire comes first. Hurricanes and floods are next in line; tornadoes and droughts are still in research. We'll share progress as it happens." },
            { q: "Can we influence what you build next?", a: "Yes. Partners and supporters help decide the order — get in touch and tell us what you need most." },
          ],
        },
      ]}
    />
  );
}