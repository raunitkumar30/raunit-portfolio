import React, { useState } from "react";
import ContactModal from "@/components/contact/ContactModal";

export default function ContactTile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group block w-full h-full rounded-4xl bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/5 dark:ring-2 dark:ring-gray-700 p-6 sm:p-8 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        {/* Header */}
        <div className="relative z-20">
          <h2 className="text-[25px] font-semibold font-decorative tracking-[-0.02em] text-[#1e1e1e] dark:text-white leading-tight">
            Let's Connect
          </h2>
          <p className="mt-1.5 max-w-[280px] text-[15px] leading-relaxed text-[#8a8a8a] dark:text-zinc-400">
            Reach out for collaborations.
          </p>
        </div>

        {/* Expanding Contact Button (Bottom Left) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="absolute bottom-0 left-0 m-4 z-30 group/btn border-none outline-none bg-transparent p-0 cursor-pointer"
        >
          <div className="bg-white dark:bg-[#0d1117] text-[#0d1117] dark:text-white w-10 h-10 rounded-full flex justify-start items-center ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-500 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hover:w-[130px]">
            <div className="min-w-[40px] h-full flex justify-center items-center">
              <svg
                id="Arrow.7"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 18.256 18.256"
              >
                <g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M14.581,7.05,7.05,14.581"
                    transform="translate(-7.05 -7.012)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M10,7l5.287.037.038,5.287"
                    transform="translate(-7.756 -7)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </g>
                <path id="Path_12" data-name="Path 12" d="M0,0H18.256V18.256H0Z" fill="none" />
              </svg>
            </div>
            <span className="text-gray-600 dark:text-gray-300 text-[13px] whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100 delay-75 pr-4 font-decorative">
              Contact Me
            </span>
          </div>
        </button>

        {/* Decorative 3D envelope / mail art */}
        <div className="absolute inset-0 top-[60px] pointer-events-none flex items-end justify-end pr-4 sm:pr-8">
          <div className="relative bottom-4 w-40 h-32 flex items-center justify-center">
            <div className="w-24 h-20 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-2xl shadow-lg transform rotate-[-8deg] flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
