import React from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import Images from "../../../Setting/Images";
import EachToursPost from "../../../Components/EachToursPost";

export default function BestTours() {
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
    },
  ];

  return (
    <div className="w-full py-16">
      <TemplateV1
        title="متنوع‌ترین و بهترین تورها"
        children={
          <div className="w-full flex items-center gap-2">
            {toursData.map((item, index) => (
              <EachToursPost
                key={index}
                image={item.image}
                categoryIcom={item.categoryIcon}
                categoryName={item.categoryName}
                location={item.location}
                agency={item.agency}
                rate={item.rate}
                startDate={item.StartDate}
                endDate={item.EndDate}
                month={item.Month}
                price={item.price}
              />
            ))}
          </div>
        }
      />
    </div>
  );
}
