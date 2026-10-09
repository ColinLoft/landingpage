import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlockHeader from "@/components/blocks/BlockHeader";

// Items: { icon | badge, title, tag?, desc, link?: { to, label } }
export default function CardGrid({ kicker, title, intro, items, cols = 3, accent = "signal" }) {
  const iconColor = accent === "glacial" ? "text-glacial" : "text-signal";
  const grid = cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div>
      <BlockHeader kicker={kicker} title={title} intro={intro} accent={accent} />
      <div className={`grid gap-4 lg:gap-5 ${grid}`}>
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="flex flex-col p-6 rounded-2xl border border-hairline bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/15 transition-colors"
            >
              {Icon ? (
                <div className={`w-11 h-11 rounded-lg border border-hairline bg-white/[0.03] flex items-center justify-center mb-5 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-signal/30 to-glacial/20 border border-hairline flex items-center justify-center font-heading font-bold text-white mb-5">
                  {it.badge}
                </div>
              )}
              <div className="text-white font-medium">{it.title}</div>
              {it.tag && <div className={`text-[10px] tracking-mega uppercase mt-1.5 ${iconColor}`}>{it.tag}</div>}
              <p className="mt-3 text-sm text-slate-tech leading-relaxed flex-1">{it.desc}</p>
              {it.link && (
                <Link
                  to={it.link.to}
                  className={`group mt-5 inline-flex items-center gap-1.5 text-sm ${iconColor} hover:text-white transition-colors`}
                >
                  {it.link.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}