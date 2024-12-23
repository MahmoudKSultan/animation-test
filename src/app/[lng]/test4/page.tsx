"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const MySwiper: React.FC = () => {
  const slideStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "18px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#eee",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide style={slideStyle}>
          {" "}
          {/* left */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            <div className="h-[25rem] w-[18rem] rounded-xl">
              <div className="rounded-xl relative w-full aspect-[16/9]">
                <div
                  className="rounded-xl overflow-hidden flex items-center justify-center"
                  style={{
                    background:
                      "url(https://image.mux.com/kHU7bsf5niA00CdMVcqvzz2Ka2p01NCXLS8hZ6b9jQqcM/thumbnail.png?time=0) center center / cover no-repeat",
                    width: "18rem",
                    height: "25rem",
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
                        <div className="rounded-full px-2 py-0.5 bg-pink-500 bg-opacity-50">
                          🇺🇸
                        </div>
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
            className="min-w-0 shrink-0 grow-0 pl-4"
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
                <div className="font-semibold text-lg text-left">
                  Received my tickets right after payment (less than a minute)
                </div>
                <div className="text-sm pt-4 font-light text-left">
                  &quot;Verified on the company site and everything is perfect.
                  Reached out to customer support for an additional request.
                  They were very nice and made the changes. Simply the best!&quot;
                </div>
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full">
                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                  <span>R. Janelle</span>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          {" "}
          {/* left */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            <div className="h-[25rem] w-[18rem] rounded-xl">
              <div className="rounded-xl relative w-full aspect-[16/9]">
                <div
                  className="rounded-xl overflow-hidden flex items-center justify-center"
                  style={{
                    background:
                      "url(https://image.mux.com/kHU7bsf5niA00CdMVcqvzz2Ka2p01NCXLS8hZ6b9jQqcM/thumbnail.png?time=0) center center / cover no-repeat",
                    width: "18rem",
                    height: "25rem",
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
                        <div className="rounded-full px-2 py-0.5 bg-pink-500 bg-opacity-50">
                          🇺🇸
                        </div>
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
            className="min-w-0 shrink-0 grow-0 pl-4"
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
                <div className="font-semibold text-lg text-left">
                  Received my tickets right after payment (less than a minute)
                </div>
                <div className="text-sm pt-4 font-light text-left">
                &quot;Verified on the company site and everything is perfect.
                  Reached out to customer support for an additional request.
                  They were very nice and made the changes. Simply the best!&quot;
                </div>
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full">
                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                  <span>R. Janelle</span>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          {" "}
          {/* left */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            <div className="h-[25rem] w-[18rem] rounded-xl">
              <div className="rounded-xl relative w-full aspect-[16/9]">
                <div
                  className="rounded-xl overflow-hidden flex items-center justify-center"
                  style={{
                    background:
                      "url(https://image.mux.com/kHU7bsf5niA00CdMVcqvzz2Ka2p01NCXLS8hZ6b9jQqcM/thumbnail.png?time=0) center center / cover no-repeat",
                    width: "18rem",
                    height: "25rem",
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
                        <div className="rounded-full px-2 py-0.5 bg-pink-500 bg-opacity-50">
                          🇺🇸
                        </div>
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
            className="min-w-0 shrink-0 grow-0 pl-4"
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
                <div className="font-semibold text-lg text-left">
                  Received my tickets right after payment (less than a minute)
                </div>
                <div className="text-sm pt-4 font-light text-left">
                &quot;Verified on the company site and everything is perfect.
                  Reached out to customer support for an additional request.
                  They were very nice and made the changes. Simply the best!&quot;
                </div>
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full">
                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                  <span>R. Janelle</span>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          {" "}
          {/* left */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            <div className="h-[25rem] w-[18rem] rounded-xl">
              <div className="rounded-xl relative w-full aspect-[16/9]">
                <div
                  className="rounded-xl overflow-hidden flex items-center justify-center"
                  style={{
                    background:
                      "url(https://image.mux.com/kHU7bsf5niA00CdMVcqvzz2Ka2p01NCXLS8hZ6b9jQqcM/thumbnail.png?time=0) center center / cover no-repeat",
                    width: "18rem",
                    height: "25rem",
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
                        <div className="rounded-full px-2 py-0.5 bg-pink-500 bg-opacity-50">
                          🇺🇸
                        </div>
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
            className="min-w-0 shrink-0 grow-0 pl-4"
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
                <div className="font-semibold text-lg text-left">
                  Received my tickets right after payment (less than a minute)
                </div>
                <div className="text-sm pt-4 font-light text-left">
                &quot;Verified on the company site and everything is perfect.
                  Reached out to customer support for an additional request.
                  They were very nice and made the changes. Simply the best!&quot;
                </div>
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full">
                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                  <span>R. Janelle</span>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
