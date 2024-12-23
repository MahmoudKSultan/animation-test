"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Slider2() {
  const t = useTranslations("testimonials");
  return (
    <div className="container max-w-screen-lg mx-auto overflow-visible mt-80">
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
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        //   el: ".swiper-pagination",
        // }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper text-blue-dark"
        dir="rtl"
      >
        <SwiperSlide className="!bg-transparent">
          {/* left */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            <div className="h-[25rem] w-[18rem] rounded-xl">
              <div className="rounded-xl relative w-full">
                <div
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
                    {/* <button className="w-full h-full">
                      <div className="flex justify-center items-center">
                        <div className="bg-white bg-opacity-30 backdrop-blur rounded-full px-4 py-4">
                          <div className="relative w-4 h-4">
                            <img
                              alt="play"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 w-full h-full"
                              src="/static/img/play.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </button> */}
                    <div className="absolute bottom-5 text-white font-semibold px-6 z-10 text-left w-full">
                      <div className="flex space-x-3 items-center pt-2">
                        <div className="rounded-full px-2 py-0.5 bg-pink-500 bg-opacity-50">
                        ako_858
                        </div>
                        <div>@iHamadFahad7</div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4 text-right"
          >
            <div className="bg-green-extralight rounded-2xl shadow-sm border-2 border-pink-light p-6 w-[18rem] h-[25rem]">
              <div className="flex pb-3 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="relative w-4 h-4">
                    <img
                      alt="star"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full"
                      src="/assets/images/star.svg"
                    />
                  </div>
                ))}
              </div>
              <a target="_blank" href="/">
                <div className="text-xl pt-4 font-medium text-right">
                سمير من الملهمين لي في مجال التسويق ودايم يبهرني بطريقة تفكيره وقدرته المذهلة في حل المشاكل
