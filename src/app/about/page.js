"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="max-w-2xl text-lg text-center">
        Welcome to TechXicon! We are a team of passionate professionals dedicated to delivering innovative digital solutions. Our expertise spans visual designing, app development, software solutions, e-commerce, and digital marketing. Learn more about our journey, values, and the talented people behind our success.
      </p>
    </div>
    <Footer />
    </>
  );
}
