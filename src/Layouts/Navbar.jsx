import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Images from "../Setting/Images";
import NavbarItem from "../Components/NavbarItem";
import { IoMenu } from "react-icons/io5";
import SideMenu from "./SideMenu";
import { matchPath, useLocation } from "react-router-dom";
import CustomModal from "../Components/CustomModal";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isFirstStage, setIsFirstStage] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const openModal = () => {
    setIsLogin(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsLogin(false);
    setIsFirstStage(true);
    document.body.style.overflow = "auto";
  };
  const getPageName = () => {
    const matchTours = matchPath("/tours/:id", location.pathname);
    const matchSubmit = matchPath(
      "/tours/:id/submit-passengers",
      location.pathname
    );
    const matchTouristAttractions = matchPath(
      "/tourist-attractions/:id",
      location.pathname
    );
    const pageName = matchTouristAttractions
      ? "اماکن"
      : matchTours || matchSubmit
      ? "تورها"
      : null;
    if (pageName) return pageName;
    switch (location.pathname) {
      case "/":
        return (
          <img
            src={Images.LogoMobile}
            alt="Climbers Logo"
            className="w-[117px] md:hidden block"
          />
        );
      case "/tours":
      case "/tours/search":
        return "تورها";
      case "/tourist-attractions":
      case "/tourist-attractions/search":
        return "اماکن";
      case "/reports":
        return "گزارش برنامه";
      case "/agencies":
        return "نقشه";
      case "/blogs":
        return "بلاگ";
      case "/contact":
        return "تیم‌ها";
      case "/somePage":
        return "فروشگاه";
      default:
        return (
          <img
            src={Images.LogoMobile}
            alt="Climbers Logo"
            className="w-[117px] md:hidden block"
          />
        );
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="w-full flex flex-col items-center fixed top-0 right-0 left-0 z-[10000] bg-white shadow-md">
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
          <div className="md:hidden flex text-lg font-bold text-Secoundray">
            {getPageName()}
          </div>
          <div className="md:flex hidden items-center border-solid border-2 border-Borders rounded-2xl bg-white w-[400px] gap-3 py-2 pr-2 pl-7">
            <FiSearch className="text-3xl text-Primary rotate-90" />
            <input
              type="text"
              placeholder="جستجوی اماکن گردشگری، تورها، ..."
              className="w-full outline-none rounded-l-2xl py-1"
            />
          </div>
        </div>
        <button
          onClick={openModal}
          className="text-white bg-Primary px-5 md:py-2 py-3 rounded-2xl md:text-base text-sm"
        >
          ورود / ثبت‌نام
        </button>
      </div>
      <NavbarItem />
      {isHomePage && (
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
      )}
      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <CustomModal motion={isLogin} closeModal={closeModal}>
        <span className="bg-Disable rounded-2xl p-6"></span>
        <span className="text-base text-Secoundray">
          {isFirstStage ? "ورود یا ثبت‌نام در کلایمبر" : "تایید شماره همراه"}
        </span>
        <p className="text-Disable text-SubTitle text-center">
          {isFirstStage
            ? "برای ورود شماره همراه خود را وارد کنید."
            : "کد ۴ رقمی ارسال‌شده به شماره ”۰۹۳۹۷۱۱۱۳۱۳” را واردکنید."}
        </p>
        {isFirstStage ? (
          ""
        ) : (
          <span
            onClick={() => setIsFirstStage(!isFirstStage)}
            className="text-Primary text-SubTitle cursor-pointer"
          >
            اصلاح شماره
          </span>
        )}
        {isFirstStage ? (
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="userNumber" className="text-Secoundray">
              شماره همراه :
            </label>
            <input
              type="number"
              name="userNumber"
              id="userNumber"
              className="w-full border-solid border-Borders focus:ring-0 focus:border-Borders border-[1px] rounded-2xl py-2.5"
            />
          </div>
        ) : (
          <div className="w-full flex flex-col items-center">
            <label
              htmlFor="verificationCode"
              className="w-full flex items-center justify-between"
            >
              <span className="">کد تایید :</span>
              <span className="">01:12</span>
            </label>
            <div className="w-full grid grid-cols-4 gap-2.5">
              <input
                type="number"
                name="verificationCode"
                id="verificationCode"
                maxLength={1}
                className="border-solid border-Borders border-[1px] rounded-2xl"
              />
              <input
                type="number"
                name="verificationCode"
                id="verificationCode"
                maxLength={1}
                className="border-solid border-Borders border-[1px] rounded-2xl"
              />
              <input
                type="number"
                name="verificationCode"
                id="verificationCode"
                maxLength={1}
                className="border-solid border-Borders border-[1px] rounded-2xl"
              />
              <input
                type="number"
                name="verificationCode"
                id="verificationCode"
                maxLength={1}
                className="border-solid border-Borders border-[1px] rounded-2xl"
              />
            </div>
          </div>
        )}
        {isFirstStage ? (
          <button
            onClick={() => setIsFirstStage(!isFirstStage)}
            className="bg-Primary text-white py-3 px-20 rounded-2xl"
          >
            ادامه
          </button>
        ) : (
          <button
            onClick={closeModal}
            className="bg-Primary text-white py-3 px-20 rounded-2xl"
          >
            تایید
          </button>
        )}
      </CustomModal>
    </div>
  );
}
