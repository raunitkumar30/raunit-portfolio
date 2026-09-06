import React, { useState } from "react";
import { FiExternalLink, FiX, FiCalendar, FiAward, FiCheckCircle, FiClock, FiUser, FiBook } from "react-icons/fi";
import { createPortal } from "react-dom";

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function CertificateCard({ certificate }) {
  const [isOpen, setIsOpen] = useState(false);
  const title = certificate.heading || certificate.headding;
  const date = formatDate(certificate.createdAt);

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:border-gray-700 flex flex-col h-full relative"
      >
        {/* Certificate Header Banner */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-50/80 dark:bg-[#111620] p-4 flex flex-col justify-between border-b border-gray-100 dark:border-gray-800">
          {/* Subtle Ambient Glow behind badge */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 dark:opacity-25">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-purple-500/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />
          </div>

          {/* Top Bar with Verified Status & Issuer Pill */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0d1117]/85 backdrop-blur-sm border border-gray-200/70 dark:border-gray-700/70 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
              <FiCheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Verified</span>
            </div>

            {certificate.issuer && (
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0d1117]/85 text-gray-700 dark:text-gray-300 backdrop-blur-sm border border-gray-200/70 dark:border-gray-700/70 shadow-sm">
                {certificate.issuer}
              </span>
            )}
          </div>

          {/* Certificate Badge Image Showcase */}
          <div className="relative z-10 flex-1 flex items-center justify-center py-2 px-3">
            {certificate.badgeUrl ? (
              <img
                src={certificate.badgeUrl}
                alt={title}
                className="max-h-28 sm:max-h-32 max-w-[90%] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 rounded-lg transform-gpu"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <FiAward className="w-8 h-8" />
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <FiCalendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>

            <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 font-decorative leading-snug">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
              {certificate.quickLook || certificate.description}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {certificate.tags?.slice(0, 3).map((tag, idx) => (
                <span
                  key={tag.name || idx}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View &rarr;
            </span>
          </div>
        </div>
      </article>

      {/* Modal Dialog on Click */}
      {isOpen &&
        createPortal(
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Title & Badge Header */}
              <div className="pr-8">
                <h2 className="text-2xl sm:text-3xl font-bold font-decorative text-gray-900 dark:text-white">
                  {title}
                </h2>
              </div>

              {/* Course details box with badge asset */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                {certificate.badgeUrl ? (
                  <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 flex items-center justify-center shrink-0 p-1 shadow-sm">
                    <img
                      src={certificate.badgeUrl}
                      alt={title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shrink-0 shadow-md">
                    <FiAward className="w-8 h-8" />
                  </div>
                )}
                <div className="space-y-1 min-w-0 flex-1">
                  {certificate.courseId && (
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      <span className="truncate">{certificate.courseId}</span>
                      <FiExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {certificate.quickLook}
                  </p>
                </div>
              </div>

              {/* Metadata Grid (Issued Date, Instructor, Verification, Total Hours) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                    Issued Date
                  </span>
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {date}
                  </p>
                </div>

                {certificate.verificationPlatform && (
                  <div>
                    <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                      Verification
                    </span>
                    <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <FiCheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{certificate.verificationPlatform}</span>
                    </p>
                  </div>
                )}

                {certificate.credentialType && (
                  <div>
                    <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                      Credential Type
                    </span>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {certificate.credentialType}
                    </p>
                  </div>
                )}

                {certificate.instructor && (
                  <div>
                    <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                      Instructor
                    </span>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      {certificate.instructor}
                    </p>
                  </div>
                )}

                {certificate.totalHours && (
                  <div>
                    <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                      Total Hours
                    </span>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      {certificate.totalHours} hrs
                    </p>
                  </div>
                )}

                {certificate.credentialId && (
                  <div className="col-span-2 sm:col-span-1">
                    <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                      Credential ID
                    </span>
                    <p className="mt-1 text-xs font-mono font-medium text-gray-700 dark:text-gray-300 truncate" title={certificate.credentialId}>
                      {certificate.credentialId}
                    </p>
                  </div>
                )}
              </div>

              {/* Academy */}
              {certificate.academy && (
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                    Academy / Institution
                  </span>
                  <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                    {certificate.academy}
                  </p>
                </div>
              )}

              {/* Skills You Learn */}
              {(certificate.skillsLearned || certificate.tags) && (
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                    Skills & Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(certificate.skillsLearned || certificate.tags.map((t) => t.name)).map(
                      (skill, idx) => (
                        <span
                          key={skill || idx}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Official Certificate Image Preview */}
              {certificate.certificateImage && (
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="block text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                    Official Certificate
                  </span>
                  <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
                    <img
                      src={certificate.certificateImage}
                      alt={title}
                      className="w-full h-auto object-contain max-h-80 mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons: View PDF / Image & Verify Credential */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3">
                {certificate.pdfUrl ? (
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm transition shadow-md active:scale-95"
                  >
                    <span>View Certificate (PDF)</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                ) : certificate.certificateImage ? (
                  <a
                    href={certificate.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm transition shadow-md active:scale-95"
                  >
                    <span>View Certificate</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div />
                )}
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#5bb843] hover:bg-[#4ea837] text-white font-bold text-sm transition shadow-md active:scale-95"
                  >
                    <span>Verify Credential</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
