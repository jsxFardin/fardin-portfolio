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
  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];
  const rating = testimonial.rating ?? 5;
  const projectTag = testimonial.projectTag ?? "Project";

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
      className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background with subtle glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <header className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl-mobile font-bold text-white mb-4">
            What Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full" aria-hidden="true" />
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Card with glassmorphism and glow */}
          <div
            className="relative rounded-3xl p-8 md:p-10 transition-opacity duration-500"
            role="region"
            aria-roledescription="Testimonial carousel"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="absolute inset-0 bg-purple-900/40 backdrop-blur-xl rounded-3xl border border-white/10" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-pink-500/20 shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)]" />

            <div className="relative">
              {/* Top row: Reviewer info (left) | Project tag + Nav arrows (right) */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
                {/* Left: Avatar + Name + Title + Company */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {getInitials(testimonial.author)}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-white text-lg block">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-gray-400 mt-0.5">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Right: Project tag + Nav arrows */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium">
                    <BrainIcon />
                    {projectTag}
                  </span>
                  <div className="flex gap-2">
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
                </div>
              </div>

              {/* 5-star rating */}
              <div className="flex gap-0.5 mb-6" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote with large quotation mark */}
              <div className="flex gap-4">
                <span className="text-6xl md:text-7xl font-serif text-purple-400/40 leading-none select-none" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote>
                  <p className="text-base-mobile text-gray-200 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </div>
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

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Start your project - Get in touch"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
