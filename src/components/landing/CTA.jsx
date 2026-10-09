import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Briefcase, GraduationCap, Building2, HandHeart, Sparkles } from "lucide-react";

const INTERESTS = [
  { icon: Heart, label: "Donors" },
  { icon: Building2, label: "Grants & Institutions" },
  { icon: Briefcase, label: "Investors" },
  { icon: GraduationCap, label: "Mentors" },
  { icon: Users, label: "Volunteers" },
  { icon: HandHeart, label: "Municipalities & Landowners" },
];

export default function CTA() {
  return (
    <section className="relative bg-obsidian py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />

      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-white/[0.02] mb-7">
            <Sparkles className="w-3.5 h-3.5 text-signal" />
            <span className="text-[10px] tracking-mega text-slate-tech uppercase">Join the Mission</span>
          </div>
          <h2 className="font-heading font-bold text-white text-balance text-[clamp(2.25rem,6vw,5rem)] leading-[0.98]">
            Let's build the answer<br />
            <span className="text-signal">together.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-base lg:text-lg text-slate-tech leading-relaxed text-balance">
            Whether you're funding, guiding, or deploying — we'd love to talk. Tell us how you'd
            like to be part of wildfire response.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          {INTERESTS.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-hairline bg-white/[0.02] text-sm text-white/80">
                <Icon className="w-3.5 h-3.5 text-slate-tech" />
                {it.label}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <Link
            to="/company/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-signal text-obsidian text-base font-semibold hover:glow-amber transition-all"
          >
            Talk to Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-xs text-slate-tech">We respond to every message — every partner matters.</p>
        </motion.div>
      </div>
    </section>
  );
}