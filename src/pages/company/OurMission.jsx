import StoryPage from "@/components/StoryPage";
import { IMG } from "@/lib/images";
import { Heart, Home, Leaf, Eye, Handshake } from "lucide-react";

export default function OurMission() {
  return (
    <StoryPage
      eyebrow="Company"
      title="Our mission: protect people, property, and the planet."
      lead="We exist to solve the world's problems — specifically natural disasters — with technology and hardware, so communities stop losing what they can't replace."
      image={IMG.aftermath}
      accent="signal"
      blocks={[
        {
          type: "stats",
          kicker: "Why it's urgent",
          title: "The scale of what we're up against",
          items: [
            { value: 52000, suffix: "+", label: "Wildfires per year", note: "United States, annual average" },
            { value: 350, prefix: "$", suffix: "B", label: "In disaster damage", note: "Global, annual economic cost" },
            { value: 1.5, decimals: 1, suffix: "M", label: "Acres burned yearly", note: "U.S. land lost to wildfire" },
          ],
        },
        {
          type: "tabs",
          kicker: "Three promises",
          title: "Who the mission is for",
          tabs: [
            { icon: Heart, label: "People", kicker: "Help people", heading: "Behind every statistic is a family", body: "Our systems are built to act while action still helps. Minutes matter, and minutes are what we engineer for.", bullets: ["Faster response when lives are on the line", "Protection for communities on the front line"] },
            { icon: Home, label: "Property", kicker: "Help property", heading: "Homes and livelihoods shouldn't burn while the technology sits unbuilt", body: "Homes, ranches, infrastructure and livelihoods deserve protection that doesn't depend on being near a big agency's budget.", bullets: ["Detection and suppression at the source", "Coverage for underserved land"] },
            { icon: Leaf, label: "Planet", kicker: "Help the planet", heading: "Ecosystems that take decades to return", body: "Wildfires destroy forests and watersheds that take decades to recover. Containing fires while they're small protects the land and the climate it holds together.", bullets: ["Ecosystems protected by early suppression", "A model that scales to every disaster type"] },
          ],
        },
        {
          type: "narrative",
          kicker: "Why hardware",
          title: "Reports don't put out fires. Machines do.",
          body: "Plenty of good ideas stop at awareness. We chose to build — sensors, aircraft and software that actually do something when disaster strikes. That's harder, slower and more expensive than a campaign, and it's the only thing that changes the outcome on the day.",
          bullets: ["Detection plus response in one system", "Designed and built by our own team"],
          image: IMG.workshop,
        },
        {
          type: "steps",
          title: "How the mission grows",
          items: [
            { time: "Now", title: "Wildfire", desc: "Prove the model: sensor nodes and an autonomous helicopter that find fires and put them out." },
            { time: "Next", title: "Hurricanes & floods", desc: "Extend autonomous response to storm assessment and rapid relief delivery." },
            { time: "Research", title: "Tornadoes & droughts", desc: "Detection, post-event response and long-duration monitoring." },
            { time: "Always", title: "Every disaster that needs an answer", desc: "One platform of sensing, response and software that adapts to each." },
          ],
        },
        {
          type: "cards",
          kicker: "How we hold ourselves to it",
          title: "Commitments behind the mission",
          items: [
            { icon: Eye, title: "Transparency", desc: "We share what works, what doesn't, and what we learn from every test." },
            { icon: Heart, title: "Humans in the loop", desc: "Technology serves people's judgment, never replaces it." },
            { icon: Handshake, title: "Open to partners", desc: "The mission goes faster with agencies, landowners and institutions beside us.", link: { to: "/company/partners", label: "Partner with us" } },
          ],
        },
        {
          type: "quote",
          quote: "Solve the world's problems with technology and hardware — starting with the ones we can stop today.",
          by: "Our mission",
        },
      ]}
    />
  );
}