import React, { useRef } from "react";
import { Element } from "react-scroll";
import TemplateV1 from "../../../../Components/TemplateV1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EachToursPost from "../../../../Components/EachToursPost";
import Images from "../../../../Setting/Images";

export default function SimilarTours({ sectionName, title }) {
  const toursData = [
    {
      image: Images.QeshmSaltCave,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.ZoroastrianCrypts,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
    },
    {
      image: Images.ExcursionKandavanVillage,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "گردش در روستای کندوان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 4.5,
      StartDate: 17,
      EndDate: 20,
      Month: "مرداد",
      price: 2000000,
    },
    {
      image: Images.VisitingKish,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از کاریز کیش",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3,
      StartDate: 17,
      EndDate: 18,
      Month: "مهر",
      price: 3000000,
    },
    {
      image: Images.QeshmSaltCave,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.MaharlooLakeCamping,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "کمپ دو روزه در دریاچه مهارلو",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
  ];

  const swiperRef = useRef(null);

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-center border-solid border-Borders border-y-[1px] py-9"
    >
      <TemplateV1
        title={title}
        swiperRef={swiperRef}
        titleSize="text-[26px]"
        children={
          <div className="w-full flex">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="mySwiper !grid !grid-cols-3"
            >
              {toursData.map((item, index) => (
                <SwiperSlide key={index}>
                  <EachToursPost
                    image={item.image}
                    imageAlt={item.location}
                    categoryIcon={item.categoryIcon}
                    categoryIconAlt={item.categoryName}
                    categoryName={item.categoryName}
                    location={item.location}
                    agency={item.agency}
                    rate={item.rate}
                    startDate={item.StartDate}
                    endDate={item.EndDate}
                    month={item.Month}
                    price={item.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        }
      />
    </Element>
  );
}
