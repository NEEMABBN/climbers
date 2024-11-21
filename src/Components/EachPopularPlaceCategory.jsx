import React from "react";

export default function EachPopularPlaceCategory({ icon, name }) {
  return (
    <button className="flex lg:w-auto w-full items-center lg:justify-normal justify-center lg:gap-2 gap-2.5 py-1.5 sm:px-4 bg-white border-solid border-2 border-white rounded-2xl hover:border-Primary transition-all duration-300">
      <img src={icon} alt="" className="" />
      <span className="text-Secoundray">{name}</span>
    </button>
  );
}
