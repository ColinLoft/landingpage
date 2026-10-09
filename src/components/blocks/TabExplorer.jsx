import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import BlockHeader from "@/components/blocks/BlockHeader";

const ACCENT = {
  signal: { active: "border-signal/40 bg-signal/[0.06]", icon: "text-signal", text: "text-signal" },
  glacial: { active: "border-glacial/40 bg-glacial/[0.06]", icon: "text-glacial", text: "text-glacial" },
};

export default function TabExplorer({ kicker, title, intro, tabs, accent = "signal" }) {
  const [i, setI] = useState(0);
  const a = ACCENT[accent] || ACCENT.signal;
  const t = tabs[i];

  return (
    <div>
      <BlockHeader kicker={kicker} title={title} intro={intro} accent={accent} />
      <div className="grid lg:grid-cols-[300px_1fr] gap-5">
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {tabs.map((tab, idx) => {
            const TabIcon = tab.icon;
            const on = idx === i;
            return (
              <button
                key={tab.label}
                onClick={() => setI(idx)}
                className={`shrink-0 flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-colors ${
                  on ? a.active : "border-hairline bg-white/[0.02] hover:bg-white/[0.05]"
                }`}
              >
                {TabIcon && <TabIcon className={`w-4 h-4 ${on ? a.icon : "text-slate-tech"}`} />}
                <span className={`text-sm whitespace-nowrap ${on ? "text-white font-medium" : "text-white/70"}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-hairline bg-white/[0.02] p-6 lg:p-9 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {t.kicker && <div className={`text-[10px] tracking-mega uppercase mb-3 ${a.text}`}>{t.kicker}</div>}
              <h3 className="font-heading font-semibold text-white text-2xl leading-tight">{t.heading}</h3>
              <p className="mt-4 text-slate-tech leading-relaxed">{t.body}</p>
              {t.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${a.icon}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}