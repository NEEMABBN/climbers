import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

export default function EachProductPost({
  image,
  name,
  rate,
  category,
  price,
}) {
  return (
    <div className="flex flex-col items-center bg-white gap-2 p-2 rounded-2xl">
      <div className="w-full flex items-center justify-center relative rounded-2xl overflow-hidden">
        <button className="bg-CustomBlack absolute top-2 left-2 p-1.5 rounded-full">
          <FaRegHeart className="text-white text-xl" />
        </button>
        <div className="w-[300px] h-[200px] flex justify-center items-center">
          <img src={image} alt="" className="" />
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-2">
        <span className="text-Secoundray line-clamp-1 YekanReg font-semibold text-SubTitle">
          {name}
        </span>
        <span className="flex items-center gap-1 text-sm">
          {rate}
          <GoStarFill className="text-[#F2CB00] text-lg" />
        </span>
      </div>
      <div className="w-full flex items-center justify-between border-solid border-t-[1px] border-Borders py-1 px-2">
        <span className="text-Disable text-sm">{category}</span>
        <div className="flex items-center gap-1">
          <span className="text-Secoundray">{price}</span>
          <span className="text-Disable text-sm">تومان</span>
        </div>
      </div>
    </div>
  );
}
