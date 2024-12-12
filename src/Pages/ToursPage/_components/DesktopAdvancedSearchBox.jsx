import React from "react";
import Images from "../../../Setting/Images";
import FilterBoxTemplate from "../../../Components/FilterBoxTemplate";
import DateRangePicker from "../../../Components/DateRangePicker";

const DesktopAdvancedSearchBox = ({
  filters = [],
  selectedFilters = {},
  toggleFilter,
  toggleRangeSelection,
  setIsOpen,
  showSelectedFilters = false,
  setShowSelectedFilters,
  handleRemoveFilter,
}) => {
  return (
    <div className="w-[300px] sticky top-0 right-0 h-fit bg-[#FAFAFA] px-2 pt-5 pb-1 gap-3.5 border-solid border-Borders border-[1px] rounded-2xl md:flex hidden flex-col items-center">
      {/* Header */}
      <span className="text-Secoundray YekanBold">جستجوی پیشرفته</span>
      {/* Origin/Destination Input */}
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="origin-destination">مبدا/ مقصد:</label>
        <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2 border-solid border-Borders border-[1px]">
          <input
            type="text"
            placeholder="انتخاب کنید"
            id="origin-destination"
            className="w-full outline-none"
          />
          <img src={Images.LocationIcon} alt="Location Icon" />
        </div>
      </div>
      {/* Date Input */}
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="date-input">روز:</label>
        <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2 border-solid border-Borders border-[1px]">
          <input
            type="text"
            placeholder="انتخاب کنید"
            id="date-input"
            className="w-full outline-none"
          />
          <img src={Images.CalendarIcon} alt="Calendar Icon" />
        </div>
      </div>
      {/* Filters */}
      <div className="w-full flex flex-col items-center border-solid border-Borders border-t-[1px]">
        {filters.map(({ title, items, key, type }) => (
          <FilterBoxTemplate title={title} key={key}>
            {/* Checkbox Filter */}
            {type === "checkbox" && (
              <div className="flex flex-col items-start gap-2">
                {items.map((item, index) => (
                  <label
                    key={`${key}-${index}`}
                    className="flex items-center gap-1.5 w-full cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
                      checked={selectedFilters[key]?.includes(item)}
                      onChange={() => toggleFilter(key, item)}
                    />
                    <span className="text-sm text-Secoundray">{item}</span>
                  </label>
                ))}
              </div>
            )}
            {/* Radio Filter */}
            {type === "radio" && (
              <div className="flex flex-row-reverse items-center w-full overflow-hidden rounded-2xl border border-solid border-Borders">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label
                    key={`${key}-${star}`}
                    className="cursor-pointer w-full flex items-center text-center"
                  >
                    <input
                      type="checkbox"
                      name={key}
                      value={star}
                      checked={selectedFilters[key]?.includes(star)}
                      onChange={() => toggleRangeSelection(key, star)}
                      className="hidden w-full"
                    />
                    <span
                      className={`!w-full py-1 transition-all duration-200 ${
                        selectedFilters[key]?.includes(star)
                          ? "bg-Primary text-white"
                          : "bg-white text-Secoundray"
                      }`}
                    >
                      {star}
                    </span>
                  </label>
                ))}
              </div>
            )}
            {/* Range Filter */}
            {type === "range" && <DateRangePicker />}
          </FilterBoxTemplate>
        ))}
      </div>
      {/* Additional Options */}
      <label className="w-full cursor-pointer flex items-center gap-1.5 py-2 border-Borders border-solid border-b-[1px]">
        <input
          type="checkbox"
          className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
        />
        <span className="text-SubTitle text-Secoundray">پرفروش‌ترین تورها</span>
      </label>
      <label className="w-full cursor-pointer flex items-center gap-1.5 py-2">
        <input
          type="checkbox"
          className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
        />
        <span className="text-SubTitle text-Secoundray">تورهای لحظه آخری</span>
      </label>
    </div>
  );
};

export default DesktopAdvancedSearchBox;
