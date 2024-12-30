            <SwiperSlide className="!bg-transparent">
              {/* right */}
              <div
                role="group"
                aria-roledescription="slide"
                className="min-w-0 shrink-0 grow-0 rtl:text-right rtl:pl-4"
              >
                <div className="bg-green-extralight rounded-2xl shadow-sm border-2 border-pink-light p-6 w-[18rem] h-[25rem] flex-1 flex flex-col">
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
                  <a className="flex flex-col justify-between flex-1">
                    <div className="text-base">
                      {t("slider.slide1.content")}
                    </div>
                    <div className="font-bold text-sm flex  gap-2 w-full">
                      <div className="relative w-5 h-5">
                        <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                      </div>{" "}
                      <span>{t("slider.slide1.name")} </span>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!bg-transparent ml-4 rtl:ml-0">
              {/* left */}
              <div className="h-[25rem] w-[18rem] rounded-xl">
                <div className="rounded-xl relative w-full aspect-[16/9]">
                  <div
                    className="rounded-xl overflow-hidden w-[18rem] h-[25rem] flex items-center justify-center"
                    style={{
                      backgroundImage: "url(/assets/images/fahed.png) ",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="rounded-xl absolute w-full h-full flex justify-center items-center z-40 bg-gradient-to-b from-transparent via-transparent to-[#1E1E1E]">
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
              </div>
            </SwiperSlide>
            <SwiperSlide className="!bg-transparent">
              {/* right */}
              <div
                role="group"
                aria-roledescription="slide"
                className="min-w-0 shrink-0 grow-0 rtl:text-right rtl:ml-4"
              >
                <div className="bg-green-extralight rounded-2xl shadow-sm border-2 border-pink-light p-6 w-[18rem] h-[25rem] flex flex-col">
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.trustpilot.com/reviews/5e4b66703c93ae0bc4043e07"
                    className="flex flex-col justify-between flex-1"
                  >
                    <div className="text-base">
                      {t("slider.slide2.content")}
                    </div>
                    <div className="font-bold text-sm flex items-center gap-2 w-full">
                      <div className="relative w-5 h-5">
                        <span className="bg-[#FFCBF0] absolute inset-0 w-full h-full rounded-full"></span>
                      </div>
                      <span> {t("slider.slide2.name")} </span>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!bg-transparent !justify-start ml-4">
              {/* left */}
              <div
                role="group"
                aria-roledescription="slide"
                className="min-w-0 shrink-0 grow-0 "
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
                  hidden="true"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980416 11.9154 1.02021 11.8488L7.4141 1.12073Z"
                      fill="white"
                    />
                    <path
                      d="M8.23656 4.56674L9.18144 7.18595L10.8885 7.92846L9.52903 9.01854L9.2178 10.8212L8.23656 9.62296L7.25531 10.8212L6.94409 9.01854L5.58459 7.92846L7.29168 7.18595L8.23656 4.56674Z"
                      fill="white"
                    />
                  </svg>
                  <h5>{t("video_completition_title")}</h5>
                  <div>{t("video_completition_text")}</div>
                </div> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>