import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Images from "../../../Setting/Images";
import EachSelectedDestinations from "../../../Components/EachSelectedDestinations";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SelectedCities() {
  const destinationData = [
    {
      image: Images.MahmudabadBeaches,
      name: "سواحل محمودآباد",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.MountDamavand,
      name: "دماوند",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.MasalCity,
      name: "ماسال",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.BandarAbbasCity,
      name: "بندرعباس",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.MahmudabadBeaches,
      name: "سواحل محمودآباد",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.MountDamavand,
      name: "دماوند",
      activeTour: "(25 تور فعال)",
    },
    {
      image: Images.MasalCity,
      name: "ماسال",
      activeTour: "(25 تور فعال)",
    },
  ];

  const swiperRef = useRef();

  const nextSlide = () => {
    swiperRef.current.slideNext();
  };
  const prevSlide = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <div className="w-full bg-[#EAEAEA87] py-12">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="md:text-3xl text-2xl text-Secoundray">شهرهای منتخب</h2>
        <div className="w-full">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={10}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="mySwiper !py-8 lg:!px-0 !px-2"
          >
            {destinationData.map((item, index) => (
              <SwiperSlide key={index}>
                <EachSelectedDestinations
                  image={item.image}
                  imageAlt={item.name}
                  locationName={item.name}
                  isButton={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex items-center justify-between sm:px-0 px-2">
          <div className="lg:w-auto w-full flex items-center lg:justify-normal justify-center gap-3 relative z-[2]">
            <button
              onClick={prevSlide}
              className="bg-white p-2.5 hover:bg-Primary rounded-2xl text-xl text-Primary hover:text-white border-solid border-[1px] border-Primary transition-all duration-300"
            >
              <FaAngleRight />
            </button>
            <Link
              to=""
              className="bg-white lg:hidden block text-Primary border-solid border-[1px] border-Primary rounded-2xl px-6 py-2"
            >
              نمایش بیشتر
            </Link>
            <button
              onClick={nextSlide}
              className="bg-white p-2.5 hover:bg-Primary rounded-2xl text-xl text-Primary hover:text-white border-solid border-[1px] border-Primary transition-all duration-300"
            >
              <FaAngleLeft />
            </button>
          </div>
          <Link
            to=""
            className="bg-white lg:block hidden text-Primary border-solid border-[1px] border-Primary rounded-2xl px-6 py-2"
          >
            نمایش بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}
