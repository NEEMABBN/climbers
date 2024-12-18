import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Images from "../../../Setting/Images";
import EachPopularPlaceSlide from "../../../Components/EachPopularPlaceSlide";
import TemplateV1 from "../../../Components/TemplateV1";

export default function MostPopularForests() {
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
  ];

  const swiperRef = useRef();

  return (
    <div className="w-full py-12">
      <TemplateV1
        title="محبوب‌ترین جنگل‌ها"
        swiperRef={swiperRef}
        gaps="gap-1"
        children={
          <div className="w-full">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={10}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                800: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper !py-8 lg:!px-0 !px-2"
            >
              {postData.map((item, index) => (
                <SwiperSlide key={index}>
                  <EachPopularPlaceSlide
                    image={item.image}
                    imageAlt={item.province}
                    location={item.city}
                    province={item.province}
                    version1={true}
                    version2={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        }
      />
    </div>
  );
}
