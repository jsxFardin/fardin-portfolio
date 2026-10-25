import React from "react";
import { process, aiWorkflow } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const Process = () => (
  <section id="process" className="section bg-paper-2 border-y border-line" aria-labelledby="process-heading">
    <div className="container-site">
      <SectionHeader
        id="process-heading"
        index="02"
        eyebrow="How I work"
        title="Small scope, weekly demos, measured AI."
        lede="The same loop whether you hire me for a six-week build or as a senior engineer on your team."
      />

      <div className="grid lg:grid-cols-12 gap-12">
        <ol className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
          {process.map((s) => (
            <li key={s.step} className="rule pt-5">
              <p className="font-mono text-xs text-ink-3 mb-3">{s.step}</p>
              <h3 className="font-serif text-2xl text-ink mb-3">{s.title}</h3>
              <p className="text-[15px] text-ink-2 leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ol>

        <aside className="lg:col-span-5 lg:pl-8 lg:border-l border-line">
          <p className="eyebrow mb-4">AI in my own workflow</p>
          <p className="text-ink-2 text-[15px] leading-relaxed mb-5">
            How I use AI day to day:
          </p>
          <ul className="space-y-3">
            {aiWorkflow.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-ink leading-relaxed">
                <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  </section>
);

export default Process;
