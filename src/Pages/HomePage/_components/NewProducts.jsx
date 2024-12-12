import React, { useRef } from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import EachProductPost from "../../../Components/EachProductPost";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Images from "../../../Setting/Images";

export default function NewProducts() {
  const ProductsData = [
    {
      image: Images.ClimbingShoes,
      name: "کفش کوهنوردی",
      rate: 3.5,
      category: "تن زیپ",
      price: 1550000,
    },
    {
      image: Images.Bag,
      name: "کیسه خواب",
      rate: 4.5,
      category: "تن زیپ",
      price: 1000000,
    },
    {
      image: Images.ClimbingCane,
      name: "عصای کوهنوردی",
      rate: 3.8,
      category: "تن زیپ",
      price: 2400000,
    },
    {
      image: Images.Flask,
      name: "فلاسک هوشمند مدل UQ",
      rate: 4,
      category: "تن زیپ",
      price: 1500000,
    },
    {
      image: Images.MountaineeringBackpack,
      name: "کوله پشتی کوهنوردی غول",
      rate: 5,
      category: "تن زیپ",
      price: 3000000,
    },
    {
      image: Images.ClimbingShoes,
      name: "کفش کوهنوردی",
      rate: 3.5,
      category: "تن زیپ",
      price: 1550000,
    },
    {
      image: Images.Bag,
      name: "کیسه خواب",
      rate: 4.5,
      category: "تن زیپ",
      price: 1000000,
    },
  ];
  const swiperRef = useRef(null);

  return (
    <div className="w-full bg-[#09695D] py-16">
      <TemplateV1
        title="جدیدترین کالا‌ها"
        titleColor="text-white"
        links="/somepage"
        swiperRef={swiperRef}
        children={
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            dir="rtl"
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {ProductsData.map((item, index) => (
              <SwiperSlide key={index}>
                <EachProductPost
                  image={item.image}
                  name={item.name}
                  imageAlt={item.name}
                  rate={item.rate}
                  category={item.category}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      />
    </div>
  );
}
