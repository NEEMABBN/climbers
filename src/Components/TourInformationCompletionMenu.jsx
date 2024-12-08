import React from "react";
import "ldrs/ping";

export default function TourInformationCompletionMenu() {
  return (
    <div className="w-[26%] h-fit sticky top-[8.5rem] left-0 flex flex-col items-center gap-3">
      <div className="w-full flex flex-col items-center border-solid bg-[#FAFAFA] p-3 gap-3 border-Borders border-[1px] rounded-2xl">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-Disable text-SubTitle">مبدا:</span>
            <span className="text-Secoundray text-SubTitle">طهران</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-Disable text-SubTitle">مقصد:</span>
            <span className="text-Secoundray text-SubTitle">ساری-مازندران</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-1.5">
          <span className="text-Secoundray text-SubTitle">تاریخ برگزاری:</span>
          <div className="w-full grid grid-cols-3 gap-2">
            <button className="text-Secoundray py-2 rounded-2xl bg-white border-Borders border-[1px] border-solid hover:text-Primary hover:border-Primary transition-all">
              مهر
            </button>
            <button className="text-Secoundray py-2 rounded-2xl bg-white border-Borders border-[1px] border-solid hover:text-Primary hover:border-Primary transition-all">
              آبان
            </button>
            <button className="text-Secoundray py-2 rounded-2xl bg-white border-Borders border-[1px] border-solid hover:text-Primary hover:border-Primary transition-all">
              آذر
            </button>
          </div>
          <select
            name=""
            id=""
            className="text-Secoundray text-SubTitle w-full border-solid border-Borders"
          >
            <option value="" className="">
              18 تا 25 آذر
            </option>
            <option value="" className="">
              19 تا 30 مهر
            </option>
            <option value="" className="">
              5 تا 31 مرداد
            </option>
          </select>
        </div>

        <div className="w-full flex flex-col items-start gap-1.5">
          <span className="text-SubTitle text-Secoundray">تعداد مسافرین:</span>
          <select
            name=""
            id=""
            className="text-Secoundray text-SubTitle w-full border-solid border-Borders"
          >
            <option value="" className="">
              3 نفر
            </option>
            <option value="" className="">
              5 نفر
            </option>
            <option value="" className="">
              7 نفر
            </option>
          </select>
        </div>

        <div className="w-full flex flex-col items-center gap-1 py-2">
          <span className="text-Error text-center text-SubTitle">
            * 50 % جمع کل برای پیش پرداخت.
          </span>
          <span className="text-Error text-center text-SubTitle">
            * 50 % جمع کل برای پیش پرداخت و پرداختی های بیشتر و بیشتر.
          </span>
        </div>

        <div className="w-full flex flex-col items-center gap-1">
          <div className="w-full flex items-center justify-between">
            <span className="text-Disable text-SubTitle">جمع کل:</span>
            <div className="flex items-center gap-1">
              <span className="text-Secoundray text-SubTitle">1000000</span>
              <span className="text-Disable text-sm">تومان</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-Disable text-SubTitle">هزینه هر نفر:</span>
            <div className="flex items-center gap-1">
              <span className="text-Secoundray text-SubTitle">500000</span>
              <span className="text-Disable text-sm">تومان</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-Disable text-SubTitle">
              مبلغ پیش‌پرداخت(50%):
            </span>
            <div className="flex items-center gap-1">
              <span className="text-Secoundray text-SubTitle">500000</span>
              <span className="text-Disable text-sm">تومان</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-Primary text-white py-2.5 text-center rounded-2xl">
          تکمیل اطلاعات
        </button>
      </div>

      <div className="w-full flex items-center justify-center gap-2.5 py-1 border-solid border-Borders border-[1px] rounded-2xl">
        <l-ping size="40" speed="2" color="#0E9A8A"></l-ping>
        <span className="text-Disable text-SubTitle">ظرفیت باقی‌مانده:</span>
        <span className="text-Secoundray text-SubTitle">12/20 نفر</span>
      </div>
    </div>
  );
}
