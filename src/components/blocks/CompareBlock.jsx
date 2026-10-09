import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function CompareBlock({ title, a, b }) {
  return (
    <div>
      {title && (
        <h2 className="font-heading font-semibold text-white text-[clamp(1.4rem,2.5vw,2rem)]">{title}</h2>
      )}
      <div className="grid lg:grid-cols-2 gap-5 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="p-6 lg:p-8 rounded-2xl border border-hairline bg-white/[0.02]"
        >
          <div className="text-[10px] tracking-mega uppercase text-slate-tech mb-5">{a.title}</div>
          <ul className="space-y-3.5">
            {a.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-tech">
                <X className="w-4 h-4 mt-0.5 shrink-0 text-slate-tech/50" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 lg:p-8 rounded-2xl border border-signal/30 bg-signal/[0.04]"
        >
          <div className="text-[10px] tracking-mega uppercase text-signal mb-5">{b.title}</div>
          <ul className="space-y-3.5">
            {b.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-signal" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}