import React from "react";
import PageHero from "@/components/PageHero";

export default function LegalPage({ title, lead, updated, sections }) {
  return (
    <div className="bg-obsidian">
      <PageHero eyebrow="Legal" title={title} lead={lead} accent="signal" />
      <section className="relative py-16 lg:py-24">
        <div className="relative mx-auto max-w-[800px] px-6 lg:px-12">
          <div className="text-xs text-slate-tech mb-10">Last updated: {updated}</div>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-heading font-semibold text-white text-xl mb-3">{s.h}</h2>
                <p className="text-sm text-slate-tech leading-relaxed whitespace-pre-line">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}