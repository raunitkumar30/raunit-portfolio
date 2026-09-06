import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  const prototypeUrl =
    typeof project.view === "string" && project.view ? project.view : null;

  const githubUrl =
    typeof project.github === "string" && project.github
      ? project.github
      : "https://github.com/raunitkumar30";

  return (
    <div className="flex flex-col justify-between h-full bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-gray-800 rounded-4xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
      {/* Main Top Area: Image + Text Content */}
      <div className="flex flex-col md:flex-row w-full p-6 md:p-7 gap-5 items-center md:items-start flex-1">
        {/* 1. Project Preview Image */}
        <div
          className={`w-full md:w-1/2 h-44 md:h-48 ${
            project.imageBg || "bg-[#070b14]"
          } rounded-2xl border border-gray-200/60 dark:border-gray-800 flex items-center justify-center shrink-0 overflow-hidden p-2 shadow-inner`}
        >
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 text-gray-400 dark:text-gray-500 p-4 text-center">
              <svg className="w-10 h-10 mb-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium tracking-wide line-clamp-1">{project.name}</span>
            </div>
          )}
        </div>

        {/* 2. Content Section */}
        <div className="flex flex-col justify-between w-full h-full min-h-[160px]">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold font-decorative tracking-tight text-gray-800 dark:text-white mb-2">
              {project.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Icons in a clean row */}
          <div className="flex items-center gap-3 pt-2">
            {project.tech?.map((t, idx) => (
              <img
                key={idx}
                src={t.image}
                alt={t.name}
                title={t.name}
                loading="lazy"
                decoding="async"
                className="w-6 h-6 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section: Action Buttons & Badges */}
      <div className="flex items-center justify-between px-6 md:px-7 py-3 border-t border-gray-100 dark:border-gray-800/80 bg-white dark:bg-[#0d1117] mt-auto">
        {/* Left: Arrow & GitHub Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Arrow sign button to live project url */}
          {prototypeUrl && (
            <a
              href={prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live project for ${project.name}`}
              className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 hover:ring-4 ring-gray-200 dark:ring-gray-600 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 text-[#0D1117] dark:text-white"
                viewBox="0 0 18.256 18.256"
                fill="none"
                stroke="currentColor"
              >
                <g transform="translate(5.363 5.325)">
                  <path
                    d="M14.581,7.05,7.05,14.581"
                    transform="translate(-7.05 -7.012)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M10,7l5.287.037.038,5.287"
                    transform="translate(-7.756 -7)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </g>
              </svg>
            </a>
          )}

          {/* GitHub button */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View GitHub repository for ${project.name}`}
            className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <img
              src="/github.svg"
              alt="GitHub"
              className="w-7 h-7 dark:invert object-contain"
            />
          </a>
        </div>

        {/* Right: Status & Date Badges */}
        <div className="flex items-center gap-2">
          {project.personal && (
            <span className="px-2.5 py-0.5 bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 rounded-full text-xs font-bold border border-orange-100 dark:border-orange-900/60">
              Personal
            </span>
          )}
          {project.workStatus === false && (
            <span className="px-2.5 py-0.5 bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 rounded-full text-xs font-bold border border-red-100 dark:border-red-900/60">
              Closed
            </span>
          )}
          {project.date && (
            <span className="text-gray-400 dark:text-gray-400 text-xs font-medium ml-1">
              {project.date}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
