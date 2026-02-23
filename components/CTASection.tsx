"use client";

import React from "react";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="section-padding bg-gradient-to-br from-pink-900/30 via-purple-900/50 to-slate-900 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl-mobile font-bold text-white mb-4">
            Ready to Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Great?
            </span>
          </h2>
          <p className="text-base-mobile text-gray-300 mb-8">
            Let&apos;s discuss your project. I typically respond within a hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.app.google/muUJCTnbtDe1fF5E7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Book a free consultation call"
            >
              Book Free Call
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="View contact options"
            >
              View Contact Options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
