"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      if (!hero || !contact) return;
      const y = window.scrollY;
      setVisible(y > hero.offsetTop + hero.offsetHeight && y < contact.offsetTop - window.innerHeight / 2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none lg:hidden" role="complementary">
      <a
        href={siteConfig.calendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto btn-primary shadow-float animate-fade-up"
      >
        Book a project call
      </a>
    </div>
  );
};

export default StickyCTA;
