import React, { useRef } from "react";
import TemplateV1 from "../../../Components/TemplateV1";
import Images from "../../../Setting/Images";
import EachBlogPost from "../../../Components/EachBlogPost";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function BlogSlides() {
  const blogData = [
    {
      image: Images.BlogJacket,
      date: "۱۶ فروردین ۱۴۰۳",
      title: "راهنمای کاربردی انتخاب و خرید پوشاک کوهنوردی",
      description:
        "اهمیت پوشاک کوهنوردی مناسب بر هیچکس پوشیده نیست. حتما شنیده اید که بعضی از کوهنورد ها میگویند هوای بد وجود ندارد و همه چیز به لباسی که میپوشید بستگی دارد. این مقاله به شما در انتخاب پوشاک کوهنوردی کمک میکند.",
      userProfile: Images.BlogUserProfile,
      userName: "محمد محمدی",
      links: "/Blogs",
    },
    {
      image: Images.BlogWomanWithMask,
      date: "۱۶ فروردین ۱۴۰۳",
      title: "چگونه از ابتلا به بیماری در سفر پیشگیری کنیم؟",
      description:
        "در این مقاله نکاتی پیرامون پیشگیری از ابتلا به بیماری در سفر بیان می کنیم: درباره مقصدتان تحقیق کنید. از وبسایت های CDC (مرکز کنترل و پیشگیری بیماری) و سازمان بهداشت جهانی بازدید کنید",
      userProfile: Images.BlogUserProfile,
      userName: "محمد محمدیان",
      links: "/Blogs",
    },
    {
      image: Images.BlogFlashlight,
      date: "۱۶ فروردین ۱۴۰۳",
      title: "نحوه ی انتخاب چراغ قوه مناسب کمپینگ",
      description:
        "اگرچه چراغ های پیشانی محبوبیت زیادی پیدا کرده اند، اما اگر هر زمان استفاده از چراغ های دستی ترجیح داده شود، چراغ قوه انتخاب خوبی می باشد، مانند: زمانی که به نور افکنی قابل حمل و قوی نیاز دارید.",
      userProfile: Images.BlogUserProfile,
      userName: "محمد محمدی‌نیا",
      links: "/Blogs",
    },
    {
      image: Images.BlogFearOfFalling,
      date: "۱۶ فروردین ۱۴۰۳",
      title: "چگونه ترس از سقوط را کنترل کنیم؟",
      description:
        "آیا تا به حال بی حمایتی را تجربه کرده اید؟ گرفتار تردید و ترس از سقوط؟ دوستانتان با گفتن«تمامش کن!» یا اینکه «تو موفق شدی!» تشویقتان می کنند. اما بخشی از شما  بهتر می داند: می داند که ترس به معنا دار است؛ می",
      userProfile: Images.BlogUserProfile,
      userName: "محمد محمدی‌فر",
      links: "/Blogs",
    },
    {
      image: Images.BlogWomanWithMask,
      date: "۱۶ فروردین ۱۴۰۳",
      title: "چگونه از ابتلا به بیماری در سفر پیشگیری کنیم؟",
      description:
        "در این مقاله نکاتی پیرامون پیشگیری از ابتلا به بیماری در سفر بیان می کنیم: درباره مقصدتان تحقیق کنید. از وبسایت های CDC (مرکز کنترل و پیشگیری بیماری) و سازمان بهداشت جهانی بازدید کنید",
      userProfile: Images.BlogUserProfile,
      userName: "محمد محمدیان",
      links: "/Blogs",
    },
  ];
  const swiperRef = useRef();

  return (
    <div className="w-full flex py-16 bg-white shadow-[0_0_50px_-15px_rgba(14,154,138,0.35)]">
      <TemplateV1
        title="بلاگ"
        links="/Blogs"
        swiperRef={swiperRef}
        children={
          <div className="w-full">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={8}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                800: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {blogData.map((item, index) => (
                <SwiperSlide key={index}>
                  <EachBlogPost
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    userProfile={item.userProfile}
                    userName={item.userName}
                    links={item.links}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        }
      />
    </div>
  );
}
