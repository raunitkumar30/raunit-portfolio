import React from "react";

export default function ToolCard({ tool }) {
  return (
    <div className="flex flex-col justify-between h-full p-6 bg-white dark:bg-[#0d1117] rounded-4xl border border-gray-100 dark:border-gray-800 shadow-sm relative group hover:shadow-md transition-all duration-300 overflow-hidden">
      <div>
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <img
            src={tool.image}
            alt={tool.name}
            className="w-7 h-7 object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {tool.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-4">
          {tool.description}
        </p>
      </div>

      <div className="mt-4 pt-1 shrink-0">
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Learn more about ${tool.name}`}
          className="inline-block"
        >
          <div className="w-9 h-9 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
