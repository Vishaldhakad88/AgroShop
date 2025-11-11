import React, { useState, useEffect } from 'react';
import { Zap, Clock, ArrowRight } from 'lucide-react';

export default function SpecialOffer() {
  // ---- Countdown ----
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 14,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else clearInterval(timer);

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fmt = (n) => n.toString().padStart(2, '0');

  // ---- Redirect ----
  const handleEnroll = () => {
    window.location.href = '/register';   // works in any React app
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* ---- WIDE CARD ---- */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl p-10 border border-gray-200">

        {/* Header */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Special Offer – Limited Seats Only!
        </h1>

        {/* Pricing */}
        <div className="text-center space-y-4 mb-8">
          <p className="text-xl line-through text-red-600 font-medium">
            Regular Price: <span className="text-2xl">₹999</span>
          </p>

          <p className="text-4xl md:text-5xl font-bold text-green-600">
            Today Only – <span className="inline-block">₹199</span>
          </p>

          <p className="text-lg font-semibold text-gray-700 flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-green-600" />
            Access तुरंत, कोई इंतजार नहीं!
          </p>
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-6 mb-10">
          {[
            { v: fmt(timeLeft.hours),   l: 'HRS' },
            { v: fmt(timeLeft.minutes), l: 'MIN' },
            { v: fmt(timeLeft.seconds), l: 'SEC' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="bg-green-600 text-white rounded-2xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-2xl md:text-3xl font-bold shadow-md">
                {item.v}
              </div>
              <p className="text-sm md:text-base text-gray-600 mt-2 font-medium">
                {item.l}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleEnroll}
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95"
          >
            अभी Enroll करें
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <span className="ml-1 text-base font-medium">– Instant Access पाएँ</span>
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-1">
          <Clock className="w-4 h-4" />
          Hurry! Offer ends when timer hits zero.
        </p>

      </div>
    </div>
  );
}