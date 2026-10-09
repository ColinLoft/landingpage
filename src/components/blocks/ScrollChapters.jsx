import React, { useState, useEffect, useRef } from "react";
import { Image } from "@/components/ui/image";
import { Check } from "lucide-react";
import BlockHeader from "@/components/blocks/BlockHeader";

// A pinned visual on the left changes as each chapter on the right scrolls into focus.
export default function ScrollChapters({ kicker, title, intro, chapters, accent = "signal" }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const accentText = accent === "glacial" ? "text-glacial" : "text-signal";
  const accentBar = accent === "glacial" ? "bg-glacial" : "bg-signal";

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.idx));
        });
      },
      { rootMargin: "-42% 0px -42% 0px" }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [chapters.length]);

  const cur = chapters[active];

  return (
    <div>
      <BlockHeader kicker={kicker} title={title} intro={intro} accent={accent} />
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Pinned visual */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-hairline bg-white/[0.02] reticle-grid">
              {chapters.map((c, idx) =>
                c.image ? (
                  <Image
                    key={c.title}
                    src={c.image}
                    alt={c.title}
                    fittingType="fill"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      idx === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ) : null
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div className={`font-heading font-bold text-7xl leading-none ${accentText}`}>0{active + 1}</div>
                {cur.stat && (
                  <div className="text-right">
                    <div className="font-heading font-semibold text-white text-2xl">{cur.stat.value}</div>
                    <div className="text-xs text-slate-tech uppercase tracking-wider mt-1">{cur.stat.label}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              {chapters.map((c, idx) => (
                <div key={c.title} className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden">
                  <div className={`h-full ${accentBar} transition-all duration-700 ${idx <= active ? "w-full" : "w-0"}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div>
          {chapters.map((c, idx) => (
            <div
              key={c.title}
              ref={(el) => (refs.current[idx] = el)}
              data-idx={idx}
              className={`lg:min-h-[62vh] flex flex-col justify-center py-8 transition-opacity duration-700 ${
                idx === active ? "lg:opacity-100" : "lg:opacity-30"
              }`}
            >
              {c.image && (
                <div className="lg:hidden mb-5 aspect-[16/10] rounded-xl overflow-hidden border border-hairline">
                  <Image src={c.image} alt={c.title} fittingType="fill" className="w-full h-full object-cover" />
                </div>
              )}
              <div className={`text-[11px] tracking-mega uppercase mb-3 ${accentText}`}>
                {c.kicker || `Chapter 0${idx + 1}`}
              </div>
              <h3 className="font-heading font-semibold text-white text-balance text-[clamp(1.4rem,2.6vw,2rem)] leading-tight">
                {c.title}
              </h3>
              <p className="mt-4 text-slate-tech leading-relaxed">{c.body}</p>
              {c.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${accentText}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}