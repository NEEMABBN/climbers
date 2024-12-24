import React, { useRef, useState } from "react";
import Images from "../Setting/Images";
import { FaChevronLeft } from "react-icons/fa";
import ToursImageGalleryModal from "./ToursImageGalleryModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DetailsToursGallery = ({}) => {
  const imageData = [
    Images.EmiratesCruiseShip,
    Images.EmiratesCruiseShipWithFriends,
    Images.EmiratesCruiseShipAtNight,
    Images.EmiratesCruiseShipPool,
    Images.EmiratesCruiseShipRestaurant,
    Images.EmiratesCruiseShipAtNight,
    Images.EmiratesCruiseShipPool,
    Images.EmiratesCruiseShipRestaurant,
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef2 = useRef(null);
  const paginationRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = imageData.length;
  const nextSlide = () => swiperRef2.current?.slideNext();
  const prevSlide = () => swiperRef2.current?.slidePrev();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="w-full flex items-center relative overflow-hidden lg:gap-3 md:gap-1.5">
      <ToursImageGalleryModal isOpen={isModalOpen} onClose={closeModal} />
      <button
        onClick={openModal}
        className="absolute bottom-2 left-2 p-2.5 bg-CustomBlack rounded-2xl text-white md:flex hidden items-center gap-2"
      >
        <span>و 8 تصویر دیگر</span>
        <FaChevronLeft />
      </button>
      <div className="container mx-auto sm:w-auto md:hidden flex items-center relative sm:pr-0 pr-2">
        <div className="absolute right-4 bottom-2 rounded-2xl bg-CustomBlack z-[90] flex items-center gap-4 py-3.5 px-2">
          <span ref={paginationRef} className="text-white">
            {totalSlides} / {currentSlide}
          </span>
          <button onClick={nextSlide} className="text-white">
            <FaChevronLeft />
          </button>
        </div>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={5}
          onSwiper={(swiper) => {
            swiperRef2.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex + 1);
          }}
          grabCursor={true}
          className="mySwiper !grid grid-cols-1"
        >
          {imageData.map((item, index) => (
            <SwiperSlide key={index} onClick={openModal}>
              <img src={item} alt="" className="w-full rounded-2xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        onClick={openModal}
        className="w-1/2 md:flex hidden h-full cursor-pointer"
      >
        <img src={Images.EmiratesCruiseShip} alt="" className="rounded-2xl" />
      </div>
      <div className="w-1/2 md:flex hidden flex-col items-center lg:gap-3 gap-1.5">
        <div className="flex items-center lg:gap-3 gap-1.5">
          <div onClick={openModal} className="cursor-pointer">
            <img
              src={Images.EmiratesCruiseShipWithFriends}
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div onClick={openModal} className="cursor-pointer">
            <img
              src={Images.EmiratesCruiseShipAtNight}
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex items-center lg:gap-3 gap-1.5">
          <div onClick={openModal} className="cursor-pointer">
            <img
              src={Images.EmiratesCruiseShipRestaurant}
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div onClick={openModal} className="cursor-pointer">
            <img
              src={Images.EmiratesCruiseShipPool}
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsToursGallery;
