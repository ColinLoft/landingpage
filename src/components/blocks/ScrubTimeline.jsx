import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import BlockHeader from "@/components/blocks/BlockHeader";

const TONES = { signal: "bg-signal", glacial: "bg-glacial", slate: "bg-white/40" };

// Drag the slider to move through a story one moment at a time.
// Optional `bars` + per-stop `values` animate a comparison as you scrub.
export default function ScrubTimeline({ kicker, title, intro, stops, bars = [], caption, accent = "signal" }) {
  const [i, setI] = useState(0);
  const stop = stops[i];

  return (
    <div>
      <BlockHeader kicker={kicker} title={title} intro={intro} accent={accent} />
      <div className="rounded-2xl border border-hairline bg-white/[0.02] p-6 lg:p-10">
        <div className={`grid gap-10 items-start ${bars.length ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
          <div className="min-h-[170px]">
            <div className="text-[10px] font-mono tracking-widest text-glacial uppercase">{stop.label}</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-3 font-heading font-semibold text-white text-2xl leading-tight">{stop.title}</h3>
                <p className="mt-3 text-slate-tech leading-relaxed">{stop.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {bars.length > 0 && (
            <div className="space-y-6">
              {bars.map((b, bi) => (
                <div key={b.label}>
                  <div className="flex items-baseline justify-between text-xs mb-2">
                    <span className="text-white/80">{b.label}</span>
                    <span className="font-mono text-slate-tech">{stop.values[bi]}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${TONES[b.tone] || TONES.signal}`}
                      animate={{ width: `${stop.values[bi]}%` }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10">
          <div className="text-[10px] tracking-mega uppercase text-slate-tech mb-4">Drag to move through time</div>
          <Slider min={0} max={stops.length - 1} step={1} value={[i]} onValueChange={(v) => setI(v[0])} />
          <div className="mt-4 flex justify-between gap-1">
            {stops.map((s, idx) => (
              <button
                key={s.label}
                onClick={() => setI(idx)}
                className={`text-[10px] sm:text-xs font-mono transition-colors ${
                  idx === i ? "text-white" : "text-slate-tech hover:text-white/80"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {caption && <p className="mt-6 text-xs text-slate-tech/80 italic">{caption}</p>}
      </div>
    </div>
  );
}