import React, { useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function FilterBoxTemplate({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="bg-white w-full border-solid border-Borders border-b-[1px] py-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between cursor-pointer py-3"
      >
        <span className="text-SubTitle text-Secoundray">{title}</span>
        <button
          className={`text-Secoundray transition-transform duration-300 ${
            isOpen ? "rotate-[-90deg]" : "rotate-0"
          }`}
        >
          <FaChevronLeft />
        </button>
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-[400ms] ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="w-full flex flex-col items-start gap-3.5">
          {children}
        </div>
      </div>
    </div>
  );
}
