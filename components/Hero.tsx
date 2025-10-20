"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Tech Stack Icons */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce delay-1000 opacity-20">
          ⚛️
        </div>
        <div className="absolute top-40 right-20 text-3xl animate-bounce delay-2000 opacity-20">
          📜
        </div>
        <div className="absolute bottom-40 left-20 text-4xl animate-bounce delay-3000 opacity-20">
          🚀
        </div>
        <div className="absolute bottom-20 right-10 text-3xl animate-bounce delay-1000 opacity-20">
          ⚙️
        </div>
        <div className="absolute top-1/3 left-1/4 text-3xl animate-bounce delay-1500 opacity-20">
          🐳
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-3xl animate-bounce delay-2500 opacity-20">
          🎨
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="container-max text-center relative z-10">
        {/* Main Heading with Staggered Animation */}
        <div className="animate-fade-in">
          <h1 className="text-4xl-mobile font-bold text-white mb-6 animate-slide-up">
            <span className="inline-block animate-fade-in">Hi, I'm&nbsp;</span>
            <span className="inline-block text-pink-400 animate-pulse animate-bounce delay-1000">
              Fardin Ahsan
            </span>
          </h1>

          <h2 className="text-2xl-mobile font-semibold text-gray-300 mb-8 animate-slide-up delay-300">
            <span className="inline-block animate-fade-in delay-500">
              Helping businesses turn ideas into scalable, high-performance
              digital solutions.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-700">
            <a href="#projects" className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-pink-500/25 group">
              <span className="group-hover:animate-pulse">View Projects</span>
            </a>
            <a href="https://calendar.app.google/muUJCTnbtDe1fF5E7" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 transition-all duration-300 hover:scale-105 transform hover:bg-white/10 group">
              <span className="group-hover:animate-pulse">Book a Meeting</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
