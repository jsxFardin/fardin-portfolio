"use client";

import React from "react";
import { services } from "@/lib/data";

const accentStyles: Record<string, { bg: string; border: string }> = {
  blue: {
    bg: "bg-blue-500",
    border: "border-blue-500/50 shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]",
  },
  purple: {
    bg: "bg-purple-500",
    border: "border-purple-500/50 shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]",
  },
  rose: {
    bg: "bg-rose-500",
    border: "border-rose-500/50 shadow-[0_0_20px_-5px_rgba(244,63,94,0.4)]",
  },
  orange: {
    bg: "bg-orange-500",
    border: "border-orange-500/50 shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)]",
  },
  emerald: {
    bg: "bg-emerald-500",
    border: "border-emerald-500/50 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]",
  },
  indigo: {
    bg: "bg-indigo-500",
    border: "border-indigo-500/50 shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]",
  },
  cyan: {
    bg: "bg-cyan-500",
    border: "border-cyan-500/50 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]",
  },
};

const serviceIcons: Record<number, React.ReactNode> = {
  0: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  1: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  2: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  3: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  4: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
};

const Services = () => {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-[#1a0a2e] via-purple-900/95 to-[#1a0a2e] relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Abstract wavy background pattern */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 Q300,200 600,300 T1200,300" fill="none" stroke="url(#wave1)" strokeWidth="1" opacity="0.5" />
            <path d="M0,400 Q400,250 800,400 T1200,400" fill="none" stroke="url(#wave2)" strokeWidth="1" opacity="0.4" />
            <path d="M0,200 Q200,350 600,200 T1200,200" fill="none" stroke="url(#wave3)" strokeWidth="1" opacity="0.3" />
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container-max relative z-10">
        <header className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl-mobile font-bold text-white mb-4">
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Offer
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full" aria-hidden="true" />
          <p className="text-base-mobile text-gray-400 mt-6 max-w-2xl mx-auto">
            End-to-end development services for startups and enterprises
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const accent = accentStyles[service.accentColor] ?? accentStyles.blue;
            return (
              <article
                key={index}
                className={`group relative rounded-2xl p-6 lg:p-8 bg-purple-900/40 border ${accent.border} transition-all duration-500 focus-within:ring-2 focus-within:ring-pink-400 focus-within:ring-offset-2 focus-within:ring-offset-[#1a0a2e]`}
              >
                <div className="relative">
                  {/* Icon - white on colored rounded square */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${accent.bg} mb-6`}
                  >
                    {serviceIcons[index]}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0a2e]"
            aria-label="Discuss your project - Get in touch"
          >
            Discuss Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
