import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Element } from "react-scroll";
import Images from "../../../../Setting/Images";

export default function GeneralTourInformation({
  sectionName,
  title,
  links,
  agency,
  description,
}) {
  const tourActivitiesData = [
    {
      icon: Images.MountaineeringIcon,
      name: "کوهنوردی",
      description:
        "کوه دماوند با ارتفاع ۱۵۰۰ در مسیر ما وجود دارد که گذشتن از آن ۲ الی ۳ ساعت زمان‌ می‌برد.",
    },
    {
      icon: Images.walkingIcon,
      name: "پیاده‌روی",
      description:
        "مسیر پیاده‌روی شامل ۲۱۰۰ کیلومتر می‌باشد که در مدت زمان ۴ الی ۵ ساعت پیموده می‌شود.",
    },
    {
      icon: Images.SeaIcon,
      name: "شنا",
      description: "برای رسیدن به مقصد حدودا ۵ الی ۱۵ دقیقه شنا داریم.",
    },
  ];

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-start relative gap-2.5"
    >
      <h2 className="text-Secoundray sm:text-largTitle text-xl">{title}</h2>
      <div className="flex items-center gap-5">
        <NavLink to={links} className="text-Primary text-SubTitle">
          {agency}
        </NavLink>
        <span className="text-Secoundray text-SubTitle flex items-start gap-1">
          3.5
          <FaStar className="text-[#F2CB00] text-xl" />
        </span>
      </div>
      <p className="sm:text-SubTitle text-sm text-Secoundray leading-6">
        {description}
      </p>
      <div className="absolute top-0 left-0 flex items-center sm:gap-4 gap-1.5">
        <button className="bg-[#FAFAFA] border-solid border-Borders border-[1px] text-Secoundray rounded-lg p-1 sm:text-2xl text-lg">
          <IoShareSocialOutline />
        </button>
        <button className="bg-[#FAFAFA] border-solid border-Borders border-[1px] text-Secoundray rounded-lg p-1 sm:text-2xl text-lg">
          <IoMdHeartEmpty />
        </button>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-3 my-5">
        {tourActivitiesData.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-start gap-3 border-solid border-Borders border-[1px] rounded-2xl p-3"
          >
            <div className="flex items-center sm:gap-1 gap-2">
              <img src={item.icon} alt="" className="sm:w-auto w-[28px]" />
              <span className="sm:text-lg text-base YekanReg text-Secoundray">
                {item.name}
              </span>
            </div>
            <p className="text-Disable sm:text-SubTitle text-sm leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Element>
  );
}
