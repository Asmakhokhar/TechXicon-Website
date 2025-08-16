"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

export default function Page() {
  return (
    <>
      <Navbar />
      <div className='mt-20 mb-20 pb-20'>
      <Team />
      </div>
      <Footer />
    </>
  );
}
