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
        className="pointer-events-auto btn-primary shadow-[0_10px_30px_-10px_rgba(21,20,15,0.45)] animate-fade-up"
      >
        Book a 20-min call
      </a>
    </div>
  );
};

export default StickyCTA;