والاستكشاف.
الثريد مفيد لأي شغوف في التسويق
                </div>
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full  text-right">
                <span>عبدالرحمن العمران </span>

                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!bg-transparent">
          {/* left */}
          <div className="h-[25rem] w-[18rem] rounded-xl">
            <div className="rounded-xl relative w-full aspect-[16/9]">
              <div
                className="rounded-xl overflow-hidden w-[18rem] h-[25rem] flex items-center justify-center"
                style={{
                  backgroundImage:
                  "url(/assets/images/fahed.png) ",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="rounded-xl absolute w-full h-full flex justify-center items-center z-40 bg-gradient-to-b from-transparent via-transparent to-[#1E1E1E]">
                  {/* <button className="w-full h-full">
                    <div className="flex justify-center items-center">
                      <div className="bg-white bg-opacity-30 backdrop-blur rounded-full px-4 py-4">
                        <div className="relative w-4 h-4">
                          <img
                            alt="play"
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full"
                            src="/static/img/play.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </button> */}
                  <div className="absolute bottom-5 text-white font-semibold px-6 z-10 text-left w-full">
                    <div className="flex space-x-3 items-center pt-2">
                      <div className="rounded-full px-2 py-0.5 bg-pink bg-opacity-50">
                        🇨🇴
                      </div>
                      <a
                        rel="nofollow"
                        target="_blank"
                        className="z-10"
                        href="https://www.instagram.com/viejaqueviaja/"
                      >
                        <div>@iHamadFahad7</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="alert"
              className="absolute inset-4 bottom-auto p-3 bg-[rgba(240,240,240,0.7)] border border-gray-700 rounded-xl transition-opacity duration-250"
              hidden
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h5 className="font-medium mb-1 pl-7">Upload in progress...</h5>
              <div className="pl-7 text-sm leading-5">
                Your video file is being uploaded. The currently loaded video is
                the source file.
              </div>
            </div>
          </div>

          {/* right */}

          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            {/* Card */}
            <div className="bg-green-extralight rounded-2xl shadow-sm border-2 border-pink-light p-6 w-[18rem] h-[25rem]">
              {/* Star Ratings */}
              <div className="flex pb-3 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="relative w-4 h-4">
                    <img
                      alt="star"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full"
                      src="/assets/images/star.svg"
                    />
                  </div>
                ))}
              </div>
              {/* Review Content */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.trustpilot.com/reviews/5e4b66703c93ae0bc4043e07"
              >
                {/* Title */}
                <div className="font-semibold text-lg text-left">
                سمير من الملهمين لي في مجال التسويق ودايم يبهرني بطريقة تفكيره وقدرته المذهلة في حل المشاكل
والاستكشاف.
الثريد مفيد لأي شغوف في التسويق
                </div>
                {/* Review Text */}
              
                {/* Reviewer Info */}
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full">
                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                  <span>حمد بن فهد</span>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>

       
        <SwiperSlide className="!bg-transparent !justify-start">
          {/* left */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            <div className="h-[25rem] w-[18rem] rounded-xl">
              <div className="rounded-xl next-video-container">
                <style>
                  {`
          .next-video-container {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
          }

          [data-next-video] {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
          }

          [data-next-video] img {
            object-fit: var(--media-object-fit, contain);
            object-position: var(--media-object-position, center);
          }
        `}
                </style>

                <div
                  style={{
                    borderRadius: "1rem",
                    overflow: "hidden",
                    width: "18rem",
                    height: "25rem",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `url(https://image.mux.com/kcOK1jeWrAozF01Hz4UYNP02xn14qYJgz00xdaoOjrbtHg/thumbnail.png?time=0) center center / cover no-repeat`,
                  }}
                >
                  <div
                    className="absolute w-full h-full flex justify-center items-center z-40"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(30, 30, 30, 0.00) 57%, #1E1E1E 100%), transparent 50% / cover no-repeat",
                    }}
                  >
                    {/* <button className="w-full h-full">
                      <div className="flex justify-center items-center">
                        <div className="bg-white bg-opacity-30 backdrop-blur rounded-full px-4 py-4">
                          <div className="relative w-4 h-4">
                            <img
                              alt="play"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 w-full h-full"
                              src="/static/img/play.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </button> */}

                    <div className="absolute bottom-5 text-white font-semibold px-6 z-10 text-left w-full">
                      <div className="flex space-x-3 items-center pt-2">
                        <div className="rounded-full px-2 py-0.5 bg-pink bg-opacity-50">
                          🇮🇳
                        </div>
                        <a
                          rel="nofollow"
                          target="_blank"
                          className="z-10"
                          href="https://www.instagram.com/visatraveler/"
                        >
                          <div>@visatraveler</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <style>
                  {`
          .next-video-alert {
            position: absolute;
            inset: 1em;
            bottom: auto;
            padding: .75rem 1rem;
            border-radius: 1rem;
            color: hsl(0, 0%, 100%);
            background-color: hsl(240 10% 3.9% / .7);
            border: 1px solid hsl(240 3.7% 15.9%);
            transition: visibility 0s, opacity .25s;
            visibility: visible;
            opacity: 1;
          }

          .next-video-alert[hidden] {
            display: block;
            transition: visibility 1s, opacity 1s;
            visibility: hidden;
            opacity: 0;
          }

          .next-video-alert svg {
            position: absolute;
          }

          .next-video-alert h5 {
            line-height: 1;
            font-weight: 500;
            margin-bottom: 0.25rem;
            padding-left: 1.75rem;
            font-size: inherit;
          }

          .next-video-alert div {
            padding-left: 1.75rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
        `}
                </style>

                {/* Alert for Video Upload */}
                {/* <div
                  role="alert"
                  className="next-video-alert next-video-alert-ready"
                  hidden=""
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <h5>Upload in progress...</h5>
                  <div>
                    Your video file is being uploaded. The currently loaded
                    video is the source file.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Navigations />
    </div>
  );
}

function Navigations() {
  const swiper = useSwiper();

  return (
    <div className="max-w-screen-lg space-x-3 pt-4 flex items-center  rtl:flex-row-reverse ">
      {/* Left Arrow Button */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="prev-btn bg-primary text-blue-dark font-extrabold uppercase hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 group px-5 py-3 relative rounded-full h-10 w-10 transition-all disabled:cursor-not-allowed "
      >
        <div className="flex justify-center">
          <div className="absolute top-3 w-4 h-4">
            <ChevronRight className="absolute inset-0 w-full h-full rotate-180" />
          </div>
        </div>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={() => swiper?.slideNext()}
        className="next-btn bg-primary  text-blue-dark font-extrabold uppercase hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 group px-5 py-3 relative rounded-full h-10 w-10 transition-all disabled:cursor-not-allowed "
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
