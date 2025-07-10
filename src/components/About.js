'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const logos = [
  'logo1',
  'logo2',
  'logo3',
  'logo4',
  'logo5',
  'logo6',
  'logo7',
  'logo8',
  'logo9',
  'logo10',
  'logo11',
];

export default function About() {
  return (
    <section id="about" className="py-12 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md h-64 md:h-96 rounded-xl overflow-hidden">
            <DotLottieReact
              src="https://lottie.host/d1d94f58-9d0b-4db8-bcea-77ee85449c78/YLruLdAwIg.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            TechXicon360 is a software company focused on solving business challenges and driving growth for companies of all sizes. We provide smart, personalized solutions to improve efficiency, streamline operations, and support long-term success. Our experienced team of tech experts works closely with clients to design, develop, and deliver high-quality products and services customized to their specific needs. A range of services is offered including Digital marketing, Visual designing, Web/App development, Software development, E-commerce Solutions We serve industries like healthcare, e-commerce, hospitality, real estate, education, and more, helping businesses of all sizes adapt and succeed
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center gap-2 text-blue-700 px-4 py-2">
              <div className="relative w-24 h-24">
                <img src="/1.png" alt="Strategy Icon" className="w-full h-full object-contain" />
              </div>
              <span className="font-medium">Industry-Specific Strategies for Success</span>
            </div>

            <div className="flex items-center gap-2 text-purple-700 px-4 py-2">
              <div className="relative w-24 h-24">
                <img src="/circle.png" alt="Growth Icon" className="w-full h-full object-contain" />
              </div>
              <span className="font-medium">End-to-End Services for Your Growth</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Logos Marquee */}
      <div className="mt-12 overflow-hidden py-6 relative">
        <div className="marquee">
          <div className="marquee-content flex items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo}-${index}`} className="relative mx-4 w-24 h-24 flex-shrink-0">
                <Image
                  src={`/${logo}.png`}
                  alt={`${logo} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority={index < logos.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Styles */}
      <style jsx>{`
        .marquee {
          display: flex;
          overflow: hidden;
          position: relative;
        }
        .marquee-content {
          display: flex;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
