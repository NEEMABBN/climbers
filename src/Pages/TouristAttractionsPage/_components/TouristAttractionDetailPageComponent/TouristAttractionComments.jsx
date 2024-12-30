import React from "react";
import { FaStar } from "react-icons/fa";
import { Element } from "react-scroll";
import Images from "../../../../Setting/Images";

export default function TouristAttractionComments({ sectionName, title }) {
  const commentData = [
    {
      userName: "محمد محمدی",
      userType: "کاربر معمولی",
      rate: 3.5,
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن",
      date: "5 روز پیش",
    },
    {
      userName: "محمد محمدی",
      userType: "کاربر معمولی",
      rate: 4.5,
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی",
      date: "5 روز پیش",
    },
    {
      userName: "محمد محمدی",
      userType: "مسافر تور کشتی کروز امارات",
      rate: 2.5,
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      date: "5 روز پیش",
    },
    {
      userName: "محمد محمدی",
      userType: "لیدر تور کشتی کروز امارات",
      rate: 2.5,
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی",
      date: "5 روز پیش",
    },
    {
      userName: "محمد محمدی",
      userType: "کاربر معمولی",
      rate: 2.5,
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن",
      date: "5 روز پیش",
    },
    {
      userName: "محمد محمدی",
      userType: "کاربر معمولی",
      rate: 2.5,
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی",
      date: "5 روز پیش",
    },
  ];

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-center mt-9 mb-24 gap-6 sm:px-0 px-3"
    >
      <div className="w-full flex sm:items-center items-start justify-between">
        <div className="flex sm:flex-row flex-col sm:items-end items-start sm:gap-4 gap-1">
          <h2 className="text-Secoundray sm:text-largTitle text-xl">{title}</h2>
          <div className="flex items-center gap-1">
            <span className="text-Secoundray text-lg">3.5</span>
            <FaStar className="text-[#F2CB00] text-xl" />
          </div>
        </div>
        <button className="text-white bg-Primary px-6 py-2.5 rounded-2xl sm:text-base text-SubTitle">
          نظر شما چیه؟
        </button>
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        {commentData.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center p-3 gap-2 border-solid border-Borders border-[1px] rounded-2xl"
          >
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="sm:text-lg text-Secoundray font-semibold">
                  {item.userName}
                </span>
                <div className="flex items-start gap-1">
                  <span className="text-Secoundray text-SubTitle">
                    {item.rate}
                  </span>
                  <FaStar className="text-[#F2CB00]" />
                </div>
              </div>
              <span className="text-Disable text-sm">{item.date}</span>
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              {item.userType === "کاربر معمولی" ? (
                ""
              ) : (
                <div className="flex items-center gap-2">
                  <img src={Images.CheckMarkIcon} alt="" className="" />
                  <span className="text-Primary text-SubTitle">
                    {item.userType}
                  </span>
                </div>
              )}
              <p className="sm:text-SubTitle text-sm text-Secoundray leading-7 line-clamp-2">
                {item.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="text-Primary bg-white border-solid border-Primary border-[1px] rounded-2xl py-2.5 px-6">
        نمایش بیشتر
      </button>
    </Element>
  );
}
