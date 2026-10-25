import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-line"
      aria-labelledby="hero-heading"
    >
      <div className="container-site grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-7 animate-fade-up">
          <p className="eyebrow mb-6">AI-first full stack engineer, 7+ years</p>

          <h1
            id="hero-heading"
            className="h-display text-[2.6rem] sm:text-6xl lg:text-[4.4rem] max-w-[14ch] mb-7"
          >
            I build AI&#8209;powered software that runs real businesses.
          </h1>

          <p className="lede max-w-[48ch] mb-10">
            Senior engineer behind SaaS, ERP and e-commerce platforms for UNICEF,
            Robi and Novo Nordisk, now putting LLMs to work inside those systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a project call
            </a>
            <a href="#about" className="btn-secondary">
              See experience
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-2">
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
            <figcaption className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto bg-paper border border-line rounded-md shadow-card px-4 py-3">
              <p className="text-sm text-ink">Available for remote roles and contract work</p>
              <p className="font-mono text-xs text-ink-3 mt-1">
                {siteConfig.location}, {siteConfig.timezone}. {siteConfig.overlap}.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
