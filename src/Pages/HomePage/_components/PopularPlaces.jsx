import React from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import Images from "../../../Setting/Images";
import EachPopularPlaceSlide from "../../../Components/EachPopularPlaceSlide";

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
                <button
                  key={index}
                  className="flex items-center gap-2 py-1.5 px-4 bg-white border-solid border-2 border-white rounded-2xl hover:border-Primary transition-all duration-300"
                >
                  <img src={item.icon} alt="" className="" />
                  <span className="text-Secoundray">{item.name}</span>
                </button>
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
