"use client";
import React, {  useEffect } from 'react';
import *as Cherryglsl  from 'cheryglsljs';

const features = [
  {
    title: "Premium Fabrics",
    description: "Discover a curated selection of high-quality, comfortable, and durable fabrics sourced from trusted suppliers worldwide.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    bg: "bg-gradient-to-r from-blue-100 to-blue-300",
  },
  {
    title: "Sustainable Fashion",
    description: "We are committed to eco-friendly practices, using sustainable materials and packaging to reduce our environmental impact.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    bg: "bg-gradient-to-r from-green-100 to-green-300",
  },
  {
    title: "Trendy Collections",
    description: "Stay ahead of the trends with our regularly updated collections, featuring the latest styles for every season and occasion.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    bg: "bg-gradient-to-r from-pink-100 to-pink-300",
  },
  {
    title: "Customer First",
    description: "Enjoy seamless shopping with fast shipping, easy returns, and a dedicated support team ready to assist you anytime.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-300",
  },
];

const Whytochooseus = () => {
  const containerRef = React.useRef([]);
  useEffect(() => {
    containerRef.current.forEach((el, idx) => {
      if (el) {
       
        Cherryglsl.CherryWave({
          image: el.querySelector("img"),
          container: el,
          speed: 0.13,
          strength: 0.05,
          hover: window.matchMedia('(any-hover: hover)').matches,
          p:-5.8
          
        });
      }
    });
  },[containerRef]);
  return (
    <div className="w-full py-10 px-4 bg-white">
      <h2 className="text-[max(4vw,30px)] font-bold text-center mb-8 uppercase">Why Choose Clothify?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className={`rounded-xl shadow-lg overflow-hidden flex flex-col ${feature.bg} transition-transform hover:scale-105`}
          >
            <div ref={(el)=> containerRef.current.push(el)}  className="h-40 w-full object-cover">
            <img
              src={feature.image}
              alt={feature.title}
            
            />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 flex-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whytochooseus;
