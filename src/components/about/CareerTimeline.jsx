import React, { useState } from "react";
import { careersData } from "@/data/careers";
import CareerProjectModal from "./CareerProjectModal";
import { FiArrowUpRight, FiBriefcase } from "react-icons/fi";

function CareerLogo({ logo, company }) {
  const [hasError, setHasError] = useState(false);

  if (!logo || hasError) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center shrink-0 text-blue-500 dark:text-blue-400">
        <FiBriefcase className="text-xl" />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
      <img
        src={logo}
        alt={company}
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function CareerTimeline() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-4">
      {careersData.map((career) => (
        <div
          key={career.id}
          className="relative bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-gray-800 rounded-4xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800/80">
            <div className="flex items-center gap-4">
              <CareerLogo logo={career.logo} company={career.company} />
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {career.role}
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {career.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                {career.period}
              </span>
              {career.badge && (
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    career.current
                      ? "bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800"
                      : "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800"
                  }`}
                >
                  {career.badge}
                </span>
              )}
            </div>
          </div>

          {/* Overview & My Role */}
          <div className="mt-4 space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {career.overview}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic">
              <span className="font-semibold text-gray-700 dark:text-gray-200 not-italic">
                Role & Focus:{" "}
              </span>
              {career.myRole}
            </p>
          </div>

          {/* Projects worked on */}
          {career.projects && career.projects.length > 0 && (
            <div className="mt-5">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Featured Work at {career.company}
              </h4>
              <div className="flex flex-wrap gap-3">
                {career.projects.map((proj) => (
                  <button
                    key={proj.name}
                    onClick={() => setSelectedProject(proj)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition group"
                  >
                    <span>{proj.name}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-500 transition" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {career.skills && career.skills.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {career.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800/80 text-xs font-medium text-gray-600 dark:text-gray-400"
                >
                  <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <CareerProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
