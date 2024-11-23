import React, { useRef } from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import EachPopularPlaceSlide from "../../../Components/EachPopularPlaceSlide";
import Images from "../../../Setting/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Reports() {
  const reportsData = [
    {
      image: Images.BoatRide,
      location: "قایق سواری در سواحل استانبول",
      user: "محمد محمدی",
      rate: 3.5,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
    },
    {
      image: Images.HistoricalPlace,
      location: "بازدید از مکان‌های تاریخی",
      user: "محمد محمدی",
      rate: 3.3,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
    },
    {
      image: Images.JungleNavigation,
      location: "پیمایش در جنگل‌های هیرکانی شمال ایران",
      user: "محمد محمدی",
      rate: 4.5,
      categoryIcon: Images.ForestIconV2,
      categoryName: "جنگل",
    },
    {
      image: Images.BoatRide,
      location: "قایق سواری در سواحل استانبول",
      user: "محمد محمدی",
      rate: 3.5,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
    },
    {
      image: Images.Fishing,
      location: "ماهیگیری در سد سلیمان‌تنگه ساری",
      user: "محمد محمدی",
      rate: 5,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
    },
    {
      image: Images.FamilyNavigation,
      location: "پیمایش خانوادگی در دریای خزر",
      user: "محمد محمدی",
      rate: 4.5,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
    },
  ];
  const swiperRef = useRef(null);

  return (
    <div className="w-full py-16">
      <TemplateV1
        title="گزارش برنامه‌ها"
        links="/Reports"
        swiperRef={swiperRef}
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
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {reportsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <EachPopularPlaceSlide
                    image={item.image}
                    location={item.location}
                    imageAlt={item.location}
                    categoryIcon={item.categoryIcon}
                    categoryName={item.categoryName}
                    categoryIconAlt={item.categoryName}
                    rate={item.rate}
                    user={item.user}
                    version1={false}
                    version2={true}
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
