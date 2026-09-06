import React from "react";
import { profileData } from "@/data/profile";
import CareerTimeline from "./CareerTimeline";
import EducationSection from "./EducationSection";
import { FiCode, FiMapPin, FiMail } from "react-icons/fi";

export default function AboutContent() {
  return (
    <div className="w-full space-y-6 py-2">
      {/* 1. Profile Hero Card (Full 1200px Width) */}
      <div className="w-full bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-gray-800 rounded-4xl p-6 sm:p-10 md:p-12 shadow-sm transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar with gradient border glow */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-xl shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#0d1117] flex items-center justify-center">
              <img
                src={profileData.avatar.headHand}
                alt={profileData.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-3.5 text-center md:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-950/60 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {profileData.status}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
                <FiMapPin className="w-3.5 h-3.5 text-cyan-500" /> {profileData.location.city}, {profileData.location.country}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-decorative tracking-tight text-gray-900 dark:text-white">
              {profileData.fullName}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
              {profileData.bio}
            </p>

            {/* Skills Pills */}
            <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
              {profileData.skillsPills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-cyan-400 dark:hover:border-cyan-600 transition-colors"
                >
                  <FiCode className="w-3.5 h-3.5 text-cyan-500" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Responsive 12-Column Grid: Experience (7 cols) + Education (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
        {/* Left: Experience & Journey (Col 7) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="px-1">
            <h2 className="text-xl sm:text-2xl font-bold font-decorative text-gray-900 dark:text-white">
              Experience & Journey
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Work history, technical focus, and platforms delivered
            </p>
          </div>
          <CareerTimeline />
        </div>

        {/* Right: Education (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="px-1">
            <h2 className="text-xl sm:text-2xl font-bold font-decorative text-gray-900 dark:text-white">
              Academic Background
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Degrees, institutions & core engineering studies
            </p>
          </div>
          <EducationSection />
        </div>
      </div>
    </div>
  );
}
