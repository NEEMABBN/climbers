import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function DetailButton() {
  return (
    <button className="text-Primary flex items-center gap-4">
      مشاهده جزئیات
      <FaChevronLeft />
    </button>
  );
}
