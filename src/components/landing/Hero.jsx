import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/images";

const EARTH = IMG.fire;
// of the Wennington wildfire, 2022 — 1080p VP9 webm derivative, streamed live.
const HERO_VIDEO = "https://cdn.hackclub.com/01a121f7-75ac-77ee-bfb0-78ca7443f11d/271700_small.mp4";

export default function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[160vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Earth background */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <video
            src={HERO_VIDEO}
            poster={EARTH}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/30 to-obsidian/80" />
          <div className="absolute inset-x-0 top-1/4 bottom-0 bg-gradient-to-b from-transparent via-obsidian/40 to-transparent" />
        </motion.div>

        {/* Headline */}
        <motion.div style={{ y: textY, opacity: textOpacity }} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[11px] sm:text-xs tracking-mega text-signal uppercase mb-6"
          >
            Wildfire Response · A Mission-Driven Nonprofit
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-heading font-bold tracking-tight text-white text-balance text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] drop-shadow-[0_4px_30px_rgba(10,11,13,0.9)]"
          >
            Wildfires move fast.<br />
            <span className="text-signal">So do we.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-7 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed text-balance drop-shadow-[0_2px_16px_rgba(10,11,13,0.95)]"
          >
            Every minute a fire burns unwatched, it grows. Season Report detects it and puts it out, <span className="text-white">in minutes</span>.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}