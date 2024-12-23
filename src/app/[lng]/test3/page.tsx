"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { ChevronRight } from "lucide-react";

export default function App() {
  return (
    <div className="mt-80">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Pagination]}
        className="mySwiper text-blue-dark"
      >
        <SwiperSlide className="!bg-transparent">
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
                  &quotVerified on the company site and everything is perfect.
                  Reached out to customer support for an additional request.
                  They were very nice and made the changes. Simply the
                  best!&quot
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
        <SwiperSlide className="!bg-transparent">
          {/* left */}
          <div className="h-[25rem] w-[18rem] rounded-xl">
            <div className="rounded-xl relative w-full aspect-[16/9]">
              <div
                className="rounded-xl overflow-hidden w-[18rem] h-[25rem] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('https://image.mux.com/cnhbOlrlngfGtyZBY9zAK8HO1hvbcTc1eZw7QI6c3Co/thumbnail.png?time=0')",
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
                        <div>@viejaqueviaja</div>
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
                <div className="font-semibold text-lg">
                  Everything was fast and frictionless
                </div>
                {/* Review Text */}
                <div className="text-sm pt-4 font-light">
                  &quotVery smooth experience. Used it at the airport to get an
                  on-arrival visa. Everything was fast and frictionless.
                  Definitely recommended! As a spontaneous traveler this app has
                  helped me a lot! Love it, thanks!&quot
                </div>
                {/* Reviewer Info */}
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full">
                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                  <span>Kasper W.</span>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!bg-transparent">
          {/* left */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            {/* Video Card */}
            <div className="h-[25rem] w-[18rem] rounded-xl relative flex items-center justify-center overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('https://image.mux.com/W3H6i4Z21MJI1VueAdUhf1K015mk5p1OdXCUsniKPR98/thumbnail.png?time=0')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E1E1E] z-40 flex flex-col justify-end">
                  {/* Play Button */}
                  {/* <button className="w-full h-full flex justify-center items-center">
                    <div className="bg-white bg-opacity-30 backdrop-blur rounded-full px-4 py-4">
                      <img
                        alt="play"
                        loading="lazy"
                        decoding="async"
                        className="w-4 h-4"
                        src="/static/img/play.svg"
                      />
                    </div>
                  </button> */}
                  {/* Bottom Content */}
                  <div className="absolute bottom-5 text-white font-semibold px-6 w-full">
                    <div className="flex space-x-3 items-center pt-2">
                      <div className="rounded-full px-2 py-0.5 bg-pink bg-opacity-50">
                        🇩🇪
                      </div>
                      <a
                        href="https://www.instagram.com/better.beyond/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="z-10"
                      >
                        @better.beyond
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Box */}
            {/* <div
              role="alert"
              className="absolute inset-4 p-3 bg-[rgba(30,30,30,0.7)] border border-gray-700 rounded-xl transition-opacity duration-250"
              hidden
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="absolute"
              >
                <path
                  d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              <h5 className="font-medium mb-1 pl-7">Upload in progress...</h5>
              <div className="pl-7 text-sm leading-5">
                Your video file is being uploaded. The currently loaded video is
                the source file.
              </div>
            </div> */}
          </div>

          {/* right */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            {/* Review Card */}
            <div className="bg-green-extralight rounded-2xl shadow-sm border-2 border-pink-light p-6 w-[18rem] h-[25rem]">
              {/* Star Rating */}
              <div className="flex pb-3 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="relative w-4 h-4">
                    <img
                      alt="star"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                      src="/assets/images/star.svg"
                    />
                  </div>
                ))}
              </div>
              {/* Review Content */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.trustpilot.com/reviews/60670bc0f85d75087044532e"
              >
                <div className="font-semibold text-lg">
                  Easy to use, instant, and there’s no hassle
                </div>
                <div className="text-sm pt-4 font-light">
                  &quotThe most amazing service. It’s easy to use, instant, and
                  there’s no hassle to get it done. I had to take an emergency
                  flight to Kuala Lumpur and it’s super convenient and I
                  literally have no words for it. I would really recommend it to
                  everyone. 100/100&quot
                </div>
                {/* Reviewer Info */}
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full">
                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                  <span>Talitha S.</span>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!bg-transparent">
          {/* left */}
          <div
            role="group"
            aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4"
          >
            {/* Video Card */}
            <div className="h-[25rem] w-[18rem] rounded-xl">
              <div className="rounded-xl relative overflow-hidden w-full h-full">
                <div
                  style={{
                    backgroundImage:
                      "url(https://image.mux.com/8PhSl00JTrxrHmHvGaPMa9ZWXSRwrR7k00aUZyNFGonh00/thumbnail.png?time=0)",
                  }}
                  className="w-full h-full bg-cover bg-center flex items-center justify-center"
                >
                  {/* Gradient Overlay */}
                  <div
                    className="absolute w-full h-full flex justify-center items-center z-40"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(30, 30, 30, 0) 57%, #1E1E1E 100%)",
                    }}
                  >
                    {/* Play Button */}
                    {/* <button className="w-full h-full flex items-center justify-center">
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
                    </button> */}

                    {/* Video Caption */}
                    <div className="absolute bottom-5 text-white font-semibold px-6 z-10 w-full text-left">
                      <div className="flex space-x-3 items-center pt-2">
                        <div className="rounded-full px-2 py-0.5 bg-pink bg-opacity-50">
                          🇧🇷
                        </div>
                        <a
                          href="https://www.instagram.com/luanamarcelina/"
                          target="_blank"
                          rel="nofollow noreferrer"
                          className="z-10"
                        >
                          @luanamarcelina
                        </a>
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
              {/* Star Rating */}
              <div className="flex pb-3 space-x-1">
                {Array.from({ length: 5 }).map((_, index) => (
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
                href="https://www.trustpilot.com/reviews/5df50579c845450b742f1f9b"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <div className="font-semibold text-lg">
                  Downloaded my ticket right after my payment
                </div>
                <div className="text-sm pt-4 font-light">
                  &quotEverything went smooth. I was able to download my ticket
                  right after my payment. At check-in at the airport, they
                  checked the code on the ticket in their system and it was ok.
                  I really recommended OnwardTicket.com!!&quot
                </div>
                <div className="font-bold text-sm flex items-center space-x-2 fixed bottom-8 w-full">
                  <div className="relative w-5 h-5">
                    <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                  </div>
                  <span>Aaron P.</span>
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
      <div className="max-w-screen-lg space-x-3 pt-4 flex items-center">
        {/* Left Arrow Button */}
        <button className="bg-primary text-blue-dark font-extrabold uppercase hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 group px-5 py-3 relative rounded-full h-10 w-10 transition-all">
          <div className="flex justify-center">
            <div className="absolute top-3 w-4 h-4">
              <ChevronRight className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </button>

        {/* Right Arrow Button */}
        <button className="bg-primary  text-blue-dark font-extrabold uppercase hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 group px-5 py-3 relative rounded-full h-10 w-10 transition-all">
          <div className="flex justify-center">
            <div className="absolute top-3 w-4 h-4">
              <ChevronRight className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
