import React, { useEffect, useState } from "react";
import Images from "../../../Setting/Images";
import { useNavigate } from "react-router-dom";
import ShowFilteredTours from "./ShowFilteredTours";
import MobileAdvancedSearchBox from "./MobileAdvancedSearchBox";
import DesktopAdvancedSearchBox from "./DesktopAdvancedSearchBox";

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
      type: "checkbox",
    },
    {
      title: "فعالیت‌ها",
      items: ["صخره نوردی", "کوهنوردی", "شنا", "پیاده‌روی"],
      key: "Activities",
      type: "checkbox",
    },
    {
      title: "سبک سفر",
      items: ["کویر", "کوهستان", "بومگردی", "رودخانه", "دریا", "جنگل"],
      key: "travelStyle",
      type: "checkbox",
    },
    {
      title: "سطح توانایی",
      items: ["پیشرفته", "متوسط", "مبتدی", "خانوادگی"],
      key: "abilityLevel",
      type: "checkbox",
    },
    {
      title: "ظرفیت",
      items: ["-10 نفر", "+10 نفر", "+20 نفر", "+30 نفر"],
      key: "Capacity",
      type: "checkbox",
    },
    {
      title: "خدمات",
      items: ["بیمه", "لیدر", "وعده‌های غذای", "بازی و سرگرمی"],
      key: "Services",
      type: "checkbox",
    },
    {
      title: "وسیله نقلیه",
      items: ["ماشین", "جیپ", "هواپیما", "قطار", "اتوبوس", "مینی‌بوس"],
      key: "transport",
      type: "checkbox",
    },
    {
      title: "مدت اقامت",
      items: ["-7 روز", "7 روز", "+7 روز"],
      key: "LengthStay",
      type: "checkbox",
    },
    {
      title: "زمان از روز",
      items: ["صبح", "بعد از ظهر", "عصر"],
      key: "timeOfDay",
      type: "checkbox",
    },
    {
      title: "ارتفاع کوه",
      items: [
        "کمتر از 2000 متر",
        "2000 تا 3000 متر",
        "3000 تا 4000 متر",
        "بیشتر از 4000 متر",
      ],
      key: "mountainHeight",
      type: "checkbox",
    },
    {
      title: "امتیاز تور",
      items: ["1 ستاره", "2 ستاره", "3 ستاره", "4 ستاره", "5 ستاره"],
      key: "rating",
      type: "radio",
    },
    {
      title: "هزینه تور",
      key: "cost",
      type: "range",
      min: 0,
      max: 20000,
      step: 50,
    },
  ];

  const navigate = useNavigate();
  const postsPerPage = 20;
  const [isOpen, setIsOpen] = useState(false);
  const [showSelectedFilters, setShowSelectedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(toursData.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = toursData.slice(startIndex, endIndex);

  const submitDetailsPage = (tours) => {
    //When you get the "API", check the "location" value!!!
    if (!tours || !tours.location) {
      console.error("Post object or location is missing:", tours);
      return;
    }
    const slug = tours.location.replace(/\s+/g, "-");
    navigate(`/tours/${tours.id}-${slug}`, { state: tours });
  };
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
    mountainHeight: [],
    rating: "",
    cost: 0,
  });
  const toggleFilter = (key, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[key] || [];
      return {
        ...prev,
        [key]: currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };
  const toggleRangeSelection = (key, value) => {
    setSelectedFilters((prev) => {
      const currentSelection = prev[key] || [];
      const newSelection = currentSelection.includes(value)
        ? currentSelection.filter((item) => item !== value)
        : [...currentSelection, value].sort((a, b) => a - b);

      return { ...prev, [key]: newSelection };
    });
  };
  const handleRemoveFilter = (filterKey, item) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      updatedFilters[filterKey] = updatedFilters[filterKey]?.filter(
        (option) => option !== item
      );
      if (updatedFilters[filterKey]?.length === 0) {
        delete updatedFilters[filterKey];
      }
      return updatedFilters;
    });
  };

  return (
    <div className="container mx-auto flex md:flex-row flex-col gap-3 py-5 sm:px-0 px-3">
      <DesktopAdvancedSearchBox
        setIsOpen={setIsOpen}
        handleRemoveFilter={handleRemoveFilter}
        setShowSelectedFilters={setShowSelectedFilters}
        toggleFilter={toggleFilter}
        toggleRangeSelection={toggleRangeSelection}
        filters={filters}
        selectedFilters={selectedFilters}
        showSelectedFilters={showSelectedFilters}
      />
      <MobileAdvancedSearchBox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filters={filters}
        showSelectedFilters={showSelectedFilters}
        handleRemoveFilter={handleRemoveFilter}
        setShowSelectedFilters={setShowSelectedFilters}
        toggleRangeSelection={toggleRangeSelection}
        selectedFilters={selectedFilters}
        toggleFilter={toggleFilter}
      />
      <ShowFilteredTours
        isOpen={isOpen}
        showSelectedFilters={showSelectedFilters}
        selectedFilters={selectedFilters}
        handleRemoveFilter={handleRemoveFilter}
        breakpointColumnsObj={breakpointColumnsObj}
        currentPage={currentPage}
        submitDetailsPage={submitDetailsPage}
        currentPosts={currentPosts}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}
