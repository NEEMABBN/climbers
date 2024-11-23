import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import DetailButton from "./DetailButton";

export default function EachTeamsPost({
  image,
  imageAlt,
  name,
  workArea,
  experience,
  trips,
  origin,
  rate,
}) {
  return (
    <div className="w-full flex flex-col items-center gap-2.5 border-solid border-[1px] bg-white border-Borders rounded-2xl p-3.5 hover:shadow-xl transition-all duration-200">
      <div className="w-full flex sm:flex-row flex-col items-center justify-between">
        <div className="flex items-center gap-3 sm:w-auto w-full">
          <img src={image} alt={imageAlt} className="w-[53px]" />
          <div className="flex flex-col items-start gap-1">
            <span className="text-Secoundray YekanReg text-SubTitle font-semibold">
              {name}
            </span>
            <p className="text-Secoundray text-sm line-clamp-1">{workArea}</p>
          </div>
        </div>
        <div className="sm:flex grid grid-cols-3 items-start sm:gap-3 sm:w-auto w-full">
          <div className="flex flex-col items-center gap-1">
            <span className="text-Disable text-sm">تجربه:</span>
            <span className="text-Secoundray">{experience} سال</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-solid border-x-[1px] border-Borders sm:px-3">
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
        <div className="flex items-center sm:gap-7 gap-4">
          <button className="bg-Borders p-2 rounded-full">
            <FaRegHeart className="text-Secoundray sm:text-xl text-lg" />
          </button>
          <span className="flex items-center text-sm gap-1">
            {rate}
            <GoStarFill className="text-[#F2CB00] text-base" />
          </span>
        </div>
        <DetailButton />
      </div>
    </div>
  );
}
