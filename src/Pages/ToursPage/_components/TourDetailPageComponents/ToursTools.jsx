import React from "react";
import { Element } from "react-scroll";
import Images from "../../../../Setting/Images";

export default function ToursTools({ sectionName, title, description }) {
  const requiredToolsData = [
    {
      toolName: "کفش مناسب",
      category: "ضروری",
    },
    {
      toolName: "لباس اضافه",
      category: "ضروری",
    },
    {
      toolName: "طناب",
      category: "فروشگاه",
    },
    {
      toolName: "زیرانداز",
      category: "فروشگاه",
    },
    {
      toolName: "کلاه آفتابی",
      category: "فروشگاه",
    },
    {
      toolName: "کارابین",
      category: "فروشگاه",
    },
    {
      toolName: "یک وعده ناهار",
      category: "دلخواه",
    },
    {
      toolName: "کفش راحتی برای شنا",
      category: "دلخواه",
    },
    {
      toolName: "وسایل بازی",
      category: "دلخواه",
    },
    {
      toolName: "زنجیر کفش",
      category: "دلخواه",
    },
    {
      toolName: "جعبه کمک‌های اولیه",
      category: "دلخواه",
    },
    {
      toolName: "ضدآفتاب و داروهای ضروری",
      category: "دلخواه",
    },
  ];
  const toolsCategoryIcon = {
    ضروری: "(ضروری)",
    فروشگاه: <img src={Images.ClimberShopIcon} alt="فروشگاه" className="" />,
    دلخواه: "",
  };

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-start gap-5 my-7"
    >
      <h2 className="text-Secoundray sm:text-largTitle text-xl">{title}</h2>
      <p className="text-Secoundray sm:text-SubTitle text-sm leading-6">
        {description}
      </p>
      <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {requiredToolsData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-center sm:gap-2 gap-1"
          >
            <span className="w-1 h-1 border-solid border-b-[1px] border-black"></span>
            <span className="text-Secoundray sm:text-SubTitle text-sm">
              {item.toolName}
            </span>
            <span className="text-Error sm:text-SubTitle text-sm">
              {toolsCategoryIcon[item.category]}
            </span>
          </div>
        ))}
      </div>
    </Element>
  );
}
