import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollWords from "@/components/landing/ScrollWords";

export default function Resolve() {
  const ref = React.useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const bg = useTransform(p, [0, 0.5, 1], ["#0A0B0D", "#1a0f08", "#0A0B0D"]);
  const eyebrowOpacity = useTransform(p, [0.05, 0.13], [0, 1]);
  const exit = useTransform(p, [0.9, 1], [1, 0]);

  return (
    <motion.section ref={ref} style={{ backgroundColor: bg }} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: exit }} className="relative text-center px-6">
          <motion.div style={{ opacity: eyebrowOpacity }} className="text-[11px] tracking-mega text-glacial uppercase mb-6">
            The Resolve
          </motion.div>
          <h2 className="font-heading font-bold tracking-tight text-white text-balance text-[clamp(2.25rem,7vw,6rem)] leading-[0.98]">
            <ScrollWords text="We engineered" progress={p} start={0.1} end={0.26} />
            <br />
            <ScrollWords text="the answers." progress={p} start={0.28} end={0.44} wordClassName="text-glacial" />
          </h2>
          <p className="mt-7 max-w-xl mx-auto text-base sm:text-lg text-slate-tech leading-relaxed text-balance">
            <ScrollWords
              text="Detection alone isn't enough. We watch every acre, launch within minutes of confirmation, and put water on the fire while it's still small. Autonomously, with a human in command."
              progress={p}
              start={0.48}
              end={0.84}
            />
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}