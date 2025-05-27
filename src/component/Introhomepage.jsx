"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Introhomepage = ({ Cherryglsl }) => {
  const containerRef = React.useRef(null);
  const maincontainerRef = React.useRef([]);
  const buttonref = React.useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    maincontainerRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger: {
              trigger: el,

              start: 0,
              end: 150,
              toggleActions: "reset play", // Play every time triggered
            },
          }
        );
      }
    });
  }, [maincontainerRef]);
  useEffect(() => {
    const button = buttonref.current;
    const buttonInstance = button?.querySelector(".buttoninstance");
    if (!button || !buttonInstance) return;

    const handleMouseEnter = (e) => {
      gsap.to(buttonInstance, {
        position: "absolute",

        width: "400%",
        height: "400%",

        duration: 0.4,
        onComplete: () => {
          gsap.set(buttonInstance, {
            transform: "translate(-50%,-50%)",
            left: e.offsetX - 20,

            top: e.offsetY,
          });
        },
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonInstance, {
        width: "0.1px",
        height: "0.1px",
        duration: 0.3,
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on unmount
  }, []);
  useEffect(() => {
 
    if (typeof Cherryglsl !== "undefined" && containerRef.current) {
      Cherryglsl.ImageTransition2(containerRef.current, {
        time: true,
        speed: 2,
        x: -1,
        y: -1,
      });
    }
  }, []);
  return (
    <div className="w-full max-[680px]:columns-1 columns-2 bg-blue-600 rounded-t-xl">
      <div
        ref={(el) => maincontainerRef.current.push(el)}
        className=" w-full  pt-20  flex flex-col pl-9 pr-0  rounded-l-xl "
      >
        <h1 className="font-extrabold   text-[max(4vw,34px)] font-serif text-white leading-[max(3.3vw,28px)]">
          Bold Your <br /> Style Everyday
        </h1>
        <p className=" text-[max(1.2vw,14px)] mt-7 text-zinc-300  font-bold font-sans  min-[420px]:w-[50%] w-[90%] leading-[max(1vw,14px)]">
          Shop Our latest collection for everyday wear and standout
          looks,tailred to fit your lifestyles.{" "}
        </p>
        <span>
          <button
            ref={buttonref}
            className="mt-10 bg-white cursor-pointer relative  overflow-hidden  text-blue-600 px-5 py-2 rounded-full font-bold text-[max(1.2vw,14px)] z-[5]"
          >
            <div className="  cursor-pointer">Shop Now</div>
            <div className=" buttoninstance  absolute top-0 left-0  w-1 h-1 z-[-1] rounded-full  bg-[#d5d4cb]"></div>
          </button>
        </span>
      </div>
      <div
        ref={(el) => maincontainerRef.current.push(el)}
        className=" w-full rounded-r-xl h-[80vh] pt-2 pl-2 pr-2 pb-2"
      >
        <div className="w-full h-full relative" ref={containerRef}>
          <img
            src="introhomepage/i1.png"
            alt=""
            className="absolute right-0 top-0"
          />
          <img
            src="introhomepage/i2.png"
            alt=""
            className="absolute right-0 top-0"
          />
          <img
            src="introhomepage/i3.png"
            alt=""
            className="absolute right-0 top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Introhomepage;
