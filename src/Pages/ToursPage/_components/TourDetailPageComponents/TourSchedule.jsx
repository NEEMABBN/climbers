import React from "react";
import { Element } from "react-scroll";

export default function TourSchedule({ sectionName, title, description }) {
  const tourScheduleData = [
    {
      id: 1,
      day: "روز اول؛",
      description:
        "پرواز از تهران به دبی (امارات)، ورود به دبی ،ترانسفر به بندر ، ورود به کشتی،تحویل کابین،حرکت به سمت دوحه (بحرین) ساعت ۱۹:۰۰",
    },
    {
      id: 2,
      day: "روز دوم؛",
      description:
        "ورود به دوحه (قطر) ساعت ۰۸:۰۰ پهلوگیری در بندر تا ساعت ۱۷:۳۰ (مسافر در صورت تمایل میتواند از کشتی خارج شود و از شهر بازدید کند)، حرکت به سمت بحرین ساعت ۱۸:۰۰",
    },
    {
      id: 3,
      day: "روز سوم؛",
      description:
        "ورود به بحرین ساعت ۰۸:۰۰ پهلوگیری در بندر تا ساعت ، ۱۸:۳۰ حرکت به سمت ابوظبی (امارات) ساعت ۱۹:۰۰ مسافران ایرانی در بحرین نمی توانند از کشتی خارج شوند و از مراسمات مخصوص کشتی استفاده میکنند.",
    },
    {
      id: 4,
      day: "روز چهارم؛",
      description:
        "ادامه حرکت به سمت ابوظبی(امارات)،استفاده از امکانات و مراسم مخصوص کشتی کروز",
    },
    {
      id: 5,
      day: "روز پنجم؛",
      description:
        "ورود به ابوظبی (امارات) ساعت ۰۷:۰۰ پهلوگیری در بندر تا ساعت ۲۰:۳۰ (مسافر در صورت تمایل میتواند از کشتی خارج شود و از شهر بازدید کند) ،حرکت به سمت صیر بنی یاس (ابوظبی) ساعت ۲۱:۰۰",
    },
    {
      id: 6,
      day: "روز ششم؛",
      description:
        "ورود به صیر بنی یاس (ابوظبی) ساعت ۰۸:۰۰ پهلوگیری در بندر تا ساعت ،۱۷:۳۰ حرکت به سمت دبی (امارات) ساعت ۱۸:۰۰ کشتی مراسم مخصوص برای مسافرین در جزیره صیر بنی یاس در نظر گرفته است و وعده غذایی بیرون از کشتی داخل جزیره صیر بنی یاس سرو می‌شود.",
    },
    // {
    //   id: 7,
    //   day: "روز پنجم؛",
    //   description:
    //     "ورود به ابوظبی (امارات) ساعت ۰۷:۰۰ پهلوگیری در بندر تا ساعت ۲۰:۳۰ (مسافر در صورت تمایل میتواند از کشتی خارج شود و از شهر بازدید کند) ،حرکت به سمت صیر بنی یاس (ابوظبی) ساعت ۲۱:۰۰",
    // },
    // {
    //   id: 8,
    //   day: "روز ششم؛",
    //   description:
    //     "ورود به صیر بنی یاس (ابوظبی) ساعت ۰۸:۰۰ پهلوگیری در بندر تا ساعت ،۱۷:۳۰ حرکت به سمت دبی (امارات) ساعت ۱۸:۰۰ کشتی مراسم مخصوص برای مسافرین در جزیره صیر بنی یاس در نظر گرفته است و وعده غذایی بیرون از کشتی داخل جزیره صیر بنی یاس سرو می‌شود.",
    // },
  ];

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-start gap-4 py-5"
    >
      <h2 className="text-Secoundray text-[26px]">{title}</h2>
      <p className="text-SubTitle text-Secoundray leading-6">{description}</p>
      <div className="w-full flex items-start gap-2">
        <span className="w-1 h-[85%] mt-3 border-dashed border-Primary border-l-2"></span>
        <div className="flex-1 flex flex-col items-center px-5 gap-4">
          {tourScheduleData.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-start gap-1 border-solid pt-1.5 pb-5 border-Borders border-b-[1px] last:border-none relative"
            >
              <span className="Circle-Icon absolute flex items-center justify-center h-11 w-11 bg-[#0E9A8A75] rounded-full top-0 right-[-3.2rem]">
                <div className="relative w-1/2 h-1/2">
                  <span className="absolute z-[3] flex items-center justify-center h-full w-full rounded-full bg-Primary text-white">
                    {item.id}
                  </span>
                </div>
              </span>
              <span className="text-Secoundray text-lg">{item.day}</span>
              <p className="text-Secoundray text-SubTitle leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
