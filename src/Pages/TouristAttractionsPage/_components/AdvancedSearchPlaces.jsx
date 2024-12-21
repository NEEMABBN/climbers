import React, { useEffect, useState } from "react";
import DesktopAdvancedSearch from "./DesktopAdvancedSearch";
import MobileAdvancedSearch from "./MobileAdvancedSearch";
import ShowFilteredPlaces from "./ShowFilteredPlaces";
import Images from "../../../Setting/Images";
import { useNavigate } from "react-router-dom";

export default function AdvancedSearchPlaces() {
  const postData = [
    {
      id: 1,
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 2,
      image: Images.PopularPlaceSlide1,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 3,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 4,
      image: Images.PopularPlaceSlide3,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 5,
      image: Images.PopularPlaceSlide5,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 6,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 7,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 8,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 9,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 10,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 11,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 12,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 13,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 14,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 15,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 16,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 17,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 18,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 19,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 20,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 21,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 22,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 23,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
    {
      id: 24,
      image: Images.PopularPlaceSlide4,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "برترین‌ها",
    },
    {
      id: 25,
      image: Images.PopularPlaceSlide2,
      city: "ترکمن صحرا",
      province: "مازندران",
      category: "دریا، دریاچه",
    },
  ];
  const filters = [
    {
      title: "دسته بندی",
      items: ["جشن تولد", "نمایشگاهی و فستیوال", "کریسمس و سال نو میلادی"],
      key: "Category",
      type: "checkbox",
    },
    {
      title: "فعالیت‌ها",
      items: ["صخره نوردی", "کوهنوردی", "شنا", "پیاده‌روی"],
      key: "Activities",
      type: "checkbox",
    },
    {
      title: "سطح توانایی",
      items: ["قوی", "معمولی", "ضعیف", "توانا", "ناتوان", "تانوس"],
      key: "AbilityLevel",
      type: "checkbox",
    },
  ];

  const navigate = useNavigate();
  const postsPerPage = 20;
  const [isOpen, setIsOpen] = useState(false);
  const [showSelectedFilters, setShowSelectedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(postData.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = postData.slice(startIndex, endIndex);

  const submitDetailsPage = (place) => {
    //When you get the "API", check the "city" value!!!
    if (!place || !place.city) {
      console.error("Post object or location is missing:", place);
      return;
    }
    const slug = place.city.replace(/\s+/g, "-");
    navigate(`/tours/${place.id}-${slug}`, { state: place });
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
    Category: [],
    Activities: [],
    AbilityLevel: [],
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
      <DesktopAdvancedSearch
        setIsOpen={setIsOpen}
        handleRemoveFilter={handleRemoveFilter}
        setShowSelectedFilters={setShowSelectedFilters}
        toggleFilter={toggleFilter}
        toggleRangeSelection={toggleRangeSelection}
        filters={filters}
        selectedFilters={selectedFilters}
        showSelectedFilters={showSelectedFilters}
      />
      <MobileAdvancedSearch
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
      <ShowFilteredPlaces
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
