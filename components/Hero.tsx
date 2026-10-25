import React from "react";
import Image from "next/image";
import { siteConfig, stats } from "@/lib/data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-line"
      aria-labelledby="hero-heading"
    >
      <div className="container-site grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-7 animate-fade-up">
          <p className="eyebrow mb-6">
            AI-first full stack engineer · 7+ yrs
          </p>

          <h1
            id="hero-heading"
            className="h-display text-[2.6rem] sm:text-6xl lg:text-[4.4rem] max-w-[14ch] mb-7"
          >
            I build AI&#8209;powered software that runs real businesses.
          </h1>

          <p className="lede max-w-[48ch] mb-10">
            Senior engineer behind SaaS, ERP and e-commerce platforms for UNICEF,
            Robi and Novo Nordisk. Since 2024, I put LLMs to work inside those
            systems: RAG assistants, workflow automation, device integrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a 20-min call
              <span className="font-mono text-xs opacity-70">for projects</span>
            </a>
            <a href="#about" className="btn-secondary">
              View experience
              <span className="font-mono text-xs text-ink-3">for roles</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-2 mb-14">
            <a href="#work" className="btn-link">
              See selected work
            </a>
            {siteConfig.resumeUrl && (
              <a href={siteConfig.resumeUrl} className="btn-link" download>
                Download résumé
              </a>
            )}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              LinkedIn
            </a>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 rule pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-3xl sm:text-4xl text-ink leading-none mb-2">
                  {s.value}
                </dd>
                <dd className="text-xs text-ink-3 leading-snug max-w-[18ch]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 lg:pl-6 animate-fade-up [animation-delay:120ms]">
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-paper-3">
              <Image
                src="/images/fardin-ahsan-portrait.jpg"
                alt="Fardin Ahsan, AI-first full stack engineer, portrait in an office"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto bg-paper border border-line rounded-md shadow-[0_8px_30px_-12px_rgba(21,20,15,0.25)] px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-ink">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-live opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-live" />
                </span>
                Available for remote roles and contract work
              </div>
              <p className="font-mono text-[11px] text-ink-3 mt-1">
                {siteConfig.location} · {siteConfig.timezone} · {siteConfig.overlap}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
