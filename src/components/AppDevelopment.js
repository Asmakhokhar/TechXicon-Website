// 'use client';
// import React from 'react'
// import { motion } from 'framer-motion';

// export default function AppDevelopment() {

//     const servicesLeft = [
//         {
//             title: "2. Cross-Plateform App Development",
//             desc: `We develop powerful and responsive native apps tailored for iOS and Android to ensure a smooth, fast, and optimized user experience.
//             At Techxicon, we develop high-quality mobile apps for both iOS and Android using React Native and Flutter, allowing businesses to reach a wider audience with a single codebase. This approach reduces development time and costs while ensuring a smooth, native-like user experience. Our cross-platform solutions offer seamless performance, easy maintenance, and consistent Ul across all devices, making updates and enhancements faster and more efficient. With Techxicon's cross-platform development, you get a cost-effective, scalable, and feature-rich app that delivers maximum impact.`
//         },
//         {
//             title: "3. Hybrid App Development",
//             desc: "At Techxicon, we build cost-effective hybrid apps that combine web and native technologies for a smooth user experience. Using lonic and PhoneGap, we create apps that work across multiple platforms, are easy to deploy, and simple to maintain, ensuring a seamless experience for all users."
//         },
//         {
//             title: "4. UI/UX Design for Mobile Apps",
//             desc: "Our UI/UX experts design visually appealing, user-friendly, and engaging mobile interfaces. We focus on intuitive navigation, responsive layouts, and interactive elements to ensure a smooth and enjoyable user experience that keeps people coming back to your app."
//         },
//         {
//             title: "5. Mobile App Maintenance & Support",
//             desc: "Techxicon provides ongoing support to keep your app updated, secure, and optimized for the latest OS versions. Our services include performance monitoring, bug fixes, and security updates, ensuring your app runs smoothly at all times."
//         },
//         {
//             title: "6. Mobile Commerce Solutions",
//             desc: "We develop feature-rich mCommerce apps that deliver a seamless shopping experience. From secure payment gateways and product catalogs to user-friendly designs, our eCommerce apps help convert visitors into loyal customers while ensuring smooth transactions."
//         },
//         {
//             title: "7. App Store Deployment & Optimization",
//             desc: "We handle app submission for the Apple App Store and Google Play, ensuring your app meets all guidelines for a successful launch. Our App Store Optimization (ASO) strategies boost visibility, increase downloads, and improve app rankings."
//         },
//         {
//             title: "8. Wearable & ioT App Development",
//             desc: "Techxicon builds innovative apps for wearables and lot devices, enabling businesses to stay ahead in emerging technology trends. Our solutions are secure, scalable, and seamlessly integrated with smart devices, ensuring a connected experience."
//         },
//         {
//             title: "9. Scalable Enterprise App Development",
//             desc: "We create enterprise-grade mobile apps tailored to business needs, helping organizations improve efficiency, streamline processes, and enhance collaboration. Whether it's workforce management, analytics, or CRM solutions, our apps drive productivity and growth.."
//         }
//     ];

//     const processSteps = [
//         {
//             title: "Discovery & Planning",
//             desc: "We start by understanding your app idea, business needs, and target audience. Our team conducts in-depth research and creates a roadmap for development."
//         },
//         {
//             title: "UI/UX Design & Prototypingt",
//             desc: "Our design team crafts intuitive, visually appealing, and user-friendly interfaces. We develop wireframes and interactive prototypes to refine the app’s flow ."
//         },
//         {
//             title: "App Development",
//             desc: "Using the latest technologies, we build robust and scalable mobile apps. Whether it's native, cross-platform, or hybrid development, our team ensures top-notch functionality and smooth performance."
//         },

//     ];
//     const processSteps2 = [
//         {
//             title: "Testing & Quality Assurance",
//             desc: "We rigorously test the app for bugs, performance issues, and security vulnerabilities. Our testing process includes usability testing, device compatibility checks, and stress testing to ensure a flawless experience."
//         },
//         {
//             title: "Deployment & Launch",
//             desc: "Once the app is fully tested, we handle the submission process for the Apple App Store and Google Play Store, ensuring compliance with all guidelines for a successful launch."
//         },
//         {
//             title: "Post-Launch Support & Maintenancet",
//             desc: "We provide ongoing support, updates, and maintenance to keep your app optimized, secure, and aligned with the latest OS updates and user demands."
//         },

//     ];

//     return (
//         <div id = "app"  className=' p-6 md:p-25 relative'>
//             <div  className=' flex items-center p-6 md:p-9 flex-col md:flex-row md:gap-13 gap-5'>
//                 <motion.div
//                     initial={{ opacity: 0, x: -100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <div className=' space-y-2 md:w-full w-full relative'>
//                         <h1 className='heading text-[#442AC6] text-[30px] relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[89%] after:mt-1'>
//                             App Development
//                         </h1>
//                         <p className='poppins-400 text-[#494949] text-[14px] font-Poppins leading-relaxed'>At Techxicon, we create high-performance, user-friendly, and feature-packed mobile applications designed to enhance user engagement and deliver seamless experiences across all devices. Whether you need a native, hybrid, or cross-platform app, our team builds custom solutions that align with your business goals.

