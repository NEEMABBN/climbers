import React from "react";
import Images from "../../../Setting/Images";
import { FaChevronLeft } from "react-icons/fa";

export default function TripReport() {
  return (
    <div className="container mx-auto flex items-center justify-between relative z-[1] py-16">
      <img
        src={Images.LinearSVG}
        alt=""
        className="w-[1100px] absolute right-[-20rem] top-[-10rem] z-[-1]"
      />
      <div className="w-[40%] flex flex-col items-start gap-5">
        <h2 className="text-Secoundray text-3xl">گزارش سفر ، خاطرات شما</h2>
        <p className="text-Secoundray">
          عاشق سفر به جاهای بکر و داری؟ یا همیشه در سفری و همه مسیر ها رو بلدی؟
          اگر تو هم تجربه داری، همین الان گزارش سفرتو برامون بنویس
        </p>
        <button className="text-white flex items-center gap-3 bg-Primary px-5 py-2.5 rounded-2xl">
          گزارش برنامه
          <FaChevronLeft />
        </button>
      </div>
      <div className="w-1/2 rounded-[32px] overflow-hidden">
        <img src={Images.GirlAtJungle} alt="" className="w-full" />
      </div>
    </div>
  );
}
