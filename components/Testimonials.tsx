import React from "react";
import Image from "next/image";
import { testimonials, type Testimonial } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const Mark = ({ t, size = "md" }: { t: Testimonial; size?: "md" | "lg" }) => {
  const box = size === "lg" ? "w-12 h-12" : "w-9 h-9";
  if (t.logo) {
    return (
      <span className={`${box} shrink-0 flex items-center justify-center rounded-md border border-line bg-paper overflow-hidden`}>
        <Image src={t.logo} alt={`${t.company} logo`} width={40} height={40} className="w-[70%] h-[70%] object-contain" />
      </span>
    );
  }
  return (
    <span
      className={`${box} shrink-0 flex items-center justify-center rounded-md border border-line bg-paper font-mono text-xs text-ink-2`}
      aria-hidden="true"
    >
      {initials(t.author)}
    </span>
  );
};

const Attribution = ({ t, size = "md" }: { t: Testimonial; size?: "md" | "lg" }) => (
  <footer className="flex items-start gap-3">
    <Mark t={t} size={size} />
    <div className="min-w-0">
      <p className={`text-ink font-medium leading-tight ${size === "lg" ? "text-base" : "text-[15px]"}`}>
        {t.author}
      </p>
      <p className="text-sm text-ink-3 leading-snug mt-0.5">
        {t.role}, {t.company}
      </p>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
        <span className="chip h-6">{t.projectTag}</span>
        {t.source && (
          <a
            href={t.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-2 underline underline-offset-4 decoration-line-strong hover:decoration-ink"
          >
            Verified on {t.source.label} <span aria-hidden="true">↗</span>
          </a>
        )}
      </p>
    </div>
  </footer>
);

const Testimonials = () => {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const rest = testimonials.filter((t) => t !== featured);

  return (
    <section
      id="testimonials"
      className="section bg-paper-2 border-y border-line"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <SectionHeader
          id="testimonials-heading"
          index="06"
          eyebrow="Testimonials"
          title="What clients say after the invoice is paid."
        />

        {/* Featured pull quote */}
        <figure className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <blockquote className="lg:col-span-8">
            <p className="font-serif text-2xl sm:text-3xl lg:text-[2.125rem] leading-[1.32] text-ink max-w-[42ch] [text-indent:-0.42em] [hanging-punctuation:first]">
              &ldquo;{featured.quote}&rdquo;
            </p>
          </blockquote>
          <figcaption className="lg:col-span-4 lg:pl-10 lg:border-l border-line lg:self-stretch flex items-end">
            <Attribution t={featured} size="lg" />
          </figcaption>
        </figure>

        {/* Shorter quotes as a ledger */}
        <ol className="mt-16 sm:mt-20 border-t border-line">
          {rest.map((t) => (
            <li
              key={t.author}
              className="grid lg:grid-cols-12 gap-5 lg:gap-12 py-7 sm:py-8 border-b border-line"
            >
              <figure className="contents">
                <blockquote className="lg:col-span-8">
                  <p className="font-serif text-xl sm:text-[1.375rem] leading-[1.35] text-ink max-w-[52ch] [text-indent:-0.42em] [hanging-punctuation:first]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="lg:col-span-4 lg:pl-10 lg:border-l border-line lg:self-stretch">
                  <Attribution t={t} />
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Testimonials;
