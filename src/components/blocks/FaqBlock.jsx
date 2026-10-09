import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqBlock({ title, items }) {
  return (
    <div>
      {title && (
        <h2 className="font-heading font-semibold text-white text-[clamp(1.4rem,2.5vw,2rem)]">{title}</h2>
      )}
      <Accordion type="single" collapsible className="mt-8">
        {items.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="border border-hairline rounded-xl px-5 mb-3 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
          >
            <AccordionTrigger className="text-white text-sm hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-slate-tech text-sm leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}