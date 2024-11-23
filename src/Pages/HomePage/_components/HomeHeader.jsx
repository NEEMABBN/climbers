import React from "react";
import Images from "../../../Setting/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EachHeaderSlide from "../../../Components/EachHeaderSlide";
import { Autoplay } from "swiper/modules";

export default function HomeHeader() {
  const data = [
    {
      image: Images.HomeHeaderSlide1,
      imageMobile: Images.HomeHeaderSlide1Mobile,
      information: "رشته کوه‌های البرز",
    },
    {
      image: Images.HomeHeaderSlide1,
      imageMobile: Images.HomeHeaderSlide1Mobile,
      information: "رشته کوه‌های دماوند",
    },
    {
      image: Images.HomeHeaderSlide1,
      imageMobile: Images.HomeHeaderSlide1Mobile,
      information: "رشته کوه‌های زاگرس",
    },
    {
      image: Images.HomeHeaderSlide1,
      imageMobile: Images.HomeHeaderSlide1Mobile,
      information: "رشته کوه‌های آلپ",
    },
  ];

  return (
    <header className="container mx-auto flex items-center pt-10 pb-20 sm:px-0 px-3">
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <EachHeaderSlide
              image={item.image}
              imageMobile={item.imageMobile}
              info={item.information}
              imageAlt={item.information}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
