import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import EachGpxDetailItem from "../../../../Components/EachGpxDetailItem";

export default function GpxSlider() {
  const GpxPostData = [
    {
      routes: "مسیر اول",
      directions: "جبهه شمالی",
      descriptions:
        "مسیر صعود این جبهه از میان دو یخچال سیوله (سمت راست) و دوبی سل (سمت چپ) صورت می‌گیرد. مسیر شمالی از سنگ بزرگ واقع در جنوب غربی روستای ناندل شروع می‌شود. این مسیر دو جان‌پناه در ارتفاع‌های ۴۰۰۰ متر و ۴۷۰۰ متر دارد. ابتدای مسیر دشت ناندل است و مسیر قبل و بعد از جان‌پناه ۵۰۰۰ با دست به سنگ همراه است.",
    },
    {
      routes: "مسیر اول",
      directions: "جبهه شمالی",
      descriptions:
        "مسیر صعود این جبهه از میان دو یخچال سیوله (سمت راست) و دوبی سل (سمت چپ) صورت می‌گیرد. مسیر شمالی از سنگ بزرگ واقع در جنوب غربی روستای ناندل شروع می‌شود. ابتدای مسیر دشت ناندل است و مسیر قبل و بعد از جان‌پناه ۵۰۰۰ با دست به سنگ همراه است.",
    },
    {
      routes: "مسیر اول",
      directions: "جبهه شمالی",
      descriptions:
        "مسیر صعود این جبهه از میان دو یخچال سیوله (سمت راست) و دوبی سل (سمت چپ) صورت می‌گیرد. مسیر شمالی از سنگ بزرگ واقع در جنوب غربی روستای ناندل شروع می‌شود. این مسیر دو جان‌پناه در ارتفاع‌های ۴۰۰۰ متر و ۴۷۰۰ متر دارد. ابتدای مسیر دشت ناندل است و مسیر قبل و بعد از جان‌پناه ۵۰۰۰ با دست به سنگ همراه است.",
    },
    {
      routes: "مسیر اول",
      directions: "جبهه شمالی",
      descriptions:
        "مسیر صعود این جبهه از میان دو یخچال سیوله (سمت راست) و دوبی سل (سمت چپ) صورت می‌گیرد. مسیر شمالی از سنگ بزرگ واقع در جنوب غربی روستای ناندل شروع می‌شود. این مسیر دو جان‌پناه در ارتفاع‌های ۴۰۰۰ متر و ۴۷۰۰ متر دارد. ابتدای مسیر دشت ناندل است و مسیر قبل و بعد از جان‌پناه ۵۰۰۰ با دست به سنگ همراه است.",
    },
    {
      routes: "مسیر اول",
      directions: "جبهه شمالی",
      descriptions:
        " ابتدای مسیر دشت ناندل است و مسیر قبل و بعد از جان‌پناه ۵۰۰۰ با دست به سنگ همراه اس مسیر صعود این جبهه از میان دو یخچال سیوله (سمت راست) و دوبی سل (سمت چپ) صورت می‌گیرد. مسیر شمالی از سنگ بزرگ واقع در جنوب غربی روستای ناندل شروع می‌شود. این مسیر دو جان‌پناه در ارتفاع‌های ۴۰۰۰ متر و ۴۷۰۰ متر دارد. ابتدای مسیر دشت ناندل است و مسیر قبل و بعد از جان‌پناه ۵۰۰۰ با دست به سنگ همراه است.",
    },
  ];

  return (
    <div className="container mx-auto flex items-center">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2.5}
        pagination={{
          type: "progressbar",
        }}
        className="swiper !relative !grid !grid-cols-2 !pb-10"
      >
        {GpxPostData.map((item, index) => (
          <SwiperSlide key={index}>
            <EachGpxDetailItem
              routeNum={item.routes}
              direction={item.directions}
              description={item.descriptions}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
