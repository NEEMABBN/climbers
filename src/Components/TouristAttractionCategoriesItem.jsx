import React, { useState } from "react";

export default function TouristAttractionCategoriesItem({
  icon,
  activeIcon,
  title,
}) {
  const [currentIcon, setCurrentIcon] = useState(icon);

  return (
    <div
      className="w-full flex flex-col items-center cursor-pointer py-3 gap-2 bg-white border-solid border-Borders hover:border-Primary border-[1px] hover:shadow-[0px_0px_30px_-15px_rgba(14,154,138,0.5)] transition-all duration-200 rounded-3xl"
      onMouseOver={() => setCurrentIcon(activeIcon)}
      onMouseOut={() => setCurrentIcon(icon)}
    >
      <img src={currentIcon} alt={title} className="w-[23px]" />
      <span className="text-base text-Secoundray">{title}</span>
    </div>
  );
}
