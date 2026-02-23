"use client";

import React, { useState, useEffect } from "react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      if (hero && contact) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        const contactTop = contact.offsetTop;
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        setIsVisible(
          scrollY > heroBottom - viewportHeight / 2 && scrollY < contactTop - 100
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-fade-in"
      role="complementary"
      aria-label="Quick contact action"
    >
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToContact();
        }}
        className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        aria-label="Get in touch - Contact me now"
      >
        <span>Hire Me</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default StickyCTA;
