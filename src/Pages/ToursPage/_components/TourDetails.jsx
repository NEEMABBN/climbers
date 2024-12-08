import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailsToursGallery from "../../../Components/DetailsToursGallery";
import TourInformationCompletionMenu from "../../../Components/TourInformationCompletionMenu";
import TourInfoQuickReferenceMenu from "../../../Components/TourInfoQuickReferenceMenu";
import GeneralTourInformation from "./TourDetailPageComponents/GeneralTourInformation";
import SpecialTourFacilities from "./TourDetailPageComponents/SpecialTourFacilities";
import TourSchedule from "./TourDetailPageComponents/TourSchedule";
import TourOfficials from "./TourDetailPageComponents/TourOfficials";
import ToursTools from "./TourDetailPageComponents/ToursTools";
import TourRestrictions from "./TourDetailPageComponents/TourRestrictions";
import TourRouteAttractions from "./TourDetailPageComponents/TourRouteAttractions";
import SimilarTours from "./TourDetailPageComponents/SimilarTours";
import ToursUserComments from "./TourDetailPageComponents/ToursUserComments";

export default function TourDetails() {
  const location = useLocation(); // اطلاعات ارسال‌شده از state
  const { id } = useParams(); // شناسه از URL
  const post = location.state; // داده‌های پست ارسال‌شده

  if (!post) {
    return <p className="text-red-500">پست مورد نظر یافت نشد!</p>;
  }

  const helpSideMenu = [
    "اطلاعات کلی",
    "امکانات ویژه",
    "برنامه زمانبندی تور",
    "مسئولان تور",
    "ابزارهای مورد نیاز",
    "محدودیت‌ها",
    "جاذبه‌های مسیر",
    "جاذبه‌های مشابه",
    "تورهای مشابه",
    "نظرات کاربران",
  ];

  const [activeSection, setActiveSection] = useState("اطلاعات کلی");
  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container mx-auto flex pt-12 gap-2">
      <TourInfoQuickReferenceMenu
        sections={helpSideMenu}
        activeSection={activeSection}
        setActiveSection={handleSetActive}
      />

      <div className="flex-1 flex flex-col items-center gap-10">
        <DetailsToursGallery />
        <div className="w-full flex flex-row-reverse gap-4">
          <TourInformationCompletionMenu />
          <div className="flex-1 flex flex-col items-center">
            <GeneralTourInformation
              sectionName="اطلاعات کلی"
              title={post.location}
              agency="آژانس مسافربری مهاپرواز"
              links="google.com"
              description="ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد."
            />

            <SpecialTourFacilities
              sectionName="امکانات ویژه"
              title="امکانات ویژه"
            />

            <TourSchedule
              sectionName="برنامه زمانبندی تور"
              title="برنامه زمانبندی تور"
              description="
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              "
            />

            <TourOfficials sectionName="مسئولان تور" title="مسئولان تور" />

            <ToursTools
              sectionName="ابزارهای مورد نیاز"
              title="ابزارهای مورد نیاز"
              description="
                برای شرکت در این تور شما باید تجهیزات کامل را به همراه داشته
                باشید. موارد ضروری را جدی بگیرید و مواردی که میخواهید را از
                فروشگاه کوهنوردان فراهم کنید.
              "
            />

            <TourRestrictions
              sectionName="محدودیت‌ها"
              title="محدودیت‌ها"
              description="
                به محدودیت‌هایی که امکان دارد در این تور برای شما پیش آید توجه
                کنید. این اخطار‌ها را جدی بگیرید و در صورت لازم با لیدر و افرادی
                که تجربه کافی دارند مشورت کنید.
              "
            />

            <TourRouteAttractions
              sectionName="جاذبه‌های مسیر"
              title="جاذبه‌های مسیر"
              description="جاذبه‌های زیبایی که در طول مسیر به آن می‌رسید."
              SimilarSection="جاذبه‌های مشابه"
            />

            <SimilarTours sectionName="تورهای مشابه" title="تورهای مشابه" />

            <ToursUserComments
              sectionName="نظرات کاربران"
              title="نظرات کاربران"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
