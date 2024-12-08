import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Element } from "react-scroll";

export default function TourRestrictions({ sectionName, title, description }) {
  const appropriateRestrictionsData = [
    "این برنامه برای افراد بالای ۱۵ سال و زیر ۶۰ سال مناسب است.",
    "مناسب برای جمع خانواده",
  ];
  const improperRestrictionsData = [
    "افرادی که دچار آسم و مشکلات تنفسی‌اند.",
    "افرادی که کمردرد و زانو درد دارند.",
    "افرادی که کمردرد و زانو درد دارند.",
  ];

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-start gap-4 border-solid border-Borders border-y-[1px] py-7 mt-5"
    >
      <h2 className="text-Secoundray text-[26px]">{title}</h2>
      <p className="text-Secoundray text-SubTitle leading-6">{description}</p>
      <div className="w-full flex items-start gap-4 py-6">
        <div className="w-full flex flex-col items-start p-4 gap-4 border-solid border-Borders border-[1px] rounded-2xl">
          <div className="flex items-center justify-start gap-3">
            <span className="border-solid border-2 rounded-lg p-1.5 border-Primary text-Primary">
              <FaCheck />
            </span>
            <span className="text-Secoundray text-lg">مناسب</span>
          </div>
          <div className="w-full flex flex-col items-start gap-1.5">
            {appropriateRestrictionsData.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center gap-1 border-solid border-b-[1px] border-Borders last:border-none py-2"
              >
                <span className="w-1.5 h-[2px] bg-Disable"></span>
                <span className="text-SubTitle text-Disable">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-start p-4 gap-4 border-solid border-Borders border-[1px] rounded-2xl">
          <div className="flex items-center justify-start gap-3">
            <span className="border-solid border-2 rounded-lg p-1.5 border-Error text-Error">
              <IoClose />
            </span>
            <span className="text-Secoundray text-lg">نامناسب</span>
          </div>
          <div className="w-full flex flex-col items-start gap-1.5">
            {improperRestrictionsData.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center gap-1 border-solid border-b-[1px] border-Borders last:border-none py-2"
              >
                <span className="w-1.5 h-[2px] bg-Disable"></span>
                <span className="text-SubTitle text-Disable">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
