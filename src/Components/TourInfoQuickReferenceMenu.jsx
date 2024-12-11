import React from "react";
import { Link } from "react-scroll";

export default function TourInfoQuickReferenceMenu({
  sections,
  activeSection,
  setActiveSection,
}) {
  return (
    <div className="w-[10%] xl:flex hidden h-fit sticky top-[8.5rem]">
      <ul className="w-full flex flex-col items-start gap-1.5">
        {sections.map((item, index) => (
          <li key={index} className="relative">
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-136}
              onSetActive={() => setActiveSection(item)}
              onClick={() => setActiveSection(item)}
              // onScroll={() => setActiveSection(item)}
              className={`cursor-pointer text-SubTitle p-1 block transition-all ${
                activeSection === item
                  ? "text-black font-bold"
                  : "text-gray-500"
              }`}
            >
              {activeSection === item && (
                <span className="absolute -right-2 top-3 h-[2px] w-2 bg-Primary transition-all"></span>
              )}
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
