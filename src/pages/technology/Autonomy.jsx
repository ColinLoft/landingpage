import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Radar, Send, Plane, Droplets, Hand, FileText } from "lucide-react";

export default function Autonomy() {
  return (
    <StoryPage
      eyebrow="Technology"
      title="Autonomy — fast by default, human always in the loop."
      lead="Autonomous first. An operator observes every mission and can take control at any moment. Speed without surrendering judgment."
      image={IMG.copter}
      accent="glacial"
      blocks={[
        {
          type: "narrative",
          kicker: "The principle",
          title: "Autonomy buys minutes. Humans keep judgment.",
          body: "When seconds matter, the system can't wait for a person to be ready. Detection, verification, dispatch and flight are handled autonomously so response happens while the fire is still small — while an operator watches every step and holds final authority.",
          bullets: ["Autonomous detection confirmation", "Autonomous dispatch and flight", "Operator oversight and override at all times"],
          image: IMG.ops,
          accent: "glacial",
        },
        {
          type: "tabs",
          kicker: "Who decides what",
          title: "Every step of a response, and who holds it",
          intro: "Select a step to see what the machine does on its own and what the human can do.",
          tabs: [
            { icon: Radar, label: "Detect", kicker: "Machine leads", heading: "Spotting and confirming the fire", body: "The nodes and software watch continuously and decide when evidence is strong enough to count as a fire.", bullets: ["Machine: fuse feeds, score confidence", "Human: sees every flagged event and its evidence"] },
            { icon: Send, label: "Dispatch", kicker: "Machine leads", heading: "Launching the response", body: "Once confidence passes the threshold, the dispatch is automatic. Nobody has to find a phone number or approve a form.", bullets: ["Machine: launch and route the aircraft", "Human: can hold or cancel the mission"] },
            { icon: Plane, label: "Fly", kicker: "Shared", heading: "Getting to the fire", body: "The aircraft follows its route inside geofenced flight zones while the operator watches telemetry and camera feeds live.", bullets: ["Machine: navigate and stabilize", "Human: take manual control at any moment"] },
            { icon: Droplets, label: "Drop", kicker: "Shared", heading: "Putting water on target", body: "The aircraft lines up on the hotspot and releases its payload. The operator sees the same view the aircraft does.", bullets: ["Machine: align and release", "Human: adjust aim or abort the drop"] },
            { icon: Hand, label: "Override", kicker: "Human leads", heading: "Taking control, instantly", body: "At any point, from launch to landing, the operator can take the controls. The aircraft does not argue.", bullets: ["Always available", "Takes priority over every autonomous behavior"] },
            { icon: FileText, label: "Review", kicker: "Human leads", heading: "Learning from every flight", body: "Every decision the system made is logged with the evidence behind it, so the team can review and improve after each mission.", bullets: ["Full audit trail", "After-action review"] },
          ],
          accent: "glacial",
        },
        {
          type: "scrub",
          kicker: "Interactive · Try it",
          title: "As the clock matters more, the machine does more — the human never does less",
          bars: [
            { label: "Machine initiative", tone: "glacial" },
            { label: "Human authority", tone: "signal" },
          ],
          caption: "A conceptual illustration of the operating principle, not a measurement.",
          stops: [
            { label: "Watching", title: "Calm — the system observes", desc: "Nodes watch, software compares. Nothing is happening that needs a decision, so nothing is decided.", values: [20, 100] },
            { label: "Confirming", title: "Something flagged — evidence is weighed", desc: "The software cross-checks the cameras. An operator can see the same evidence in real time.", values: [50, 100] },
            { label: "Dispatching", title: "Confirmed — time starts to count", desc: "The aircraft launches automatically. The operator is notified instantly and can hold the mission.", values: [80, 100] },
            { label: "Flying", title: "In the air — autonomy flies, humans watch", desc: "The aircraft handles the flying; the operator holds the override. The machine's initiative peaks — and the human's authority is still total.", values: [95, 100] },
          ],
          accent: "glacial",
        },
        {
          type: "compare",
          title: "Two ways to put a human in charge",
          a: {
            title: "Human approves every step",
            items: [
              "Someone has to be awake, at a screen, and reachable",
              "Every handoff adds minutes while the fire grows",
              "Response speed depends on who is available",
              "Fast on a good day, slow on the day it matters",
            ],
          },
          b: {
            title: "Autonomous first, human in the loop",
            items: [
              "The system acts the moment evidence is strong",
              "The operator supervises instead of triggering",
              "Override is instant, from launch to landing",
              "Speed and judgment, both, on every day",
            ],
          },
        },
        {
          type: "quote",
          quote: "Speed gives a small fire no chance to grow. Judgment keeps people safe. We refuse to trade one for the other.",
          by: "Season Report design principle",
          accent: "glacial",
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "What can the operator actually do?", a: "Watch every camera and telemetry feed, and take manual control at any point — from launch to landing. Nothing the aircraft does is hidden from them." },
            { q: "Why not keep a human in charge of everything?", a: "Speed. A response that waits for a human to be ready waits minutes we don't have. Autonomy acts immediately; the operator keeps the judgment." },
            { q: "What if the autonomy malfunctions?", a: "Failsafes rule: geofenced flight zones, automatic return-to-home on any anomaly, and the operator's manual override. See our Safety page for the full stack." },
          ],
        },
      ]}
    />
  );
}