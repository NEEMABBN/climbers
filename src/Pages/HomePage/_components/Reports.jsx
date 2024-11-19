import React from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import EachPopularPlaceSlide from "../../../Components/EachPopularPlaceSlide";
import Images from "../../../Setting/Images";

export default function Reports() {
  const reportsData = [
    {
      image: Images.BoatRide,
      location: "قایق سواری در سواحل استانبول",
      user: "محمد محمدی",
      rate: 3.5,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
    },
    {
      image: Images.HistoricalPlace,
      location: "بازدید از مکان‌های تاریخی",
      user: "محمد محمدی",
      rate: 3.3,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
    },
    {
      image: Images.JungleNavigation,
      location: "پیمایش در جنگل‌های هیرکانی شمال ایران",
      user: "محمد محمدی",
      rate: 4.5,
      categoryIcon: Images.ForestIconV2,
      categoryName: "جنگل",
    },
    {
      image: Images.Fishing,
      location: "ماهیگیری در سد سلیمان‌تنگه ساری",
      user: "محمد محمدی",
      rate: 5,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
    },
    {
      image: Images.FamilyNavigation,
      location: "پیمایش خانوادگی در دریای خزر",
      user: "محمد محمدی",
      rate: 4.5,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
    },
  ];

  return (
    <div className="w-full py-16">
      <TemplateV1
        title="گزارش برنامه‌ها"
        children={
          <div className="w-full flex items-center gap-4">
            {reportsData.map((item, index) => (
              <EachPopularPlaceSlide
                key={index}
                image={item.image}
                location={item.location}
                categoryIcom={item.categoryIcon}
                categoryName={item.categoryName}
                rate={item.rate}
                user={item.user}
                version1={false}
                version2={true}
              />
            ))}
          </div>
        }
      />
    </div>
  );
}
