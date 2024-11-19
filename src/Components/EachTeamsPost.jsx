import React from "react";
import { FaChevronLeft, FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

export default function EachTeamsPost({
  image,
  name,
  workArea,
  experience,
  trips,
  origin,
  rate,
}) {
  return (
    <div className="w-full flex flex-col items-center gap-2.5 border-solid border-[1px] bg-white border-Borders rounded-2xl p-3.5 hover:shadow-xl transition-all duration-200">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={image} alt="" className="" />
          <div className="flex flex-col items-start gap-1">
            <span className="text-Secoundray YekanReg font-semibold">
              {name}
            </span>
            <p className="text-Secoundray text-sm">{workArea}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center gap-1">
            <span className="text-Disable text-sm">تجربه:</span>
            <span className="text-Secoundray">{experience} سال</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-solid border-x-[1px] border-Borders px-3">
            <span className="text-Disable text-sm">تعداد سفر:</span>
            <span className="text-Secoundray">{trips}+</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-Disable text-sm">شهر مبدا:</span>
            <span className="text-Secoundray">{origin}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between border-solid border-t-[1px] border-Borders py-2">
        <div className="flex items-center gap-7">
          <button className="bg-Borders p-2 rounded-full">
            <FaRegHeart className="text-Secoundray text-xl" />
          </button>
          <span className="flex items-center text-sm gap-1">
            {rate}
            <GoStarFill className="text-[#F2CB00] text-base" />
          </span>
        </div>
        <button className="text-Primary flex items-center gap-4">
          مشاهده جزئیات
          <FaChevronLeft />
        </button>
      </div>
    </div>
  );
}
