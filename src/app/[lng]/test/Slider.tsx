import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function CenteredSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full" // Replaces .swiper { width: 100%; height: 100%; }
      >
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[60%]">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[40%]">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[20%]">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[60%]">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[40%]">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[20%]">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[60%]">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[40%]">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white w-[20%]">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  );
}
