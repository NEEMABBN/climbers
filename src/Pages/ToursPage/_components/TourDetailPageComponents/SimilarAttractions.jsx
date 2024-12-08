import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Images from "../../../../Setting/Images";

export default function SimilarAttractions({ SimilarAttraction }) {
  const similarAttractions = [
    {
      name: "برج رسکت",
      description:
        "از جاهای دیدنی ساری به شمار می‌آید و در روستایی با همین نام واقع شده است. این برج یکی از برج‌های مدور آجری بازمانده از قرن پنجم هجری قمری محسوب می‌شود و احتمالا مدفن یکی از افراد خاندان باوندیان بوده است. برج رسکت علاوه بر آثار معماری آن که در نوع خود قابل‌توجه هستند، دارای دو رشته کتیبه به خط کوفی گلزار و پهلوی ساسانی است که بر اهمیت آن بیش‌ازپیش می‌افزاید.",
      image: Images.IslandImage,
    },
    {
      name: "برج رسکت",
      description:
        "از جاهای دیدنی ساری به شمار می‌آید و در روستایی با همین نام واقع شده است. این برج یکی از برج‌های مدور آجری بازمانده از قرن پنجم هجری قمری محسوب می‌شود و احتمالا مدفن یکی از افراد خاندان باوندیان بوده است. برج رسکت علاوه بر آثار معماری آن که در نوع خود قابل‌توجه هستند، دارای دو رشته کتیبه به خط کوفی گلزار و پهلوی ساسانی است که بر اهمیت آن بیش‌ازپیش می‌افزاید.",
      image: Images.IslandImage,
    },
    {
      name: "برج رسکت",
      description:
        "از جاهای دیدنی ساری به شمار می‌آید و در روستایی با همین نام واقع شده است. این برج یکی از برج‌های مدور آجری بازمانده از قرن پنجم هجری قمری محسوب می‌شود و احتمالا مدفن یکی از افراد خاندان باوندیان بوده است. برج رسکت علاوه بر آثار معماری آن که در نوع خود قابل‌توجه هستند، دارای دو رشته کتیبه به خط کوفی گلزار و پهلوی ساسانی است که بر اهمیت آن بیش‌ازپیش می‌افزاید.",
      image: Images.IslandImage,
    },
    {
      name: "برج رسکت",
      description:
        "از جاهای دیدنی ساری به شمار می‌آید و در روستایی با همین نام واقع شده است. این برج یکی از برج‌های مدور آجری بازمانده از قرن پنجم هجری قمری محسوب می‌شود و احتمالا مدفن یکی از افراد خاندان باوندیان بوده است. برج رسکت علاوه بر آثار معماری آن که در نوع خود قابل‌توجه هستند، دارای دو رشته کتیبه به خط کوفی گلزار و پهلوی ساسانی است که بر اهمیت آن بیش‌ازپیش می‌افزاید.",
      image: Images.IslandImage,
    },
    {
      name: "برج رسکت",
      description:
        "از جاهای دیدنی ساری به شمار می‌آید و در روستایی با همین نام واقع شده است. این برج یکی از برج‌های مدور آجری بازمانده از قرن پنجم هجری قمری محسوب می‌شود و احتمالا مدفن یکی از افراد خاندان باوندیان بوده است. برج رسکت علاوه بر آثار معماری آن که در نوع خود قابل‌توجه هستند، دارای دو رشته کتیبه به خط کوفی گلزار و پهلوی ساسانی است که بر اهمیت آن بیش‌ازپیش می‌افزاید.",
      image: Images.IslandImage,
    },
  ];

  const swiperRef2 = useRef(null);
  const paginationRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = similarAttractions.length;
  const nextSlide = () => swiperRef2.current?.slideNext();
  const prevSlide = () => swiperRef2.current?.slidePrev();

  return (
    <Element
      name={SimilarAttraction}
      className="w-full flex flex-col items-start p-4 gap-4"
    >
      <Swiper
        dir="rtl"
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => {
          swiperRef2.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex + 1);
        }}
        className="mySwiper !w-full !grid !grid-cols-1"
      >
        {similarAttractions.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex items-start gap-6">
              <div className="w-1/2 flex flex-col items-start gap-2">
                <span className="text-[25px] text-Secoundray">{item.name}</span>
                <p className="text-SubTitle text-Secoundray leading-6">
                  {item.description}
                </p>
              </div>
              <div className="w-1/2 rounded-2xl overflow-hidden">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="border-solid border-Borders text-Secoundray hover:text-Primary border-[1px] rounded-full p-2 transition-all"
          >
            <FaChevronRight />
          </button>

          <span ref={paginationRef} className="text-Disable">
            {totalSlides} / {currentSlide}
          </span>
          <button
            onClick={nextSlide}
            className="border-solid border-Borders text-Secoundray hover:text-Primary border-[1px] rounded-full p-2 transition-all"
          >
            <FaChevronLeft />
          </button>
        </div>
        <button className="text-Primary text-SubTitle">بیشتر بخوانید</button>
      </div>
    </Element>
  );
}
