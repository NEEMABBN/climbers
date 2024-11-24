import React from "react";
import Images from "../../../Setting/Images";

export default function SearchBar() {
  return (
    <div className="w-full bg-[#DFE5E587] py-10">
      <div className="container mx-auto flex items-end gap-5">
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
            روز:
          </label>
          <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2">
            <input
              type="text"
              placeholder="انتخاب کنید"
              className="w-full outline-none"
            />
            <img src={Images.CalendarIcon} alt="" className="" />
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="" className="">
            سبک سفر:
          </label>
          <select
            name=""
            id=""
            className="w-full py-2 rounded-2xl px-2 outline-none"
          >
            <option value="" className="!text-Disable" disabled selected hidden>
              انتخاب کنید
            </option>
            <option value="" className="">
              تمیز
            </option>
          </select>
        </div>

        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="" className="">
            سطح توانایی:
          </label>
          <select
            name=""
            id=""
            className="w-full py-2 rounded-2xl px-2 outline-none"
          >
            <option value="" className="!text-Disable" disabled selected hidden>
              انتخاب کنید
            </option>
            <option value="" className="">
              قوی
            </option>
          </select>
        </div>

        <button className="text-white bg-Primary px-6 py-2 rounded-2xl">
          جستجو
        </button>
      </div>
    </div>
  );
}
