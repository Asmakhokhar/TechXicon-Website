"use client";
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DynamicTeam = dynamic(() => import('@/components/Team'), {
  ssr: false
});

export default function Page() {
  return (
    <>
      <Navbar />
      <div className='mt-20 mb-10'>
        <DynamicTeam />
      </div>
      <Footer />
    </>
  );
}
