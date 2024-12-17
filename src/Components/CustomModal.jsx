import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function CustomModal({ children, motion, closeModal }) {
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    if (motion) {
      setShowModal(true);
      setTimeout(() => setAnimateModal(true), 10);
    } else {
      setAnimateModal(false);
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [motion]);

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
          onClick={closeModal}
          className="absolute top-4 left-4 bg-white border-solid border-Borders border-[1px] rounded-2xl p-1.5 text-2xl text-Secoundray"
        >
          <IoCloseOutline />
        </button>
        {children}
      </div>
    </div>
  );
}
