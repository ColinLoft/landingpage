import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Radio, BatteryLow, MapPin, Eye, Hand } from "lucide-react";

export default function Safety() {
  return (
    <StoryPage
      eyebrow="Technology"
      title="Safety — autonomy earns trust."
      lead="An autonomous aircraft that fights fire must be safe everywhere, all the time. Safety isn't a feature — it's the precondition."
      image={IMG.workshop}
      accent="glacial"
      blocks={[
        {
          type: "narrative",
          kicker: "The rule",
          title: "Any single failure should cost capability — never safety",
          body: "The aircraft is designed so that when something is uncertain, the default is always to get out of the sky safely. We'd rather abort a mission than risk people or property on the ground.",
          bullets: ["Geofenced flight zones, always", "Automatic return-to-home on any anomaly", "Human override available at every moment"],
          accent: "glacial",
        },
        {
          type: "tabs",
          kicker: "What happens when…",
          title: "Designing for the bad day",
          intro: "Select a scenario to see how the system is designed to respond.",
          tabs: [
            { icon: Radio, label: "The link is lost", kicker: "Communications", heading: "Contact with the operator drops", body: "The aircraft does not keep flying on a hope. If the link degrades, it is designed to fall back to a safe behavior and return home rather than continue the mission blind.", bullets: ["Redundant telemetry links", "Return-to-home on lost link"] },
            { icon: BatteryLow, label: "Power runs low", kicker: "Energy", heading: "The aircraft gets short on energy", body: "The aircraft tracks its remaining energy against the distance home. When the margin gets thin, the mission yields to getting back safely.", bullets: ["Energy tracked against distance home", "Safe return takes priority over the drop"] },
            { icon: MapPin, label: "It leaves the boundary", kicker: "Geofence", heading: "Flight outside the approved zone", body: "Flight zones are locked in before each mission. The aircraft is designed not to cross them, regardless of what the route says.", bullets: ["Boundaries set before launch", "Enforced by the aircraft itself"] },
            { icon: Eye, label: "Sensors disagree", kicker: "Detection", heading: "The cameras don't line up", body: "If thermal, low-light and RGB don't agree, there is no confirmation — and no launch. Disagreement is treated as a reason to wait, not to act.", bullets: ["All spectrums must agree", "Low-confidence events never dispatch"] },
            { icon: Hand, label: "The operator steps in", kicker: "Override", heading: "A person says 'stop' or 'mine'", body: "The operator can hold, redirect or fully take over at any moment. Manual input outranks every autonomous behavior.", bullets: ["Instant manual control", "Takes priority over autonomy"] },
          ],
          accent: "glacial",
        },
        {
          type: "steps",
          title: "Four layers of defense",
          items: [
            { time: "Layer 1", title: "Design", desc: "Failsafes are part of the architecture, not bolted on — geofencing, return-to-home and redundant links exist from the first draft." },
            { time: "Layer 2", title: "Testing", desc: "Every autonomous behavior is flown, measured and reviewed before it's trusted on a real mission." },
            { time: "Layer 3", title: "Operation", desc: "A human watches every flight live with the authority to take over at any moment." },
            { time: "Layer 4", title: "Review", desc: "Every mission is logged, and every anomaly feeds the next design change." },
          ],
        },
        {
          type: "specs",
          title: "The failsafe stack",
          items: [
            { label: "Geofencing", value: "Flight zones locked in before every mission" },
            { label: "Return-to-home", value: "Automatic on any anomaly or lost link" },
            { label: "Communications", value: "Redundant telemetry links throughout" },
            { label: "Override", value: "Operator authority at every moment" },
            { label: "Logging", value: "Full audit trail of every flight" },
            { label: "Confirmation", value: "Three spectrums must agree before launch" },
          ],
        },
        {
          type: "quote",
          quote: "Trust in an autonomous machine isn't asked for. It's earned — one tested flight, one logged decision at a time.",
          by: "The Season Report team",
          accent: "glacial",
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Could the aircraft fly somewhere it shouldn't?", a: "Flight zones are geofenced before every mission, and the aircraft is designed not to leave them." },
            { q: "What if the operator isn't watching?", a: "The system is built to be safe on its own: the failsafes don't depend on a person catching a problem. The operator is an additional layer, not the only one." },
            { q: "How do you decide an autonomous behavior is safe enough?", a: "It has to be flown, measured and reviewed repeatedly before we trust it on a real mission, and every flight is logged so we can keep checking." },
          ],
        },
      ]}
    />
  );
}