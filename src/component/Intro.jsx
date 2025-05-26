"use client"
import React, { useEffect, useRef } from 'react';
import Cherryglsl from 'cheryglsljs';


const Intro = () => {
   const assets = Cherryglsl
    const containerref = useRef(null)
    useEffect(()=>{
        assets.ImageTransition1(containerref.current,{
  
    radius:0.06,
    speed:0.03,
    strength:0.3,hover:false,
    noise:4,p:-1.0
});
      
    },[])
  return (
    <div className='sticky top-0 w-screen h-screen'>
      <div className='w-[100vw] h-[100vh] p-0' ref={containerref}>
        <img src="images/i0.jpg" className='w-screen h-screen bg-cover' alt="" />
           <img src="images/i1.jpg" className='w-screen h-screen bg-cover' alt="" />
              <img src="images/i2.jpg" className='w-screen h-screen bg-cover' alt="" />
                 <img src="images/i3.jpg" className='w-screen h-screen bg-cover' alt="" />
                    <img src="images/i4.jpg" className='w-screen h-screen bg-cover' alt="" />
      </div>
    </div>
  )
}

export default Intro
