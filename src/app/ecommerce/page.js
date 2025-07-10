'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function page() {
  const servicesRight = [
    {
      title: "Point of Sales (POS) Software",
      desc: "Our POS systems streamline your sales process, manage inventory, and improve customer experiences."
    },
    {
      title: "Custom Software Development:",
      desc: "We design and build software specifically tailored to your unique business requirements."
    },
    {
      title: "Software Maintenance and Support:",
      desc: "Our team provides ongoing support and updates to keep your software running smoothly and securely."
    }
  ];

  const servicesLeft = [
    {
      title: "Enterprise Resource Planning (ERP):",
      desc: "Our ERP systems help you manage your business operations seamlessly, from inventory to finances, in one place."
    },
    {
      title: "Customer Relationship Management (CRM):",
      desc: "We develop CRM tools to help you track leads, manage customer interactions, and boost sales effectively."
    },
    {
      title: "Software Integration Services:",
      desc: "We ensure your existing software works together smoothly, saving you time and reducing errors."
    },
  ];

  const processSteps = [
    { title: "Requirement Analysis & Strategy" },
    { title: "Design & Development" },
    { title: " Product & Payment Integration" },
    { title: "Testing & Quality Assurance" },
  ];

  const processSteps2 = [
    { title: "Requirement Analysis & Strategy" },
    { title: "Design & Development" },
    { title: " Product & Payment Integration" },
  ];

  return (
    <div className="relative">
      <Navbar />

      <div className="pt-6 mt-12 flex items-center p-6 md:p-9 flex-col md:flex-row md:gap-13 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-2 relative"
        >
          <div className="space-y-2 md:w-full w-full relative">
            <h1 className="heading text-[#442AC6] text-[30px] relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[89%] after:mt-1">
              Ecommerce Solutions
            </h1>
            <p className="poppins-400 text-[#494949] text-[14px] font-Poppins leading-relaxed">
              At Techxicon, we help businesses build and scale their online stores with powerful, user-friendly, and
              conversion-focused ecommerce solutions. Whether you need a custom Shopify store or want to leverage TikTok Shop for social commerce, we provide tailored solutions to enhance your online sales.
            </p>
            <button className="poppins-400 bg-gradient-to-r from-[#9854FF] to-[#442AC6] text-white md:px-9 md:py-2 px-4 py-2 items-center rounded-[6px] text-sm outline-none md:text-lg">
              Let’s Connect
            </button>
          </div>
        </motion.div>

        <div className="gap-2">
          <Image
            src="/ecom.png"
            alt="Ecommerce solution"
            width={320}
            height={320}
            className="md:max-w-80 md:max-h-80"
          />
        </div>
      </div>

      <div className="p-10 space-y-5">
        <div>
          <h2 className="heading font-Comfortaa font-bold text-[#442AC6] text-[19px]">1. Shopify Store Development</h2>
          <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">
            We create high-performing Shopify stores that are visually appealing, easy to navigate, and optimized for sales. Our services include:
          </p>
          <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">
            <span className="text-[#000000] poppins-400">Custom Store Design:</span> We craft unique Shopify themes that reflect your brand identity.
          </p>
          <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">
            <span className="text-[#000000] poppins-400">App Integrations:</span> We integrate essential apps for payments, inventory management, and marketing automation.
          </p>
          <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">
            <span className="text-[#000000] poppins-400">SEO & Mobile Optimization:</span> Our Shopify stores are designed to rank higher on search engines and provide a seamless mobile shopping experience.
          </p>
        </div>

        <div>
          <h2 className="heading font-Comfortaa font-bold text-[#442AC6] text-[19px]">2. TikTok Shop Setup & Optimization</h2>
          <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">
            Tap into the power of social commerce with TikTok Shop. We help businesses set up and optimize their TikTok stores to drive sales directly from the platform.
          </p>
          <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">
            <span className="text-[#000000] poppins-400">Product Listing & Optimization:</span> We create compelling product descriptions and visuals to attract buyers.
          </p>
          <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">
            <span className="text-[#000000] poppins-400">Seamless Checkout Integration:</span> We ensure a smooth and hassle-free checkout experience.
          </p>
          <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">
            <span className="text-[#000000] poppins-400">Marketing & Engagement Strategies:</span> We develop strategies to increase product visibility using TikTok trends, influencer collaborations, and paid ads.
          </p>
        </div>
      </div>

      {/* OUR WORK PROCESS */}

      <div className="space-y-8 mt-10">
        <h2 className="poppins-400 text-3xl ml-10 font-medium text-[#2B2933] font-poppins relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[86%] after:mt-2">
          Our Working Process
        </h2>

        <div className="space-y-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <div key={i} className="border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="bg-[#F8F1FF] flex items-center justify-center px-6 py-4 rounded-xl h-full">
                  <h3 className="poppins-500 text-lg font-semibold text-[#464646] text-center">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 mb-4 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps2.map((step, i) => (
              <div key={i} className="border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="bg-[#F8F1FF] flex items-center justify-center px-6 py-4 rounded-xl h-full">
                  <h3 className="poppins-500 text-lg font-semibold text-[#464646] text-center">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
