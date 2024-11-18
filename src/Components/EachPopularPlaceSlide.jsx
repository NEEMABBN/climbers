import React from "react";

export default function EachPopularPlaceSlide({ image, city, province }) {
  return (
    <div className="w-[300px] flex relative rounded-2xl overflow-hidden">
      <img src={image} alt="" className="w-full" />
      <div className="w-full flex items-center justify-start py-3.5 px-3 gap-1 absolute bg-[#00000066] rounded-2xl bottom-0 right-0 left-0">
        <span className="text-white">{city}</span>
        <span className="text-white">/</span>
        <span className="text-white">{province}</span>
      </div>
    </div>
  );
}
