import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Element } from "react-scroll";
import Images from "../../../../Setting/Images";
import { MdOutlineReport } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

export default function GeneralPlaceInformation({
  sectionName,
  title,
  description,
  category,
  level,
  rate,
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
      className="flex flex-col items-start gap-2.5 relative"
    >
      <h2 className="text-Titles text-largTitle">{title}</h2>
      <div className="absolute top-0 left-0 flex items-center gap-3">
        <button className="bg-[#FAFAFA] border-solid border-Borders border-[1px] rounded-lg hover:shadow-lg transition-all flex items-start p-1.5 gap-1">
          <MdOutlineReport className="text-2xl" />
          <span className="text-SubTitle text-Secoundray">
            گزارش اطلاعات نادرست
          </span>
        </button>
        <button className="bg-[#FAFAFA] border-solid border-Borders border-[1px] rounded-lg hover:shadow-lg transition-all p-2">
          <IoShareSocialOutline className="text-xl" />
        </button>
        <button className="bg-[#FAFAFA] border-solid border-Borders border-[1px] rounded-lg hover:shadow-lg transition-all p-2">
          <FaRegHeart className="text-xl" />
        </button>
      </div>
      <div className="w-full flex flex-col items-start gap-2.5">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <span className="text-Disable text-SubTitle">دسته‌بندی:</span>
            <span className="text-Primary text-SubTitle">{category}</span>
          </div>
          <div className="flex items-center gap-1.5 px-5 border-solid border-Borders border-x-[1px]">
            <span className="text-Disable text-SubTitle">سطح توانایی:</span>
            <span className="text-Primary text-SubTitle">{level}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-Secoundray text-SubTitle">{rate}</span>
            <FaStar className="text-[#F2CB00]" />
          </div>
        </div>
        <p className="text-Secoundray text-SubTitle leading-6">{description}</p>
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
