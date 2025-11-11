import React from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  {
    name: "राजेश मीणा (कोटा, राजस्थान)",
    feedback:
      "मैंने इस ट्रेनिंग से पूरा प्रोसेस सीखा — अब मेरी कृषि सेवा केंद्र की इनकम लगातार बढ़ रही है। बहुत आसान भाषा में समझाया गया है।",
  },
  {
    name: "सुरेश चौधरी (नीमच, मध्यप्रदेश)",
    feedback:
      "पहले लाइसेंस और लोकेशन के झंझट में फँस गया था, लेकिन इस कोर्स ने सब क्लियर कर दिया। बहुत ही प्रैक्टिकल और गाइडलाइन बेस्ड!",
  },
  {
    name: "अजय पटेल (गुजरात)",
    feedback:
      "इस कोर्स से मुझे पता चला कि किसान भाइयों से कैसे संवाद करें और सही प्रोडक्ट कैसे बेचें। Highly Recommended!",
  },
  {
    name: "प्रीति शर्मा (जयपुर, राजस्थान)",
    feedback:
      "ट्रेनिंग बहुत इंटरेक्टिव और प्रैक्टिकल थी। मैंने तुरंत अपने एग्रो शॉप की योजना बनाई और शुरू कर दी।",
  },
  {
    name: "राहुल वर्मा (भोपाल, मध्यप्रदेश)",
    feedback:
      "किसानों और सप्लायर्स के मैनेजमेंट का पूरा ज्ञान मिला। अब मैं अपने बिज़नेस को सही तरीके से चला पा रहा हूँ।",
  },
  {
    name: "सोनिया गुप्ता (अहमदाबाद, गुजरात)",
    feedback:
      "कोर्स कंटेंट बहुत आसान और समझने योग्य है। मार्केटिंग और सेल्स टिप्स ने मेरी इनकम बढ़ाई।",
  },
];

export default function Testimonials() {
  const controls = useAnimation();

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-10 text-center">
          हमारे सफल विद्यार्थी क्या कहते हैं
        </h2>

        {/* Auto Scroll Container */}
        <motion.div
          className="overflow-hidden"
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => controls.start("animate")}
        >
          <motion.div
            className="flex gap-6"
            animate={controls}
            variants={{
              animate: {
                x: ["0%", "-100%"],
                transition: {
                  x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
                },
              },
            }}
          >
            {reviews.concat(reviews).map((r, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-green-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform hover:scale-105"
              >
                <FaQuoteLeft className="text-green-500 text-2xl mb-3" />
                <p className="text-gray-700 mb-4 leading-relaxed">{r.feedback}</p>
                <h4 className="text-green-700 font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <FaUserCircle className="text-green-600 w-5 h-5" /> {r.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
