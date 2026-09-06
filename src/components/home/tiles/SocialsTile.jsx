import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";

export default function SocialsTile() {
  const slides = [
    {
      id: "instagram",
      label: "Instagram",
      bgClass: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      iconSrc: "/tech/instagram.svg",
      url: profileData.socials.instagram,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      bgClass: "bg-[#0A66C2]",
      iconSrc: "/tech/linkedin.svg",
      url: profileData.socials.linkedin,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-4xl ring-2 ring-transparent dark:ring-gray-700 transition-all duration-300">
      {slides.map((slide, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform,background-color] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              slide.bgClass
            } dark:bg-neutral-900 dark:bg-none ${
              isActive
                ? "opacity-100 scale-100 pointer-events-auto z-10"
                : "opacity-0 scale-[0.98] pointer-events-none z-0"
            }`}
            aria-hidden={!isActive}
          >
            <a
              href={slide.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${slide.label}`}
              className="w-24 h-24 rounded-full bg-white/12 backdrop-blur-[2px] border border-white/25 flex items-center justify-center shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20"
            >
              <img
                src={slide.iconSrc}
                alt={slide.label}
                className="w-12 h-12 object-contain"
              />
            </a>
          </div>
        );
      })}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((slide, index) => (
          <span
            key={`${slide.id}-dot`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-6 bg-white/90" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
