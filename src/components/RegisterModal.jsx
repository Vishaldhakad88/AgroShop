import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { FaBullseye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // ⏱ Delay logic: show after 5, 10, or 15 sec randomly
  useEffect(() => {
    const delays = [5000, 10000, 15000]; // ms
    const randomDelay = delays[Math.floor(Math.random() * delays.length)];
    const timer = setTimeout(() => setOpen(true), randomDelay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative text-center border border-green-200"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <FaBullseye className="text-green-600 text-xl" />
              <h2 className="text-2xl font-bold text-green-700">
                अपनी रजिस्ट्रेशन पूरी करें
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-600 text-sm mb-4"
            >
              ₹1499 → ₹299 (लॉन्च ऑफर) — सीमित समय के लिए।
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setOpen(false);
                navigate("/register");
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300"
            >
              अभी रजिस्टर करें
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs text-gray-500 mt-3"
            >
              आप कभी भी इस popup को बंद कर सकते हैं।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex flex-col items-start gap-2 text-left text-gray-700"
            >
              <p className="flex items-center gap-2">
                <CheckCircle className="text-green-600" /> Lifetime Access & Templates
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="text-green-600" /> Certificate of Completion
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
