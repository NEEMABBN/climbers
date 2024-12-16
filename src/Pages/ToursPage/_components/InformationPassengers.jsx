import React, { useState } from "react";
import PassengerInfoTemplate from "../../../Components/PassengerInfoTemplate";
import InformationCustomInput from "../../../Components/InformationCustomInput";
import InformationCustomSelect from "../../../Components/InformationCustomSelect";
import CustomModal from "../../../Components/CustomModal";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

export default function InformationPassengers() {
  const optionsData = ["انتخاب کنید", "گزینه یک", "گزینه دو", "گزینه سه"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const isSuccess = true; //Manual Control...!!

  return (
    <div className="container mx-auto flex items-center py-12">
      <div className="w-[75%] mx-auto flex flex-col items-center gap-10">
        <div className="w-full flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-7">
          <h3 className="sm:text-largTitle text-xl">اطلاعات مسافرین :</h3>
          <select
            name=""
            id=""
            className="sm:w-fit w-full md:pl-12 pl-0 bg-white sm:text-base text-SubTitle border-solid border-Borders border-[1px] rounded-2xl"
          >
            <option value="" className="">
              لیست مسافران قبلی
            </option>
            <option value="" className="">
              محمد محمدی
            </option>
          </select>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <PassengerInfoTemplate title="مسافر 1 - بزرگسال - سرپرست">
            <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <InformationCustomInput label="نام و نام‌خانوادگی:" />
              <InformationCustomInput label="نام پدر:" />
              <InformationCustomSelect
                label="جنسیت:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="وضعیت تاهل:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="محل تولد:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="تاریخ تولد:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomInput label="شماره شناسنامه:" />
              <InformationCustomInput label="کد ملی:" />
              <InformationCustomInput label="شماره همراه:" />
              <InformationCustomSelect
                label="استان:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="شهر:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomInput label="کدپستی:" />
              <InformationCustomInput label="شماره ثابت منزل:" />
              <InformationCustomInput
                label="آدرس منزل:"
                className="lg:col-span-2"
              />
              <InformationCustomInput label="شماره ثابت محل کار:" />
              <InformationCustomInput
                label="آدرس محل کار:"
                className="lg:col-span-2"
              />
            </div>
          </PassengerInfoTemplate>
          <PassengerInfoTemplate title="مسافر 2 - بزرگسال">
            <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <InformationCustomInput label="نام و نام‌خانوادگی:" />
              <InformationCustomInput label="نام پدر:" />
              <InformationCustomSelect
                label="جنسیت:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="وضعیت تاهل:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="محل تولد:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="تاریخ تولد:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomInput label="شماره شناسنامه:" />
              <InformationCustomInput label="کد ملی:" />
              <InformationCustomInput label="شماره همراه:" />
              <InformationCustomSelect
                label="استان:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="شهر:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomInput label="کدپستی:" />
              <InformationCustomInput label="شماره ثابت منزل:" />
              <InformationCustomInput
                label="آدرس منزل:"
                className="lg:col-span-2"
              />
              <InformationCustomInput label="شماره ثابت محل کار:" />
              <InformationCustomInput
                label="آدرس محل کار:"
                className="lg:col-span-2"
              />
            </div>
          </PassengerInfoTemplate>
          <PassengerInfoTemplate title="مسافر 3 - کودک">
            <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <InformationCustomInput label="نام و نام‌خانوادگی:" />
              <InformationCustomInput label="نام پدر:" />
              <InformationCustomSelect
                label="جنسیت:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomInput label="شماره شناسنامه:" />
              <InformationCustomSelect
                label="محل تولد:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="تاریخ تولد:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="استان:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomSelect
                label="شهر:"
                options={optionsData.map((item, index) => (
                  <option key={index} className="">
                    {item}
                  </option>
                ))}
              />
              <InformationCustomInput label="کدپستی:" />
              <InformationCustomInput label="شماره ثابت منزل:" />
              <InformationCustomInput
                label="آدرس منزل:"
                className="lg:col-span-2"
              />
            </div>
          </PassengerInfoTemplate>
        </div>

        <div className="w-full bg-[#FAFAFA] flex xl:flex-row flex-col items-start border-solid border-Borders border-[1px] rounded-2xl p-5 gap-3">
          <div className="w-full flex lg:flex-row flex-col items-start gap-3">
            <div className="w-full flex flex-col items-center gap-4 border-solid border-Borders lg:border-l-[1px] lg:border-b-0 pb-3 lg:pb-0 border-b-[1px] lg:pl-3 pl-0">
              <div className="w-full flex items-center justify-between">
                <span className="text-Disable sm:text-SubTitle text-sm">
                  نام تور:
                </span>
                <span className="sm:text-SubTitle text-sm text-Secoundray">
                  تور کشتی کروز امارات
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-Disable sm:text-SubTitle text-sm">
                  مبدا:
                </span>
                <span className="sm:text-SubTitle text-sm text-Secoundray">
                  ساری
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-Disable sm:text-SubTitle text-sm">
                  مقصد:
                </span>
                <span className="sm:text-SubTitle text-sm text-Secoundray">
                  جنوب-قشم
                </span>
              </div>
            </div>
            <div className="w-full min-h-full flex flex-col items-center gap-4 border-solid border-b-[1px] border-Borders lg:border-none pb-3 lg:pb-0">
              <div className="w-full flex items-center justify-between">
                <span className="text-Disable sm:text-SubTitle text-sm">
                  تعداد مسافرین:
                </span>
                <span className="sm:text-SubTitle text-sm text-Secoundray">
                  3 بزرگسال
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-Disable sm:text-SubTitle text-sm">
                  تاریخ برگزاری:
                </span>
                <span className="sm:text-SubTitle text-sm text-Secoundray">
                  18 تا 25 آذر
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:flex-row flex-col items-start gap-3">
            <div className="w-full flex flex-col items-center gap-4 border-solid border-Borders xl:border-r-[1px] lg:border-l-[1px] lg:border-b-0 border-b-[1px] 2xl:border-l-0 2xl:pr-3 2xl:pl-0 lg:pl-3 lg:pb-0 pb-3">
              <div className="w-full flex items-center justify-between">
                <span className="text-Disable sm:text-SubTitle text-sm">
                  جمع کل:
                </span>
                <div className="flex items-center gap-1">
                  <span className="sm:text-SubTitle text-sm text-Secoundray">
                    1.000.000
                  </span>
                  <span className="text-SubTitle text-Disable">تومان</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-Disable sm:text-SubTitle text-sm">
                  هزینه هر نفر
                </span>
                <div className="flex items-center gap-1">
                  <span className="sm:text-SubTitle text-sm text-Secoundray">
                    500.000
                  </span>
                  <span className="sm:text-SubTitle text-sm text-Disable">
                    تومان
                  </span>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-Disable sm:text-SubTitle text-sm">
                  مبلغ پیش‌پرداخت:
                </span>
                <div className="flex items-center gap-1">
                  <span className="sm:text-SubTitle text-sm text-Secoundray">
                    3,000,000
                  </span>
                  <span className="sm:text-SubTitle text-sm text-Disable">
                    تومان
                  </span>
                </div>
              </div>
            </div>
            <div className="2xl:w-auto w-full flex flex-col items-center gap-2 2xl:mx-5 xl:mx-2">
              <button
                onClick={openModal}
                className="w-full bg-Primary text-white text-SubTitle rounded-2xl text-nowrap py-3 2xl:px-7 px-4"
              >
                تایید و پرداخت
              </button>
              <button className="w-full text-Primary bg-white text-SubTitle border-solid border-Primary border-[1px] rounded-2xl py-3 2xl:px-7 px-4">
                بازگشت
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomModal motion={isModalOpen}>
        <button
          onClick={closeModal}
          className="absolute top-4 left-4 bg-white border-solid border-Borders border-[1px] rounded-2xl p-1.5 text-2xl text-Secoundray"
        >
          <IoCloseOutline />
        </button>
        <div
          className={`p-3 text-2xl rounded-2xl text-white text-center ${
            isSuccess ? "bg-Primary" : "bg-Error"
          }`}
        >
          {isSuccess ? <IoCheckmarkOutline /> : <IoCloseOutline />}
        </div>
        <span className="text-Secoundray text-base">
          {isSuccess ? "پرداخت با موفقیت انجام شد :)" : "پرداخت انجام نشد :("}
        </span>
        <p className="text-Disable text-center text-SubTitle leading-6">
          {isSuccess
            ? "برای پیگیری مراحل سفارش خود، و اطلاعات بیشتر از داشبورد پیگیری کنید."
            : "برای پیگیری مراحل سفارش خود، و اطلاعات بیشتر از داشبورد پیگیری کنید."}
        </p>
        {isSuccess && (
          <div className="flex items-center gap-2">
            <span className="text-SubTitle text-Secoundray">
              کد پیگیری سفارش:
            </span>
            <span className="text-SubTitle text-Secoundray">374693</span>
          </div>
        )}
        <div className="w-full flex items-center justify-between gap-2">
          <button className="w-full bg-Primary text-white border-solid border-Primary border-[1px] py-3 rounded-2xl">
            {isSuccess ? "داشبورد" : "تلاش دوباره"}
          </button>
          <button
            onClick={closeModal}
            className="w-full bg-white border-solid py-3 border-Primary border-[1px] text-Primary rounded-2xl"
          >
            بازگشت
          </button>
        </div>
      </CustomModal>
    </div>
  );
}
