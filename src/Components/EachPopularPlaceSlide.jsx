import React from "react";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

export default function EachPopularPlaceSlide({
  image,
  imageAlt,
  location,
  province,
  version1,
  version2,
  categoryIcon,
  categoryIconAlt,
  categoryName,
  user,
  rate,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="w-full flex relative z-[2] rounded-2xl overflow-hidden group"
    >
      <div
        className={`${
          version2 ? "flex" : "hidden"
        } bg-CustomBlack overflow-hidden items-center justify-start w-[30px] group-hover:w-[90px] transition-all duration-300 gap-2 absolute top-2 right-2 rounded-full py-1 px-1.5`}
      >
        <img
          src={categoryIcon}
          alt={categoryIconAlt}
          className="!max-w-[15px] !min-w-[17px]"
        />
        <span className="text-white text-sm">{categoryName}</span>
      </div>
      <button
        className={`${
          version2 ? "flex" : "hidden"
        } absolute bg-CustomBlack top-2 left-2 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200`}
      >
        <FaRegHeart className="text-white text-xl" />
      </button>
      <img src={image} alt={imageAlt} className="w-full" />
      <div
        className={`w-full flex items-center justify-start py-3.5 px-3 gap-1 absolute bg-[#00000066] transition-all duration-200 right-0 left-0 ${
          version2
            ? "group-hover:bottom-0 bottom-[-2.1rem] rounded-2xl group-hover:rounded-none"
            : "bottom-0 rounded-2xl"
        }`}
      >
        <span
          className={`${version1 ? "flex" : "hidden"} text-white text-SubTitle`}
        >
          {location} / {province}
        </span>
        <div
          className={`${
            version1 ? "hidden" : "flex"
          } flex-col items-center w-full gap-3`}
        >
          <span className="line-clamp-1 group-hover:line-clamp-none text-SubTitle transition-all duration-200 text-white text-start w-full">
            {location}
          </span>
          <div className="w-full flex items-center justify-between">
            <span className="flex items-center text-white gap-1 text-sm">
              <FaUser />
              {user}
            </span>
            <span className="flex items-center text-white gap-1 text-sm">
              {rate}
              <GoStarFill className="text-[#F2CB00] text-lg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
