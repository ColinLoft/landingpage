import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Camera, Moon, Eye, Thermometer, Sun, Wifi } from "lucide-react";

export default function Sensors() {
  return (
    <StoryPage
      eyebrow="Technology"
      title="Sensors — a watchtower that never blinks."
      lead="Every node is a self-sustaining observation post: multi-spectral cameras and a full environmental sensor suite, running 24/7 on sunlight alone."
      image={IMG.node}
      accent="glacial"
      blocks={[
        {
          type: "stats",
          kicker: "The node",
          title: "A whole observation post, on one pole.",
          items: [
            { value: 3, label: "Camera spectrums per node", note: "Thermal · low-light · RGB" },
            { text: "24/7", label: "Continuous watch", note: "Day, night and bad weather" },
            { value: 0, label: "Wires or grid connections", note: "Fully solar powered" },
            { value: 4, label: "Mount options", note: "Pole · wall · fence · ridge line" },
          ],
          accent: "glacial",
        },
        {
          type: "tabs",
          kicker: "Explore the node",
          title: "What's inside each Season Report node",
          intro: "Select a component to see what it does and why it's there.",
          tabs: [
            { icon: Camera, label: "Thermal camera", kicker: "Sees heat", heading: "Heat before flame", body: "The thermal camera picks up temperature anomalies that are invisible to the eye — including an ignition point before there is any visible smoke.", bullets: ["Detects ignition points early", "Works in smoke, haze and darkness"] },
            { icon: Moon, label: "Low-light camera", kicker: "Sees at night", heading: "A night vigil without a single light", body: "Fires often start and spread when nobody is watching. The low-light camera keeps full visual coverage after dark without lighting up the landscape.", bullets: ["True 24/7 coverage", "No lighting infrastructure needed"] },
            { icon: Eye, label: "RGB camera", kicker: "Sees like us", heading: "Confirmation a human can trust", body: "Full-color imagery lets an operator verify at a glance what the other two cameras flagged — and gives a clean record of the event.", bullets: ["Human-verifiable confirmation", "Clear after-action imagery"] },
            { icon: Thermometer, label: "Environmental sensors", kicker: "Feels the air", heading: "Context for every reading", body: "Humidity, temperature and wind readings help the software tell a real fire signature from a hot rock or a sun glint, and feed the fire-behavior picture.", bullets: ["Humidity, temperature, wind", "Cross-checks the cameras"] },
            { icon: Sun, label: "Solar power", kicker: "Runs itself", heading: "Sunlight in, watchfulness out", body: "A solar panel with battery backup keeps the node alive through cloudy stretches and the night, with no wiring and no ongoing site infrastructure.", bullets: ["Battery backup for overcast days", "Zero grid dependence"] },
            { icon: Wifi, label: "Network", kicker: "Talks to the system", heading: "One node is a signal; many are a net", body: "Nodes report to the central software, so coverage across a whole ridge or property reads as one picture.", bullets: ["Node-to-node coverage", "Alerts reach software instantly"] },
          ],
          accent: "glacial",
        },
        {
          type: "narrative",
          kicker: "Heat vision",
          title: "See the fire before the smoke",
          body: "A thermal camera doesn't wait for flame or smoke. It reads heat itself, so a small ignition on a dark ridge stands out as a bright point against cool terrain — minutes earlier than the human eye would catch it.",
          bullets: ["Earliest possible warning", "Reads through darkness and haze"],
          image: IMG.thermal,
          accent: "glacial",
        },
        {
          type: "chapters",
          kicker: "A day in the life",
          title: "What a node does from sunrise to the moment of ignition",
          chapters: [
            { kicker: "Dawn", title: "Charge and calibrate", body: "As the sun comes up the panel tops off the battery while the node checks every camera and sensor against its baseline.", bullets: ["Self-check on every sensor", "Battery refilled by sunlight"], stat: { value: "Solar", label: "Powered" }, image: IMG.node },
            { kicker: "Midday", title: "Heat, wind and dry air", body: "The hottest, driest hours are when ignition risk peaks. The node reads temperature, humidity and wind to understand the conditions every detection is judged against.", bullets: ["Environmental context logged", "Thermal camera on continuous watch"], stat: { value: "3", label: "Spectrums" } },
            { kicker: "Night", title: "The long vigil", body: "While people sleep, the low-light and thermal cameras keep watch. Nothing about the node changes after dark — that is exactly the point.", bullets: ["No lights, no gaps", "Battery carries the whole night"], stat: { value: "24/7", label: "Watch" } },
            { kicker: "Ignition", title: "A heat signature appears", body: "A small bright point shows up on the thermal feed. The node flags it, streams all three cameras, and hands the evidence to the software — which decides in seconds whether to dispatch.", bullets: ["All three feeds streamed", "Software confirms, helicopter launches"], stat: { value: "Seconds", label: "To flag" }, image: IMG.thermal },
          ],
          accent: "glacial",
        },
        {
          type: "specs",
          title: "The node, at a glance",
          items: [
            { label: "Power", value: "Solar panel with battery backup — no wiring" },
            { label: "Cameras", value: "Thermal, low-light and RGB" },
            { label: "Environment", value: "Humidity, temperature and wind sensors" },
            { label: "Mounts", value: "Pole, wall, fence or ridge line" },
            { label: "Uptime", value: "Continuous 24/7 watch, day and night" },
            { label: "Connectivity", value: "Node-to-node network across the terrain" },
          ],
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "How many nodes do I need?", a: "It depends on your terrain and what you're protecting — a fence line, a ridge, a subdivision boundary. Reach out and we'll scope a layout with you." },
            { q: "Do nodes work at night?", a: "That's exactly what the low-light camera and thermal imaging are for. Fires most often start and spread at night, when nobody is watching." },
            { q: "What happens in bad weather?", a: "The sensors keep watching — rain and wind readings actually feed the fire picture. Battery backup keeps the node live through overcast stretches." },
          ],
        },
      ]}
    />
  );
}