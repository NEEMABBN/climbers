import React from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import Images from "../../../Setting/Images";
import EachTeamsPost from "../../../Components/EachTeamsPost";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function ActiveTeams() {
  const teamsData = [
    {
      companyImage: Images.ParmisCompany,
      companyName: "پارمیس سیر توس",
      companyWorkArea: "شرکت خدمات مسافرت هوایی و جهانگردی",
      experience: 15,
      tripsNumber: 500,
      originCity: "ساری",
      rate: 3.5,
    },
    {
      companyImage: Images.TahaAirCompany,
      companyName: "طاها پرواز آسمان",
      companyWorkArea: "شرکت خدمات مسافرت هوایی",
      experience: 20,
      tripsNumber: 550,
      originCity: "ساری",
      rate: 4.5,
    },
    {
      companyImage: Images.AbnoosCompany,
      companyName: "آبنوس گشت اسپادانا",
      companyWorkArea: "شرکت خدمات مسافرت خوابی و جهانگردی",
      experience: 14,
      tripsNumber: 450,
      originCity: "بابل",
      rate: 4,
    },
    {
      companyImage: Images.ElhamAirCompany,
      companyName: "الهام پرواز شیراز",
      companyWorkArea: "دفتر خدمات مسافرتی هوایی",
      experience: 10,
      tripsNumber: 500,
      originCity: "شیراز",
      rate: 4.5,
    },
  ];

  return (
    <div className="w-full flex py-12 bg-[#EAEAEA87]">
      <TemplateV1
        title="فعال‌ترین تیم‌ها"
        links="/Contact"
        children={
          <div className="w-full">
            <Swiper
              slidesPerView={1.1}
              spaceBetween={8}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              className="mySwiper xl:!hidden !py-10 !px-2"
            >
              {teamsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <EachTeamsPost
                    image={item.companyImage}
                    name={item.companyName}
                    workArea={item.companyWorkArea}
                    experience={item.experience}
                    origin={item.originCity}
                    trips={item.tripsNumber}
                    rate={item.rate}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full xl:grid hidden grid-cols-2 gap-4">
              {teamsData.map((item, index) => (
                <EachTeamsPost
                  key={index}
                  image={item.companyImage}
                  name={item.companyName}
                  workArea={item.companyWorkArea}
                  experience={item.experience}
                  origin={item.originCity}
                  trips={item.tripsNumber}
                  rate={item.rate}
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
