import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";

export default function OurApproach() {
  return (
    <StoryPage
      eyebrow="Company"
      title="Our approach: detection was never the finish line."
      lead="The industry built cameras that find fires. We built the system that ends them — autonomously, quickly, and affordably enough to place everywhere."
      image={IMG.copter}
      accent="signal"
      blocks={[
        {
          type: "narrative",
          kicker: "The idea",
          title: "Respond, don't just report",
          body: "Every existing detection system stops at the alert. Ours starts there. Finding a fire is the beginning of the job, not the end — the end is water on the flame.",
          bullets: ["Detection-to-suppression in one system", "Response measured in minutes, not hours"],
          image: IMG.fire,
        },
        {
          type: "compare",
          title: "Two ways to handle a spark",
          a: {
            title: "Detection-only",
            items: [
              "Alert waits for a person to see it",
              "Dispatch waits for a person to call it",
              "Crews drive to the scene — hours pass",
              "Response arrives to a much bigger fire",
            ],
          },
          b: {
            title: "Detect + respond",
            items: [
              "Software confirms the fire in seconds",
              "Helicopter launches autonomously",
              "Water lands while the fire is small",
              "Crews arrive to a handled start, not a wildfire",
            ],
          },
        },
        {
          type: "chapters",
          kicker: "Our principles",
          title: "Four decisions that shape everything we build",
          chapters: [
            { kicker: "Principle 01", title: "Autonomous first, human always", body: "We automate everything that benefits from speed and keep a human operator observing every mission with override authority at all times. Autonomy buys minutes; the operator keeps judgment.", bullets: ["Autonomous dispatch and flight", "Operator-in-the-loop with full override"], stat: { value: "Fast", label: "And accountable" }, image: IMG.ops },
            { kicker: "Principle 02", title: "Affordable enough to be everywhere", body: "Expensive detection protects a few square miles. Cheap, solar, self-sustaining nodes protect the whole ridge line. We engineer for scale, because fires don't respect budgets.", bullets: ["Solar powered — no infrastructure cost", "Simple mounts: pole, wall, fence, ridge"], stat: { value: "0", label: "Wires" }, image: IMG.node },
            { kicker: "Principle 03", title: "Built in-house, understood completely", body: "We design and build every sensor, airframe and line of code ourselves. It keeps costs down and lets us improve any part of the system after any flight.", bullets: ["Hardware built by the team", "Software and autonomy written by the team"], stat: { value: "100%", label: "In-house" }, image: IMG.workshop },
            { kicker: "Principle 04", title: "Prove it, then scale it", body: "We start with wildfire, prove the model on real land, and extend it to other disasters one at a time.", bullets: ["Wildfire first", "Hurricanes, floods, tornadoes and droughts to follow"], stat: { value: "1 → 5", label: "Disaster types" }, image: IMG.earth },
          ],
        },
        {
          type: "steps",
          title: "How we build",
          items: [
            { title: "Research", desc: "Understand the disaster, the existing tools, and exactly where the gap is." },
            { title: "Prototype", desc: "Build the smallest version that tests the idea, by hand, in our workshop." },
            { title: "Field test", desc: "Put it on real terrain and in real air. Measure everything." },
            { title: "Refine", desc: "Take what the test taught us and make the next version safer and faster." },
            { title: "Deploy with partners", desc: "Place the system on partner land, learn from real events, and repeat." },
          ],
        },
        {
          type: "quote",
          quote: "Detect is not enough. We respond. We extinguish.",
          by: "Our approach",
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            { q: "Why don't you just partner with existing detection networks?", a: "We're open to it — but a network that can only alert people still leaves the gap we exist to close. Our value is the response." },
            { q: "Why is everything built in-house?", a: "It keeps cost low, speeds up iteration and gives us full knowledge of every part, which matters for safety." },
          ],
        },
      ]}
    />
  );
}