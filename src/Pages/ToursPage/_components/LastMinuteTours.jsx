import React, { useRef } from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import Images from "../../../Setting/Images";
import EachLastMinuteTours from "../../../Components/EachLastMinuteTours";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export default function LastMinuteTours() {
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
      timer: "10:35",
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
      timer: "10:35",
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
      timer: "10:35",
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
      timer: "10:35",
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
      timer: "10:35",
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
      timer: "10:35",
    },
  ];
  const swiperRef = useRef();
  const navigate = useNavigate();

  const submitDetailsPage = (tours) => {
    //When you get the "API", check the "location" value!!!
    if (!tours || !tours.location) {
      console.error("Post object or location is missing:", tours);
      return;
    }
    const slug = tours.location.replace(/\s+/g, "-");
    navigate(`/tours/${tours.id}-${slug}`, { state: tours });
  };

  return (
    <div className="w-full py-12">
      <TemplateV1
        title="تورهای لحظه آخری"
        gaps="gap-1"
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
              {toursData.map((item, index) => (
                <SwiperSlide key={index}>
                  <EachLastMinuteTours
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
                    timer={item.timer}
                    onClick={() => submitDetailsPage(item)}
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
