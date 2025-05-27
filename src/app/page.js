"use client";
import React from 'react'
 import Intro from '@/component/Heroic';
 import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import Introhomepage from '@/component/Introhomepage';
import *as Cherryglsl  from 'cheryglsljs';
import Whytochooseus from '@/component/Whytochooseus';
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
      <div data-scroll data-scroll-speed='0.004' className='w-screen fixed  h-screen z-[-1]'>
        <Intro Cherryglsl={Cherryglsl} />
      </div>
      <div className='w-[100vw]  absolute top-[100%] bg-white  rounded-t-xl '>
        <Introhomepage Cherryglsl={Cherryglsl} />
        <Whytochooseus />
      </div>

    </div>
  )
}

export default page
