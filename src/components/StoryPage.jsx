import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import BlockList from "@/components/blocks/BlockList";
import { ArrowRight } from "lucide-react";

export default function StoryPage({ eyebrow, title, lead, image, accent = "signal", blocks }) {
  return (
    <div className="bg-obsidian">
      <PageHero eyebrow={eyebrow} title={title} lead={lead} image={image} accent={accent} />
      <BlockList blocks={blocks} accent={accent} />

      <section className="relative border-t border-hairline py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 lg:p-8 rounded-2xl border border-hairline bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          >
            <div>
              <div className="text-white font-medium text-lg">Want to be part of this?</div>
              <div className="text-sm text-slate-tech mt-0.5">Donors, mentors, municipalities, volunteers — we'd love to talk.</div>
            </div>
            <Link
              to="/company/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-signal text-obsidian text-sm font-semibold hover:glow-amber transition-all shrink-0"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}