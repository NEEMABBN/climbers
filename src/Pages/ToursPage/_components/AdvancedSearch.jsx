import React, { useEffect, useState } from "react";
import FilterBoxTemplate from "../../../Components/FilterBoxTemplate";
import Images from "../../../Setting/Images";
import EachToursPost from "../../../Components/EachToursPost";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AdvancedSearch() {
  const toursData = [
    {
      image: Images.QeshmSaltCave,
      id: 1,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.ZoroastrianCrypts,
      id: 2,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
    },
    {
      image: Images.ExcursionKandavanVillage,
      id: 3,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "گردش در روستای کندوان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 4.5,
      StartDate: 17,
      EndDate: 20,
      Month: "مرداد",
      price: 2000000,
    },
    {
      image: Images.VisitingKish,
      id: 4,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از کاریز کیش",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3,
      StartDate: 17,
      EndDate: 18,
      Month: "مهر",
      price: 3000000,
    },
    {
      image: Images.QeshmSaltCave,
      id: 5,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.MaharlooLakeCamping,
      id: 6,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "کمپ دو روزه در دریاچه مهارلو",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.QeshmSaltCave,
      id: 7,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.ZoroastrianCrypts,
      id: 8,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
    },
    {
      image: Images.ExcursionKandavanVillage,
      id: 9,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "گردش در روستای کندوان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 4.5,
      StartDate: 17,
      EndDate: 20,
      Month: "مرداد",
      price: 2000000,
    },
    {
      image: Images.VisitingKish,
      id: 10,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از کاریز کیش",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3,
      StartDate: 17,
      EndDate: 18,
      Month: "مهر",
      price: 3000000,
    },
    {
      image: Images.QeshmSaltCave,
      id: 11,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.MaharlooLakeCamping,
      id: 12,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "کمپ دو روزه در دریاچه مهارلو",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.QeshmSaltCave,
      id: 13,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.ZoroastrianCrypts,
      id: 14,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
    },
    {
      image: Images.ExcursionKandavanVillage,
      id: 15,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "گردش در روستای کندوان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 4.5,
      StartDate: 17,
      EndDate: 20,
      Month: "مرداد",
      price: 2000000,
    },
    {
      image: Images.VisitingKish,
      id: 16,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از کاریز کیش",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3,
      StartDate: 17,
      EndDate: 18,
      Month: "مهر",
      price: 3000000,
    },
    {
      image: Images.QeshmSaltCave,
      id: 17,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.MaharlooLakeCamping,
      id: 18,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "کمپ دو روزه در دریاچه مهارلو",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.QeshmSaltCave,
      id: 19,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.ZoroastrianCrypts,
      id: 20,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
    },
    {
      image: Images.ExcursionKandavanVillage,
      id: 21,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "گردش در روستای کندوان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 4.5,
      StartDate: 17,
      EndDate: 20,
      Month: "مرداد",
      price: 2000000,
    },
    {
      image: Images.VisitingKish,
      id: 22,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از کاریز کیش",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3,
      StartDate: 17,
      EndDate: 18,
      Month: "مهر",
      price: 3000000,
    },
    {
      image: Images.QeshmSaltCave,
      id: 23,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.MaharlooLakeCamping,
      id: 24,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "کمپ دو روزه در دریاچه مهارلو",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.QeshmSaltCave,
      id: 25,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
    },
    {
      image: Images.ZoroastrianCrypts,
      id: 26,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
    },
  ];
  const filters = [
    {
      title: "تورهای مناسبتی",
      items: ["جشن تولد", "نمایشگاهی و فستیوال", "کریسمس و سال نو میلادی"],
      key: "occasionalTours",
    },
    {
      title: "فعالیت‌ها",
      items: ["صخره نوردی", "کوهنوردی", "شنا", "پیاده‌روی"],
      key: "Activities",
    },
    {
      title: "سبک سفر",
      items: ["کویر", "کوهستان", "بومگردی", "رودخانه", "دریا", "جنگل"],
      key: "travelStyle",
    },
    {
      title: "سطح توانایی",
      items: ["پیشرفته", "متوسط", "مبتدی", "خانوادگی"],
      key: "abilityLevel",
    },
    {
      title: "ظرفیت",
      items: ["-10 نفر", "+10 نفر", "+20 نفر", "+30 نفر"],
      key: "Capacity",
    },
    {
      title: "خدمات",
      items: ["بیمه", "لیدر", "وعده‌های غذای", "بازی و سرگرمی"],
      key: "Services",
    },
    {
      title: "وسیله نقلیه",
      items: ["ماشین", "جیپ", "هواپیما", "قطار", "اتوبوس", "مینی‌بوس"],
      key: "transport",
    },
    {
      title: "مدت اقامت",
      items: ["-7 روز", "7 روز", "+7 روز"],
      key: "LengthStay",
    },
    {
      title: "زمان از روز",
      items: ["صبح", "بعد از ظهر", "عصر"],
      key: "timeOfDay",
    },
  ];

  const navigate = useNavigate();

  const submitDetailsPage = (tours) => {
    //When you get the "API", check the "location" value!!!
    if (!tours || !tours.location) {
      console.error("Post object or location is missing:", tours);
      return;
    }
    const slug = tours.location.replace(/\s+/g, "-");
    navigate(`/tours/${tours.id}-${slug}`, { state: tours });
  };
  const postsPerPage = 20;
  const [isOpen, setIsOpen] = useState(false);
  const [showSelectedFilters, setShowSelectedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(toursData.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = toursData.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    1023: 2,
    640: 1,
  };

  const [selectedFilters, setSelectedFilters] = useState({
    occasionalTours: [],
    Activities: [],
    travelStyle: [],
    abilityLevel: [],
    Capacity: [],
    Services: [],
    transport: [],
    LengthStay: [],
    timeOfDay: [],
  });

  const toggleFilter = (key, item) => {
    setSelectedFilters((prevFilters) => {
      const isSelected = prevFilters[key].includes(item);
      return {
        ...prevFilters,
        [key]: isSelected
          ? prevFilters[key].filter((i) => i !== item)
          : [...prevFilters[key], item],
      };
    });
  };
  const handleRemoveFilter = (filterKey, item) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: prevFilters[filterKey].filter((i) => i !== item),
    }));
  };

  return (
    <div className="container mx-auto flex md:flex-row flex-col gap-3 py-5 sm:px-0 px-3">
      {/* Desktop Search Box */}
      <div className="w-[300px] sticky top-0 right-0 h-fit bg-[#FAFAFA] px-2 pt-5 pb-1 gap-3.5 border-solid border-Borders border-[1px] rounded-2xl md:flex hidden flex-col items-center">
        <span className="text-Secoundray YekanBold">جستجوی پیشرفته</span>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="text" className="">
            مبدا/ مقصد:
          </label>
          <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2 border-solid border-Borders border-[1px]">
            <input
              type="text"
              placeholder="انتخاب کنید"
              className="w-full outline-none"
            />
            <img src={Images.LocationIcon} alt="" className="" />
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="text" className="">
            روز:
          </label>
          <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2 border-solid border-Borders border-[1px]">
            <input
              type="text"
              placeholder="انتخاب کنید"
              className="w-full outline-none"
            />
            <img src={Images.CalendarIcon} alt="" className="" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-solid border-Borders border-t-[1px]">
          {filters.map(({ title, items, key }) => (
            <FilterBoxTemplate title={title} key={key}>
              {items.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-1.5 w-full cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
                    checked={selectedFilters[key].includes(item)}
                    onChange={() => toggleFilter(key, item)}
                  />
                  <span className="text-sm text-Secoundray">{item}</span>
                </label>
              ))}
            </FilterBoxTemplate>
          ))}
        </div>
        <label className="w-full flex items-center gap-1.5 py-2 border-Borders border-solid border-b-[1px]">
          <input
            type="checkbox"
            className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
          />
          <span className="text-SubTitle text-Secoundray">
            پرفروش‌ترین تورها
          </span>
        </label>
        <label className="w-full flex items-center gap-1.5 py-2">
          <input
            type="checkbox"
            className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
          />
          <span className="text-SubTitle text-Secoundray">
            تورهای لحظه آخری
          </span>
        </label>
      </div>
      {/* Mobile Search Box */}
      <div
        className={`w-full md:hidden flex flex-col gap-5 bg-white ${
          isOpen
            ? "absolute top-[76px] right-0 left-0 px-2 z-10 pb-[15rem]"
            : "static"
        }`}
      >
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
        {isOpen && (
          <div className="w-full flex flex-col items-center gap-3">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="text" className="">
                مبدا/ مقصد:
              </label>
              <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2 border-solid border-Borders border-[1px]">
                <input
                  type="text"
                  placeholder="انتخاب کنید"
                  className="w-full outline-none"
                />
                <img src={Images.LocationIcon} alt="" className="" />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="text" className="">
                روز:
              </label>
              <div className="w-full flex items-center bg-white rounded-2xl py-2 px-2 border-solid border-Borders border-[1px]">
                <input
                  type="text"
                  placeholder="انتخاب کنید"
                  className="w-full outline-none"
                />
                <img src={Images.CalendarIcon} alt="" className="" />
              </div>
            </div>
            <div className="w-full flex flex-col items-center border-solid border-Borders border-t-[1px]">
              {filters.map(({ title, items, key }) => (
                <FilterBoxTemplate title={title} key={key}>
                  {items.map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-1.5 w-full cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
                        checked={selectedFilters[key].includes(item)}
                        onChange={() => toggleFilter(key, item)}
                      />
                      <span className="text-sm text-Secoundray">{item}</span>
                    </label>
                  ))}
                </FilterBoxTemplate>
              ))}
            </div>
            <label className="w-full flex items-center gap-1.5 py-2 border-Borders border-solid border-b-[1px]">
              <input
                type="checkbox"
                className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
              />
              <span className="text-SubTitle text-Secoundray">
                پرفروش‌ترین تورها
              </span>
            </label>
            <label className="w-full flex items-center gap-1.5 py-2">
              <input
                type="checkbox"
                className="form-checkbox focus:ring-0 checked:!bg-Primary rounded-md border-Borders border-[1px] checked:!border-none"
              />
              <span className="text-SubTitle text-Secoundray">
                تورهای لحظه آخری
              </span>
            </label>
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
      {/* All Tours List */}
      <div
        className={`${
          isOpen ? "hidden" : "flex"
        } flex-1 flex-col items-center gap-10`}
      >
        {showSelectedFilters && (
          <Swiper
            slidesPerView={1.4}
            spaceBetween={5}
            breakpoints={{
              540: {
                slidesPerView: 2.1,
              },
              635: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 3.1,
                spaceBetween: 5,
              },
            }}
            className="mySwiper w-full"
          >
            {Object.entries(selectedFilters).map(([filterKey, options]) =>
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
        <div className="w-full h-full bg-[#FAFAFA] rounded-2xl">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-2 w-full"
          >
            {currentPosts.map((item, index) => (
              <EachToursPost
                key={index}
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
    </div>
  );
}
