import React from "react";
import { Link } from "react-router-dom";

export default function ProjectDetailsTile() {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-4xl bg-[#0b0e14] dark:bg-[#07090e] border border-gray-800/80 shadow-sm transition-all duration-300 group">
      {/* Subtle, soft ambient dark gradient */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative back card layer */}
      <div className="absolute top-[2%] left-[102%] w-[82%] aspect-[9/18] -rotate-[25deg] rounded-[2.2rem] bg-[#121722]/60 shadow-xl ring-1 ring-white/5 z-10 pointer-events-none" />

      {/* Main minimal device UI card */}
      <div className="absolute top-[10%] left-[20%] w-[82%] aspect-[9/18] -rotate-[25deg] rounded-[2.2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 z-20 bg-[#080b11] flex items-center justify-center">
        <img
          src="/projects/gigshield-mobile.png"
          alt="GigShield minimal mobile preview"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "/projects/gigshield.png";
          }}
        />
      </div>

      {/* Action link button */}
      <Link
        to="/projects"
        aria-label="Go to projects page"
        className="absolute bottom-0 left-0 m-4 z-40"
      >
        <div className="bg-[#131824] text-gray-200 hover:text-white w-10 h-10 rounded-full flex justify-center items-center ring-1 ring-white/10 hover:ring-2 hover:ring-white/25 hover:bg-[#1a2233] transition-all duration-300 shadow-md">
          <svg
            id="Arrow.7"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18.256 18.256"
          >
            <g transform="translate(5.363 5.325)">
              <path
                d="M14.581,7.05,7.05,14.581"
                transform="translate(-7.05 -7.012)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M10,7l5.287.037.038,5.287"
                transform="translate(-7.756 -7)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>
      </Link>
    </div>
  );
}
