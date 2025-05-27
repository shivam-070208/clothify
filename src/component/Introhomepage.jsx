"use client"
import React, { useEffect } from 'react'

const Introhomepage = ({Cherryglsl}) => {
  const containerRef = React.useRef(null);
  useEffect(() => {
    console.log(Cherryglsl);
    if (typeof Cherryglsl !== 'undefined' && containerRef.current) {
      Cherryglsl.ImageTransition2(containerRef.current, {
      time:true,
      speed:2,
        x:-1,
        y:-1
      });
    }
  },[])
  return (
    <div className='w-full max-[680px]:columns-1 columns-2 bg-blue-600 rounded-t-xl'>
      <div className=' w-full  pt-20  flex flex-col pl-9 pr-0  rounded-l-xl '>
        <h1 className='font-extrabold   text-[max(4vw,34px)] font-serif text-white leading-[max(3.3vw,28px)]'>Bold Your <br /> Style Everyday</h1>
        <p className=' text-[max(1.2vw,14px)] mt-7 text-zinc-300  font-bold font-sans  min-[420px]:w-[50%] w-[90%] leading-[max(1vw,14px)]'>Shop Our latest collection for everyday wear and standout looks,tailred to fit your lifestyles. </p>
      <span>
       <button className='mt-10 bg-white  text-blue-600 px-5 py-2 rounded-full font-bold text-[max(1.2vw,14px)]'>Shop Now</button>
       </span>
      </div>
      <div className=' w-full rounded-r-xl h-[80vh] pt-2 pl-2 pr-2 pb-2'>
        <div className='w-full h-full' ref={containerRef}>
          <img src="introhomepage/i1.png" alt="" /><img src="introhomepage/i2.png" alt="" /><img src="introhomepage/i3.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Introhomepage
