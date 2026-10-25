import React from "react";
import { faqs } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const FAQ = () => (
  <section id="faq" className="section bg-paper-2 border-y border-line" aria-labelledby="faq-heading">
    <div className="container-site grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <SectionHeader
          id="faq-heading"
          index="08"
          eyebrow="FAQ"
          title="Before you reach out."
          className="!grid-cols-1 lg:!grid-cols-1 mb-6"
        />
      </div>
      <dl className="lg:col-span-8 rule">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-line">
            <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-ink font-medium [&::-webkit-details-marker]:hidden">
              <dt>{f.q}</dt>
              <span className="font-mono text-ink-3 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
            </summary>
            <dd className="pb-6 text-[15px] text-ink-2 leading-relaxed max-w-[64ch]">{f.a}</dd>
          </details>
        ))}
      </dl>
    </div>
  </section>
);

export default FAQ;
