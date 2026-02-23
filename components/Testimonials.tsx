"use client";

import React, { useState, useEffect } from "react";
import { testimonials } from "@/lib/data";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-pink-500/30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const accentColors = [
  "from-pink-500/20 to-purple-500/20 border-pink-500/30",
  "from-purple-500/20 to-cyan-500/20 border-purple-500/30",
  "from-cyan-500/20 to-emerald-500/20 border-cyan-500/30",
  "from-amber-500/20 to-pink-500/20 border-amber-500/30",
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];
  const rating = testimonial.rating ?? 5;
  const accent = accentColors[currentIndex % accentColors.length];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <header className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl-mobile font-bold text-white mb-4">
            What Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full" aria-hidden="true" />
          <p className="text-base-mobile text-gray-400 mt-6 max-w-xl mx-auto">
            Trusted by CEOs, project managers, and teams worldwide
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Slider card */}
          <div
            className={`relative rounded-2xl p-6 lg:p-8 bg-gradient-to-br ${accent} border backdrop-blur-sm transition-all duration-500`}
            role="region"
            aria-roledescription="Testimonial carousel"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-60">
              <QuoteIcon />
            </div>

            {/* Top row: Nav arrows */}
            <div className="flex justify-end gap-2 mb-6">
              <button
                onClick={goToPrev}
                className="p-2.5 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="p-2.5 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Rating */}
            <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: rating }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mb-6 pr-8">
              <p className="text-base text-gray-200 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {getInitials(testimonial.author)}
              </div>
              <div>
                <cite className="not-italic font-semibold text-white block">
                  {testimonial.author}
                </cite>
                <p className="text-sm text-gray-400">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
              <span className="ml-auto px-3 py-1 rounded-lg bg-white/10 text-xs font-medium text-gray-300 border border-white/10">
                {testimonial.projectTag}
              </span>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`View testimonial from ${testimonials[index].author}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Start your project - Get in touch"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
