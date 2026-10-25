import React from "react";
import { techCategories } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const Technologies = () => (
  <section id="technologies" className="section" aria-labelledby="stack-heading">
    <div className="container-site">
      <SectionHeader
        id="stack-heading"
        index="05"
        eyebrow="Stack"
        title="Boring, proven tools. New ones where they earn it."
      />
      <dl className="rule">
        {techCategories.map((c) => (
          <div key={c.title} className="grid sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-b border-line">
            <dt className="sm:col-span-3 eyebrow pt-1">{c.title}</dt>
            <dd className="sm:col-span-9 text-ink text-[15px] sm:text-base leading-relaxed">
              {c.techs.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Technologies;
