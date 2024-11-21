import React from "react";
import Images from "../../../Setting/Images";
import { FaChevronLeft } from "react-icons/fa";

export default function TripReport() {
  return (
    <div className="container mx-auto flex lg:flex-row flex-col-reverse sm:px-0 px-2 lg:gap-0 gap-10 items-center justify-between relative z-[1] py-16">
      <img
        src={Images.LinearSVG}
        alt=""
        className="w-[1100px] absolute right-[-20rem] top-[-10rem] z-[-1]"
      />
      <div className="lg:w-[40%] w-full flex flex-col lg:items-start items-center gap-5">
        <h2 className="text-Secoundray md:text-3xl text-2xl">
          گزارش سفر ، خاطرات شما
        </h2>
        <p className="text-Secoundray lg:text-start text-center md:text-base text-sm md:leading-normal leading-6">
          عاشق سفر به جاهای بکر و داری؟ یا همیشه در سفری و همه مسیر ها رو بلدی؟
          اگر تو هم تجربه داری، همین الان گزارش سفرتو برامون بنویس
        </p>
        <button className="text-white flex md:text-base text-sm items-center gap-3 bg-Primary px-5 py-2.5 rounded-2xl">
          گزارش برنامه
          <FaChevronLeft />
        </button>
      </div>
      <div className="lg:w-1/2 w-full rounded-[32px] overflow-hidden">
        <img src={Images.GirlAtJungle} alt="" className="w-full" />
      </div>
    </div>
  );
}
