import React from "react";
import Images from "../Setting/Images";
import { FaChevronLeft } from "react-icons/fa";

const DetailsToursGallery = () => {
  return (
    <div className="w-full flex items-center relative overflow-hidden gap-3">
      <button className="absolute bottom-2 left-2 p-2.5 bg-CustomBlack rounded-2xl text-white flex items-center gap-2">
        <span>و 8 تصویر دیگر</span>
        <FaChevronLeft />
      </button>
      <div className="w-1/2 flex h-full">
        <img src={Images.EmiratesCruiseShip} alt="" className="rounded-2xl" />
      </div>
      <div className="w-1/2 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="">
            <img
              src={Images.EmiratesCruiseShipWithFriends}
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="">
            <img
              src={Images.EmiratesCruiseShipAtNight}
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="">
            <img
              src={Images.EmiratesCruiseShipRestaurant}
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="">
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
