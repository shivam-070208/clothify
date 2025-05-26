"use client";
import React from 'react'
 import Intro from '@/component/Intro';
 import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const page = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll();
      // Optionally, clean up on unmount
      return () => {
        if (scroll && scroll.destroy) scroll.destroy();
      };
    }
  }, []);

  return (
    <div>
      <div data-scroll data-scroll-speed='0.04' className='w-screen fixed  h-screen z-[-1]'>
        <Intro />
      </div>
      <div className='w-[98vw] ml-[0.5vw] absolute top-[100%] h-screen bg-white rounded-t-xl pointer-events-none'> </div>
      
    </div>
  )
}

export default page
