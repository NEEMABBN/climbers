import React from "react";
import SearchBar from "../../Components/SearchBar";
import Images from "../../Setting/Images";
import { Link } from "react-router-dom";
import MostVisitedPlace from "./_components/MostVisitedPlace";

export default function TouristAttractions() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <SearchBar>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="text" className="">
            مبدا/ مقصد:
          </label>
          <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2">
            <input
              type="text"
              placeholder="انتخاب کنید"
              className="w-full outline-none"
            />
            <img src={Images.LocationIcon} alt="" className="" />
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="text" className="">
            دسته‌بندی:
          </label>
          <select
            name=""
            id=""
            className="w-full py-2 rounded-2xl px-2 outline-none"
          >
            <option value="" className="">
              انتخاب کنید
            </option>
            <option value="" className="">
              تمیز
            </option>
          </select>
        </div>
        <div className="w-full lg:flex hidden flex-col items-start gap-1">
          <label htmlFor="" className="">
            سبک سفر:
          </label>
          <select
            name=""
            id=""
            className="w-full py-2 rounded-2xl px-2 outline-none"
          >
            <option value="" className="">
              انتخاب کنید
            </option>
            <option value="" className="">
              تمیز
            </option>
          </select>
        </div>
        <div className="w-full lg:flex hidden flex-col items-start gap-1">
          <label htmlFor="" className="">
            سطح توانایی:
          </label>
          <select
            name=""
            id=""
            className="w-full py-2 rounded-2xl px-2 outline-none"
          >
            <option value="" className="">
              انتخاب کنید
            </option>
            <option value="" className="">
              قوی
            </option>
          </select>
        </div>
        <Link to="" className="text-white bg-Primary px-9 py-2.5 rounded-2xl">
          جستجو
        </Link>
      </SearchBar>
      <MostVisitedPlace />
    </div>
  );
}
