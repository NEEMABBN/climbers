import React, { useRef, useState } from "react";
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
      activeIcon: Images.BestPlaceIconActive,
      name: "برترین‌ها",
    },
    {
      icon: Images.SeaIcon,
      activeIcon: Images.SeaIconActive,
      name: "دریا، دریاچه",
    },
    {
      icon: Images.WaterfallIcon,
      activeIcon: Images.WaterfallIconActive,
      name: "آبشار",
    },
    {
      icon: Images.MountainIcon,
      activeIcon: Images.MountainIconActive,
      name: "کوه",
    },
    {
      icon: Images.IslandIcon,
      activeIcon: Images.IslandIconActive,
      name: "جزیره",
    },
    {
      icon: Images.ForestIcon,
      activeIcon: Images.ForestIconActive,
      name: "جنگل",
    },
    {
      icon: Images.ValleyIcon,
      activeIcon: Images.ValleyIconActive,
      name: "دره",
    },
    {
      icon: Images.DesertIcon,
      activeIcon: Images.DesertIconActive,
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
      image: Images.PopularPlaceSlide2,
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
      image: Images.PopularPlaceSlide2,
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
      image: Images.PopularPlaceSlide3,
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
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "آبشار",
    },
    {
      image: Images.PopularPlaceSlide3,
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
      image: Images.PopularPlaceSlide2,
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
      image: Images.PopularPlaceSlide3,
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
      image: Images.PopularPlaceSlide3,
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
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دره",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دره",
    },
    {
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دره",
    },
    {
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دره",
    },
    {
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دره",
    },
    {
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دره",
    },
    {
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دره",
    },
  ];
  const swiperRef = useRef(null);
  const [allPosts] = useState(postData);
  const [filteredPosts, setFilteredPosts] = useState(
    allPosts.filter((post) => post.category === "برترین‌ها")
  );
  const [activeCategory, setActiveCategory] = useState("برترین‌ها");

  const filterPosts = (category) => {
    setActiveCategory(category);
    const filtered = allPosts.filter((post) => post.category === category);
    setFilteredPosts(filtered);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  return (
    <div className="w-full bg-[#DFE5E587] py-16">
      <TemplateV1
        title="مکان‌های محبوب گردشگری"
        links="/Agencies"
        swiperRef={swiperRef}
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
                      } flex lg:w-auto w-full items-center lg:justify-normal justify-center lg:gap-2 gap-2.5 py-1 sm:px-4 bg-white border-solid border-2 rounded-2xl`}
                    >
                      {activeCategory === item.name ? (
                        <img src={item.activeIcon} alt="" className="" />
                      ) : (
                        <img src={item.icon} alt="" className="" />
                      )}
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
                    } flex lg:w-auto w-full items-center lg:justify-normal justify-center lg:gap-2 gap-2.5 py-1 sm:px-4 bg-white border-solid border-2 rounded-2xl`}
                  >
                    {activeCategory === item.name ? (
                      <img src={item.activeIcon} alt="" className="" />
                    ) : (
                      <img src={item.icon} alt="" className="" />
                    )}
                    <span className="text-Secoundray">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                  },
                }}
                className="mySwiper"
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
            </div>
          </div>
        }
      />
    </div>
  );
}
