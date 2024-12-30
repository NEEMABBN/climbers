import React from "react";
import { Element } from "react-scroll";

export default function Geography({ sectionName, title }) {
  const geographyData = [
    {
      title: "موقعیت:",
      description:
        "لاریجان شهرستان آمل، استان مازندران، ایران، آسیا یسبیثیبیثلییثبل",
    },
    {
      title: "ارتفاع نسبت به دریا:",
      description: "۵٬۶۱۰ متر (۱۸۴۱۰ پا)",
    },
    {
      title: "مختصات:",
      description: "۳۵°۵۷′۱۹″ شمالی ۵۲°۰۶′۳۳″ شرقی",
    },
    {
      title: "نوع زمین‌چهر:",
      description: "کوهستانی، رشته‌کوه",
    },
    {
      title: "زبان بومی منطقه:",
      description: "طبری",
    },
    {
      title: "نوع پوشش گیاهی:",
      description: "علفزارهای معتدل",
    },
    {
      title: "نوع جانوران:",
      description: "حضور جانوران شکارچی،",
    },
    {
      title: "وضعیت حمل و نقل:",
      description: "تنها با تجهیزات فنی کوهنوردی",
    },
  ];

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-start gap-4 border-solid border-Borders border-y-[1px] py-8 sm:px-0 px-3"
    >
      <h2 className="text-largTitle text-Titles">{title}</h2>
      <div className="w-full border-solid border-Borders border-[1px] rounded-2xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 gap-y-2">
        {geographyData.map((item, index) => (
          <div
            key={index}
            className="w-full flex gap-1 border-solid border-Borders border-b-[1px]"
          >
            <div className="w-full items-start flex gap-1 border-solid border-Borders border-l-[1px] my-1.5 px-2 py-2">
              <span className="text-SubTitle text-Disable">{item.title}</span>
              <span className="text-SubTitle text-Secoundray text-start leading-6">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}
