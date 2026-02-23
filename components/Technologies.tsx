"use client";

import React from "react";
import { techCategories } from "@/lib/data";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Backend: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Database: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  "DevOps & Cloud": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
};

const accentStyles: Record<string, { bg: string; border: string; text: string }> = {
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30 hover:border-pink-500/50",
    text: "text-pink-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30 hover:border-purple-500/50",
    text: "text-purple-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30 hover:border-cyan-500/50",
    text: "text-cyan-400",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30 hover:border-emerald-500/50",
    text: "text-emerald-400",
  },
};

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="section-padding bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900/30 relative overflow-hidden"
      aria-labelledby="tech-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <header className="text-center mb-14">
          <h2 className="text-3xl-mobile font-bold text-white mb-4">
            Technologies I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Work With
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full" aria-hidden="true" />
          <p className="text-base-mobile text-gray-400 mt-6 max-w-xl mx-auto">
            A modern stack built for scalable, performant applications
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => {
            const accent = accentStyles[category.accent] ?? accentStyles.pink;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 border backdrop-blur-sm transition-all duration-300 ${accent.bg} ${accent.border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-xl ${accent.bg} ${accent.text}`}>
                    {categoryIcons[category.title] ?? categoryIcons.Frontend}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
