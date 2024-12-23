import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Masonry from "react-masonry-css";
import "swiper/css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import EachPopularPlaceSlide from "../../../Components/EachPopularPlaceSlide";

const ShowFilteredPlaces = ({
  selectedFilters = {},
  currentPosts = [],
  handleRemoveFilter,
  handleNext,
  handlePrev,
  currentPage,
  totalPages,
  isOpen,
  showSelectedFilters,
  breakpointColumnsObj,
  submitDetailsPage,
  fadeOutItems,
}) => {
  return (
    <div
      className={`${
        isOpen ? "hidden" : "flex"
      } flex-1 flex-col items-center gap-10`}
    >
      {/* Show Selected Filter */}
      {showSelectedFilters && Object.keys(selectedFilters).length > 0 && (
        <Swiper slidesPerView={3} spaceBetween={5} className="mySwiper !w-full">
          {Object.entries(selectedFilters).map(
            ([filterKey, options]) =>
              Array.isArray(options) &&
              options.map((item) => (
                <SwiperSlide
                  key={`${filterKey}-${item}`}
                  className={`!flex !items-center !w-fit !transition-all !duration-300 ${
                    fadeOutItems[`${filterKey}-${item}`]
                      ? "!scale-0"
                      : "!scale-100"
                  }`}
                >
                  <div className="bg-[#00000080] text-white text-sm py-3 px-3 rounded-2xl flex items-center justify-between gap-2">
                    <span>{item}</span>
                    <button
                      onClick={() => handleRemoveFilter(filterKey, item)}
                      className=""
                    >
                      <FaTimes />
                    </button>
                  </div>
                </SwiperSlide>
              ))
          )}
        </Swiper>
      )}
      {/* Show Tours List */}
      <div className="w-full h-full bg-[#FAFAFA] rounded-2xl">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-2 w-full"
        >
          {currentPosts.map((item, index) => (
            <EachPopularPlaceSlide
              key={`place-post-${index}`}
              image={item.image}
              imageAlt={item.province}
              location={item.city}
              province={item.province}
              mb="mb-2"
              version1={true}
              version2={false}
              onClick={() => submitDetailsPage(item)}
            />
          ))}
        </Masonry>
      </div>
      {/* Changed Tours Tab */}
      <div className="flex items-center gap-5">
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "text-Disable" : "text-Secoundray"
          } bg-[#FAFAFA] p-3 rounded-2xl border-solid border-[1px] border-Borders`}
        >
          <FaChevronRight />
        </button>
        <span className="bg-[#FAFAFA] border-solid border-[1px] border-Borders rounded-2xl py-2 px-4">
          {totalPages} / {currentPage}
        </span>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? "text-Disable" : "text-Secoundray"
          } bg-[#FAFAFA] p-3 rounded-2xl border-solid border-[1px] border-Borders`}
        >
          <FaChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default ShowFilteredPlaces;
