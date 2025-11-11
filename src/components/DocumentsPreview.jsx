import React from "react";
import { FileText, ClipboardList, FileCheck2 } from "lucide-react";

const DocumentsPreview = () => {
  const docs = [
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "SADO Checklist",
      desc: "लाइसेंस आवेदन के लिए आवश्यक डॉक्यूमेंट की लिस्ट।",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-green-600" />,
      title: "प्रिंसिपल सर्टिफिकेट Format",
      desc: "कंपनी से संबद्धता हेतु मानक प्रारूप।",
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-green-600" />,
      title: "Billing & Letterhead Templates",
      desc: "बिलिंग व ब्रांडिंग के लिए रेडी फॉर्मैट्स।",
    },
  ];

  return (
    <section className="py-16 bg-green-50" id="documents">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-10">
          डॉक्यूमेंट्स और टेम्पलेट्स झलक
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {docs.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{d.icon}</div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {d.title}
              </h3>
              <p className="text-gray-600 text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsPreview;
