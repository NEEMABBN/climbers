import React from "react";
import Images from "../../../Setting/Images";
import EachSelectedDestinations from "../../../Components/EachSelectedDestinations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function SelectedDestinations() {
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
  ];

  return (
    <div className="w-full bg-[#EAEAEA87] py-12">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <h2 className="md:text-3xl text-2xl text-Secoundray">مقصدهای منتخب</h2>
        <div className="w-full">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={10}
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
                  activeTour={item.activeTour}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
