import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ChevronDown } from "lucide-react";

export default function PageHero({ eyebrow, title, lead, image, accent = "signal" }) {
  const accentClass = accent === "glacial" ? "text-glacial" : "text-signal";
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      {image && (
        <>
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image src={image} alt={title} fittingType="fill" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/40" />
        </>
      )}
      <div className="absolute inset-0 reticle-grid opacity-30" />
      <div className="relative h-full flex items-end">
        <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-12 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-[11px] tracking-mega uppercase mb-4 ${accentClass}`}
          >
            {eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading font-bold text-white text-balance text-[clamp(2.25rem,6vw,5rem)] leading-[0.98] max-w-4xl"
          >
            {title}
          </motion.h1>
          {lead && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-5 max-w-2xl text-base lg:text-lg text-slate-tech leading-relaxed text-balance"
            >
              {lead}
            </motion.p>
          )}
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 right-6 lg:right-12"
      >
        <ChevronDown className="w-5 h-5 text-white/40" />
      </motion.div>
    </section>
  );
}