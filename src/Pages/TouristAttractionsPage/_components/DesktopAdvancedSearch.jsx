import React from "react";
import Images from "../../../Setting/Images";
import FilterBoxTemplate from "../../../Components/FilterBoxTemplate";

export default function DesktopAdvancedSearch({
  filters = [],
  selectedFilters = {},
  toggleFilter,
  toggleRangeSelection,
  setIsOpen,
  showSelectedFilters = false,
  setShowSelectedFilters,
  handleRemoveFilter,
}) {
  return (
    <div className="w-[300px] sticky top-36 right-0 h-fit bg-[#FAFAFA] px-2 pt-5 pb-1 gap-3.5 border-solid border-Borders border-[1px] rounded-2xl md:flex hidden flex-col items-center">
      {/* Header */}
      <span className="text-Secoundray YekanBold">جستجوی پیشرفته</span>
      {/* Origin/Destination Input */}
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="origin-destination">استان/شهر:</label>
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
      {/* Filters */}
      <div className="w-full flex flex-col items-center border-solid border-Borders border-t-[1px]">
        {filters.map(({ title, items, key, type }) => (
          <FilterBoxTemplate
            title={title}
            key={key}
            customClass="last:border-b-0"
          >
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
          </FilterBoxTemplate>
        ))}
      </div>
    </div>
  );
}
