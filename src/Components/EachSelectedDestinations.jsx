import React from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function EachSelectedDestinations({
  image,
  imageAlt,
  locationName,
  activeTour,
  isButton = true,
}) {
  return (
    <div className="w-full flex flex-col items-center hover:shadow-lg gap-2 transition-all duration-300 bg-white rounded-2xl border-solid border-[1px] border-Borders p-1">
      <img src={image} alt={imageAlt} className="rounded-2xl w-full" />
      <div className="w-full flex items-center justify-between px-1 py-2">
        <div className="flex items-center">
          <span className="text-Secoundray text-SubTitle">{locationName}</span>
          <span className="text-Disable text-sm">{activeTour}</span>
        </div>
        <button className="text-Primary text-sm flex items-center gap-1">
          {isButton && <span>نمایش تورها</span>}
          <FaAngleLeft className="text-xl" />
        </button>
      </div>
    </div>
  );
}
