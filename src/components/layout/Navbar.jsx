import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = ["Home", "About", "Tools", "Projects", "Certificates"];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const findIndex = () => {
    const index = links.findIndex((link) => {
      const url = link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
      if (url === "/") {
        return pathname === "/" || pathname === "/home";
      }
      return pathname === url || pathname.startsWith(`${url}/`);
    });
    return index === -1 ? 0 : index;
  };

  const activeIndex = findIndex();

  return (
    <header className="relative flex flex-col items-center w-full py-2 sm:py-0 overflow-x-hidden max-w-[1200px] mx-auto z-40">
      {/* 1. Brand Logo - Top on mobile, Absolute Left on desktop */}
      <div className="flex items-center select-none mb-4 sm:mb-0 sm:absolute sm:left-4 sm:top-1/2 sm:-translate-y-1/2">
        <Link
          to="/"
          className="hover:opacity-80 transition-all active:scale-95 cursor-pointer block"
        >
          <span className="text-2xl font-bold font-decorative tracking-tight text-[#22c55e] dark:text-[#4ade80]">
            Raunit
          </span>
        </Link>
      </div>

      {/* 2. Centered Pill Menu */}
      <nav aria-label="Main navigation" className="w-full flex justify-center items-center sm:h-20 px-2 sm:px-0">
        <ul
          className="relative grid items-center p-1 bg-[#eeeeee] dark:bg-[#0d1117] rounded-full ring-2 ring-transparent dark:ring-gray-700 w-full transition-all duration-300 overflow-hidden mx-auto"
          style={{
            gridTemplateColumns: `repeat(${links.length}, minmax(0, 1fr))`,
            maxWidth: "520px",
          }}
        >
          {/* Animated active indicator */}
          <div
            className="absolute left-1 top-1 h-[calc(100%-0.5rem)] rounded-full bg-white dark:bg-[#1f2732] z-0 transition-transform duration-300 ease-out shadow-sm"
            style={{
              width: `calc((100% - 0.5rem)/${links.length})`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
          {links.map((link) => {
            const url = link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
            const isActive =
              url === "/"
                ? pathname === "/" || pathname === "/home"
                : pathname === url || pathname.startsWith(`${url}/`);

            return (
              <li key={link} className="relative z-10 w-full list-none">
                <Link
                  to={url}
                  aria-current={isActive ? "page" : undefined}
                  className={`block w-full text-center rounded-full px-1 py-2 font-semibold transition-colors duration-200 whitespace-nowrap text-[11px] sm:text-xs md:text-sm ${
                    isActive
                      ? "text-gray-900 dark:text-white font-bold"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
