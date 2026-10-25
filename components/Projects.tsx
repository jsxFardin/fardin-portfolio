import React from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { ProjectsSchema } from "@/lib/structured-data";
import SectionHeader from "./SectionHeader";

const FEATURED = 3;

const Projects = () => {
  const featured = projects.slice(0, FEATURED);
  const more = projects.slice(FEATURED);

  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <ProjectsSchema />
      <div className="container-site">
        <SectionHeader
          id="work-heading"
          index="01"
          eyebrow="Selected work"
          title="Software that runs daily operations, not demos."
          lede="Production systems I architected or built as a core engineer. Each one still serves real users."
        />

        <ol className="space-y-20 sm:space-y-28">
          {featured.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={p.name}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
                  aria-label={`Open ${p.name}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-paper-2">
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </a>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <p className="eyebrow mb-4">
                    <span className="text-ink">0{i + 1}</span> · {p.company}
                    {"role" in p && p.role ? ` · ${p.role}` : ""}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight mb-5">
                    {p.name}
                  </h3>

                  <dl className="space-y-4 text-[15px] leading-relaxed">
                    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
                      <dt className="eyebrow pt-1">Problem</dt>
                      <dd className="text-ink-2">{p.problem}</dd>
                    </div>
                    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
                      <dt className="eyebrow pt-1">Built</dt>
                      <dd className="text-ink-2">{p.solution}</dd>
                    </div>
                    {"outcome" in p && p.outcome && (
                      <div className="grid grid-cols-[5.5rem_1fr] gap-3 rule pt-4">
                        <dt className="eyebrow pt-1">Result</dt>
                        <dd className="text-ink font-medium">{p.outcome}</dd>
                      </div>
                    )}
                  </dl>

                  <ul className="flex flex-wrap gap-1.5 mt-6" aria-label="Tech stack">
                    {p.technologies.slice(0, 7).map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link mt-6"
                  >
                    Visit {new URL(p.link).hostname.replace("www.", "")}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </li>
            );
          })}
        </ol>

        {more.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <p className="eyebrow mb-4">More projects</p>
            <ul className="rule">
              {more.map((p) => (
                <li
                  key={p.name}
                  className="grid sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-b border-line items-baseline"
                >
                  <h3 className="sm:col-span-4 text-ink font-medium">{p.name}</h3>
                  <p className="sm:col-span-5 text-sm text-ink-2">
                    {"outcome" in p && p.outcome ? p.outcome : p.solution}
                  </p>
                  <p className="sm:col-span-2 font-mono text-xs text-ink-3">{p.company}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:col-span-1 sm:text-right text-sm text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink"
                  >
                    Visit
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
