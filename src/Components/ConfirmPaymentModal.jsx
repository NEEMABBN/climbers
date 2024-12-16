import React, { useEffect, useState } from "react";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

export default function ConfirmPaymentModal({ isSuccess, isOpen, onClose }) {
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimateModal(true), 10);
    } else {
      setAnimateModal(false);
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[999999] bg-[#FFFFFF99] w-full flex items-center justify-center sm:px-0 px-2">
      <div
        className={`${
          animateModal
            ? "translate-y-0 opacity-100"
            : "translate-y-[-50rem] opacity-0"
        } w-[415px] shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),0px_2px_16px_0px_rgba(14,30,37,0.32)] transform transition-all duration-500 bg-white flex flex-col items-center gap-4 px-4 py-8 relative rounded-2xl`}
      >
        <button
          onClick={onClose}
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
            onClick={onClose}
            className="w-full bg-white border-solid py-3 border-Primary border-[1px] text-Primary rounded-2xl"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
}
