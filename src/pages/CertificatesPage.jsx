import React, { useState, useMemo } from "react";
import { certificatesData } from "@/data/certificates";
import CertificateCard from "@/components/certificates/CertificateCard";
import { FiAward, FiCheckCircle, FiShield, FiFileText } from "react-icons/fi";

const CATEGORIES = [
  { id: "all", label: "All Credentials" },
  { id: "cloud", label: "Cloud & AWS" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "networking", label: "Networking" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "hackathon", label: "Hackathons" },
];

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCertificates = useMemo(() => {
    if (activeCategory === "all") return certificatesData;
    return certificatesData.filter((cert) => cert.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen py-5 flex justify-center w-full px-4">
      <div className="max-w-[1200px] w-full space-y-8">
        {/* Page Header */}
        <div className="text-center sm:text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold font-decorative text-gray-900 dark:text-white">
            Certifications & Achievements
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Industry-recognized certifications and digital badges from AWS Academy, Cisco Networking Academy, Microsoft, and EY, verifying competencies in cloud architecture, cybersecurity, and applied AI.
          </p>
        </div>

        {/* Informative Accreditation Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <FiShield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Accreditors</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">AWS & Cisco</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <FiCheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Digital Badges</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Credly Verified</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <FiFileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Documentation</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Official PDFs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
              <FiAward className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Institution</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">GL Bajaj ITM</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div role="group" aria-label="Filter certificates by category" className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${isActive
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-sm"
                    : "bg-white dark:bg-[#0d1117] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Certificates Grid - Unchanged Card Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </main>
  );
}
