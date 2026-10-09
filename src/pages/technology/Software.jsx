import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Map, Video, Activity, FileText } from "lucide-react";

export default function Software() {
  return (
    <StoryPage
      eyebrow="Technology"
      title="Software — the brain of the system."
      lead="Detection pipelines, fire signatures, dispatch logic, and the command interface that ties every node and aircraft together."
      image={IMG.ops}
      accent="glacial"
      blocks={[
        {
          type: "stats",
          kicker: "What it does",
          title: "From raw pixels to a launch decision.",
          items: [
            { value: 3, label: "Camera feeds fused per node", note: "Plus environmental sensors" },
            { text: "Scored", label: "Every detection gets a confidence level", note: "Only high-confidence events dispatch" },
            { text: "Logged", label: "Every decision, with its evidence", note: "Full after-action review" },
          ],
          accent: "glacial",
        },
        {
          type: "chapters",
          kicker: "The pipeline",
          title: "Five stages between a camera and a helicopter",
          intro: "Scroll to follow a single detection through the software.",
          chapters: [
            { kicker: "Stage 01 · Ingest", title: "Every feed, continuously", body: "Camera streams and sensor readings from every node flow in constantly. Nothing is sampled on a schedule that a fire could slip between.", bullets: ["Thermal, low-light and RGB", "Humidity, temperature and wind"], stat: { value: "24/7", label: "Streaming" }, image: IMG.node },
            { kicker: "Stage 02 · Detect", title: "Looking for fire signatures", body: "The pipeline looks for the patterns fire makes in each spectrum — heat concentration, flicker, plume shape — instead of simply reacting to brightness.", bullets: ["Per-spectrum signature detection", "Tuned on real fire imagery"], stat: { value: "3", label: "Spectrums" }, image: IMG.thermal },
            { kicker: "Stage 03 · Correlate", title: "Do the views agree?", body: "Each detection is checked against the other cameras and against what the environmental sensors feel. Disagreement is the most common sign of a false alarm.", bullets: ["Cross-spectrum agreement", "Sensor sanity checks"], stat: { value: "All", label: "Must agree" } },
            { kicker: "Stage 04 · Score", title: "How sure are we?", body: "The result is a confidence score. Only events above the threshold move forward — noise stops here, quietly, without paging anyone.", bullets: ["Confidence-gated dispatch", "Low-confidence events logged, not escalated"], stat: { value: "Gated", label: "Dispatch" } },
            { kicker: "Stage 05 · Dispatch", title: "Aircraft launched, operator informed", body: "A confirmed event routes to the helicopter for autonomous response and to the operator's screen at the same moment.", bullets: ["Simultaneous aircraft + operator alert", "Mission logging begins immediately"], stat: { value: "Instant", label: "Hand-off" }, image: IMG.copter },
          ],
          accent: "glacial",
        },
        {
          type: "tabs",
          kicker: "The command interface",
          title: "What the operator sees",
          tabs: [
            { icon: Map, label: "Live map", kicker: "Where", heading: "Every node, every aircraft, one map", body: "A live map of the terrain shows node coverage, flagged events and the aircraft's route, so the operator has the full picture at a glance.", bullets: ["Node status and coverage", "Live aircraft position"] },
            { icon: Video, label: "Camera feeds", kicker: "What", heading: "All three views of the fire", body: "Thermal, low-light and RGB feeds sit side by side, so the operator can verify what the software flagged with their own eyes.", bullets: ["Side-by-side spectrums", "Instant switch to any node"] },
            { icon: Activity, label: "Telemetry", kicker: "How", heading: "The aircraft's vital signs", body: "Battery, position, altitude, payload and link health stream continuously, so the operator knows when to trust the flight and when to step in.", bullets: ["Live flight data", "Link health at a glance"] },
            { icon: FileText, label: "Mission log", kicker: "Why", heading: "The record of every decision", body: "Every flag, score, dispatch and override is logged with the evidence behind it — the foundation for after-action review and improvement.", bullets: ["Timestamped decisions", "Exportable review trail"] },
          ],
          accent: "glacial",
        },
        {
          type: "compare",
          title: "Simple alerts vs. correlated detection",
          a: {
            title: "Threshold alerts",
            items: [
              "Fires when one number crosses a line",
              "Hot days and bright glare trigger false alarms",
              "Humans end up triaging noise",
              "No record of why it decided",
            ],
          },
          b: {
            title: "Correlated detection",
            items: [
              "Fires when independent evidence agrees",
              "Environmental context filters the false positives",
              "Only confirmed events reach a person or aircraft",
              "Every decision logged with its evidence",
            ],
          },
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Is this software something we have to host?", a: "No. It is part of the system we deploy with you — nodes, software and aircraft working together." },
            { q: "Does the software get better over time?", a: "Yes. Every mission is logged with imagery and decisions, so we can review what happened and tune detection and flight behavior." },
            { q: "Who sees the camera feeds?", a: "The operator and the deployment's authorized users. Feeds are for detection and response, not general surveillance." },
          ],
        },
      ]}
    />
  );
}