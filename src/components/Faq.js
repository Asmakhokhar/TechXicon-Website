'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// FAQ Data
const faqData = [
  {
    question: "What services does TechXicon offer?",
    answer:
      "TechXicon offers a wide range of services including <strong>web development</strong>, <strong>mobile app development</strong>, digital marketing, e-commerce solutions, and custom software development tailored to your business needs.",
  },
  {
    question: "Does TechXicon provide ongoing support after project completion?",
    answer:
      "Yes, TechXicon provides ongoing support and maintenance to ensure your digital products run smoothly and evolve with your business requirements.",
  },
  {
    question: "Why choose TechXicon?",
    answer:
      "TechXicon is client-centric, delivering custom solutions with expert precision, ongoing support, and a <strong>100% success record</strong> demonstrated through our past projects.",
  },
  {
    question: "How can TechXicon help improve my online presence?",
    answer:
      "Through expert website design, SEO optimization, and targeted digital marketing strategies, TechXicon helps increase your brand visibility and attract the right audience online.",
  },
  {
    question: "What makes TechXicon’s web development services unique?",
    answer:
      "Our services are tailored to your business, combining modern technology, creative design, and seamless user experience to deliver websites that truly reflect your brand.",
  },
  {
    question: "Can TechXicon develop a custom mobile app for my business?",
    answer:
      "Absolutely! We specialize in custom mobile app development for both iOS and Android platforms, designed to meet your specific business goals.",
  },
  {
    question: "What types of software solutions does TechXicon provide?",
    answer:
      "TechXicon provides enterprise software, CRM systems, e-commerce platforms, and custom automation tools built to improve efficiency and scalability.",
  },
  {
    question: "How can TechXicon assist with my e-commerce business?",
    answer:
      "We develop robust, user-friendly e-commerce platforms with secure payment gateways, inventory management, and marketing integrations to grow your online sales.",
  },
  {
    question: "What is the process for starting a project with TechXicon?",
    answer:
      "Simply contact us to discuss your vision. We’ll analyze your needs, create a tailored proposal, and begin the development process once approved.",
  },
  {
    question: "How does TechXicon ensure the quality of its services?",
    answer:
      "Quality is ensured through rigorous testing, client feedback loops, and adherence to industry best practices throughout every stage of the project.",
  },
  {
    question: "How can I get in touch with TechXicon for more information?",
    answer:
      'You can reach TechXicon via email at <a href="mailto:contact@techxicon.com" class="underline text-blue-600">contact@techxicon.com</a> or call us at <strong>+1 234 567 8900</strong>. We’re happy to assist you!',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="text-gray-800 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-start text-[#442AC6]">FAQs</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-start text-[#9854FF]">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-[#000000]">Got questions? Explore our FAQs to find everything you need to know about our services, processes, and more.</p>

        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#fdfdfd] rounded-xl shadow-md mb-4 overflow-hidden transition-all"
          >
            <button
              className="w-full flex justify-between items-center text-left px-6 py-4 text-lg font-medium focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span className="ml-4">
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600 text-base">
                    {item.answer.includes("<") ? (
                      <p
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
