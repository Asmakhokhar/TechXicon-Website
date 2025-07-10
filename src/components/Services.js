'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: "Digital Marketing",
    description: "We help businesses grow online by using effective strategies like social media, search engine optimization, and paid ads to reach more customers and boost sales.",
    icon: <Image src="/digital.png" alt="Digital Marketing Icon" width={102} height={102} className="mx-auto" />,
  },
  {
    title: "Visual Designing",
    description: "Our creative designs make your brand stand out. We create eye-catching visuals like logos, graphics, and promotional materials to give your business a unique identity.",
    icon: <Image src="/visual.png" alt="Visual Designing Icon" width={102} height={102} className="mx-auto" />,
  },
  {
    title: "Web Development",
    description: "We build user-friendly, responsive websites that work across all devices. Our websites are designed to provide a smooth experience for your customers while enhancing your online presence.",
    icon: <Image src="/web.png" alt="Web Development Icon" width={102} height={102} className="mx-auto" />,
  },
  {
    title: "App Development",
    description: "We develop fast and secure mobile applications tailored to your business goals, helping you stay connected with customers on-the-go.",
    icon: <Image src="/mobile.png" alt="App Development Icon" width={102} height={102} className="mx-auto" />,
  },
  {
    title: "Software Solutions",
    description: "Our Customize software solutions simplify your business processes, improve efficiency, and help you manage operations with ease, ensuring long-term success.",
    icon: <Image src="/soft.png" alt="SEO Services Icon" width={102} height={102} className="mx-auto" />,
  },
  {
    title: "E-Commerce Solutions",
    description: "We provide end-to-end e-commerce solutions, from building online stores to integrating payment systems, ensuring your business thrives in the digital marketplace.",
    icon: <Image src="/ecomerce.png" alt="Content Writing Icon" width={102} height={102} className="mx-auto" />,
     href: '/ecommerce'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  }),
};




export default function CustomServices() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (index + itemsPerPage < services.length) {
      setIndex(index + itemsPerPage);
    } else {
      setIndex(0);
    }
  };

  const handlePrev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    } else {

      const lastPageStartIndex = Math.floor((services.length - 1) / itemsPerPage) * itemsPerPage;
      setIndex(lastPageStartIndex);
    }
  };

  const visibleServices = services.slice(index, index + itemsPerPage);

  return (
    <section className="relative overflow-hidden md:px-20 z-10" id='services'>
      <div className="absolute inset-0 -z-10">
        <div className="h-2/3 bg-white dark:bg-slate-900"></div>
        <div className="h-1/3 bg-[#F4F4F4] dark:bg-slate-800"></div>
      </div>


    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">

        {/* Header */}

       
        <div className="max-w-4xl mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-black dark:text-white font-semibold relative inline-block after:block after:h-[3px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[90%]">
              Our Custom
            </span>{' '}
            <span className="text-[#4f2cd0] font-semibold">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-slate-200 mb-6"
          >
            TechXicon is here to support your business every step of the way. 
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-[#fdfdfd]"
          >
            We provide effective and sales-driven business solutions to help our clients grow. With a strong commitment to honesty, integrity, and dedication, we help businesses reach new heights and uncover new opportunities for their success.
          </motion.p>
        </div>


      <div className="relative">


          {services.length > itemsPerPage && (
            <div className="flex justify-end gap-4 mb-6">
              <button
                onClick={handlePrev}
                className="bg-white dark:bg-slate-900 dark:border dark:border-[#4f2cd0] text-[#4f2cd0] p-2 rounded-full shadow-md hover:bg-[#00cfde] hover:text-white transition-all"
                aria-label="Previous services"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="bg-white  dark:bg-slate-900 dark:border dark:border-[#4f2cd0] text-[#4f2cd0] p-2 rounded-full shadow-md hover:bg-[#00cfde] hover:text-white transition-all"
                aria-label="Next services"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}


        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-4 xl:gap-3">
          {visibleServices.map((service, i) => (
            <motion.div
              key={`${service.title}-${index}`}
              className="relative bg-white dark:bg-transparent dark:border dark:border-[#4f2cd0] rounded-xl shadow-md hover:shadow-lg transition-all px-4 sm:px-5 lg:px-6 py-6 flex flex-col
                w-full max-w-[400px]
                sm:w-[calc(50%-12px)] sm:max-w-none
                lg:w-[calc(33.333%-20px)] 
                xl:w-[332px]
                min-h-[380px] sm:h-[380px]"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="absolute top-2 right-3 text-gray-200 text-4xl font-bold opacity-20 select-none">
                {index + i + 1}
              </div>
              <div className="mb-2 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[20px] font-semibold text-center mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-[14px] lg:text-[15px] text-gray-600 dark:text-gray-400 mb-5 flex-grow">
                {service.description}
              </p>
              <button  className="mt-auto self-center border border-[#000000] dark:border-[#4f2cd0] text-gray-700 dark:text-[#4f2cd0] dark:hover:text-white px-4 sm:px-5 py-1 rounded-md hover:bg-[#4f2cd0] hover:text-white hover:border-[#4f2cd0] transition-colors text-sm sm:text-base">
                Read More &gt;&gt;
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>

  );
}