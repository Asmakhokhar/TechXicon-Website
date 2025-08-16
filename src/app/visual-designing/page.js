'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function page() {
    const servicesLeft = [
        {
            title: "Custom Graphic Design Solutions:",
            desc: "We create custom graphic designs that match your brand’s vision. From logos to marketing materials, we deliver unique designs that make a strong impression."
        },
        {
            title: "Creative Branding & Identity Design:",
            desc: "TechXicon360 specializes in creating strong brand identities with eye-catching designs. From logos to brand guidelines, we build cohesive visuals that create a memorable and professional brand image."
        },
        {
            title: "Marketing & Promotional Materials:",
            desc: "Our graphic design experts develop eye-catching marketing materials like brochures, flyers, banners, and social media content. We focus on delivering designs that capture attention and drive engagement, enhancing your brand’s reach."
        },
        
    ];

    const servicesRight = [
        {
            title: "Packaging & Product Design:",
            desc: "We create standout packaging and product designs that match your brand. Our designs grab attention and connect with your audience."
        },
        {
            title: "Visual Content for Digital Platforms:",
            desc: "TechXicon creates high-quality visual content for websites, social media, and marketing, including infographics and banner ads, to boost engagement and maintain brand consistency."
        },
        {
            title: "Illustration & Icon Design",
            desc: "We create custom illustrations and icons that enhance user interfaces and marketing materials, ensuring consistency and visual appeal across all platforms."
        },
        
    ];

    const processSteps = [
        {
            title: "Understanding Your Goals",
            desc: "We start by learning about your business, target audience, and project objectives. This helps us design experiences that align perfectly with your vision and "
        },
        {
            title: " Research and Strategy",
            desc: "Our team conducts detailed research on your industry, competitors, and audience behavior. We create a clear strategy to ensure the design is effective and user-focused."
        },
        {
            title: " Wireframing and Prototyping",
            desc: "We develop wireframes and prototypes to visualize the layout and functionality of your design. This step ensures you have a clear preview of the final product before development begins."
        },
              
    ];
    const processSteps2 = [
        {
            title: "Design and Testing",
            desc: "Our designers create engaging, responsive designs while focusing on usability. We perform rigorous testing to ensure the design is intuitive, accessible, and meets user expectations."
        },
        {
            title: "Launch and Ongoing Support",
            desc: "Once the design is finalized, we launch it across all devices and ensure everything runs smoothly. We also provide ongoing support and updates to keep your design functional and relevant as your business grows."
        },
      
              
    ];

    return (
        <>
<Navbar/>
            <div className=' p-6 md:p-25 relative flex justify-center items-center flex-col'>


                <div className='mt-8 flex items-center p-6 md:p-9 flex-col md:flex-row md:gap-13 gap-5'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-start gap-2 relative"
                    >
                        <div className=' space-y-2 md:w-full w-full relative'>
                            <h1 className='heading text-[#442AC6] text-[30px] relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[89%] after:mt-1'>
                                Visual Designing
                            </h1>
                            <p className='poppins-400 text-[#494949] text-[14px] font-Poppins leading-relaxed'>In today’s digital age, visual design is more than just aesthetics. It’s about creating an immersive experience that speaks to your audience.
                                At TechXicon, our visual design team crafts stunning visuals that not only capture attention but also tell your brand’s story.
                            </p>
                            <button className='poppins-400 bg-gradient-to-r from-[#9854FF] to-[#442AC6] text-white md:px-9 md:py-2 px-4 py-2 items-center rounded-[6px] text-sm outline-none md:text-lg'>Let’s Connect</button>
                        </div>
                    </motion.div>

                     <div className='gap-2'>
                    <img
                        src='/-_Graphics.png'
                        alt='app development'
                        className='w-[300px] h-[250px] md:w-[500px] md:h-[400px] lg:w-[750px] lg:h-[280px]'
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
                <div className='flex flex-col md:flex-row items-center gap-6 md:w-[1138px] h-[auto] relative'>
                    <img src='/ux.png' alt='ux' className='md:w-[385px] md:h-[400px] object-contain'  />
                    <div className='space-y-4 mt-10'>
                        <h1 className='heading text-[#442AC6] text-[30px] relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[100%] after:mt-1'>UI/UX Design</h1>
                        <ul className="list-inside text-[#494949] font-semibold space-y-4">
                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">Design Strategy & Planning:</h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins'>
                                    We work with you to set clear design goals by understanding your business and user needs to build an effective strategy.
                                </p>
                            </li>

                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">Wireframes & Prototypes:</h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins'>
                                    We create wireframes and interactive prototypes so you can preview and adjust your product’s layout early in the process.
                                </p>
                            </li>
                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">Visual UI Design:</h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins'>
                                    We design eye-catching user interfaces that align with your brand and attract your target audience, selecting the right colors, fonts, and visuals.
                                </p>
                            </li>
                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">Responsive Design:</h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins'>
                                    We ensure your product looks great and functions smoothly across all devices, from desktop computers to smartphones.
                                </p>
                            </li>

                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">Interactive Features:</h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins'>
                                    We incorporate animations and interactive elements to make your product engaging and user-friendly.
                                    UI Performance Optimization: We enhance your design for faster loading and smooth operation on web and mobile platforms.
                                </p>
                            </li>
                            <li>
                                <h3 className="poppins-500 font-semibold text-[#000000] text-[17px]">User Testing & Feedback: </h3>
                                <p className='poppins-400 text-[#494949] text-[16px] font-normal font-poppins'>
                                    We test your product with real users to identify and fix any issues, ensuring a seamless and intuitive experience.
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>

                {/* OUR WORKING PROCESS */}
            <div className='space-y-8 mt-10 '>
                <h2 className="poppins-400 text-3xl ml-10 font-medium text-[#2B2933] font-poppins relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[86%] after:mt-2">
                    Our Working Process
                </h2>

                <div className='flex flex-col justify-center items-center gap-5'>

                    {/* First Row */}
                    <div className='w-full flex flex-row justify-center '>
                        <div className='w-full max-w-[1305px] px-4 flex items-center justify-center flex-row'>
                            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'
                            >
                                {processSteps.map((step, i) => (
                                    <div key={i} className='border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition xl:w-[281px]'>
                                        <div className='bg-[#F8F1FF] flex items-center justify-center px-6 py-4 rounded-xl h-1/3'>
                                            <h3 className='poppins-500 text-lg font-semibold text-[#464646] text-center'>{step.title}</h3>
                                        </div>
                                        <div className='flex text-center items-center justify-center'>
                                            <p className='poppins-400 text-[#000000] text-[12px] font-semibold p-5 font-poppins'>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className='w-full flex flex-row justify-center'>
                        <div className='w-full max-w-[1305px] px-4 flex items-center justify-center flex-row'>
                            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 justify-center '>
                                {processSteps2.map((step, i) => (
                                    <div key={i} className='border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition xl:w-[281px]'>
                                        <div className='bg-[#F8F1FF] flex items-center justify-center px-6 py-4 rounded-xl h-1/3'>
                                            <h3 className='poppins-500 text-lg font-semibold text-[#464646] text-center'>{step.title}</h3>
                                        </div>
                                        <div className='flex text-center items-center justify-center'>
                                            <p className='poppins-400 text-[#000000] text-[12px] font-semibold p-5 font-poppins'>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>






            </div>

            </div>
            <Footer/>
        </>
    );
}
