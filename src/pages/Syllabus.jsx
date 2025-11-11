import React from "react";
import ModulesList from "../components/ModulesList";

export default function Syllabus() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        📘 कोर्स सिलेबस
      </h1>
      <ModulesList />
    </section>
  );
}