//                         </p>
//                         <button className='poppins-400 bg-gradient-to-r from-[#9854FF] to-[#442AC6] text-white md:px-9 md:py-2 px-4 py-2 items-center rounded-[6px] text-sm outline-none md:text-lg'>Let’s Connect</button>
//                     </div>
//                 </motion.div>

//                 <div className='gap-2'>
//                     <img
//                         src='app.jpg'
//                         alt='app development'
//                         className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[400px] object-cover border'
//                     />
//                 </div>
//         </div>

//             {/* SERVICES DETAILS */}
//             <div className='bg-[#FCFAFF] rounded-3xl px-6 md:px-25 py-22 lg:max-w-screen'>
//                 <div className='flex flex-col gap-9 md:flex-row md:gap-20'>
//                     <div className='flex-1 space-y-6'>
//                         <div className='space-y-3'>
//                             <h2 className='heading font-Comfortaa font-bold text-[#442AC6] text-[19px]'>1. Native App Deployment</h2>
//                             <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'>We develop powerful and responsive native apps tailored for iOS and Android to ensure a smooth, fast, and optimized user experience.</p>
//                             <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'><span className='text-[#000000] poppins-400'>iOS Development: </span> Using Swift and Objective-C, we build high-quality iOS apps that take full advantage of Apple's ecosystem.</p>
//                             <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'><span className='text-[#000000] poppins-400'>Android Development: </span> With Kotlin and Java, we create Android apps that are optimized for performance and compatibility across different devices.</p>
//             {/* SERVICES DETAILS */}
//             <div className='bg-[#FCFAFF] rounded-3xl px-6 md:px-25 py-22 lg:max-w-screen'>
//                 <div className='flex flex-col gap-9 md:flex-row md:gap-20'>
//                     <div className='flex-1 space-y-6'>
//                         <div className='space-y-3'>
//                             <h2 className='heading font-Comfortaa font-bold text-[#442AC6] text-[19px]'>1. Native App Deployment</h2>
//                             <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'>We develop powerful and responsive native apps tailored for iOS and Android to ensure a smooth, fast, and optimized user experience.</p>
//                             <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'><span className='text-[#000000] poppins-400'>iOS Development: </span> Using Swift and Objective-C, we build high-quality iOS apps that take full advantage of Apple's ecosystem.</p>
//                             <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'><span className='text-[#000000] poppins-400'>Android Development: </span> With Kotlin and Java, we create Android apps that are optimized for performance and compatibility across different devices.</p>
//                             <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'><span className='text-[#000000] poppins-400'>Superior User Experience: </span> Native apps provide faster performance, better security, and seamless integration with device-specific features.</p>
//                         </div>
//                         {servicesLeft.map((service, i) => (
//                             <div key={i} className='space-y-3'>
//                                 <h2 className='heading font-Comfortaa font-bold text-[#442AC6] text-[19px]'>{service.title}</h2>
//                                 <p className='poppins-400 text-[#494949] text-[16px] font-Poppins'>{service.desc}</p>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>


// <<<<<<< HEAD
// =======
//             {/* OUR WORKING PROCESS */}
// >>>>>>> 06f57ff098175d1fb68752dc48d6fbb1be794873
//             <div className='space-y-8 mt-10'>
//                 <h2 className="poppins-400 text-3xl ml-10 font-medium text-[#2B2933] font-poppins relative inline-block after:block after:h-[2px] after:bg-gradient-to-r after:from-[#9854FF] after:to-[#442AC6] after:w-[86%] after:mt-2">
//                     Our Working Process
//                 </h2>

//                 <div className='flex flex-col justify-center items-center gap-5'>

// <<<<<<< HEAD
// =======
//                     {/* First Row */}
// >>>>>>> 06f57ff098175d1fb68752dc48d6fbb1be794873
//                     <div className='w-full flex flex-row justify-center'>
//                         <div className='w-full max-w-[1305px] px-4 flex items-center justify-center flex-row'>
//                             <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'
//                             >
//                                 {processSteps.map((step, i) => (
//                                     <div key={i} className='border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition xl:w-[281px]'>
//                                         <div className='bg-[#F8F1FF] flex items-center justify-center px-6 py-4 rounded-xl h-1/3'>
//                                             <h3 className='poppins-500 text-lg font-semibold text-[#464646] text-center'>{step.title}</h3>
//                                         </div>
//                                         <div className='flex text-center items-center justify-center'>
//                                             <p className='poppins-400 text-[#000000] text-[12px] font-semibold p-5 font-poppins'>{step.desc}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

// <<<<<<< HEAD
// =======
//                     {/* Second Row */}
// >>>>>>> 06f57ff098175d1fb68752dc48d6fbb1be794873
//                     <div className='w-full flex flex-row justify-center'>
//                         <div className='w-full max-w-[1305px] px-4 flex items-center justify-center flex-row'>
//                             <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
//                                 {processSteps2.map((step, i) => (
//                                     <div key={i} className='border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition xl:w-[281px]'>
//                                         <div className='bg-[#F8F1FF] flex items-center justify-center px-6 py-4 rounded-xl h-1/3'>
//                                             <h3 className='poppins-500 text-lg font-semibold text-[#464646] text-center'>{step.title}</h3>
//                                         </div>
//                                         <div className='flex text-center items-center justify-center'>
//                                             <p className='poppins-400 text-[#000000] text-[12px] font-semibold p-5 font-poppins'>{step.desc}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                 </div>






//             </div>

//         </div>
//     );
// }

