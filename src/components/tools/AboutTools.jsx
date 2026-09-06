import React from "react";

export default function AboutTools() {
  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-12 bg-white dark:bg-[#0d1117] rounded-4xl border border-gray-100 dark:border-gray-800 shadow-sm group overflow-hidden">
      <div className="flex items-center gap-6 mb-2">
        <div className="relative w-20 h-20">
          <img
            src="/me-laptop.png"
            alt="Avatar with laptop"
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src="/mecloud.png"
            alt="Avatar with cloud"
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>
        <h1 className="text-2xl font-bold font-decorative text-gray-900 dark:text-white">
          My Tech Stack & Tools
        </h1>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-[500px]">
        I actively use a diverse set of cutting-edge technologies and tools in my daily work. From
        modern frontend libraries to scalable backend platforms, my toolkit powers clean and resilient web apps.
      </p>
    </div>
  );
}
