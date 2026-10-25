"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item whose section is currently under the top of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-paper border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container-site h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-serif text-xl tracking-tight text-ink py-2"
          aria-label="Back to top"
        >
          Fardin Ahsan
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`inline-flex items-center h-10 text-sm transition-colors border-b ${
                      isActive
                        ? "text-ink border-ink"
                        : "text-ink-2 border-transparent hover:text-ink"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={siteConfig.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary h-10 px-4 text-sm"
          >
            Book a call
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink active:bg-paper-2 rounded-md"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-line bg-paper">
          <ul className="container-site py-4 flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`block py-3 text-base border-b border-line last:border-0 active:bg-paper-2 ${
                    active === item.href ? "text-ink font-medium" : "text-ink"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
