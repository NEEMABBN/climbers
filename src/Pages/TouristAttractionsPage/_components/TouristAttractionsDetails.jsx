import React, { useState } from "react";
import TourInfoQuickReferenceMenu from "../../../Components/TourInfoQuickReferenceMenu";
import DetailsToursGallery from "../../../Components/DetailsToursGallery";
import GeneralPlaceInformation from "./TouristAttractionDetailPageComponent/GeneralPlaceInformation";
import Geography from "./TouristAttractionDetailPageComponent/Geography";
import RoutesMap from "./TouristAttractionDetailPageComponent/RoutesMap";
import TravelInformation from "./TouristAttractionDetailPageComponent/TravelInformation";
import TourSimilarTouristPlaces from "./TouristAttractionDetailPageComponent/TourSimilarTouristPlaces";
import TouristAttractionComments from "./TouristAttractionDetailPageComponent/TouristAttractionComments";

export default function TouristAttractionsDetails() {
  const helpSideMenu = [
    "اطلاعات کلی",
    "جغرافیا",
    "مسیرها",
    "اطلاعات مسیر",
    "تورهای مشابه",
    "نظرات کاربران",
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [openInfoCompletionMenu, setOpenInfoCompletionMenu] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
  };
  const handleOpenInfoCompletionMenu = () => {
    setOpenInfoCompletionMenu(!openInfoCompletionMenu);
    {
      openInfoCompletionMenu
        ? (document.body.style.overflow = "auto")
        : (document.body.style.overflow = "hidden");
    }
  };

  return (
    <div className="container mx-auto flex pt-12 gap-2">
      <TourInfoQuickReferenceMenu
        sections={helpSideMenu}
        activeSection={activeSection}
        setActiveSection={handleSetActive}
      />
      <div className="flex-1 flex flex-col items-center gap-12">
        <DetailsToursGallery />
        <GeneralPlaceInformation
          sectionName="اطلاعات کلی"
          title="رشته‌کوه دماوند"
          category="کوهستان"
          level="متوسط"
          rate={4.5}
          description="دَماوَند کوهی در شمال ایران و استان مازندران است که بلندترین کوه ایران و غرب آسیا، بلندترین آتشفشان آسیا و خاورمیانه است و سومین آتشفشان مرتفع در نیمکره شرقی (پس از کوه کلیمانجارو و کوه البروس) است. دماوند در پارهٔ مرکزی رشته کوه البرز در جنوب دریای مازندران جای دارد. این کوه از دیدگاه تقسیمات کشوری، در بخش لاریجان در شهرستان آمل در استان مازندران قرار دارد. این کوه به هنگام صاف و آفتابی شدن هوا، از شهرهای تهران، ورامین، قم و همچنین کرانه‌های جنوبی دریای خزر قابل رؤیت است. و در صورتی که هوا کاملاً پاک، صاف و بدون غبار باشد امکان مشاهده قله دماوند از بخش‌هایی از کشور ترکمنستان در نزدیکی دریای خزر، سواحل چمخاله و کیاشهر در استان گیلان، ارتفاعات نطنز در استان اصفهان و بخش‌هایی از جنوب ابهر در استان زنجان نیز وجود دارد کوه دماوند در تاریخ سیزدهم تیر ماه سال ۱۳۸۷ به عنوان نخستین اثر طبیعی ایران در فهرست آثار ملّی ایران ثبت شد. این کوه همچنین از سال ۱۳۸۱ به عنوان «اثر طبیعی ملّی» در شمار مناطق چهارگانهٔ ارزشمند از نظر حفاظت محیط زیست قرار گرفته‌است."
        />
        <Geography sectionName="جغرافیا" title="جغرافیا" />
        <RoutesMap />
        <TravelInformation sectionName="اطلاعات مسیر" title="اطلاعات مسیر" />
        <TourSimilarTouristPlaces
          sectionName="تورهای مشابه"
          title="تورهای مشابه"
        />
        <TouristAttractionComments
          sectionName="نظرات کاربران"
          title="نظرات کاربران"
        />
      </div>
    </div>
  );
}
