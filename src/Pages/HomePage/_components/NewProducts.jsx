import React from "react";
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

  return (
    <div className="w-full bg-[#09695D] py-16">
      <TemplateV1
        title="جدیدترین کالا‌ها"
        children={
          <Swiper
            slidesPerView={4}
            spaceBetween={13}
            dir="rtl"
            loop={true}
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