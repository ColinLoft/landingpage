import React from "react";
import Narrative from "@/components/blocks/Narrative";
import StatStrip from "@/components/blocks/StatStrip";
import TabExplorer from "@/components/blocks/TabExplorer";
import ScrubTimeline from "@/components/blocks/ScrubTimeline";
import ScrollChapters from "@/components/blocks/ScrollChapters";
import QuoteBlock from "@/components/blocks/QuoteBlock";
import CardGrid from "@/components/blocks/CardGrid";
import CompareBlock from "@/components/blocks/CompareBlock";
import StepTimeline from "@/components/blocks/StepTimeline";
import SpecGrid from "@/components/blocks/SpecGrid";
import FaqBlock from "@/components/blocks/FaqBlock";

const BLOCKS = {
  narrative: Narrative,
  stats: StatStrip,
  tabs: TabExplorer,
  scrub: ScrubTimeline,
  chapters: ScrollChapters,
  quote: QuoteBlock,
  cards: CardGrid,
  compare: CompareBlock,
  steps: StepTimeline,
  specs: SpecGrid,
  faq: FaqBlock,
};

// Renders an ordered list of content sections, each in its own banded row.
export default function BlockList({ blocks, accent = "signal" }) {
  return blocks.map((b, i) => {
    const { type, ...props } = b;
    const Block = BLOCKS[type];
    return (
      <section
        key={`${type}-${i}`}
        className={`relative py-16 lg:py-24 border-t border-hairline ${i % 2 === 1 ? "bg-obsidian-soft" : ""}`}
      >
        <div className="absolute inset-0 reticle-grid opacity-[0.12] pointer-events-none" />
        <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
          <Block accent={accent} {...props} />
        </div>
      </section>
    );
  });
}