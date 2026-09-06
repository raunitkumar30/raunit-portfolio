import React from "react";
import { profileData } from "@/data/profile";
import { FiBookOpen } from "react-icons/fi";

export default function EducationSection() {
  return (
    <div className="bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-gray-800 rounded-4xl p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
            <FiBookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-decorative text-gray-900 dark:text-white">
              Education & Studies
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Academic background & qualifications</p>
          </div>
        </div>

        <div className="space-y-4">
          {profileData.education.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/80 gap-3 transition-all hover:border-gray-200 dark:hover:border-gray-700"
            >
              <div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {edu.institute}
                </p>
                {edu.board && (
                  <span className="inline-block mt-1 text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">
                    {edu.board}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 w-fit shrink-0">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
