import React from "react";
import { motion } from "framer-motion";

export default function BlockHeader({ kicker, title, intro, accent = "signal" }) {
  if (!title) return null;
  const kickerColor = accent === "glacial" ? "text-glacial" : "text-signal";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mb-10 lg:mb-12"
    >
      {kicker && <div className={`text-[11px] tracking-mega uppercase mb-4 ${kickerColor}`}>{kicker}</div>}
      <h2 className="font-heading font-semibold text-white text-balance text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base text-slate-tech leading-relaxed">{intro}</p>}
    </motion.div>
  );
}