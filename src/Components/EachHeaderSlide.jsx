import React from "react";
import { BsInfoSquareFill } from "react-icons/bs";

export default function EachHeaderSlide({ image, info }) {
  return (
    <div className="w-full flex relative rounded-2xl overflow-hidden">
      <img src={image} alt="" className="w-full" />
      <div className="absolute bottom-[1rem] right-[1rem] flex items-center gap-4 bg-[#000000C7] px-4 py-3 rounded-2xl">
        <BsInfoSquareFill className="text-white text-xl" />
        <span className="text-white">{info}</span>
      </div>
    </div>
  );
}
