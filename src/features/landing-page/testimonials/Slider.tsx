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
import Video from "./Video";

export function Slider() {
  const t = useTranslations("testimonials");
  const dir = usePathname().includes("ar") ? "rtl" : "ltr";

  return (
    <div className="-mt-20 mb-16">
      <Container>
        <div
          className="w-full max-w-7xl mx-auto overflow-visible mt-80"
          dir={dir}
        >
          {/* Title */}
          <div className=" ">
            <div className="mb-10 text-4xl inline-block pb-2 font-bold  text-primary dark:text-white border-b-4 border-[#1E8022]">
              {t("title")}
            </div>
            <p className="text-xl mb-10 font-medium text-muted-foreground/90">
              {t("subtitle")}
            </p>
          </div>

          {/* Subtitle */}
          {/* <div className="text-2xl pb-6 pt-4 max-sm:text-center text-balance">
            <span>{t("subtitle")}</span>
          </div> */}
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
            {["1", "2", "3", "4"].map((item) => (
              <SwiperSlide className="!bg-transparent" key={`slide-${item}`}>
                {/* left */}
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0"
                >
                  <div className="h-[25rem] w-[18rem] rounded-xl">
                    <div className="rounded-xl relative w-full">
                      <Video item={item} />
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
