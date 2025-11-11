import React from "react";
import { modulesData } from "../data/modulesData";
import ModuleCard from "./ModuleCard";

export default function ModulesList() {
  return (
    <section className="bg-green-50 py-16 px-4" id="syllabus">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
          आप क्या सीखेंगे (कोर्स कंटेंट)
        </h2>

        {/* Grid of Modules */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modulesData.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}
