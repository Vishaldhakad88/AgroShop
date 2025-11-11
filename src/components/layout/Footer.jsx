import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="relative bg-green-50 text-gray-800 pt-12 pb-8 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src={logo}
              alt="AgroShiksha Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold text-green-700">
              AgroShiksha
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            हम किसानों और उद्यमियों को एक संगठित प्रणाली से अपना
            <b> एग्रो शॉप / कृषि सेवा केंद्र </b> शुरू करने में मदद करते हैं।
            सीखिए – लोकेशन से लाइसेंस, सप्लायर से मार्केटिंग तक।
          </p>

          <p className="text-sm text-gray-500 mt-3">
            MSME Reg. No. – UDYAM-RJ-25-XXXXXXX
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AgroShiksha. सर्वाधिकार सुरक्षित।
          </p>
        </div>

        {/* Middle Links */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-600 transition">🏠 Home</a>
            </li>
            <li>
              <a href="/syllabus" className="hover:text-green-600 transition">📘 Syllabus</a>
            </li>
            <li>
              <a href="/register" className="hover:text-green-600 transition">🧾 Register</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-green-600 transition">❓ FAQ</a>
            </li>
          </ul>
        </div>

        {/* Right Social Section */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="text-blue-600 hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-pink-500 hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-red-600 hover:scale-110 transition">
              <FaYoutube />
            </a>
            <a href="#" className="text-sky-600 hover:scale-110 transition">
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-green-800 mb-2">Available On:</h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36"
            />
          </div>
        </div>
      </div>

      {/* Floating Call + WhatsApp Buttons */}
      <a
        href="tel:+916265861847"
        className="fixed bottom-5 left-5 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-110"
      >
        <FaPhoneAlt className="text-xl" />
      </a>

      <a
        href="https://wa.me/916265861847"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
