'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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

    return (
        <div>
            <Navbar />
            <div className='p-6 md:p-25 relative'>

                {/* HEADING SECTION */}
                <div className='flex items-center p-6 md:p-9 flex-col md:flex-row md:gap-13 gap-5'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-start gap-2 relative"
                    >
                        <div className='space-y-2 md:w-full w-full relative'>
                            <h1 className='heading text-[#442AC6] text-[30px] relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[89%] after:mt-1'>
                                Software Solutions
                            </h1>
                            <p className='poppins-400 text-[#494949] text-[14px] font-Poppins leading-relaxed'>Whether it’s a CRM, ERP, or a custom-built application, our solutions are scalable, secure, and tailored to your business goals. Empower your business with our innovative software solutions.
                            </p>
                            <button className='poppins-400 bg-gradient-to-r from-[#9854FF] to-[#442AC6] text-white md:px-9 md:py-2 px-4 py-2 items-center rounded-[6px] text-sm outline-none md:text-lg'>Let’s Connect</button>
                        </div>
                    </motion.div>

                    <div className='gap-2 relative w-80 h-80'>
                        <Image 
                            src="/software.png" 
                            alt="software solution" 
                            fill 
                            style={{ objectFit: 'contain' }} 
                            priority
                        />
                    </div>
                </div>

                {/* SERVICES DETAILS */}
                <div className='bg-[#FCFAFF] rounded-3xl px-6 md:px-25 py-22 lg:max-w-screen'>
                    <div className='flex flex-col gap-9 md:flex-row md:gap-20'>
                        <div className='flex-1 space-y-6'>
                            {servicesLeft.map((service, i) => (
                                <div key={i} className='space-y-3'>
                                    <h2 className='heading font-Comfortaa font-bold text-[#2B2933] text-[19px]'>{service.title}</h2>
                                    <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'>{service.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex-1 space-y-6'>
                            {servicesRight.map((service, i) => (
                                <div key={i} className='space-y-3'>
                                    <h2 className='heading text-[#2B2933] text-lg font-bold font-Comfortaa'>{service.title}</h2>
                                    <p className='poppins-400 text-[#494949] text-base'>{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WHY CHOOSE US */}
                <div className='flex flex-col md:flex-row items-center gap-15 md:w-[1138px] h-[auto] relative my-15'>
                    <div className='relative md:w-[298px] md:h-[279px] sm:w-xl h-auto'>
                        <Image 
                            src="/custom.png" 
                            alt="Solution" 
                            fill 
                            style={{ objectFit: 'contain' }} 
                            priority
                        />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='poppins-500 text-[24px] font-bold font-poppins text-black'>Why Choose TechXicon for Software Solutions?</h1>
                        <ul className="list-inside text-[#494949] font-semibold space-y-4">
                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">1. Custom Solutions:</h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins px-3'>
                                    We create software specifically for your business, making sure it meets your exact needs and goals.
                                </p>
                            </li>

                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">2. Scalability & Flexibility:</h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins px-3'>
                                    Our software grows with your business, easily adapting to new needs and users in the future
                                </p>
                            </li>
                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">3. Easy Integration:</h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins px-3'>
                                    We make sure our software works smoothly with your current systems, improving efficiency and reducing disruptions
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
