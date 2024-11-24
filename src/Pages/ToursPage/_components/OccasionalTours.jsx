import React, { useRef, useState } from "react";
import Images from "../../../Setting/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TemplateV1 from "../../../Components/TemplateV1";
import EachToursPost from "../../../Components/EachToursPost";

export default function OccasionalTours() {
  const categoryData = [
    {
      //   icon: Images.BestPlaceIcon,
      //   activeIcon: Images.BestPlaceIconActive,
      name: "همه",
    },
    {
      icon: Images.SeaIcon,
      activeIcon: Images.SeaIconActive,
      name: "کریسمس و سال نو میلادی",
    },
    {
      icon: Images.WaterfallIcon,
      activeIcon: Images.WaterfallIconActive,
      name: "نمایشگاهی و فستیوالی",
    },
    {
      icon: Images.IslandIcon,
      activeIcon: Images.IslandIconActive,
      name: "جنوب‌گردی",
    },
  ];
  const toursData = [
    {
      image: Images.QeshmSaltCave,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
      category: "کریسمس و سال نو میلادی",
    },
    {
      image: Images.QeshmSaltCave,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
      category: "کریسمس و سال نو میلادی",
    },
    {
      image: Images.QeshmSaltCave,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
      category: "کریسمس و سال نو میلادی",
    },
    {
      image: Images.QeshmSaltCave,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
      category: "کریسمس و سال نو میلادی",
    },
    {
      image: Images.QeshmSaltCave,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
      category: "کریسمس و سال نو میلادی",
    },
    {
      image: Images.ZoroastrianCrypts,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
      category: "نمایشگاهی و فستیوالی",
    },
    {
      image: Images.ZoroastrianCrypts,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
      category: "نمایشگاهی و فستیوالی",
    },
    {
      image: Images.ZoroastrianCrypts,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
      category: "نمایشگاهی و فستیوالی",
    },
    {
      image: Images.ZoroastrianCrypts,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از دخمه‌های زرتشتیان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 18,
      Month: "خرداد",
      price: 1500000,
      category: "نمایشگاهی و فستیوالی",
    },
    {
      image: Images.ExcursionKandavanVillage,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "گردش در روستای کندوان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 4.5,
      StartDate: 17,
      EndDate: 20,
      Month: "مرداد",
      price: 2000000,
      category: "جنوب‌گردی",
    },
    {
      image: Images.ExcursionKandavanVillage,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "گردش در روستای کندوان",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 4.5,
      StartDate: 17,
      EndDate: 20,
      Month: "مرداد",
      price: 2000000,
      category: "جنوب‌گردی",
    },
    {
      image: Images.VisitingKish,
      categoryIcon: Images.AncientIcon,
      categoryName: "باستانی",
      location: "بازدید از کاریز کیش",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3,
      StartDate: 17,
      EndDate: 18,
      Month: "مهر",
      price: 3000000,
      category: "جنوب‌گردی",
    },
    {
      image: Images.QeshmSaltCave,
      categoryIcon: Images.CaveIcon,
      categoryName: "غار",
      location: "غار نمکدان قشم 5 روزه",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
      category: "جنوب‌گردی",
    },
    {
      image: Images.MaharlooLakeCamping,
      categoryIcon: Images.SeaIconV2,
      categoryName: "دریاچه",
      location: "کمپ دو روزه در دریاچه مهارلو",
      agency: "آژانس مسافربری مهاپرواز",
      rate: 3.5,
      StartDate: 17,
      EndDate: 21,
      Month: "خرداد",
      price: 1000000,
      category: "جنوب‌گردی",
    },
  ];

  const [filteredPosts, setFilteredPosts] = useState(toursData);
  const [activeCategory, setActiveCategory] = useState("همه");
  const swiperRef = useRef(null);

  const filterPosts = (category) => {
    setActiveCategory(category);
    if (category === "همه") {
      setFilteredPosts(toursData);
    } else {
      const filtered = toursData.filter((post) =>
        post.category.includes(category)
      );
      setFilteredPosts(filtered);
      if (swiperRef.current) {
        swiperRef.current.slideTo(0);
      }
    }
  };

  return (
    <div className="w-full py-16">
      <TemplateV1
        title="تورهای مناسبتی"
        links="/Agencies"
        swiperRef={swiperRef}
        children={
          <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full">
              <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                breakpoints={{
                  600: {
                    slidesPerView: 3.5,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 4.5,
                    spaceBetween: 15,
                  },
                }}
                className="mySwiper lg:!hidden"
              >
                {categoryData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <button
                      onClick={() => filterPosts(item.name)}
                      className={`${
                        activeCategory === item.name
                          ? "border-Primary"
                          : "border-[#DFE5E587]"
                      } flex lg:w-auto w-full items-center lg:justify-normal justify-center lg:gap-2 gap-2.5 py-1 sm:px-4 bg-[#DFE5E587] border-solid border-2 rounded-2xl`}
                    >
                      {activeCategory === item.name ? (
                        <img src={item.activeIcon} alt="" className="" />
                      ) : (
                        <img src={item.icon} alt="" className="" />
                      )}
                      <span className="text-Secoundray">{item.name}</span>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="w-full lg:flex hidden items-center gap-5">
                {categoryData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => filterPosts(item.name)}
                    className={`${
                      activeCategory === item.name
                        ? "border-Primary"
                        : "border-[#DFE5E587]"
                    } flex lg:w-auto w-full items-center lg:justify-normal justify-center lg:gap-2 gap-2.5 py-1 sm:px-4 bg-[#DFE5E587] border-solid border-2 rounded-2xl`}
                  >
                    {activeCategory === item.name ? (
                      <img src={item.activeIcon} alt="" className="" />
                    ) : (
                      <img src={item.icon} alt="" className="" />
                    )}
                    <span className="text-Secoundray">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1.5}
                spaceBetween={10}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                  },
                }}
                className="mySwiper"
              >
                {filteredPosts.map((item, index) => (
                  <SwiperSlide key={index}>
                    <EachToursPost
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
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        }
      />
    </div>
  );
}
