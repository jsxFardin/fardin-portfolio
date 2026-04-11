"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-20">
          ⚛️
        </div>
        <div className="absolute top-40 right-20 text-3xl animate-bounce opacity-20" style={{ animationDelay: "1s" }}>
          📜
        </div>
        <div className="absolute bottom-40 left-20 text-4xl animate-bounce opacity-20" style={{ animationDelay: "2s" }}>
          🚀
        </div>
        <div className="absolute bottom-20 right-10 text-3xl animate-bounce opacity-20">
          ⚙️
        </div>
        <div className="absolute top-1/3 left-1/4 text-3xl animate-bounce opacity-20" style={{ animationDelay: "1.5s" }}>
          🐳
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-3xl animate-bounce opacity-20" style={{ animationDelay: "2.5s" }}>
          🎨
        </div>

        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="container-max text-center relative z-10">
        {/* Availability Badge - Conversion */}
        <div className="animate-fade-in mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            Available for freelance & contract work
          </span>
        </div>

        {/* Main Heading - Single h1 per page */}
        <div className="animate-fade-in">
          <h1 id="hero-heading" className="text-4xl-mobile font-bold text-white mb-6 animate-slide-up">
            <span className="inline-block animate-fade-in">Hi, I&apos;m&nbsp;</span>
            <span className="inline-block text-pink-400">
              Fardin Ahsan
            </span>
          </h1>

          <p className="text-2xl-mobile font-semibold text-gray-300 mb-4 animate-slide-up max-w-2xl mx-auto">
            Full Stack Developer helping businesses turn ideas into scalable, high-performance digital solutions.
          </p>

          {/* Social Proof */}
          <p className="text-base-mobile text-gray-400 mb-8 animate-slide-up">
            Trusted by UNICEF, Robi, Novo Nordisk, Oxfam & 50+ projects delivered
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up">
            <a
              href="#projects"
              className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 group"
              aria-label="View my featured projects"
            >
              <span className="group-hover:animate-pulse">View Projects</span>
            </a>
            <a
              href="https://calendar.app.google/59ki4GCme9Qo4RSP8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 group"
              aria-label="Book a free consultation appointment"
            >
              <span className="group-hover:animate-pulse">Book Free Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
