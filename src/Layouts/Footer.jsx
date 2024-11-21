import React from "react";
import Images from "../Setting/Images";
import { Link } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGoogle } from "react-icons/tb";
import { LiaTelegram } from "react-icons/lia";
import FooterNavItem from "../Components/FooterNavItem";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-full py-16 bg-Borders flex flex-col items-center gap-10">
      <div className="container mx-auto flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-10 gap-5">
        <div className="md:w-auto w-[270px] flex items-center justify-start bg-white rounded-2xl md:pl-8 md:gap-7 gap-2">
          <img src={Images.CupIcon} alt="" className="w-[45px]" />
          <span className="text-Secoundray md:text-base text-sm">
            کیفیت بالای خدمات
          </span>
        </div>
        <div className="md:w-auto w-[270px] flex items-center justify-start bg-white rounded-2xl md:pl-8 md:gap-7 gap-2">
          <img src={Images.CashIcon} alt="" className="w-[45px]" />
          <span className="text-Secoundray md:text-base text-sm">
            مناسب با بودجه شما
          </span>
        </div>
        <div className="md:w-auto w-[270px] flex items-center justify-start bg-white rounded-2xl md:pl-8 md:gap-7 gap-2">
          <img src={Images.LeadersIcon} alt="" className="w-[45px]" />
          <span className="text-Secoundray md:text-base text-sm">
            تورلیدرهای حرفه‌ای و تایید شده
          </span>
        </div>
      </div>
      <div className="w-full border-solid border-y-2 border-white">
        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between py-5 lg:gap-0 gap-5">
          <img src={Images.Logo} alt="" className="w-[117px]" />
          <FooterNavItem />
          <div className="flex items-center gap-4">
            <Link to="/" className="text-Secoundray text-2xl">
              <SlSocialLinkedin />
            </Link>
            <Link to="/" className="text-Secoundray text-2xl">
              <TbBrandGoogle />
            </Link>
            <Link to="/" className="text-Secoundray text-2xl">
              <LiaTelegram />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-0 px-3 flex sm:flex-row flex-col items-center justify-between lg:gap-0 sm:gap-5 gap-7">
        <div className="sm:w-1/2 w-full flex flex-col items-start gap-2.5">
          <span className="text-Secoundray font-semibold">چرا کوهنورد؟</span>
          <p className="text-Secoundray sm:line-clamp-3 text-sm leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            و با استفاده از طراحان گرافیک است...
          </p>
        </div>
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-2">
            <IoCallOutline className="text-Primary text-2xl" />
            <div className="flex items-center gap-5">
              <span className="text-Secoundray sm:text-base text-sm">
                09875653463
              </span>
              <span className="text-Secoundray sm:text-base text-sm">
                09875653463
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-Primary text-2xl" />
            <span className="text-Secoundray text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
