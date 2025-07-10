'use client';

import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import NeuronParticles from './NeuronParticles';

const href = () => {
  window.location.href = '#contact';
}
const Main = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 overflow-hidden bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-500" id='home'>

      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <NeuronParticles />
      </div>

      {/* Content Row */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl w-full gap-12 z-10">

        {/* Left: Text Content */}
        <div className="lg:w-1/2 w-full text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug tracking-tight">
            Where Technology Meets <br />
            <span className="text-[#442AC6]">Your Business Vision</span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            Building the Future of Your Business with Personalized Solutions
          </p>

          <button onClick={href} className="px-6 py-3 bg-[#00CFDD] text-white font-semibold rounded-md hover:bg-[#00b4c4] transition w-max">
            Free Consultation
          </button>
        </div>

        {/* Right: Full-Size Lottie Illustration */}

        {/* <div className="lg:w-1/2 w-full h-full flex justify-center items-center">
          <img src='/hero-img.png' alt='hero-image' className='w-full h-auto object-cover' />

        </div> */}

      </div>
    </div>
  );
};

export default Main;
