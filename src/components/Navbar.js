'use client';

import React, { useState, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaMoon, FaSun
} from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { FaBars } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";

import { ThemeContext } from '@/app/context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#' },
  { name: "FAQ's", href: "#faqs" },
  { name: 'Free Consultation', href: '#contact' }
];

const serviceDropdown = [
  { name: 'Visual Designing', href: '/visual-designing' },
  { name: 'App Development', href: '/development' },
  { name: 'Software Solutions', href: '/software-development' },
  { name: 'E-commerce Solutions', href: '/ecommerce' },
  { name: 'Digital Marketing', href: '/digital-marketing' },
];

const industriesDropdown = [
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Education', href: '/industries/education' },
  { name: 'Real Estate', href: '/industries/real-estate' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Retail', href: '/industries/retail' },
]; 
const socialLinks = [
  { name: 'Facebook', href: 'https://web.facebook.com/techxicon360' },
  { name: 'Twitter', href: 'https://twitter.com/techxicon360' },
  { name: 'Instagram', href: 'https://www.instagram.com/techxicon.official/' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
];
const contact = () => {
  window.location.href = '#contact';
}


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const router = useRouter();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  // Helper to handle anchor navigation from any page
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (pathname === '/' || pathname === '/home') {
        // Already on landing page, just scroll
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = href;
        }
      } else {
        // Not on landing page, go to landing page with hash
        router.push('/' + href);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-20 z-50 shadow-lg bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        <Link href="#home">
          <Image
            src="/logoo.png"
            alt="logo"
            width={150}
            height={150}
            className="object-cover"
          />
        </Link>

        <ul className="hidden lg:flex gap-12 text-[#000000]  dark:text-white font-light relative font-poppins">
          {navLinks.map((link, i) => {
            if (link.name === 'Services') {
              return (
                <li
                  key={i}
                  className="relative group  hover:text-[#9854FF] dark:hover:text-[#9854FF] text-[#000000] dark:text-white"
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:scale-105 transition ">
                    <Link href={link.href} onClick={e => handleNavClick(e, link.href)}>{link.name}</Link>
                    <FiChevronDown className="text-sm mt-1" />
                  </div>
                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-md rounded-lg py-2 w-48 text-sm"
                      >
                        {serviceDropdown.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-[#000000] dark:hover:text-[#9854FF] hover:text-[#9854FF] font-poppins font-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            }
            
            if (link.name === 'Industries') {
              return (
                <li
                  key={i}
                  className="relative group"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:scale-105 transition hover:text-[#9854FF]">
                    <Link href={link.href} onClick={e => handleNavClick(e, link.href)}>{link.name}</Link>
                    <FiChevronDown className="text-sm mt-1" />
                  </div>
                  <AnimatePresence>
                    {industriesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-md rounded-lg py-2 w-48 text-sm"
                      >
                        {industriesDropdown.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-[#000000] dark:hover:text-[#9854FF] hover:text-[#9854FF] font-poppins font-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <motion.li key={i} whileHover={{ scale: 1.1 }}>
                <Link className='text-[#000000] dark:text-white dark:hover:text-[#9854FF] hover:text-[#9854FF]'
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                >
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>


        {/* Social Links */}


        <ul className="hidden lg:flex gap-3">
  {socialLinks.map((platform, i) => (
    <motion.li key={i} whileHover={{ scale: 1.15, rotate: 10 }}>
      <a
        href={platform.href}
        target="_blank"
        rel="noreferrer"
        className="w-8 h-8 grid place-items-center text-white bg-[#9854FF] rounded-full"
        aria-label={platform.name}
      >
        {platform.name === 'Facebook' && <FaFacebookF />}
        {platform.name === 'Twitter' && <FaXTwitter />}
        {platform.name === 'Instagram' && <FaInstagram />}
        {platform.name === 'LinkedIn' && <FaLinkedinIn />}
      </a>
    </motion.li>
  ))}

          <li>
            <button
              onClick={toggleTheme}
              className="text-xl ml-4 text-[#9854FF] dark:text-white hover:scale-110 transition"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </li>
        </ul>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-3xl text-[#9854FF]"
          >
            {navOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 right-0 w-64 bg-[#003347] dark:bg-gray-800 text-white shadow-lg flex flex-col lg:hidden z-40"
          >
            {navLinks.map((link, i) => {
              if (link.name === 'Services') {
                return (
                  <React.Fragment key={i}>
                    <motion.li
                      className="h-16 flex items-center justify-between px-6 border-b border-white/10 hover:bg-[#003347]/80"
                      onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                    >
                      <span>{link.name}</span>
                      <FiChevronDown />
                    </motion.li>
                    <AnimatePresence>
                      {mobileServiceOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[#002636]"
                        >
                          {serviceDropdown.map((item, index) => (
                            <li
                              key={index}
                              className="px-8 py-3 border-b border-white/10 hover:bg-[#003347]/80"
                            >
                              <Link href={item.href}>{item.name}</Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              }

              if (link.name === 'Industries') {
                return (
                  <React.Fragment key={i}>
                    <motion.li
                      className="h-16 flex items-center justify-between px-6 border-b border-white/10 hover:bg-[#003347]/80"
                      onClick={() =>
                        setMobileIndustriesOpen(!mobileIndustriesOpen)
                      }
                    >
                      <span>{link.name}</span>
                      <FiChevronDown />
                    </motion.li>
                    <AnimatePresence>
                      {mobileIndustriesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[#002636]"
                        >
                          {industriesDropdown.map((item, index) => (
                            <li
                              key={index}
                              className="px-8 py-3 border-b border-white/10 hover:bg-[#003347]/80"
                            >
                              <Link href={item.href}>{item.name}</Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              }

              return (
                <motion.li
                  key={i}
                  className="h-16 flex items-center px-6 border-b border-white/10 hover:bg-[#003347]/80"
                >
                  <Link href={link.href} onClick={e => handleNavClick(e, link.href)}>{link.name}</Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
