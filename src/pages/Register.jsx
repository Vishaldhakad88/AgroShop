import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // यहाँ तुम backend / payment integration करोगे
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-green-50 flex flex-col justify-center items-center px-6 py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          🎓 कोर्स रजिस्ट्रेशन
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                नाम (Name)
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                ईमेल (Email)
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                मोबाइल नंबर (Phone)
              </label>
              <input
                type="tel"
                name="phone"
                required
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 mb-2">
                💰 कोर्स फ़ीस:{" "}
                <span className="font-semibold text-green-700">
                  ₹299 (लॉन्च ऑफ़र)
                </span>
              </p>

              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-green-700 transition w-full"
              >
                पेमेंट करें और रजिस्टर करें
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              ✅ रजिस्ट्रेशन सफल!
            </h3>
            <p className="text-gray-600">
              पेमेंट सफल होते ही आपको ईमेल पर कोर्स एक्सेस लिंक भेज दिया जाएगा।  
              अगर इनबॉक्स में न दिखे, तो <b>Spam / Promotions</b> फ़ोल्डर जाँचें।
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Register;
