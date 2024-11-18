import React from "react";

export default function EachPopularPlaceCategory({ icon, name }) {
  return (
    <button className="flex items-center gap-2 py-1.5 px-4 bg-white border-solid border-2 border-white rounded-2xl hover:border-Primary transition-all duration-300">
      <img src={icon} alt="" className="" />
      <span className="text-Secoundray">{name}</span>
    </button>
  );
}
