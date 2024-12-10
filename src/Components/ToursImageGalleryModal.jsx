import React, { useState, useEffect, useRef } from "react";
import { HiXMark } from "react-icons/hi2";
import Images from "../Setting/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Modal = ({ isOpen, onClose }) => {
  const images = [
    Images.EmiratesCruiseShipWithFriends,
    Images.EmiratesCruiseShipAtNight,
    Images.EmiratesCruiseShipRestaurant,
    Images.EmiratesCruiseShip,
    Images.EmiratesCruiseShipPool,
    Images.EmiratesCruiseShipRestaurant,
    Images.EmiratesCruiseShip,
    Images.EmiratesCruiseShipPool,
  ];

  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimateModal(true), 10);
    } else {
      setAnimateModal(false);
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const swiperRef = useRef();
  const nextSlide = () => {
    swiperRef.current.slideNext();
  };
  const prevSlide = () => {
    swiperRef.current.slidePrev();
  };

  if (!showModal) return null;
  return (
    <div className="fixed inset-0 z-[999999] bg-[#FFFFFF99] w-full flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0"></div>
      <div
        className={`relative transform z-[9999999] transition-all shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),0px_2px_16px_0px_rgba(14,30,37,0.32)] rounded-2xl duration-300 bg-white p-5 gap-7 container mx-auto flex flex-col items-center ${
          animateModal ? "scale-100" : "scale-0"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <h3 className="text-[26px] text-Secoundray">عنوان تستی</h3>
          <button
            onClick={onClose}
            className="bg-white border-solid border-Borders border-[1px] p-2.5 text-2xl text-Secoundray rounded-2xl"
          >
            <HiXMark className="text-gray-600" />
          </button>
        </div>

        <div className="w-full flex flex-col items-center gap-5">
          <Swiper
            slidesPerView={1.4}
            spaceBetween={10}
            modules={[Thumbs]}
            // navigation
            thumbs={{ swiper: thumbsSwiper }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full h-96"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full flex items-center justify-center gap-7">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center text-Primary border-solid border-Primary border-[1px] rounded-2xl p-3.5"
            >
              <FaChevronRight />
            </button>
            <Swiper
              modules={[Thumbs]}
              slidesPerView={4}
              spaceBetween={3}
              onSwiper={setThumbsSwiper}
              className="w-[30%] !mx-0"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-[90px] h-[60px] rounded-2xl cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center text-Primary border-solid border-Primary border-[1px] rounded-2xl p-3.5"
            >
              <FaChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
