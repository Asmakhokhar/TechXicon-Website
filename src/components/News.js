'use client';

import React from 'react';
import Image from 'next/image';

export default function News() {
  return (
    <div className="p-20 space-y-10 bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-500" id="digital-marketing">
      {/* HEADING SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-start gap-3 p-8">
          <h1 className="text-[#442AC6] font-Comfortaa font-extrabold text-[30px]">Digital Marketing</h1>
          <p className="text-[#494949] dark:text-gray-300 text-[14px] font-poppins">
            From SEO and content marketing to social media management and PPC campaigns, our data-driven
            approach ensures that every campaign is optimized for maximum impact, helping you reach and
            engage your target audience effectively.
          </p>
          <button className="text-white font-semibold bg-gradient-to-r from-[#9854FF] to-[#442AC6] rounded-sm px-9 h-10 outline-none text-[17px]">
            Let’s Connect
          </button>
        </div>

        <div className="px-8">
          <Image src="/p.png" alt="Digital Marketing Illustration" width={400} height={300} className="hero-img" />
        </div>
      </div>

      {/* SERVICES DETAILS */}
      <div className="rounded-3xl px-10 py-10 space-y-10">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="space-y-5">
            {[
              ['Search Engine Optimization (SEO):', 'We help your website rank higher on search engines, making it easier for potential customers to find you online.'],
              ['Pay-Per-Click Advertising (PPC):', 'Our PPC campaigns drive instant traffic to your website by placing targeted ads on Google, Facebook, and other platforms.'],
              ['Social Media Marketing:', 'We create and manage engaging social media campaigns to build your brand and connect with your audience.'],
              ['Content Marketing:', 'Our team crafts compelling blogs, videos, and graphics to attract and retain customers while boosting your online presence.']
            ].map(([title, desc], index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-lg font-bold font-Comfortaa text-black dark:text-white">{title}</h2>
                <p className="text-[#494949] dark:text-gray-300 text-[16px]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {[
              ['Email Marketing (EMM):', 'We design personalized email campaigns to nurture leads, promote your services, and drive customer loyalty.'],
              ['Influencer Marketing:', 'We collaborate with trusted influencers to promote your brand and reach a larger, more engaged audience.'],
              ['Affiliate Marketing:', 'Our affiliate programs allow you to partner with marketers who promote your business and bring in new customers.'],
              ['Web Analytics and Reporting:', 'We track and analyze your website’s performance to optimize strategies and ensure your goals are met effectively.']
            ].map(([title, desc], index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-lg font-bold font-Comfortaa text-black dark:text-white">{title}</h2>
                <p className="text-[#494949] dark:text-gray-300 text-[16px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="space-y-4">
        <div className="flex items-start gap-6">
          <Image src="/o.png" alt="Why Choose TechXicon" width={100} height={100} />
          <div className="space-y-3">
            <h1 className="font-poppins text-lg font-semibold text-black dark:text-white">
              Why Choose TechXicon for Digital Marketing?
            </h1>

            <h2 className="font-bold">1. Personalized Plans:</h2>
            <p className="text-[#494949] dark:text-gray-300">
              We create custom digital marketing plans designed specifically for your goals and audience.
            </p>

            <h2 className="font-bold">2. Expert Team:</h2>
            <p className="text-[#494949] dark:text-gray-300">
              Our experts stay updated with the latest marketing trends to deliver the best results.
            </p>

            <h2 className="font-bold">3. Transparent Reporting:</h2>
            <p className="text-[#494949] dark:text-gray-300">
              We provide clear, detailed reports so you can track your campaign progress.
            </p>
          </div>
        </div>
      </div>

      {/* OUR WORKING PROCESS */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Our Working Process</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ['Understanding Your Business & Goals', 'We begin by understanding your business and goals to create a personalized strategy.'],
            ['Strategic Planning & Research', 'We analyze your competitors and market to plan effective strategies.'],
            ['Campaign Execution', 'We implement your campaigns with creativity and precision.'],
            ['Monitoring & Optimization', 'We continuously monitor and optimize campaigns for best performance.']
          ].map(([title, desc], index) => (
            <div key={index} className="p-6 border dark:border-gray-700 rounded-lg shadow-sm">
              <h2 className="font-semibold mb-2 text-black dark:text-white">{title}</h2>
              <p className="text-[#494949] dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
