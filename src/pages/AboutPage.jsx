import React from "react";
import AboutContent from "@/components/about/AboutContent";

export default function AboutPage() {
  return (
    <main className="min-h-screen py-5 flex justify-center w-full px-4">
      <div className="max-w-[1200px] w-full">
        <AboutContent />
      </div>
    </main>
  );
}
