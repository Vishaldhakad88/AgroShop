import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, BookOpen, ShoppingBag, Tag } from "lucide-react";
import hero from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="relative text-center overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-green-950/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 md:py-28 text-white">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-6 drop-shadow-md">
          अपना एग्रो शॉप / कृषि सेवा केंद्र शुरू करें — बिना महँगी गलतियों के !
        </h1>

        {/* Subheadline */}
        <p className="text-gray-100 max-w-3xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
          लोकेशन चुनने से लेकर लाइसेंस, सप्लायर–बायर मैनेजमेंट, बिलिंग, मार्केटिंग
          और प्रॉफिट तक — सब कुछ एक व्यवस्थित सिस्टम में सीखिए।
        </p>

        {/* Bullet Points */}
        <div className="max-w-2xl mx-auto text-left mb-12 bg-white/10 p-5 rounded-xl backdrop-blur-md border border-white/20 shadow-lg">
          <ul className="space-y-3 text-gray-100 font-medium text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-400 w-5 h-5" />
              पूरी ट्रेनिंग साधारण हिंदी भाषा में
            </li>
            <li className="flex items-center gap-3">
              <ShoppingBag className="text-green-400 w-5 h-5" />
              प्रैक्टिकल गाइड – लोकेशन से लाइसेंस तक
            </li>
            <li className="flex items-center gap-3">
              <BookOpen className="text-green-400 w-5 h-5" />
              टेम्पलेट्स, फॉर्मैट्स और डाक्यूमेंटेशन को देखें
            </li>
            <li className="flex items-center gap-3">
              <Tag className="text-green-400 w-5 h-5" />
              सीमित समय के लिए लॉन्च ऑफर उपलब्ध
            </li>
          </ul>
        </div>

        {/* Price Block */}
        <div className="mb-8">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            <span className="line-through text-gray-300">₹1499</span>{" "}
            <span className="text-yellow-300 font-bold">→ ₹299</span>{" "}
            <span className="text-sm text-red-300">(लॉन्च ऑफ़र)</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            अभी रजिस्टर करें
          </Link>
          <Link
            to="/syllabus"
            className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            सिलेबस देखें
          </Link>
        </div>
      </div>

      {/* Gradient fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-50 to-transparent"></div>
    </section>
  );
}
