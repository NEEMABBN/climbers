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
      <h2 className="text-Secoundray sm:text-largTitle text-xl">{title}</h2>
      <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-3 py-5 px-2 rounded-2xl border-solid border-Borders border-[1px]">
        {specialTourFacilitiesData.map((item, index) => (
          <div
            key={index}
            className="w-full flex md:flex-col flex-row md:items-start items-center md:justify-normal justify-between border-solid border-Borders md:border-l-[1px] md:border-b-0 border-b-[1px] last:border-none md:py-0 pb-1 sm:px-3 gap-2"
          >
            <div className="flex items-center md:gap-1 sm:gap-2.5 gap-1">
              <img
                src={item.icon}
                alt=""
                className="md:w-auto sm:w-[35px] w-[29px]"
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
