"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

export function Slider() {
  const t = useTranslations("testimonials");
  const dir = usePathname().includes("ar") ? "rtl" : "ltr";

  return (
    <div className="my-16">
      <Container>
        <div
          className="w-full max-w-screen-lg mx-auto overflow-visible mt-80"
          dir={dir}
        >
          {/* Title */}
          <div className="flex items-center text-4xl sm:text-[40px] font-extrabold space-x-4 max-sm:text-center">
            <span>{t("title")}</span>
          </div>

          {/* Subtitle */}
          <div className="text-2xl pb-6 pt-4 max-sm:text-center text-balance">
            <span>{t("subtitle")}</span>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper text-blue-dark"
          >
            {[1, 2, 3, 4].map((item) => (
              <SwiperSlide className="!bg-transparent" key={`slide-${item}`}>
                {/* left */}
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0"
                >
                  <div className="h-[25rem] w-[18rem] rounded-xl">
                    <div className="rounded-xl relative w-full">
                      {/* <div
                        className="rounded-xl overflow-hidden flex items-center justify-center"
                        style={{
                          background:
                            "url(/assets/images/image01.jpg) center center / cover no-repeat",
                          width: "18rem",
                          height: "32rem",
                        }}
                      >
                        <div
                          className="absolute w-full h-full flex justify-center items-center z-40 rounded-xl"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(30, 30, 30, 0.00) 57%, #1E1E1E 100%), transparent 50% / cover no-repeat",
                          }}
                        >
                          <div className="h-full absolute top-[67%] text-white font-semibold px-3 z-10 text-left w-full">
                            <div className="flex space-x-3 items-center pt-2">
                              <div className="rounded-full px-2 py-0.5 bg-pink-500 bg-opacity-50">
                                ako_858
                              </div>
                              <div>@abdom</div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <video controls className="h-[25rem] w-[18rem] object-cover rounded-lg">
                        <source
                          src={`/assets/vids/testimonials/${item}.mp4`}
                          type="video/mp4"
                        ></source>
                      </video>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* sliders code here */}
          </Swiper>
        </div>
        <Navigations />
      </Container>
    </div>
  );
}

function Navigations() {
  const swiper = useSwiper();

  return (
    <div className="max-w-screen-lg mx-auto gap-3 pt-4 flex items-center">
      {/* Left Arrow Button */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="prev-btn bg-primary text-white font-extrabold uppercase hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 group px-5 py-3 relative rounded-full h-10 w-10 transition-all disabled:cursor-not-allowed ltr:rotate-180"
      >
        <div className="flex justify-center">
          <div className="absolute top-3 w-4 h-4">
            <ChevronRight className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={() => swiper?.slideNext()}
        className="next-btn bg-primary  text-white font-extrabold uppercase hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 group px-5 py-3 relative rounded-full h-10 w-10 transition-all disabled:cursor-not-allowed  rtl:rotate-180"
      >
        <div className="flex justify-center">
          <div className="absolute top-3 w-4 h-4">
            <ChevronRight className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Slider;
