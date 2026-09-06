import React from "react";
import { Link } from "react-router-dom";
import { FiAward, FiCheckCircle } from "react-icons/fi";

export default function CertificatesTile() {
  return (
    <Link
      to="/certificates"
      className="relative block w-full h-full rounded-4xl bg-[#f7f7f7] dark:bg-zinc-900 border border-black/5 dark:border-white/5 dark:ring-2 dark:ring-gray-700 shadow-[0_18px_35px_rgba(0,0,0,0.08),0_3px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.85)] dark:shadow-[0_18px_35px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden group"
    >
      {/* Content */}
      <div className="relative z-20 px-9 pt-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
          <FiCheckCircle className="w-3.5 h-3.5" />
          <span>Verified Credentials</span>
        </div>

        <h2 className="mt-3 text-[28px] sm:text-[32px] leading-tight font-normal tracking-[-0.03em] text-black dark:text-white font-decorative">
          Certificates & Achievements
        </h2>

        <p className="mt-2 text-[14px] leading-relaxed text-[#555555] dark:text-zinc-400 font-normal">
          AWS Academy, Cisco Networking, Modern AI & Hackathons.
        </p>
      </div>

      {/* Decorative background arcs */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-20 pointer-events-none">
        <div className="absolute w-[520px] h-[520px] left-[-20px] bottom-[-355px] border-2 border-[#efefef] dark:border-zinc-800 rounded-full" />
        <div className="absolute w-[410px] h-[410px] left-[35px] bottom-[-300px] border-2 border-[#efefef] dark:border-zinc-800 rounded-full" />
        <div className="absolute w-[305px] h-[305px] left-[85px] bottom-[-248px] border-2 border-[#efefef] dark:border-zinc-800 rounded-full" />
      </div>

      {/* Left Award Badge Icon */}
      <div className="absolute z-30 left-[42px] bottom-[50px] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
        <div className="w-[52px] h-[52px] rounded-[18px] bg-white dark:bg-zinc-800 shadow-[0_10px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center rotate-[-12deg] text-cyan-600 dark:text-cyan-400">
          <FiAward className="w-6 h-6 rotate-[12deg]" />
        </div>
      </div>

      {/* Right side interactive button indicator */}
      <div className="absolute z-30 right-[35px] bottom-[55px] flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
        <span>Explore All &rarr;</span>
      </div>
    </Link>
  );
}
