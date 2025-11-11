import React from "react";
import { motion } from "framer-motion";
import { GiBookshelf } from "react-icons/gi"; // 3D-ish icon
import { MdOutlineExplore } from "react-icons/md";

const icons = [GiBookshelf, MdOutlineExplore]; // You can add more unique icons per module

export default function ModuleCard({ module, index }) {
  const Icon = icons[module.id % icons.length];

  return (
    <motion.div
      className="bg-white/30 backdrop-blur-md border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-500 p-6 text-left cursor-pointer"
      whileHover={{ scale: 1.05, rotateY: 10 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: module.id * 0.1 }}
      style={{
        background: "linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,255,0.2), rgba(255, 208, 0, 0.2))",
      }}
    >
      <div className="flex items-center mb-4">
        <Icon className="text-3xl text-green-700 mr-3 drop-shadow-lg" />
        <h3 className="text-lg md:text-xl font-bold text-green-700">
          {module.title}
        </h3>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm md:text-base">
        {module.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}
