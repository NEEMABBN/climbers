import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function FilterBoxTemplate({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white w-full border-solid border-Borders border-b-[1px] py-1">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between cursor-pointer py-3"
      >
        <span className="text-SubTitle text-Secoundray">{title}</span>
        <button
          className={`text-Secoundray transition-all ${
            isOpen ? "rotate-[-90deg]" : "rotate-0"
          }`}
        >
          <FaChevronLeft />
        </button>
      </div>
      {isOpen && <div className="w-full">{children}</div>}
    </div>
  );
}
