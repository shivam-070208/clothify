import React from "react";

const Card = ({ prop }) => {
  return (
    <div className="w-full h-full bg-[#ebebebcb] rounded-xl shadow-black shadow-2 mb-9">
      <div className="w-full h-1/2">
        <img
          src={prop.img}
          className="w-full rounded-t-xl h-full"
          alt="rahul"
        />
      </div>
      <div className="w-full h-1/2 ">
        <h1 className="w-full p-3 bg-blue-600 text-white font-extrabold uppercase font-sans">
          {prop.Tittle}
        </h1>
        <p className="line-clamp-4 p-3">{prop.Content}</p>
        <div className="w-full flex justify-between p-2 gap-3 bg-blue-600 rounded-b-xl text-white ">
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
