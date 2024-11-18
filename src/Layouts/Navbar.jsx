import React from "react";
import { FiSearch } from "react-icons/fi";
import Images from "../Setting/Images";
import NavbarItem from "../Components/NavbarItem";

export default function Navbar() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-5">
          <img src={Images.Logo} alt="" className="w-[117px]" />
          <div className="flex items-center border-solid border-2 border-Borders rounded-2xl bg-white w-[400px] gap-3 py-2 pr-2 pl-7">
            <FiSearch className="text-3xl text-Primary rotate-90" />
            <input
              type="text"
              placeholder="جستجوی اماکن گردشگری، تورها، ..."
              className="w-full outline-none rounded-l-2xl py-1"
            />
          </div>
        </div>
        <button className="text-white bg-Primary px-5 py-2 rounded-2xl">
          ورود / ثبت‌نام
        </button>
      </div>
      <NavbarItem />
    </div>
  );
}
