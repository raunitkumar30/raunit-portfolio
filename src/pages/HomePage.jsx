import React from "react";
import BentoGrid from "@/components/home/BentoGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen py-5 flex justify-center w-full">
      <div className="max-w-[1200px] w-full px-4 relative">
        <h1 className="sr-only">Raunit Kumar | Software Developer Portfolio & Engineering Projects</h1>
        <BentoGrid />
      </div>
    </main>
  );
}
