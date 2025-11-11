import React from "react";
import { useNavigate } from "react-router-dom";

const PriceBlock = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          अभी जॉइन करें — <span className="text-green-600">सीमित सीटें!</span>
        </h2>

        <p className="text-gray-600 mb-6">
          यह कोर्स सीमित समय के लिए <b>₹1499</b> से घटाकर सिर्फ{" "}
          <span className="text-green-600 font-semibold">₹299</span> में!
        </p>

        <div className="bg-green-50 p-6 rounded-2xl shadow-inner mb-6">
          <h3 className="text-2xl font-bold text-green-700">
            🎯 सिर्फ ₹299 में पाएं:
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2 text-left inline-block">
            <li>✅ Complete Agro Shop Website Project</li>
            <li>✅ Practical React + Tailwind Training</li>
            <li>✅ Lifetime Access & Templates</li>
            <li>✅ Certificate of Completion</li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/register")}
          className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-green-700 transition"
        >
          अभी रजिस्टर करें ₹299 में
        </button>

        <p className="text-sm text-gray-500 mt-3">
          ⏰ Offer आज रात 12 बजे तक ही वैध!
        </p>
      </div>
    </section>
  );
};

export default PriceBlock;
