import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md relative text-center border border-green-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-green-700 mb-2">
              🎯 अपनी रजिस्ट्रेशन पूरी करें
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              ₹1499 → ₹299 (लॉन्च ऑफर) — सीमित समय के लिए।
            </p>

            <button
              onClick={() => {
                setOpen(false);
                navigate("/register");
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition"
            >
              अभी रजिस्टर करें
            </button>

            <p className="text-xs text-gray-500 mt-3">
              आप कभी भी इस popup को बंद कर सकते हैं।
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
