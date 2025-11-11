import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";

const PriceBlock = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white" id="pricing">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          अभी जॉइन करें —{" "}
          <span className="text-green-600">सीमित सीटें!</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 mb-6 text-lg md:text-xl"
        >
          यह कोर्स सीमित समय के लिए <b>₹1499</b> से घटाकर सिर्फ{" "}
          <span className="text-green-600 font-semibold">₹299</span> में!
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-green-50 p-6 rounded-2xl shadow-inner mb-6"
        >
          <h3 className="flex items-center justify-center text-2xl font-bold text-green-700 gap-2">
            <FaBullseye /> सिर्फ ₹299 में पाएं:
          </h3>
          <ul className="text-gray-700 mt-4 space-y-3 text-left md:text-left flex flex-col items-start md:items-start">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" /> Complete Agro Shop Website Project
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" /> Practical React + Tailwind Training
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" /> Lifetime Access & Templates
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" /> Certificate of Completion
            </li>
          </ul>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/register")}
          className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          अभी रजिस्टर करें ₹299 में
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm text-gray-500 mt-3"
        >
          ⏰ Offer आज रात 12 बजे तक ही वैध!
        </motion.p>
      </div>
    </section>
  );
};

export default PriceBlock;
