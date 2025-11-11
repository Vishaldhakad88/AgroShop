import React from "react";

export default function ProblemSolution() {
  return (
    <section className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8">
          क्यों यह ट्रेनिंग ज़रूरी है?
        </h2>

        {/* Pain Points */}
        <div className="max-w-3xl mx-auto text-left text-gray-800 mb-8">
          <ul className="space-y-3 text-lg">
            <li>❌ लाइसेंस और SADO प्रक्रियाओं में महीनों की देरी</li>
            <li>❌ गलत लोकेशन और सेटअप से भारी नुकसान</li>
            <li>❌ सप्लायर–बायर नेगोशिएशन में कन्फ्यूज़न</li>
            <li>❌ बिलिंग और रिकॉर्ड-कीपिंग में झंझट</li>
          </ul>
        </div>

        {/* Solution Block */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center shadow-sm">
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            अब सब कुछ मिलेगा एक ही वीडियो कोर्स में — स्टेप-बाय-स्टेप प्रैक्टिकल
            सिस्टम के साथ।
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            हर स्टेज पर आपको तैयार फॉर्मैट्स और डॉक्यूमेंट्स दिखाए एवं
            समझाए जाएंगे ताकि आपकी दुकान बिना गलतियों एवं बिना नुकसान के तुरंत
            शुरू हो सके।
          </p>
        </div>
      </div>
    </section>
  );
}
