import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { GiFarmer } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { MdStore } from "react-icons/md";
import { RiRocketLine } from "react-icons/ri";

const audience = [
  {
    title: "किसान भाई",
    desc: "जो अपनी खेती को डिजिटल तरीके से बढ़ाना चाहते हैं।",
    icon: GiFarmer,
  },
  {
    title: "विद्यार्थी",
    desc: "जो एग्रीटेक या आईटी सेक्टर में करियर बनाना चाहते हैं।",
    icon: FaUserGraduate,
  },
  {
    title: "एग्री शॉप मालिक",
    desc: "जो अपने बिज़नेस को ऑनलाइन लाना चाहते हैं।",
    icon: MdStore,
  },
  {
    title: "स्टार्टअप फाउंडर",
    desc: "जो एग्रीकल्चर से जुड़ी नई टेक्नोलॉजी सीखना चाहते हैं।",
    icon: RiRocketLine,
  },
];

const ROTATION_RANGE = 25;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const WhoCanJoin = () => {
  return (
    <section className="py-16 bg-green-50" id="who-can-join">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          यह ट्रेनिंग किनके लिए है?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, i) => (
            <TiltCard key={i} title={item.title} desc={item.desc} Icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;

// ---------------- TiltCard Component ----------------

const TiltCard = ({ title, desc, Icon }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 120, damping: 12 });
  const ySpring = useSpring(y, { stiffness: 120, damping: 12 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY / height) - 0.5) * -ROTATION_RANGE;
    const rY = ((mouseX / width) - 0.5) * ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className="relative rounded-2xl shadow-md bg-white/30 backdrop-blur-md p-6 cursor-pointer hover:shadow-xl transition-all duration-500"
    >
      <motion.div
        style={{ transform: "translateZ(30px)" }}
        className="flex flex-col items-center justify-center text-center"
      >
        <Icon className="text-4xl text-green-700 mb-3" />
        <h3 className="text-xl font-semibold text-green-800 mb-1">{title}</h3>
        <p className="text-gray-700 text-sm">{desc}</p>
      </motion.div>
    </motion.div>
  );
};
