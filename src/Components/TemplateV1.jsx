import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TemplateV1({
  title,
  children,
  links,
  titleColor = "text-Titles",
  swiperRef,
}) {
  const nextSlide = () => {
    swiperRef.current.slideNext();
  };
  const prevSlide = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <div className="container mx-auto flex flex-col items-center gap-12">
      <h2
        className={`md:text-3xl text-2xl w-full md:text-start text-center ${titleColor}`}
      >
        {title}
      </h2>
      <div className="w-full sm:pr-0 pr-2">{children}</div>
      <div className="w-full flex items-center justify-between sm:px-0 px-2">
        <div className="md:w-auto w-full flex items-center md:justify-normal justify-center gap-3 relative z-[2]">
          <button
            onClick={prevSlide}
            className="bg-white p-2.5 hover:bg-Primary rounded-2xl text-xl text-Primary hover:text-white border-solid border-[1px] border-Primary transition-all duration-300"
          >
            <FaAngleRight />
          </button>
          <Link
            to={links}
            className="bg-white lg:hidden block text-Primary border-solid border-[1px] border-Primary rounded-2xl px-6 py-2"
          >
            نمایش همه
          </Link>
          <button
            onClick={nextSlide}
            className="bg-white p-2.5 hover:bg-Primary rounded-2xl text-xl text-Primary hover:text-white border-solid border-[1px] border-Primary transition-all duration-300"
          >
            <FaAngleLeft />
          </button>
        </div>
        <Link
          to={links}
          className="bg-white lg:block hidden text-Primary border-solid border-[1px] border-Primary rounded-2xl px-6 py-2"
        >
          نمایش همه
        </Link>
      </div>
    </div>
  );
}
