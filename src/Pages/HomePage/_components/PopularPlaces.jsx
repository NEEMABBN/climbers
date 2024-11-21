import React from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import Images from "../../../Setting/Images";
import EachPopularPlaceSlide from "../../../Components/EachPopularPlaceSlide";
import EachPopularPlaceCategory from "../../../Components/EachPopularPlaceCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function PopularPlaces() {
  const categoryData = [
    {
      icon: Images.BestPlaceIcon,
      name: "برترین‌ها",
    },
    {
      icon: Images.SeaIcon,
      name: "دریا، دریاچه",
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
        links="/Agencies"
        children={
          <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full">
              <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                breakpoints={{
                  600: {
                    slidesPerView: 3.5,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 4.5,
                    spaceBetween: 15,
                  },
                }}
                className="mySwiper lg:!hidden"
              >
                {categoryData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <EachPopularPlaceCategory
                      name={item.name}
                      icon={item.icon}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="w-full lg:flex hidden items-center gap-5">
                {categoryData.map((item, index) => (
                  <EachPopularPlaceCategory
                    key={index}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="w-full">
              <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                }}
                className="mySwiper xl:!hidden"
              >
                {postData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <EachPopularPlaceSlide
                      image={item.image}
                      location={item.city}
                      province={item.province}
                      version1={true}
                      version2={false}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="w-full xl:flex hidden items-center gap-4">
                {postData.map((item, index) => (
                  <EachPopularPlaceSlide
                    key={index}
                    image={item.image}
                    location={item.city}
                    province={item.province}
                    version1={true}
                    version2={false}
                  />
                ))}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
