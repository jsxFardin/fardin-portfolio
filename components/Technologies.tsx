"use client";

import React from "react";
import { technologies } from "@/lib/data";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      aria-labelledby="tech-heading"
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
        <header className="text-center mb-12">
          <h2 id="tech-heading" className="text-3xl-mobile font-bold text-white mb-4">
            Technologies I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Work With
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </header>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20 hover:bg-white/20 hover:border-pink-500/50 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
