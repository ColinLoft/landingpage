import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const STATS = [
  { value: 52000, suffix: "+", label: "Wildfires per year", sub: "United States, annual average", accent: "text-signal", bar: "from-signal/20" },
  { value: 1.5, suffix: "M", label: "Acres burned", sub: "U.S. land lost to wildfire yearly", accent: "text-signal", bar: "from-signal/20", decimals: 1 },
  { value: 350, prefix: "$", suffix: "B", label: "In annual wildfire losses", sub: "Suppression, property and recovery costs", accent: "text-signal", bar: "from-signal/20" },
  { value: 70, suffix: "+", label: "Named storms", sub: "Hurricanes & typhoons, global", accent: "text-glacial", bar: "from-glacial/20" },
  { value: 40, suffix: "%", label: "Drought coverage", sub: "Land affected by drought annually", accent: "text-signal", bar: "from-signal/20" },
  { value: 600, suffix: "+", label: "Tornadoes", sub: "Reported per year, U.S. alone", accent: "text-white", bar: "from-white/20" },
];

function Counter({ value, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(start + (value - start) * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  const formatted = n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <span ref={ref} className="tabular-nums">{prefix}{formatted}{suffix}</span>;
}

function StatCard({ stat, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="group relative p-6 lg:p-8 rounded-2xl border border-hairline bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
    >
      <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t ${stat.bar} to-transparent`} />
      <div className={`font-heading font-bold text-[clamp(2.25rem,5vw,3.5rem)] leading-none ${stat.accent}`}>
        <Counter value={stat.value} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
      </div>
      <div className="mt-3 text-sm font-medium text-white">{stat.label}</div>
      <div className="mt-1 text-xs text-slate-tech">{stat.sub}</div>
    </motion.div>
  );
}

export default function Toll() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgShift = useTransform(scrollYProgress, [0, 0.5, 1], ["#0A0B0D", "#150c06", "#0A0B0D"]);

  return (
    <motion.section ref={ref} style={{ backgroundColor: bgShift }} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          <div className="text-[11px] tracking-mega text-signal uppercase mb-5">The Toll</div>
          <h2 className="font-heading font-bold text-white text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
            The cost of wildfire, <span className="text-slate-tech">measured.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-slate-tech leading-relaxed max-w-2xl">
            These aren't abstract numbers. They're homes, ecosystems, and lives. Wildfire is where
            we start and the scale of the crisis is exactly why detection alone has never been enough.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 flex items-center gap-3 text-sm text-slate-tech"
        >
        </motion.div>
      </div>
    </motion.section>
  );
}