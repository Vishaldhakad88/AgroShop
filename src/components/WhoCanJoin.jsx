import React from "react";

const WhoCanJoin = () => {
  const audience = [
    {
      title: "👨‍🌾 किसान भाई",
      desc: "जो अपनी खेती को डिजिटल तरीके से बढ़ाना चाहते हैं।",
    },
    {
      title: "🧑‍💻 विद्यार्थी",
      desc: "जो एग्रीटेक या आईटी सेक्टर में करियर बनाना चाहते हैं।",
    },
    {
      title: "🏪 एग्री शॉप मालिक",
      desc: "जो अपने बिज़नेस को ऑनलाइन लाना चाहते हैं।",
    },
    {
      title: "🚀 स्टार्टअप फाउंडर",
      desc: "जो एग्रीकल्चर से जुड़ी नई टेक्नोलॉजी सीखना चाहते हैं।",
    },
  ];

  return (
    <section className="py-16 bg-green-50" id="who-can-join">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          यह ट्रेनिंग किनके लिए है?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;
