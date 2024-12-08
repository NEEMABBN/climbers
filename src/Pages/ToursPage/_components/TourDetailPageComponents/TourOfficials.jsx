import React from "react";
import { Element } from "react-scroll";
import Images from "../../../../Setting/Images";

export default function TourOfficials({ sectionName, title }) {
  const tourOfficialsData = [
    {
      icon: Images.SupervisorIcon,
      name: "سرپرست",
      value: "خانم پرستو سرپرست‌زاده",
    },
    {
      icon: Images.LeaderIcon,
      name: "لیدر",
      value: "یلدا لیدری",
    },
    {
      icon: Images.CookIcon,
      name: "آشپز",
      value: "دوتا آشپز خوب و تمیز",
    },
    {
      icon: Images.RouteGuide,
      name: "راهنمای مسیر",
      value: "قطب نما",
    },
  ];

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col gap-5 items-start border-solid border-Borders border-y-[1px] py-9"
    >
      <h2 className="text-Secoundray text-[26px]">{title}</h2>
      <div className="w-full grid grid-cols-4 py-5 px-2 rounded-2xl border-solid border-Borders border-[1px]">
        {tourOfficialsData.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-start border-solid border-Borders border-l-[1px] last:border-none px-3 gap-2"
          >
            <div className="flex items-end gap-2.5">
              <img src={item.icon} alt="" className="" />
              <span className="text-lg YekanReg text-Secoundray">
                {item.name}
              </span>
            </div>
            <p className="text-Disable text-SubTitle leading-6">{item.value}</p>
          </div>
        ))}
      </div>
    </Element>
  );
}
