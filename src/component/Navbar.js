"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';


const Navbar = () => {
  const spanRefs = useRef([]);
  const containerRef = useRef([]);

  useEffect(() => {
    spanRefs.current.forEach((item) => {
      if (!item) return;
      // Prevent double splitting
      if (item.dataset.splitted) return;
      const text = item.innerText;
      const splitText = text.split("");
      item.innerText = "";
      splitText.forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.classList.add('spannedchar');
        item.appendChild(span);
      });
      item.dataset.splitted = "true";
    });
  }, []);

  const onMouseEnter = (e) => {
    const item = e.currentTarget;
    const span1 = item.children[0];
    const spanschar1 = span1.querySelectorAll('.spannedchar');
    const span2 = item.children[1];

    spanschar1.forEach((span, i) => {
      gsap.to(span, {
        position: 'relative',
        delay: i * 0.09,
        bottom: '100%',
        ease: 'power2.out',
        stagger: 0.8
      });
    });
    const spanschar2 = span2.querySelectorAll('.spannedchar');
    spanschar2.forEach((span, i) => {
      gsap.to(span, {
         position:"relative",
        delay: i * 0.09,
        bottom: 'max(1.3vw,13px)',
        ease: 'power2.out',
      });
    });
  };

  const onMouseLeave = (e) => {
    const item = e.currentTarget;
    const span1 = item.children[0];
    const spanschar1 = span1.querySelectorAll('.spannedchar');
    const span2 = item.children[1];
    spanschar1.forEach((span, i) => {
      gsap.to(span, {
        delay: i * 0.09,
        bottom: '0%',
        ease: 'power2.out',
        stagger: 0.8
      });
    });
    const spanschar2 = span2.querySelectorAll('.spannedchar');
    spanschar2.forEach((span, i) => {
      gsap.to(span, {
        delay: i * 0.09,
        position:"relative",
        bottom: '0px',
        ease: 'power2.out'
      });
    });
  };

  return (
    <div className='w-screen z-[100] fixed bg-[#11111198]  p-2 pr-5 pt-4 flex justify-between'>
      <div className='text-[max(1.8vw,17px)] font-bold text-white font-stretch-50% font-serif uppercase'>Clothify</div>
    <div className='flex gap-4 max-[450px]:hidden'>
   {["Home","About","ShowCase","Contact"].map((item, index) => (
        <Link href={item =="Home"?'/':`/${item.toLowerCase()}`}  key={index} className='flex items-center'>
          <div
            onMouseEnter={onMouseEnter}
            ref={el => { if (el) containerRef.current[index + 1] = el; }}
            onMouseLeave={onMouseLeave}
            className='text-[max(1.2vw,12px)] h-[max(1.4vw,14px)] overflow-hidden relative text-white font-stretch-50% font-serif uppercase cursor-pointer'
          >
            <span ref={el => { if (el) spanRefs.current[index * 2] = el; }} className='font-bold'>{item}</span>
            <span ref={el => { if (el) spanRefs.current[index * 2 + 1] = el; }} className='absolute top-[max(1.2vw,12px)] font-bold left-0'>{item}</span>
          </div>
        </Link>
      ))}
     </div>
    </div>
  );
};

export default Navbar;
