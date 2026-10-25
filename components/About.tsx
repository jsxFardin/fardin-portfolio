import React from "react";
import { facts, experience, siteConfig, stats } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const About = () => (
  <section id="about" className="section bg-paper-2 border-y border-line" aria-labelledby="about-heading">
    <div className="container-site">
      <SectionHeader
        id="about-heading"
        index="04"
        eyebrow="About and experience"
        title="Seven years from POS hardware to LLM pipelines."
      />

      <dl className="grid grid-cols-3 gap-4 sm:gap-6 rule pt-8 mb-14">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-serif text-3xl sm:text-4xl text-ink leading-none mb-2">
              {s.value}
            </dd>
            <dd className="text-xs sm:text-sm text-ink-3 leading-snug max-w-[22ch]">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-5 text-[15px] sm:text-base text-ink-2 leading-relaxed">
          <p>
            I started integrating barcode scanners and punch devices into PHP
            apps, then spent six years building SaaS, ERP, CRM and e-commerce
            platforms that teams depend on every day, for organisations like
            UNICEF, Robi Axiata, Novo Nordisk and Oxfam.
          </p>
          <p>
            Since 2024 my focus is making those systems smarter: RAG document
            Q&amp;A, customer-facing assistants and LLM-driven automation, with
            evals and cost tracking so the AI parts are as reliable as the rest.
          </p>
          <p>
            I like small teams, clear briefs and shipping weekly. I write and
            record short engineering videos on the side.
          </p>

          <dl className="rule pt-6 mt-8 space-y-3">
            {facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[7.5rem_1fr] gap-3 text-sm">
                <dt className="eyebrow pt-0.5">{f.label}</dt>
                <dd className="text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
            {siteConfig.resumeUrl && (
              <a href={siteConfig.resumeUrl} className="btn-link" download>
                Download résumé
              </a>
            )}
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-link">
              LinkedIn
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="btn-link">
              GitHub
            </a>
          </div>
        </div>

        <div className="lg:col-span-7" id="experience">
          <h3 className="eyebrow mb-2">Experience</h3>
          <ol className="rule">
            {experience.map((e) => (
              <li key={e.company} className="grid sm:grid-cols-12 gap-3 sm:gap-6 py-6 border-b border-line">
                <div className="sm:col-span-4">
                  <p className="font-mono text-xs text-ink-3 mb-1">{e.period}</p>
                  <p className="text-sm text-ink-3">{e.location}</p>
                </div>
                <div className="sm:col-span-8">
                  <h4 className="text-ink font-medium">
                    {e.role}, <span className="text-ink-3 font-normal">{e.company}</span>
                  </h4>
                  <p className="text-[15px] text-ink-2 leading-relaxed mt-2">{e.summary}</p>
                  <ul className="flex flex-wrap gap-1.5 mt-4" aria-label="Stack">
                    {e.stack.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default About;
