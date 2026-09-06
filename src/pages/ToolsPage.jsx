import React from "react";
import { toolsData } from "@/data/tools";
import AboutTools from "@/components/tools/AboutTools";
import ToolCard from "@/components/tools/ToolCard";

export default function ToolsPage() {
  return (
    <main className="min-h-screen py-5 flex justify-center w-full px-4">
      <div className="max-w-[1200px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Header Card */}
          <div className="h-75 md:col-span-2 lg:col-span-2">
            <AboutTools />
          </div>

          {/* Dynamic Tools Cards */}
          {toolsData.map((tool, index) => (
            <div key={index} className="col-span-1 h-75">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
