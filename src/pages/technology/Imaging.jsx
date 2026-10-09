import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Thermometer, Moon, Eye, Layers } from "lucide-react";

export default function Imaging() {
  return (
    <StoryPage
      eyebrow="Technology"
      title="Imaging — three ways of seeing."
      lead="One camera can be fooled. Three cameras watching the same ground in different spectrums rarely can."
      image={IMG.thermal}
      accent="glacial"
      blocks={[
        {
          type: "stats",
          kicker: "The array",
          title: "Three spectrums, one verdict.",
          items: [
            { value: 3, label: "Spectrums on every node", note: "Thermal · low-light · RGB" },
            { text: "All 3", label: "Must agree before an alert fires", note: "No single camera triggers a response" },
            { text: "No lights", label: "Needed for night vision", note: "Low-light + thermal after dark" },
          ],
          accent: "glacial",
        },
        {
          type: "tabs",
          kicker: "Explore the spectrums",
          title: "What each camera is for",
          tabs: [
            { icon: Thermometer, label: "Thermal", kicker: "Heat", heading: "Sees what's hot, not what's bright", body: "Thermal imaging maps temperature. An ignition point shows up as a hot spot against cooler terrain — before there's visible flame, and through smoke or darkness.", bullets: ["Detects ignition points early", "Unaffected by darkness"] },
            { icon: Moon, label: "Low-light", kicker: "Darkness", heading: "Night vision without lighting the land", body: "A sensitive low-light camera keeps the visual picture alive after sunset, showing movement, glow and smoke shape where an ordinary camera would be blind.", bullets: ["Visible detail after dark", "Cross-checks the thermal read"] },
            { icon: Eye, label: "RGB", kicker: "Color", heading: "What a person can verify", body: "Full-color imagery is the human-readable layer — operators confirm what the machine flagged and keep a clear visual record of every event.", bullets: ["Plain-sight confirmation", "Clean after-action footage"] },
            { icon: Layers, label: "Fusion", kicker: "Together", heading: "Where false alarms go to die", body: "Software lines up all three feeds with the environmental sensors. A hot rock, a sun glint or a passing vehicle fails at least one test; a real fire passes them all.", bullets: ["Cross-spectrum agreement required", "Sensor readings back it up"] },
          ],
          accent: "glacial",
        },
        {
          type: "scrub",
          kicker: "Interactive · Try it",
          title: "Watch confidence build as each camera weighs in",
          intro: "Drag through the stages to see how three views of the same scene add up to a confirmed fire.",
          bars: [{ label: "Detection confidence", tone: "glacial" }],
          caption: "Illustrative confidence levels to explain the idea — not measured values.",
          stops: [
            { label: "Thermal", title: "A hot spot appears", desc: "The thermal feed shows a bright heat signature on a cool ridge. Interesting — but heat alone could be a sun-baked rock.", values: [30] },
            { label: "Low-light", title: "A glow and flicker", desc: "The low-light camera sees a flickering glow in the same spot. Rocks don't flicker. Confidence climbs.", values: [58] },
            { label: "RGB", title: "A visible plume", desc: "The color feed shows a thin plume of smoke rising from the same location. Three views now point at one place.", values: [82] },
            { label: "Fused", title: "Sensors confirm", desc: "Dry air, wind and rising temperature match the picture. The software scores it high enough to dispatch.", values: [97] },
          ],
          accent: "glacial",
        },
        {
          type: "compare",
          title: "One camera vs. three",
          a: {
            title: "Single-sensor detection",
            items: [
              "A hot rock or sun glint can look like fire",
              "Goes blind in the wrong conditions",
              "Needs a person to sort real alerts from false ones",
              "Trust erodes after the first few false alarms",
            ],
          },
          b: {
            title: "Multi-spectral fusion",
            items: [
              "Every alert must pass three independent views",
              "Always one spectrum that works in any conditions",
              "Software does the sorting before anyone is paged",
              "Alerts stay worth responding to",
            ],
          },
        },
        {
          type: "narrative",
          kicker: "Why it matters",
          title: "Trust is what makes autonomous response safe",
          body: "A system that sends an aircraft toward a fire has to be right. Fusing three spectrums with environmental data is how we keep false alarms rare enough that autonomy is something people can trust — not something they have to second-guess.",
          bullets: ["Few false alarms by design", "Evidence is logged for every decision"],
          image: IMG.ops,
          accent: "glacial",
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Why do you need three cameras?", a: "Because every camera has a blind spot. Thermal can't read color, RGB can't see in the dark, low-light can be fooled by glare. Together they cover each other's weaknesses." },
            { q: "Can smoke or haze block the cameras?", a: "Thermal imaging reads through smoke and haze far better than visible light, which is why it leads the detection." },
            { q: "What stops a false alarm from launching the helicopter?", a: "All three spectrums and the environmental readings have to agree first. No single camera can trigger a response on its own." },
          ],
        },
      ]}
    />
  );
}