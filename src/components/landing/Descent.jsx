import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Flame, Wind, Home, Activity } from "lucide-react";
import ScrollWords from "@/components/landing/ScrollWords";
import { IMG } from "@/lib/images";

const SCENES = [
  {
    img: IMG.fire,
    tag: "Minute 0 · Ignition",
    line: "It starts as a spark on dry ground small enough to step on, easy to miss.",
    stat: "86%",
    statLabel: "of wildfires are caused by humans",
    accent: "text-signal",
  },
  {
    img: IMG.thermal,
    tag: "Minute 15 · The Spread",
    line: "In wind, a small fire doubles in size before the first engine clears the station.",
    stat: "2×",
    statLabel: "growth in the first hour, in dry wind",
    accent: "text-signal",
  },
  {
    img: IMG.aftermath,
    tag: "The People in the Path",
    line: "At the edge of town, a family gets minutes to decide what matters most.",
    stat: "Minutes",
    statLabel: "they get to evacuate",
    accent: "text-white",
  },
  {
    img: IMG.responder,
    tag: "The Responders",
    line: "Crews stretch across miles of ridge line. No human force can watch it all at once.",
    stat: "24/7",
    statLabel: "what full coverage demands",
    accent: "text-glacial",
  },
];

// Each scene is pinned for ~2 screens of scrolling; the image, headline and stat all
// reveal in sequence as the reader scrolls, so the story can't be rushed past.
function Scene({ scene, index }) {
  const ref = React.useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const y = useTransform(p, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(p, [0, 1], [1.2, 1.02]);
  const overlay = useTransform(p, [0, 0.2, 0.8, 1], [0.85, 0.5, 0.5, 0.9]);
  const exit = useTransform(p, [0.88, 1], [1, 0]);
  const tagOpacity = useTransform(p, [0.03, 0.12], [0, 1]);
  const tagX = useTransform(p, [0.03, 0.12], [-24, 0]);
  const statOpacity = useTransform(p, [0.58, 0.72], [0, 1]);
  const statY = useTransform(p, [0.58, 0.72], [26, 0]);
  const bar = useTransform(p, [0.04, 0.96], [0, 1]);

  return (
    <div ref={ref} className="relative h-[220vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image src={scene.img} alt={scene.tag} fittingType="fill" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />

        <motion.div style={{ opacity: exit }} className="relative h-full flex items-center">
          <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-12">
            <div className="max-w-2xl">
              <motion.div style={{ opacity: tagOpacity, x: tagX }} className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg border border-hairline bg-white/[0.04] flex items-center justify-center ${scene.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs tracking-mega text-slate-tech uppercase">{scene.tag}</span>
              </motion.div>
              <h2 className="font-heading font-semibold text-white text-balance text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.08]">
                <ScrollWords text={scene.line} progress={p} start={0.1} end={0.54} />
              </h2>
              <motion.div style={{ opacity: statOpacity, y: statY }} className="mt-7 flex items-baseline gap-3">
                <span className={`font-heading font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-none ${scene.accent}`}>
                  {scene.stat}
                </span>
                <span className="text-sm text-slate-tech uppercase tracking-wider">{scene.statLabel}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scene progress */}
        <motion.div style={{ opacity: exit }} className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-widest text-slate-tech">
            0{index + 1} / 0{SCENES.length}
          </span>
          <div className="w-32 h-px bg-white/10 overflow-hidden">
            <motion.div style={{ scaleX: bar }} className="h-full origin-left bg-signal" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Descent() {
  return (
    <section className="relative bg-obsidian">
      <div className="py-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-mega text-slate-tech uppercase"
        >
          The Descent · How a Wildfire Moves
        </motion.p>
      </div>
      {SCENES.map((s, i) => (
        <Scene key={s.tag} scene={s} index={i} />
      ))}
    </section>
  );
}