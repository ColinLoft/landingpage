import React from "react";
import { motion } from "framer-motion";

export default function SpecGrid({ title, items }) {
  return (
    <div>
      {title && (
        <h2 className="font-heading font-semibold text-white text-[clamp(1.4rem,2.5vw,2rem)]">{title}</h2>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            className="p-5 rounded-xl border border-hairline bg-white/[0.02]"
          >
            <div className="text-[10px] tracking-mega uppercase text-slate-tech">{it.label}</div>
            <div className="mt-2 text-sm text-white leading-relaxed">{it.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}