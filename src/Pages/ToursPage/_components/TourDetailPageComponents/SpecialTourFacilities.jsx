import React from "react";
import { Element } from "react-scroll";
import Images from "../../../../Setting/Images";

export default function SpecialTourFacilities({ sectionName, title }) {
  const specialTourFacilitiesData = [
    {
      icon: Images.mealIcon,
      name: "وعده غذایی",
      value: "شامل یک وعده صبحانه و عصرانه",
    },
    {
      icon: Images.insuranceIcon,
      name: "بیمه",
      value: "ندارد",
    },
    {
      icon: Images.LeaderIcon,
      name: "لیدر",
      value: "به همراه دو لیدر رسمی ",
    },
    {
      icon: Images.GamesIcon,
      name: "سرگرمی‌ها",
      value: "بازی و دورهم نشینی شبانه",
    },
  ];

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-start gap-4 border-solid border-Borders border-y-[1px] py-7 mt-5"
    >
      <h2 className="text-Secoundray text-[26px]">{title}</h2>
      <div className="w-full grid grid-cols-4 py-5 px-2 rounded-2xl border-solid border-Borders border-[1px]">
        {specialTourFacilitiesData.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-start border-solid border-Borders border-l-[1px] last:border-none px-3 gap-2"
          >
            <div className="flex items-center gap-1">
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
