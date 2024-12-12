import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Masonry from "react-masonry-css";
import "swiper/css";
import EachToursPost from "../../../Components/EachToursPost";

const ShowFilteredTours = ({
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
}) => {
  return (
    <div
      className={`${
        isOpen ? "hidden" : "flex"
      } flex-1 flex-col items-center gap-10`}
    >
      {/* Show Selected Filter */}
      {showSelectedFilters && Object.keys(selectedFilters).length > 0 && (
        <Swiper
          slidesPerView={1.4}
          spaceBetween={5}
          breakpoints={{
            540: { slidesPerView: 2.1 },
            635: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.1, spaceBetween: 5 },
          }}
          className="mySwiper w-full"
        >
          {Object.entries(selectedFilters).map(
            ([filterKey, options]) =>
              Array.isArray(options) &&
              options.map((item) => (
                <SwiperSlide
                  key={`${filterKey}-${item}`}
                  className="flex items-center"
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
            <EachToursPost
              key={`tour-post-${index}`}
              image={item.image}
              imageAlt={item.location}
              categoryIcon={item.categoryIcon}
              categoryIconAlt={item.categoryName}
              categoryName={item.categoryName}
              location={item.location}
              agency={item.agency}
              rate={item.rate}
              startDate={item.StartDate}
              endDate={item.EndDate}
              month={item.Month}
              price={item.price}
              mb="mb-2"
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

export default ShowFilteredTours;
