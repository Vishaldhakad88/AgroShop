import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "कोर्स की भाषा क्या है?",
      a: "पूरा कोर्स हिन्दी में है — सरल और व्यावहारिक।",
    },
    {
      q: "क्या डॉक्यूमेंट्स / फॉर्मैट्स देखने को मिलेंगे?",
      a: "हाँ, कीटनाशक, उर्वरक, बीज लाइसेंस प्रोसेस के डाक्यूमेंटेशन जैसे SADO चेकलिस्ट, नक्शा, चालान, प्रिंसिपल सर्टिफिकेट एवं बिलिंग, लेटरहेड, चालान आदि शामिल हैं।",
    },
    {
      q: "रजिस्ट्रेशन कैसे करें?",
      a: "नीचे दिए गए फॉर्म को भरें और पेमेंट पूरा करें — आपको तुरंत पुष्टि मिल जाएगी।",
    },
    {
      q: "पेमेंट के बाद वीडियो/कोर्स एक्सेस कहाँ मिलेगा?",
      a: "पेमेंट सफल होते ही आपके ईमेल एड्रेस पर एक्सेस डिटेल्स भेज दी जाएँगी (लिंक/लॉगिन). अगर इनबॉक्स में न दिखे, तो Spam/Promotions फ़ोल्डर भी अवश्य जाँचें।",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-green-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-10">
          सामान्य प्रश्न (FAQ)
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300"
              layout
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-gray-800 focus:outline-none"
              >
                <span className="text-sm sm:text-base md:text-lg">{item.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-green-600 text-2xl flex items-center"
                >
                  <FiPlus />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-5 pb-4 text-gray-700 text-sm sm:text-base border-t border-green-100 overflow-hidden"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
