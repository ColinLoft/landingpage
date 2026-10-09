import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Check } from "lucide-react";

export default function Narrative({ kicker, title, body, bullets, image, flip, accent = "signal" }) {
  const kickerColor = accent === "glacial" ? "text-glacial" : "text-signal";
  const text = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className={`${flip ? "lg:order-2" : ""} ${image ? "" : "max-w-3xl"}`}
    >
      {kicker && <div className={`text-[11px] tracking-mega uppercase mb-4 ${kickerColor}`}>{kicker}</div>}
      <h2 className="font-heading font-semibold text-white text-balance text-[clamp(1.6rem,3.2vw,2.4rem)] leading-tight mb-4">
        {title}
      </h2>
      <p className="text-base text-slate-tech leading-relaxed">{body}</p>
      {bullets && (
        <ul className="mt-5 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-glacial" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  if (!image) return text;

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {text}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-hairline group ${flip ? "lg:order-1" : ""}`}
      >
        <Image
          src={image}
          alt={title}
          fittingType="fill"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
}