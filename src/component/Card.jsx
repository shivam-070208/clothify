import React from "react";

const Card = ({ prop,si }) => {
  return (
    <div className="w-full h-full relative bg-[#ebebebcb] rounded-xl shadow-black shadow-2 mb-9">
      <div className="w-full h-1/2">
        <img onClick={()=>{
            si(prop.Path)
        }}
          src={prop.img}
          className="w-full rounded-t-xl h-full"
          alt="rahul"
        />
      </div>
      <div className="w-full h-1/2 ">
        <h1 className="w-full p-3 bg-blue-600 text-white font-extrabold uppercase font-sans">
          {prop.Tittle}
        </h1>
        <p className="line-clamp-4 p-3 font-bold font- leading-4">{prop.Content}</p>
        <div className="w-full absolute bottom-0 flex justify-between p-2 gap-3 bg-blue-600 rounded-b-xl text-white ">
          <span className="font-bold font-sans">{prop.price}%</span>
          <button className="bg-white text-blue-600 rounded-full px-2 font-bold font-sans cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
