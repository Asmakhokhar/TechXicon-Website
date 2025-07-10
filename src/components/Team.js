"use client";

import { motion } from "framer-motion";

const TeamCard = ({ img, name, role, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="w-60 h-64 rounded-lg shadow-md overflow-hidden bg-white"
  >
    <div className="h-2/3 flex items-center justify-center p-3">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 object-cover rounded-full shadow-md"
      />
    </div>
    <div className="h-1/3 text-center px-4">
      <h3 className="text-md font-semibold text-[#512da8] border-b-2 border-purple-500 pb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-600 mt-1">{role}</p>
    </div>
  </motion.div>
);

export default function Team() {
  return (
    <div className="relative w-full min-h-[400px] text-center">
      {/* Top white, bottom gray */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-gray-100" />
        <div className="h-1/2 bg-white" />
      </div>

      {/* Content on top of background */}
      <div className="relative z-10 py-12 px-4">
        <h2 className="text-3xl font-bold text-[#7C5FF3] mb-8"><span className="text-[#000000]">Our</span> Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <TeamCard
            img="/arham.jpg"
            name="M. Arham Sohail"
            role="CEO/Founder"
            delay={0.1}
          />
          <TeamCard
            img="/nimra1.png"
            name="Nimra Safeer"
            role="Co-Founder"
            delay={0.2}
          />
        </div>
      </div>
    </div>
  );
}
