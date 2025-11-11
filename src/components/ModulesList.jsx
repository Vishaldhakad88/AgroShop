import React from "react";
import { modulesData } from "../data/modulesData";
import ModuleCard from "./ModuleCard";
import { motion } from "framer-motion";

export default function ModulesList() {
  return (
    <section className="bg-green-50 py-16 px-4" id="syllabus">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
          आप क्या सीखेंगे (कोर्स कंटेंट)
        </h2>

        {/* Grid of Modules with animation */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.6 },
            },
          }}
        >
          {modulesData.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
