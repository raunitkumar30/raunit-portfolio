import React, { useState } from "react";
import { createPortal } from "react-dom";
import { FiX, FiExternalLink } from "react-icons/fi";

export default function CareerProjectModal({ project, onClose }) {
  const [hasError, setHasError] = useState(false);
  if (!project) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Close"
        >
          <FiX className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold font-decorative text-gray-900 dark:text-white mb-4">
          {project.name}
        </h3>

        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-4 flex items-center justify-center">
          {project.image && !hasError ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400 p-8">
              <span className="text-sm font-medium">{project.name}</span>
            </div>
          )}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:opacity-90 transition"
          >
            Visit Project <FiExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>,
    document.body
  );
}
