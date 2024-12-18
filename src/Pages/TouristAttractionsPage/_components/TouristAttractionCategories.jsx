import React from "react";
import Images from "../../../Setting/Images";
import TouristAttractionCategoriesItem from "../../../Components/TouristAttractionCategoriesItem";

export default function TouristAttractionCategories() {
  const categoryData = [
    {
      icon: Images.BestPlaceIcon,
      activeIcon: Images.BestPlaceIconActive,
      title: "برترین‌ها",
    },
    {
      icon: Images.SeaIcon,
      activeIcon: Images.SeaIconActive,
      title: "دریا و دریاچه",
    },
    {
      icon: Images.WaterfallIcon,
      activeIcon: Images.WaterfallIconActive,
      title: "آبشار",
    },
    {
      icon: Images.MountainIcon,
      activeIcon: Images.MountainIconActive,
      title: "کوه",
    },
    {
      icon: Images.IslandIcon,
      activeIcon: Images.IslandIconActive,
      title: "جزیره",
    },
    {
      icon: Images.ForestIcon,
      activeIcon: Images.ForestIconActive,
      title: "جنگل",
    },
    {
      icon: Images.ValleyIcon,
      activeIcon: Images.ValleyIconActive,
      title: "دره",
    },
    {
      icon: Images.DesertIcon,
      activeIcon: Images.DesertIconActive,
      title: "کویر",
    },
  ];

  return (
    <div className="w-full flex bg-[#F4F4F4] py-14">
      <div className="container sm:mx-auto mx-5 flex flex-col items-center gap-10">
        <h2 className="text-Titles sm:text-3xl text-2xl">دسته‌بندی‌ها</h2>
        <div className="w-full grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {categoryData.map((item, index) => (
            <TouristAttractionCategoriesItem
              key={index}
              title={item.title}
              icon={item.icon}
              activeIcon={item.activeIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
