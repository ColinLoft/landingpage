import React from "react";
import { motion } from "framer-motion";

export default function StepTimeline({ title, items }) {
  return (
    <div>
      {title && (
        <h2 className="font-heading font-semibold text-white text-[clamp(1.4rem,2.5vw,2rem)]">{title}</h2>
      )}
      <div className="relative mt-9 max-w-3xl">
        <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-signal/50 via-white/10 to-transparent" />
        <div className="space-y-9">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex gap-5"
            >
              <div className="relative z-10 w-8 h-8 shrink-0 rounded-full border border-signal/40 bg-obsidian flex items-center justify-center text-xs font-mono text-signal">
                {i + 1}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-white font-medium">{s.title}</span>
                  {s.time && (
                    <span className="text-[10px] font-mono tracking-widest text-glacial uppercase">{s.time}</span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-slate-tech leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}