import React from "react";
import { Element } from "react-scroll";

export default function TravelInformation({ sectionName, title }) {
  const InformationData = [
    {
      title: "بهترین فصل صعود:",
      description: "تابستان",
    },
    {
      title: "دسترسی به آب:",
      description:
        "۱) قرارگاه ونداربن - ۲) سنگ کشتی (۲ ساعت از قرارگاه) - ۳) چشمه جلوی سیاه کمان (۴.۵ ساعت از قرارگاه) - ۴) چشمه پناهگاه سرچال - ۵) دشت حصارچال",
    },
    {
      title: "نزدیک‌ترین مرکز درمانی:",
      description: "خانه بهداشت فشکور",
    },
    {
      title: "وضعیت آنتن دهی موبایل:",
      description:
        "همراه اول در قرارگاه ونداربن، بخش‌هایی از مسیر تا سرچال، پناهگاه سرچال و در نزدیکی قله آنتن دارد.",
    },
    {
      title: "مشخصات مسیر:",
      description: "دره‌ای- خاکی",
    },
  ];

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-start gap-4 border-solid border-Borders border-y-[1px] py-7"
    >
      <h2 className="text-largTitle text-Titles">{title}</h2>
      <ul className="w-full flex flex-col items-center border-solid border-Borders border-[1px] rounded-2xl px-4">
        {InformationData.map((item, index) => (
          <li
            key={index}
            className="w-full flex items-center border-solid border-Borders border-b-[1px] py-4 gap-1.5 last:border-none"
          >
            <span className="text-SubTitle text-Disable">{item.title}</span>
            <span className="text-SubTitle text-Secoundray">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </Element>
  );
}
