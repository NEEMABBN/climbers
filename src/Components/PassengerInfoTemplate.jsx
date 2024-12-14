import React, { useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function PassengerInfoTemplate({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 cursor-pointer"
      >
        <div className="w-full h-[1px] bg-Disable"></div>
        <div className="flex items-center gap-3">
          <span className="text-nowrap">{title}</span>
          <FaChevronLeft
            className={`text-Secoundray transition-all duration-300 ${
              isOpen ? "-rotate-90" : "rotate-90"
            }`}
          />
        </div>
        <div className="w-full h-[1px] bg-Disable"></div>
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all w-full duration-[400ms] ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="w-full flex flex-col items-center py-2">{children}</div>
      </div>
    </div>
  );
}
