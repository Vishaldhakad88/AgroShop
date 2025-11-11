import React from "react";

export default function ModuleCard({ module }) {
  return (
    <div className="bg-white border border-green-100 rounded-2xl shadow hover:shadow-lg transition p-6 text-left">
      <h3 className="text-lg md:text-xl font-bold text-green-700 mb-3">
        {module.title}
      </h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm md:text-base">
        {module.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
