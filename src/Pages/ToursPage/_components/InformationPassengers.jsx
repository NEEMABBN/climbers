import React from "react";
import PassengerInfoTemplate from "../../../Components/PassengerInfoTemplate";
import InformationCustomInput from "../../../Components/InformationCustomInput";
import InformationCustomSelect from "../../../Components/InformationCustomSelect";

export default function InformationPassengers() {
  const optionsData = ["انتخاب کنید", "گزینه یک", "گزینه دو", "گزینه سه"];

  return (
    <div className="container mx-auto flex items-center py-12">
      <div className="w-[75%] mx-auto flex flex-col items-center gap-10">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-largTitle">اطلاعات مسافرین :</h3>
          <select
            name=""
            id=""
            className="w-fit pl-12 bg-white border-solid border-Borders border-[1px] rounded-2xl"
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
            <div className="w-full grid grid-cols-3 gap-4">
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
                className="col-span-2"
              />
              <InformationCustomInput label="شماره ثابت محل کار:" />
              <InformationCustomInput
                label="آدرس محل کار:"
                className="col-span-2"
              />
            </div>
          </PassengerInfoTemplate>
          <PassengerInfoTemplate title="مسافر 2 - بزرگسال">
            <div className="w-full grid grid-cols-3 gap-4">
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
                className="col-span-2"
              />
              <InformationCustomInput label="شماره ثابت محل کار:" />
              <InformationCustomInput
                label="آدرس محل کار:"
                className="col-span-2"
              />
            </div>
          </PassengerInfoTemplate>
          <PassengerInfoTemplate title="مسافر 3 - کودک">
            <div className="w-full grid grid-cols-3 gap-4">
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
                className="col-span-2"
              />
            </div>
          </PassengerInfoTemplate>
        </div>

        <div className="w-full bg-[#FAFAFA] flex items-start border-solid border-Borders border-[1px] rounded-2xl p-5 gap-3">
          <div className="w-full flex flex-col items-center gap-4 border-solid border-Borders border-l-[1px] pl-3">
            <div className="w-full flex items-center justify-between">
              <span className="text-Disable text-SubTitle">نام تور:</span>
              <span className="text-SubTitle text-Secoundray">
                تور کشتی کروز امارات
              </span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-Disable text-SubTitle">مبدا:</span>
              <span className="text-SubTitle text-Secoundray">ساری</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-Disable text-SubTitle">مقصد:</span>
              <span className="text-SubTitle text-Secoundray">جنوب-قشم</span>
            </div>
          </div>

          <div className="w-full min-h-full flex flex-col items-center gap-4">
            <div className="w-full flex items-center justify-between">
              <span className="text-Disable text-SubTitle">تعداد مسافرین:</span>
              <span className="text-SubTitle text-Secoundray">3 بزرگسال</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-Disable text-SubTitle">تاریخ برگزاری:</span>
              <span className="text-SubTitle text-Secoundray">
                18 تا 25 آذر
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-4 border-solid border-Borders border-r-[1px] pr-3">
            <div className="w-full flex items-center justify-between">
              <span className="text-Disable text-SubTitle">جمع کل:</span>
              <div className="flex items-center gap-1">
                <span className="text-SubTitle text-Secoundray">1.000.000</span>
                <span className="text-SubTitle text-Disable">تومان</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-Disable text-SubTitle">هزینه هر نفر</span>
              <div className="flex items-center gap-1">
                <span className="text-SubTitle text-Secoundray">500.000</span>
                <span className="text-SubTitle text-Disable">تومان</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-Disable text-SubTitle">
                مبلغ پیش‌پرداخت:
              </span>
              <div className="flex items-center gap-1">
                <span className="text-SubTitle text-Secoundray">3,000,000</span>
                <span className="text-SubTitle text-Disable">تومان</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mx-5">
            <button className="w-full bg-Primary text-white rounded-2xl text-nowrap py-3 px-7">
              تایید و پرداخت
            </button>
            <button className="w-full text-Primary bg-white border-solid border-Primary border-[1px] rounded-2xl py-3 px-7">
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
