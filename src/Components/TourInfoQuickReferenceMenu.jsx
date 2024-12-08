import React from "react";
import { Link } from "react-scroll";

export default function TourInfoQuickReferenceMenu({
  sections,
  activeSection,
  setActiveSection,
}) {
  return (
    <div className="w-[10%] flex h-fit sticky top-[8.5rem]">
      <ul className="w-full flex flex-col items-start gap-1.5">
        {sections.map((item, index) => (
          <li key={index} className="relative">
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-136}
              onSetActive={() => setActiveSection(item)}
              className={`cursor-pointer text-SubTitle p-1 block transition-all ${
                activeSection === item ? "text-black font-bold" : "text-gray-500"
              }`}
            >
              {activeSection === item && (
                <span className="absolute right-[-8px] top-0 h-full w-1 bg-green-500 transition-all"></span>
              )}
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}