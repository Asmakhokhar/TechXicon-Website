'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Page() {
  const servicesLeft = [
    {
      title: "Search Engine Optimization (SEO):",
      desc: "We help your website rank higher on search engines, making it easier for potential customers to find you online.",
    },
    {
      title: "Pay-Per-Click Advertising (PPC):",
      desc: "Our PPC campaigns drive instant traffic to your website by placing targeted ads on Google, Facebook, and other platforms.",
    },
    {
      title: "Social Media Marketing:",
      desc: "We create and manage engaging social media campaigns to build your brand and connect with your audience.",
    },
    {
      title: "Content Marketing:",
      desc: "Our team crafts compelling blogs, videos, and graphics to attract and retain customers while boosting your online presence.",
    },
  ];

  const servicesRight = [
    {
      title: "Email Marketing (EMM):",
      desc: "We design personalized email campaigns to nurture leads, promote your services, and drive customer loyalty.",
    },
    {
      title: "Influencer Marketing:",
      desc: "We collaborate with trusted influencers to promote your brand and reach a larger, more engaged audience.",
    },
    {
      title: "Affiliate Marketing:",
      desc: "Our affiliate programs allow you to partner with marketers who promote your business and bring in new customers.",
    },
    {
      title: "Web Analytics and Reporting:",
      desc: "We track and analyze your website’s performance to optimize strategies and ensure your goals are met effectively.",
    },
  ];

  const processSteps = [
    {
      title: "Understanding Your Business & Goals",
      desc: "We begin by understanding your business, target audience, and marketing goals. This helps us create a personalized digital marketing strategy that aligns with your objectives.",
    },
    {
      title: "Market Research & Strategy Development",
      desc: "Our team conducts in-depth market research to analyze competitors, industry trends, and customer behavior. Based on these insights, we develop a detailed digital marketing strategy to maximize ur reach.",
    },
    {
      title: " Campaign Execution & Optimization",
      desc: "We implement targeted campaigns across various channels like social media, search engines, and email marketing. We continuously monitor performance and make data-driven adjustments to improve results and ROI.",
    },
    {
      title: "Reporting & Analysis",
      desc: "We provide clear and transparent reports, showing the performance of your campaigns. Through detailed analysis, we identify what's working and refine our strategies to ensure consistent growth.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 md:p-25 relative">
        {/* HEADING SECTION */}
        <div className="flex items-center p-6 md:p-9 flex-col md:flex-row md:gap-13 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-2 relative"
          >
            <div className="space-y-2 md:w-full w-full relative">
              <h1 className="heading text-[#442AC6] text-[30px] relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[89%] after:mt-1">
                Digital Marketing
              </h1>
              <p className="poppins-400 text-[#494949] text-[14px] font-Poppins leading-relaxed">
                From SEO and content marketing to social media management and PPC campaigns, our
                data-driven approach ensures that every campaign is optimized for maximum impact,
                helping you reach and engage your target audience effectively.
              </p>
              <button className="poppins-400 bg-gradient-to-r from-[#9854FF] to-[#442AC6] text-white md:px-9 md:py-2 px-4 py-2 items-center rounded-[6px] text-sm outline-none md:text-lg">
                Let’s Connect
              </button>
            </div>
          </motion.div>

          <div className="gap-2 relative md:max-w-[360px] md:max-h-[360px] w-full h-auto">
            <Image
              src="/p.png"
              alt="Digital Marketing"
              layout="responsive"
              width={360}
              height={360}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* SERVICES DETAILS */}
        <div className="bg-[#FCFAFF] rounded-3xl px-6 md:px-25 py-22 lg:max-w-screen">
          <div className="flex flex-col gap-9 md:flex-row md:gap-20">
            <div className="flex-1 space-y-6">
              {servicesLeft.map((service, i) => (
                <div key={i} className="space-y-3">
                  <h2 className="heading font-Comfortaa font-bold text-[#2B2933] text-[19px]">
                    {service.title}
                  </h2>
                  <p className="poppins-400 text-[#494949] text-[16px] font-Poppins">{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-6">
              {servicesRight.map((service, i) => (
                <div key={i} className="space-y-3">
                  <h2 className="heading text-[#2B2933] text-lg font-bold font-Comfortaa">{service.title}</h2>
                  <p className="poppins-400 text-[#494949] text-base">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:w-[1138px] h-[auto] relative">
          <div className="relative md:w-[385px] md:h-[400px] w-full h-auto">
            <Image
              src="/o.png"
              alt="Target Icon"
              layout="responsive"
              width={385}
              height={400}
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="poppins-500 text-[24px] font-bold font-poppins text-black">
              Why Choose TechXicon for Digital Marketing?
            </h1>
            <ul className="list-inside text-[#494949] font-semibold space-y-4">
              <li>
                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">
                  1. Personalized Plans
                </h3>
                <p className="poppins-400 text-[#494949] text-[16px] font-normal font-poppins px-3">
                  We understand every business is unique, so we create custom digital marketing plans
                  designed specifically for your goals and audience.
                </p>
              </li>

              <li>
                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">
                  2. Results-Driven Approach
                </h3>
                <p className="poppins-400 text-[#494949] text-[16px] font-normal font-poppins px-3">
                  We use data and analytics to track your campaigns, make improvements, and deliver
                  the best results for your investment.
                </p>
              </li>
              <li>
                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">
                  3. Comprehensive Digital Skills
                </h3>
                <p className="poppins-400 text-[#494949] text-[16px] font-normal font-poppins px-3">
                  From social media to search engines and email marketing, our team knows how to grow
                  your business on all digital platforms.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* OUR WORKING PROCESS */}
        <div className="space-y-8 mt-10">
          <h2
            className="poppins-400 text-3xl ml-10 font-medium text-[#2B2933] font-poppins relative inline-block
          after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[86%] after:mt-2"
          >
            Our Working Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="bg-[#F8F1FF] flex items-center justify-center px-6 py-4 rounded-xl h-1/3">
                  <h3 className="poppins-500 text-lg font-semibold text-[#464646] text-center">{step.title}</h3>
                </div>
                <div className="flex text-center items-center justify-center">
                  <p className="poppins-400 text-[#000000] text-[12px] font-semibold p-5 font-poppins">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
