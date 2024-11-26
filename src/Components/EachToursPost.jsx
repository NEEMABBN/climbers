import React from "react";
import { GoStarFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

export default function EachToursPost({
  image,
  imageAlt,
  categoryName,
  categoryIcon,
  categoryIconAlt,
  location,
  agency,
  rate,
  startDate,
  endDate,
  month,
  price,
  mb,
}) {
  return (
    <div
      className={`${mb} flex bg-white flex-col items-center gap-2 group p-1 border-solid border-[1px] rounded-2xl hover:shadow-xl transition-all duration-200`}
    >
      <div className="w-full relative rounded-2xl overflow-hidden">
        <div className="bg-CustomBlack overflow-hidden flex items-center justify-start w-[32px] group-hover:w-[95px] transition-all duration-300 gap-2 absolute top-2 right-2 rounded-full py-1 px-1.5">
          <img
            src={categoryIcon}
            alt={categoryIconAlt}
            className="!max-w-[20px] !min-w-[20px]"
          />
          <span className="text-white text-sm">{categoryName}</span>
        </div>
        <button className="bg-CustomBlack absolute top-2 left-2 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200">
          <FaRegHeart className="text-white text-xl" />
        </button>
        <img src={image} alt={imageAlt} className="w-full" />
      </div>

      <h3 className="w-full text-start text-SubTitle text-Secoundray px-2 line-clamp-1">
        {location}
      </h3>
      <div className="w-full flex items-center justify-between px-2">
        <span className="text-Disable text-sm line-clamp-1">{agency}</span>
        <span className="flex items-center gap-1 text-sm">
          {rate}
          <GoStarFill className="text-[#F2CB00] text-lg" />
        </span>
      </div>
      <div className="w-full flex items-center justify-between border-solid border-t-[1px] border-Borders py-1 px-2">
        <div className="flex items-center gap-1">
          <span className="flex items-center text-Secoundray text-SubTitle">
            {endDate}-{startDate}
          </span>
          <span className="text-Secoundray text-SubTitle">{month}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-Secoundray text-SubTitle">{price}</span>
          <span className="text-Disable text-sm">تومان</span>
        </div>
      </div>
    </div>
  );
}
