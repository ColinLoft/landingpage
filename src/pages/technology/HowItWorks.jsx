import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";

export default function HowItWorks() {
  return (
    <StoryPage
      eyebrow="Technology"
      title="How it works — one system, start to finish."
      lead="Detection nodes keep watch, software decides, the aircraft responds. Here's the pipeline end to end."
      image={IMG.node}
      accent="glacial"
      blocks={[
        {
          type: "stats",
          kicker: "Overview",
          title: "Four stages. One continuous loop.",
          items: [
            { value: 4, label: "Stages", note: "Watch · Confirm · Respond · Report" },
            { text: "24/7", label: "Always watching", note: "Solar nodes, no gaps" },
            { text: "Minutes", label: "Detection to water", note: "Autonomous, with a human in the loop" },
          ],
          accent: "glacial",
        },
        {
          type: "chapters",
          kicker: "The pipeline",
          title: "Follow a fire through the system",
          chapters: [
            { kicker: "Stage 01 · Watch", title: "Nodes stand continuous watch", body: "Solar-powered nodes with thermal, low-light and RGB cameras plus environmental sensors stand watch across the terrain — on poles, walls, fences and ridge lines.", bullets: ["24/7 multi-spectral vigil", "Fully solar powered, no infrastructure"], stat: { value: "24/7", label: "Watch" }, image: IMG.node },
            { kicker: "Stage 02 · Confirm", title: "Software weighs the evidence", body: "The software fuses all camera feeds and sensor readings, scores confidence, and only raises an alert when the evidence agrees. Few false alarms, high trust.", bullets: ["Cross-spectrum verification", "Confidence-gated alerts"], stat: { value: "3", label: "Spectrums agree" }, image: IMG.thermal },
            { kicker: "Stage 03 · Respond", title: "The helicopter flies to the fire", body: "The autonomous helicopter launches with its 4-gallon water payload, flies to the confirmed fire and delivers water — with an operator observing and able to take control at any moment.", bullets: ["Autonomous dispatch in minutes", "4-gallon payload, water on target", "Operator override anytime"], stat: { value: "4 gal", label: "Payload" }, image: IMG.copter },
            { kicker: "Stage 04 · Report", title: "Every mission is logged", body: "The mission is recorded in full — imagery, telemetry and decisions — so every response makes the next one better.", bullets: ["Complete mission log", "After-action review"], stat: { value: "Logged", label: "Every step" }, image: IMG.ops },
          ],
          accent: "glacial",
        },
        {
          type: "steps",
          title: "A response on the clock",
          items: [
            { time: "0:00", title: "A node flags a heat signature", desc: "The thermal camera picks up an anomaly — a spark, a hot spot or smoke before flame is visible." },
            { time: "0:05", title: "Software confirms it's a fire", desc: "All three spectrums and the sensor data must agree before anything happens." },
            { time: "0:10", title: "The helicopter launches", desc: "Water payload aboard, flight path computed, operator watching live from the first second." },
            { time: "Minutes later", title: "Water on target", desc: "Delivered while the fire is still small — often before ground crews have finished rolling." },
          ],
        },
        {
          type: "compare",
          title: "You and the system",
          a: {
            title: "What you do",
            items: [
              "Choose where nodes go on your land",
              "Review confirmed events and their evidence",
              "Watch missions live if you want to",
              "Take control any time you decide to",
            ],
          },
          b: {
            title: "What the system does",
            items: [
              "Watches the land around the clock",
              "Confirms fires and filters out false alarms",
              "Launches, flies and drops water on its own",
              "Logs everything for your review",
            ],
          },
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "What if the aircraft can't fly — weather, maintenance, anything?", a: "The alert still goes out, with full imagery and location, so people can respond. The aircraft shortens the gap when it can fly; it never blocks notification." },
            { q: "Can we see what the system saw after an event?", a: "Yes. Every mission is logged — imagery, telemetry and every decision — so you get a complete after-action record." },
            { q: "How long from detection to water?", a: "Minutes. That's the design target the entire system is built around — node to confirmation to launch to drop." },
          ],
        },
      ]}
    />
  );
}