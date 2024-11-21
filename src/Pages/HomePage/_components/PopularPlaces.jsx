import React, { useState } from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import Images from "../../../Setting/Images";
import EachPopularPlaceSlide from "../../../Components/EachPopularPlaceSlide";
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
      category: "برترین‌ها",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "آبشار",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "آبشار",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "آبشار",
    },
    {
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "آبشار",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "آبشار",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کوه",
    },
    {
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کوه",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کوه",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کوه",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کوه",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جزیره",
    },
    {
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جزیره",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جزیره",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جزیره",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جزیره",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جنگل",
    },
    {
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جنگل",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جنگل",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جنگل",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "جنگل",
    },
    {
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کویر",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کویر",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کویر",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کویر",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "کویر",
    },
  ];

  const [allPosts] = useState(postData);
  const [filteredPosts, setFilteredPosts] = useState(
    allPosts.filter((post) => post.category === "برترین‌ها")
  );
  const [activeCategory, setActiveCategory] = useState("برترین‌ها");

  const filterPosts = (category) => {
    setActiveCategory(category);
    const filtered = allPosts.filter((post) => post.category === category);
    setFilteredPosts(filtered);
  };

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
                    <button
                      onClick={() => filterPosts(item.name)}
                      className={`${
                        activeCategory === item.name
                          ? "border-Primary"
                          : "border-white"
                      } flex lg:w-auto w-full items-center lg:justify-normal justify-center lg:gap-2 gap-2.5 py-1.5 sm:px-4 bg-white border-solid border-2 rounded-2xl`}
                    >
                      <img src={item.icon} alt="" className="" />
                      <span className="text-Secoundray">{item.name}</span>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="w-full lg:flex hidden items-center gap-5">
                {categoryData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => filterPosts(item.name)}
                    className={`${
                      activeCategory === item.name
                        ? "border-Primary"
                        : "border-white"
                    } flex lg:w-auto w-full items-center lg:justify-normal justify-center lg:gap-2 gap-2.5 py-1.5 sm:px-4 bg-white border-solid border-2 rounded-2xl`}
                  >
                    <img src={item.icon} alt="" className="" />
                    <span className="text-Secoundray">{item.name}</span>
                  </button>
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
                {filteredPosts.map((item, index) => (
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
                {filteredPosts.map((item, index) => (
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
