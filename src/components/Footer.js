import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaArrowUp} from 'react-icons/fa'
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const Footer = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation 
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll to top fuction
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    
    <footer 
      ref={ref}
      className="bg-gradient-to-t from-[#9854FF] to-[#442AC6] text-white pt-12 pb-20 overflow-hidden"
    >
      {isClient && isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-[#9854FF] to-[#442AC6] shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="h-5 w-5 text-white" />
        </motion.button>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div 
            className="w-full lg:w-1/3"
            variants={itemVariants}
          >
            <Image
              src="/footer.png"
              alt="Company Logo"
              width={300}
              height={300}
              className="mb-1 w-40 sm:w-48 md:w-56 lg:w-64"
            />
            <p className="mb-6 lg:mb-10 leading-relaxed text-sm md:text-base max-w-xs">
              Building the future of business with tech.
            </p>

            {/* Social Media Icons */}
            <motion.div variants={itemVariants}>
              <p className="mb-2 leading-relaxed text-sm md:text-base max-w-xs">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  {
                    href: "https://www.linkedin.com/company/techxicon360",
                    icon: <FaLinkedinIn />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.instagram.com/techxicon360/",
                    icon: <FaInstagram />,
                    label: "Instagram",
                  },
                  {
                    href: "https://www.facebook.com/techxicon360/",
                    icon: <FaFacebookF />,
                    label: "Facebook",
                  },
                  {
                    href: "https://twitter.com/techxicon360",
                    icon: <FaYoutube />,
                    label: "YouTube",
                  },
                  {
                    href: "https://twitter.com/techxicon360",
                    icon: <FaXTwitter />,
                    label: "X/Twitter",
                  },
                ].map(({ href, icon, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#442AC6] hover:bg-[#9854FF] hover:text-white transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          <motion.div 
            className="flex flex-wrap justify-between gap-8 md:gap-10 w-full lg:w-2/3"
            variants={itemVariants}
          >
            {/* Company Links */}
            <motion.div variants={itemVariants} className="w-full sm:w-auto">
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:block after:h-[2px] after:bg-[#9854FF] after:w-[70%]">
                Company
              </h3>
              <ul className="space-y-3 text-sm md:text-base font-light">
                {['Home', 'About Us', 'Services', 'FAQs', 'Free Consultation'].map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <a 
                      href="#" 
                      className="hover:underline block transition-colors duration-200 hover:text-[#9854FF]"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants} className="w-full sm:w-auto">
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:block after:h-[2px] after:bg-[#9854FF] after:w-[80%]">
                Services
              </h3>
              <ul className="space-y-3 text-sm md:text-base font-light">
                {[
                  'Digital Marketing',
                  'Web Development',
                  'App Development',
                  'Software Solutions',
                  'E-commerce Solutions'
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <a 
                      href="#" 
                      // className="hover:underline block transition-colors duration-200 hover:text-[#9854FF]"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Industries Links */}
            <motion.div variants={itemVariants} className="w-full sm:w-auto">
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:block after:h-[2px] after:bg-[#9854FF] after:w-[40%]">
                Industries we serve
              </h3>
              <ul className="space-y-3 text-sm md:text-base font-light">
                {[
                  'E-commerce & Retail',
                  'Healthcare & Wellness',
                  'Education',
                  'Real Estate',
                  'Entertainment and Media'
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <a 
                      href="#" 
                      // className="hover:underline block transition-colors duration-200 hover:text-[#9854FF]"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;