import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Radar, Code2, Plane, Eye, Home } from "lucide-react";

export default function Operation() {
  return (
    <StoryPage
      eyebrow="Technology"
      title="Operation — from spark to suppression."
      lead="The full sequence, end to end, measured in minutes. This is what a system looks like when detection finally answers back."
      image={IMG.ops}
      accent="glacial"
      blocks={[
        {
          type: "stats",
          kicker: "The sequence",
          title: "Four handoffs, none of them slow.",
          items: [
            { text: "Seconds", label: "To flag and confirm a fire", note: "Detection and verification" },
            { text: "Auto", label: "Dispatch", note: "No phone call, no queue" },
            { text: "Minutes", label: "Detection to water", note: "The design target" },
            { value: 1, label: "Operator watching every mission", note: "With full override" },
          ],
          accent: "glacial",
        },
        {
          type: "compare",
          title: "Today vs. Season Report",
          a: {
            title: "Detection-only, today",
            items: [
              "A camera network spots smoke — an alert goes out",
              "The alert waits for a person to see it",
              "Someone calls dispatch, crews roll",
              "Trucks drive to the scene — hours have passed",
              "The fire has grown the entire time",
            ],
          },
          b: {
            title: "With Season Report",
            items: [
              "A node spots a heat signature — instantly",
              "Software confirms it in seconds, no human bottleneck",
              "The helicopter launches autonomously",
              "Water lands on the fire — minutes later",
              "The operator watched all of it, live",
            ],
          },
        },
        {
          type: "chapters",
          kicker: "From the operator's chair",
          title: "One mission, told from the console",
          chapters: [
            { kicker: "Quiet", title: "Nothing is happening — and that's the job", body: "On most days the console is calm: nodes report healthy, batteries full, no events. The operator's work is knowing that, and trusting the system to say so when it changes.", bullets: ["Node and aircraft health at a glance", "Alerts only for confirmed events"], stat: { value: "Calm", label: "Normal state" }, image: IMG.ops },
            { kicker: "Alert", title: "An event appears with its evidence", body: "A flagged event arrives with all three camera views, the sensor readings and a confidence score — the whole case, not just a notification.", bullets: ["Three feeds side by side", "Confidence and conditions shown"], stat: { value: "3", label: "Views" }, image: IMG.thermal },
            { kicker: "Response", title: "The aircraft is already moving", body: "By the time the operator has read the evidence, the helicopter is in the air. The job is to watch, verify, and be ready to step in.", bullets: ["Live telemetry and camera", "Hold, adjust or override at any time"], stat: { value: "Live", label: "Oversight" }, image: IMG.copter },
            { kicker: "Debrief", title: "Water on target — and a full record", body: "After the drop, the aircraft returns and the mission is logged in full. The team reviews what happened so the next response is faster and safer.", bullets: ["Complete mission log", "After-action review feeds the next version"], stat: { value: "Logged", label: "Every step" }, image: IMG.fire },
          ],
          accent: "glacial",
        },
        {
          type: "tabs",
          kicker: "Who does what",
          title: "Five roles in every response",
          tabs: [
            { icon: Radar, label: "The nodes", kicker: "Watch", heading: "Constant eyes on the land", body: "Solar nodes keep thermal, low-light and RGB watch, day and night, and flag anything that looks like fire.", bullets: ["24/7 detection", "Solar powered"] },
            { icon: Code2, label: "The software", kicker: "Decide", heading: "Evidence in, decision out", body: "Software fuses the feeds, scores confidence and dispatches only confirmed fires.", bullets: ["Cross-spectrum confirmation", "Automatic dispatch"] },
            { icon: Plane, label: "The aircraft", kicker: "Act", heading: "Water on the fire", body: "The helicopter flies itself to the scene and delivers its payload on target.", bullets: ["Autonomous launch", "4-gallon payload"] },
            { icon: Eye, label: "The operator", kicker: "Oversee", heading: "Judgment in the loop", body: "A person watches every mission and holds the authority to take over at any moment.", bullets: ["Live visibility", "Instant override"] },
            { icon: Home, label: "The landowner", kicker: "Partner", heading: "Your land, your priorities", body: "Partners decide where nodes go and what matters most to protect; the system is shaped around their terrain.", bullets: ["Node placement scoped with you", "Clear reporting after events"] },
          ],
          accent: "glacial",
        },
        {
          type: "steps",
          title: "After the fire is out",
          items: [
            { title: "Aircraft returns home", desc: "It lands, recharges and prepares for the next call." },
            { title: "Mission is logged in full", desc: "Imagery, telemetry and every decision are saved together." },
            { title: "Team reviews the response", desc: "What worked, what didn't, and what to tune before the next one." },
            { title: "System improves", desc: "Each event makes detection sharper and flight behavior safer." },
          ],
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "How long does a response take?", a: "Our design target is minutes from confirmed detection to water on the fire. Actual time depends on distance and conditions." },
            { q: "Can the system be paused?", a: "Yes. An operator can hold or cancel a mission, or take manual control, at any time." },
          ],
        },
      ]}
    />
  );
}