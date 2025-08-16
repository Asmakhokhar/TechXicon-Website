'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const GridLoader = dynamic(() => import('react-spinners/GridLoader'), { ssr: false });

import About from "@/components/AboutSection";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CustomServices from "@/components/Services";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
// import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-gray-950">
        <GridLoader color="#3551e5" />
      </div>
    );
  }

  return (
    <div className=" bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-500">
      <Navbar />
      <Main />
      <About />
      <CustomServices />
      <Client />
      <Testimonial />
      {/* <Team /> */}
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
