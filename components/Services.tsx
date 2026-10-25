import React from "react";
import { services } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const Services = () => (
  <section id="services" className="section" aria-labelledby="services-heading">
    <div className="container-site">
      <SectionHeader
        id="services-heading"
        index="03"
        eyebrow="Services"
        title="What I can take off your plate."
        lede="Scoped projects, retainers, or embedded in your team. Each service ships with CI/CD, monitoring and docs."
      />

      <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
        {services.map((s, i) => (
          <li key={s.title} className="bg-paper p-7 sm:p-8 hover:bg-paper-2 transition-colors">
            <p className="font-mono text-xs text-ink-3 mb-6">0{i + 1}</p>
            <h3 className="text-lg font-medium text-ink mb-3">{s.title}</h3>
            <p className="text-[15px] text-ink-2 leading-relaxed">{s.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Services;
