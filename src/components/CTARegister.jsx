import React from "react";
import { useNavigate } from "react-router-dom";

const CTARegister = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-green-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          अब आपकी बारी — अपनी एग्रो शॉप शुरू करें!
        </h2>
        <p className="text-lg text-green-100 mb-8">
          लोकेशन से लेकर लाइसेंस और प्रॉफिट मैनेजमेंट तक —
          हर स्टेप अब आपके कंट्रोल में।
        </p>

        <button
          onClick={() => navigate("/register")}
          className="bg-white text-green-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-green-100 transition"
        >
          👉 अभी रजिस्टर करें ₹299 में
        </button>
      </div>
    </section>
  );
};

export default CTARegister;
