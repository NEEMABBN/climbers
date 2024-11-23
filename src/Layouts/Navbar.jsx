import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Images from "../Setting/Images";
import NavbarItem from "../Components/NavbarItem";
import { IoMenu } from "react-icons/io5";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex flex-col items-center fixed top-0 right-0 left-0 z-30 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 sm:px-0 px-3">
        <div className="flex items-center md:gap-5 gap-3">
          <button onClick={toggleMenu} className="md:hidden flex">
            <IoMenu className="text-Secoundray text-3xl" />
          </button>
          <img
            src={Images.Logo}
            alt="Climbers Logo"
            className="w-[117px] md:block hidden"
          />
          <img
            src={Images.LogoMobile}
            alt="Climbers Logo"
            className="w-[117px] md:hidden block"
          />
          <div className="md:flex hidden items-center border-solid border-2 border-Borders rounded-2xl bg-white w-[400px] gap-3 py-2 pr-2 pl-7">
            <FiSearch className="text-3xl text-Primary rotate-90" />
            <input
              type="text"
              placeholder="جستجوی اماکن گردشگری، تورها، ..."
              className="w-full outline-none rounded-l-2xl py-1"
            />
          </div>
        </div>
        <button className="text-white bg-Primary px-5 md:py-2 py-3 rounded-2xl md:text-base text-sm">
          ورود / ثبت‌نام
        </button>
      </div>
      <NavbarItem />
      <div className="md:hidden flex w-full border-solid border-Borders border-y-2 py-2">
        <div className="container sm:mx-auto mx-3 flex items-center border-solid border-2 border-Borders rounded-2xl bg-white gap-3 py-2 pr-2 pl-7">
          <FiSearch className="text-3xl text-Primary rotate-90" />
          <input
            type="text"
            placeholder="جستجوی اماکن گردشگری، تورها، ..."
            className="w-full outline-none rounded-l-2xl py-2"
          />
        </div>
      </div>
      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
