import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlockHeader from "@/components/blocks/BlockHeader";

function Counter({ value, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t0 = performance.now();
    let frame;
    const tick = (t) => {
      const p = Math.min((t - t0) / 2200, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);
  const shown = n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{shown}{suffix}
    </span>
  );
}

export default function StatStrip({ kicker, title, intro, items, accent = "signal" }) {
  const valueColor = accent === "glacial" ? "text-glacial" : "text-signal";
  return (
    <div>
      <BlockHeader kicker={kicker} title={title} intro={intro} accent={accent} />
      <div className={`grid gap-4 sm:grid-cols-2 ${items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="p-6 rounded-2xl border border-hairline bg-white/[0.02]"
          >
            <div className={`font-heading font-bold text-[clamp(2rem,4vw,3rem)] leading-none ${valueColor}`}>
              {typeof it.value === "number" ? (
                <Counter value={it.value} decimals={it.decimals} prefix={it.prefix} suffix={it.suffix} />
              ) : (
                it.text
              )}
            </div>
            <div className="mt-3 text-sm font-medium text-white">{it.label}</div>
            {it.note && <div className="mt-1 text-xs text-slate-tech leading-relaxed">{it.note}</div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}