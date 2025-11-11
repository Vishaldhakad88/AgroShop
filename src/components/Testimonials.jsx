import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
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
  ];

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-10">
          हमारे सफल विद्यार्थी क्या कहते हैं
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-green-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <FaQuoteLeft className="text-green-500 text-2xl mb-3" />
              <p className="text-gray-700 mb-4 leading-relaxed">{r.feedback}</p>
              <h4 className="text-green-700 font-semibold text-sm">
                — {r.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
