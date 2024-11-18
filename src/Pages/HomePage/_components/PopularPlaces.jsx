import React from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import Images from "../../../Setting/Images";
import EachPopularPlaceSlide from "../../../Components/EachPopularPlaceSlide";
import EachPopularPlaceCategory from "../../../Components/EachPopularPlaceCategory";

export default function PopularPlaces() {
  const categoryData = [
    {
      icon: Images.BestPlaceIcon,
      name: "برترین‌ها",
    },
    {
      icon: Images.SeaIcon,
      name: "دریا و دریاچه",
    },
    {
      icon: Images.WaterfallIcon,
      name: "آبشار",
    },
    {
      icon: Images.MountainIcon,
      name: "کوه",
    },
    {
      icon: Images.IslandIcon,
      name: "جزیره",
    },
    {
      icon: Images.ForestIcon,
      name: "جنگل",
    },
    {
      icon: Images.DesertIcon,
      name: "کویر",
    },
  ];
  const postData = [
    {
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
    },
  ];

  return (
    <div className="w-full bg-[#DFE5E587] py-16">
      <TemplateV1
        title="مکان‌های محبوب گردشگری"
        children={
          <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full flex items-center gap-5">
              {categoryData.map((item, index) => (
                <EachPopularPlaceCategory
                  key={index}
                  name={item.name}
                  icon={item.icon}
                />
              ))}
            </div>
            <div className="w-full flex items-center gap-4">
              {postData.map((item, index) => (
                <EachPopularPlaceSlide
                  key={index}
                  image={item.image}
                  city={item.city}
                  province={item.province}
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
