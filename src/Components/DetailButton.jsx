import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function DetailButton() {
  return (
    <button className="text-Primary flex items-center sm:gap-4 gap-1 sm:text-base text-sm">
      مشاهده جزئیات
      <FaChevronLeft />
    </button>
  );
}
