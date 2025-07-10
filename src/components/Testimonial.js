"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiComma } from "react-icons/si";
import Image from "next/image";

const testimonials = [
  {
    name: "John Deo",
    position: "CEO of Innovative Solutions Inc.",
    message: "TechXicon transformed our outdated website into a sleek, modern, and  user-friendly platform. Their team was professional, responsive, and committed  to understanding our needs. The result exceeded our expectations and has  significantly improved our online presence."
  },
  {
    name: "Michael Brown",
    position: "Founder of E-Shop Haven",
    message: "Our e-commerce platform needed a complete overhaul, and TechXicon delivered beyond  our expectations. From design to functionality, every aspect was handled with expertise and  attention to detail. Our sales have increased dramatically since the launch."
  },
  {
    name: "Lisa Wong",
    position: "Marketing Director, Asia Pacific Ventures",
    message: "The digital marketing strategies implemented by TechXicon have significantly  boosted our online engagement and lead generation. Their creative and  data-driven approach has yielded impressive results."
  },
  {
    name: "Ahmed Khan",
    position: "IT Director, FutureTech Enterprises",
    message: "TechXicon’s team of experts has consistently demonstrated professionalism and expertise in every project we’ve worked on together. Their ability to adapt to our unique requirements and deliver high-quality solutions is commendable."
  },
  {
    name: "John Smith",
    position: "Head of E-Commerce, EuroShop Ltd.",
    message: "TechXicon developed a comprehensive e-commerce platform for our company, and we have seen a remarkable increase in our sales. Their attention to detail and understanding of our business needs were exceptional. "
  },
   {
    name: "Maria Garcia",
    position: "Operations Manager, InnovateTech Solutions, Spain",
    message: "We needed a customized CRM solution that could integrate seamlessly with our existing systems. TechXicon delivered beyond our expectations, providing a highly customized and efficient solution. Their team is incredibly professional and knowledgeable. "
  }
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length]
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#6C3DF8] to-[#924DFF] py-16 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-left">
            <div>
              <Image
                src="/comma.png"
                alt="client-testimonial"
                width={200}
                height={200}
                unoptimized
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Words of Trust from <br /> Our Partners
            </h2>
            <p className="text-sm md:text-base text-[#FFFFFF]">
              Hear from our satisfied partners who have experienced the impact of our
              solutions
            </p>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="h-[500px] relative overflow-hidden">
          <AnimatePresence initial={false}>
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="bg-[#FFFFFF] text-gray-800 rounded-lg p-6 absolute w-full shadow-lg"
                initial={{ y: 170, opacity: 0 }}
                animate={{
                  y: index * 170,
                  opacity: index === 1 ? 1 : index === 0 ? 0.7 : 0.4,
                  scale: index === 1 ? 1 : 0.95
                }}
                exit={{ y: -170, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ height: '150px' }}
              >
                <div>
                  <div className="text-sm font-semibold text-[#442AC6]">{testimonial.name}</div>
                <SiComma className="absolute bottom-4 right-4 text-[#00BCD4] text-2xl" />
                <div className="text-xs text-[#442AC6]">{testimonial.position}</div>
                <p className="text-xs mb-4">{testimonial.message}</p>
                </div>
                
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}