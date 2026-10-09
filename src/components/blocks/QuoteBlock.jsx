import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuoteBlock({ quote, by, accent = "signal" }) {
  const color = accent === "glacial" ? "text-glacial" : "text-signal";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9 }}
      className="max-w-3xl mx-auto text-center"
    >
      <Quote className={`w-8 h-8 mx-auto mb-6 ${color}`} />
      <p className="font-heading text-white text-balance text-[clamp(1.25rem,2.8vw,2rem)] leading-snug">{quote}</p>
      {by && <div className="mt-5 text-xs tracking-mega text-slate-tech uppercase">{by}</div>}
    </motion.div>
  );
}