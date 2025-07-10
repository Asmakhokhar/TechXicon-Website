"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p4s7tsk',
        'template_j3kjmcp',
        form.current,
        'ZrZexnTk7cz3lqDpR'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Email send error:', error?.text || error);
          alert('Failed to send message. Check console for details.');
        }
      );
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div 
      ref={contactRef}
      className="py-16 px-4 sm:px-8 bg-[#fcfaff] dark:bg-[#0f172a] sm:mb-9" 
      id="contact"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side - Contact Info */}
        <div className='mb-9'>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="w-full space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-semibold text-[#442AC6]">
              Contact Us
            </motion.h2>
            <motion.h3 variants={itemVariants} className="text-2xl font-light text-[#7c3aed] comfortaa">
              Let's Start the Conversation!
            </motion.h3>
            <motion.p variants={itemVariants}>
              Your next big step starts here. We're just a click away!
            </motion.p>
            <motion.ul variants={textVariants} className="space-y-4 text-[#000000] dark:text-[#fdfdfd]">
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <FaPhone className='text-white bg-[#4926ca] h-6 w-6 rounded-full p-1' />
                <span>+92 325 8429083</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <BiLogoGmail className='text-white bg-[#442AC6] h-6 w-6 rounded-full p-1' />
                <span>infotechxicon360@gmail.com</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <FaLocationDot className='text-white bg-[#442AC6] h-6 w-6 rounded-full p-1' />
                <span>Rahim Yar Khan</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="md:w-[450px] md:h-[500px] w-[400px] h-[500px]"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#9854FF] rounded-[18px] p-12 space-y-4 shadow-lg"
          >
            <div className='flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-[#ba8cff]'>
              <FaUser className='bg-[#ba8cff] text-white' />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="text-white placeholder-white bg-[#ba8cff] focus:outline-none"
                required
              />
            </div>
            <div className='flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-[#ba8cff]'>
              <MdEmail className='bg-[#ba8cff] text-white text-xl' />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="text-white placeholder-white bg-[#ba8cff] focus:outline-none"
                required
              />
            </div>
            <div className='flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-[#ba8cff] '>
              <FaPhone className='bg-[#ba8cff] text-white' />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className='text-white placeholder-white bg-[#ba8cff] focus:outline-none'
                required
              />
            </div>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-lg bg-[#ba8cff] text-white placeholder-white focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-white text-[#000000] hover:bg-[#EDEDED] font-semibold px-6 py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;