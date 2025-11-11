import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4 text-center">
      {/* Headline */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-green-800 leading-snug mb-4">
        अपना एग्रो शॉप / कृषि सेवा केंद्र शुरू करें — बिना महँगी गलतियों के !
      </h1>

      {/* Subheadline */}
      <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-8">
        लोकेशन चुनने से लेकर लाइसेंस, सप्लायर–बायर मैनेजमेंट, बिलिंग, मार्केटिंग
        और प्रॉफिट तक — सब कुछ एक व्यवस्थित सिस्टम में समझे !
      </p>

      {/* Bullet Points */}
      <div className="max-w-2xl mx-auto text-left mb-10">
        <ul className="space-y-2 text-gray-800 font-medium">
          <li>✅ पूरी ट्रेनिंग साधारण हिंदी भाषा में</li>
          <li>✅ प्रैक्टिकल गाइड – लोकेशन से लाइसेंस तक</li>
          <li>✅ टेम्पलेट्स, फॉर्मैट्स और डाक्यूमेंटेशन को देखिए</li>
          <li>✅ ऑफर सीमित समय के लिए जल्द समाप्त होगा</li>
        </ul>
      </div>

      {/* Price Block */}
      <div className="mb-8">
        <p className="text-xl md:text-2xl font-semibold text-green-700">
          💰 <span className="line-through text-gray-400">₹1499</span>{" "}
          <span className="text-green-700 font-bold">→ ₹299</span>{" "}
          <span className="text-sm text-red-600">(लॉन्च ऑफ़र)</span>
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          to="/register"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
        >
          👉 अभी रजिस्टर करें
        </Link>
        <Link
          to="/syllabus"
          className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold py-3 px-6 rounded-lg transition"
        >
          📘 सिलेबस देखें
        </Link>
      </div>
    </section>
  );
}
