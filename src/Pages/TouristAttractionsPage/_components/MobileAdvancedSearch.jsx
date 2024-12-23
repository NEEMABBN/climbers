import React from "react";
import Images from "../../../Setting/Images";
import FilterBoxTemplate from "../../../Components/FilterBoxTemplate";
import { IoClose } from "react-icons/io5";

const MobileAdvancedSearch = ({
  filters = [],
  selectedFilters = {},
  toggleFilter,
  toggleRangeSelection,
  isOpen,
  setIsOpen,
  showSelectedFilters,
  setShowSelectedFilters,
  handleRemoveFilter,
}) => {
  return (
    <div
      className={`w-full md:hidden flex flex-col gap-5 bg-white ${
        isOpen
          ? "absolute top-[76px] right-0 left-0 px-2 z-10 pb-[40rem]"
          : "static"
      }`}
    >
      {/* Header */}
      <span
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen
            ? "border-none text-start flex items-center justify-between"
            : "border-solid border-Borders border-[1px] rounded-2xl text-center"
        } w-full text-Secoundray py-4 YekanBold`}
      >
        جستجوی پیشرفته
        <IoClose className={isOpen ? "block text-2xl" : "hidden"} />
      </span>
      {/* Filters Content */}
      {isOpen && (
        <div className="w-full flex flex-col items-center gap-3">
          {/* Origin/Destination Input */}
          <div className="w-full flex flex-col items-start gap-1">
            <label htmlFor="text">استان / شهر:</label>
            <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2 border-solid border-Borders border-[1px]">
              <input
                type="text"
                placeholder="انتخاب کنید"
                className="w-full outline-none"
              />
              <img src={Images.LocationIcon} alt="Location Icon" />
            </div>
          </div>
          {/* Filters */}
          <div className="w-full flex flex-col items-center border-solid border-Borders border-t-[1px]">
            {filters.map(({ title, items, key, type }) => (
              <FilterBoxTemplate title={title} key={key}>
                {/* Checkbox Filter */}
                {type === "checkbox" && (
                  <div className="flex w-full flex-col items-start gap-2">
                    {items.map((item, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-1.5 w-full cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
                          checked={selectedFilters[key]?.includes(item)}
                          onChange={() => toggleFilter(key, item)}
                        />
                        <span className="w-full text-sm text-Secoundray">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </FilterBoxTemplate>
            ))}
          </div>
          {/* Search Button */}
          <div className="w-full bg-[#FAFAFA] flex items-center justify-center shadow-[0px_0px_45px_-5px_rgba(14,154,138,0.3)] p-3 fixed bottom-0 left-0 right-0">
            <button
              onClick={() => {
                setIsOpen(false);
                setShowSelectedFilters(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-Primary text-white w-full py-3 rounded-2xl"
            >
              جستجو
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileAdvancedSearch;
