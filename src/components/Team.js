
"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";


const teamMembers = [
  {
    img: "/arham.jpg",
    name: "M. Arham Sohail",
    role: "CEO/Founder",
    social: {
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    img: "/Hamda-20.jpg",
    name: "Hamda Sheikh",
    role: "COO",
    social: {
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    img: "/Jannat.jpg",
    name: "Jannat Malik",
    role: "HR",
    social: {
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    img: "/DPP.jpg",
    name: "Zunaira Javed",
    role: "CMO",
    social: {
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    img: "/sana.jpg",
    name: "Sana Naveed",
    role: "Content Manager",
    social: {
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },{
    img: "/Asma.jpg",
    name: "Asma",
    role: "Dev Team Lead",
    social: {
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
];


export default function Team() {
  return (
    <div className="relative w-full text-center">
      

      <div className="relative z-10 py-12 px-4 flex flex-col items-center justify-center backdrop-blur-lg mx-auto max-w-3xl">
        <div className="relative flex flex-col items-center justify-center w-full">
          <div className="mb-4 flex items-center justify-center">
            <img src="/logoo.png" alt="Team Logo" className="w-full h-full" />
          </div>
          <h2 className="text-4xl font-extrabold text-[#7C5FF3] mb-2 drop-shadow-lg tracking-tight">
            <span className="text-black dark:text-white">Our</span> Team
          </h2>
          <p className="text-base text-[#442AC6] font-medium mb-4 bg-white/70 px-4 py-2 rounded-xl shadow-sm backdrop-blur-sm inline-block">Meet the creative minds behind TechXicon</p>
        </div>
      </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-4xl mx-auto"
        >
          {teamMembers.map((member, i) => (
            <SwiperSlide key={i}>
              <TeamCard {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );

}
const TeamCard = ({ img, name, role, social }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-64 h-72 rounded-xl shadow-xl overflow-hidden bg-gradient-to-br from-[#f3e8ff] to-[#fff] flex flex-col justify-center items-center border border-[#e0d7fa] hover:scale-105 hover:shadow-2xl transition-transform duration-300"
  >
    <div className="flex flex-col items-center justify-center pt-6">
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#9854FF] to-[#442AC6] flex items-center justify-center shadow-lg mb-2">
        <img
          src={img}
          alt={name}
          className="w-20 h-20 object-cover rounded-full border-4 border-white"
        />
      </div>
      <h3 className="text-lg font-bold text-[#512da8] mt-2 mb-1 tracking-tight">{name}</h3>
      <p className="text-sm text-[#442AC6] font-medium mb-2">{role}</p>
      <div className="w-10 h-1 bg-gradient-to-r from-[#9854FF] to-[#442AC6] rounded-full mt-2" />
    </div>

    <div className="flex justify-center space-x-3 mt-4">
      <a 
        href={social.instagram} 
        className="text-[#7C5FF3] hover:text-[#442AC6] transition-colors"
        aria-label={`${name}'s Instagram`}
      >
        <FaInstagram size={18} />
      </a>
      <a 
        href={social.linkedin} 
        className="text-[#7C5FF3] hover:text-[#442AC6] transition-colors"
        aria-label={`${name}'s LinkedIn`}
      >
        <FaLinkedin size={18} />
      </a>
      <a 
        href={social.facebook} 
        className="text-[#7C5FF3] hover:text-[#442AC6] transition-colors"
        aria-label={`${name}'s Facebook`}
      >
        <FaFacebook size={18} />
      </a>
    </div>
  </motion.div>
);

