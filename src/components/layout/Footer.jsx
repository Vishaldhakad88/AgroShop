import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdHome, MdMenuBook, MdAppRegistration, MdHelpOutline } from "react-icons/md";
import logo from "../../assets/logo.png";

const Footer = () => {
  const socialIcons = [
    { icon: FaFacebook, color: "text-blue-600" },
    { icon: FaInstagram, color: "text-pink-500" },
    { icon: FaYoutube, color: "text-red-600" },
    { icon: FaLinkedin, color: "text-sky-600" },
  ];

  const links = [
    { title: "Home", icon: MdHome, href: "/" },
    { title: "Syllabus", icon: MdMenuBook, href: "/syllabus" },
    { title: "Register", icon: MdAppRegistration, href: "/register" },
    { title: "FAQ", icon: MdHelpOutline, href: "#faq" },
  ];

  return (
    <footer className="relative bg-green-50 text-gray-800 pt-12 pb-8 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="AgroShiksha Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-2xl font-bold text-green-700">AgroShiksha</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            हम किसानों और उद्यमियों को एक संगठित प्रणाली से अपना{" "}
            <b>एग्रो शॉप / कृषि सेवा केंद्र</b> शुरू करने में मदद करते हैं।
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
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className="flex items-center gap-2 cursor-pointer text-gray-700"
                >
                  <Icon className="text-green-700" />
                  <a href={link.href} className="hover:text-green-600 transition">
                    {link.title}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Right Social Section */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            {socialIcons.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotateY: 15 }}
                  className={`${item.color} transition transform`}
                >
                  <Icon />
                </motion.a>
              );
            })}
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
      <motion.a
        href="tel:+916265861847"
        whileHover={{ scale: 1.2, rotateY: 10 }}
        className="fixed bottom-5 left-5 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition transform"
      >
        <FaPhoneAlt className="text-xl" />
      </motion.a>

      <motion.a
        href="https://wa.me/916265861847"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotateY: 10 }}
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition transform"
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
    </footer>
  );
};

export default Footer;
