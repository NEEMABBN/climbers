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
      <h2 className="text-Secoundray sm:text-largTitle text-xl">{title}</h2>
      <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-2.5 py-5 px-2 rounded-2xl border-solid border-Borders border-[1px]">
        {tourOfficialsData.map((item, index) => (
          <div
            key={index}
            className="w-full flex md:flex-col flex-row md:items-start items-center md:justify-normal justify-between border-solid border-Borders md:border-l-[1px] md:border-b-0 border-b-[1px] last:border-none pb-1 px-3 gap-2"
          >
            <div className="flex items-end sm:gap-2.5 gap-1.5">
              <img
                src={item.icon}
                alt={item.name}
                className="md:w-auto sm:w-[39px] w-[30px]"
              />
              <span className="sm:text-lg YekanReg text-Secoundray text-nowrap">
                {item.name}
              </span>
            </div>
            <p className="text-Disable sm:text-SubTitle text-sm leading-6 text-end line-clamp-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </Element>
  );
}
