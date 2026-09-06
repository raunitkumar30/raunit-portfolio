import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiMail, FiCheck, FiCopy, FiAlertCircle, FiX, FiSend } from "react-icons/fi";

const DIRECT_EMAIL = "raunitkumar232333@gmail.com";

export default function ContactModal({ isOpen, onClose }) {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        setSubmitStatus("idle");
        setErrorMessage("");
        setCopied(false);
        setFormData({ name: "", email: "", message: "" });
      }, 300);
      document.body.style.overflow = "";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(DIRECT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Raunit,\n\n${formData.message || ""}\n\nFrom: ${formData.name || ""}\nEmail: ${formData.email || ""}`
    );
    window.location.href = `mailto:${DIRECT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If access key isn't set yet, trigger mailto fallback directly
    if (!accessKey || accessKey.trim() === "" || accessKey.includes("YOUR_")) {
      handleMailto();
      setIsSubmitting(false);
      setSubmitStatus("success");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
      } else {
        setErrorMessage(
          result.message || "Unable to send message. Please try sending directly via email."
        );
        setSubmitStatus("error");
      }
    } catch (err) {
      setErrorMessage("Network error. Click below to open your email client instead.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-lg bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 transition-all duration-300 transform ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors p-1"
          aria-label="Close modal"
        >
          <FiX className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold font-decorative text-gray-900 dark:text-white mb-2">
          Let's Connect
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
          Have an idea, project, or question? Send a message and I'll get back to you soon.
        </p>

        {/* Quick Email Copy Bar */}
        <div className="mb-6 p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 min-w-0">
            <FiMail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span className="truncate font-mono font-medium">{DIRECT_EMAIL}</span>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-800 dark:text-gray-200 transition"
          >
            {copied ? (
              <>
                <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <FiCopy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {submitStatus === "success" ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 mx-auto bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center border border-emerald-300 dark:border-emerald-800">
              <FiCheck className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Message Sent!
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. I've received your inquiry and will reply to{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {formData.email || "you"}
              </span>{" "}
              as soon as possible.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-xs transition active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitStatus === "error" && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300">
                <FiAlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>{errorMessage}</p>
                  <button
                    type="button"
                    onClick={handleMailto}
                    className="font-bold underline hover:text-rose-900 dark:hover:text-rose-100"
                  >
                    Open Mail App Instead &rarr;
                  </button>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's build something great..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-6 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:opacity-90 transition active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
              >
                <FiSend className="w-4 h-4" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
              <button
                type="button"
                onClick={handleMailto}
                className="py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold transition"
                title="Send directly using your computer's email client"
              >
                Open Email App
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
