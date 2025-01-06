"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Cards = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLDivElement>(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "end start"],
  });

  const topValue = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const t = useTranslations("inspirations");
  useEffect(() => {
    let previousScrollPosition = 0;

    const isScrollingDown = () => {
      let goingDown = false;

      const scrollPosition = window && window.pageYOffset;

      if (scrollPosition > previousScrollPosition) {
        goingDown = true;
      }

      previousScrollPosition = scrollPosition;

      return goingDown;
    };
    const handleScroll = () => {
      if (isScrollingDown()) {
        console.log("scroll down");
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto  px-5">
      <div className="w-full max-w-7xl  pb-36 pt-16 mx-auto">
        <div className="mb-10 text-4xl inline-block pb-2 font-bold  text-primary dark:text-white border-b-4 border-[#1E8022]">
          {t("title")}
        </div>
        <p className="text-xl mb-10 font-medium text-muted-foreground/90">
          {t("subtitle")}
        </p>
        <div className="flex max-w-5xl flex-col flex-grow items-center w-full relative mx-auto">
          {/* Plane Icon */}
          <motion.div
            className="sticky w-12 h-12 md:w-[4.4rem] md:h-[4.4rem] self-end ltr:mr-6 ltr:md:mr-[53px] rtl:ml-6 rtl:md:ml-[53px] rotate-0 z-50"
            style={{
              marginBottom: "-72px",
              top: topValue, // Adjust for your scroll logic
              willChange: "auto",
              scale, // Adjust as needed for motion
            }}
            ref={planRef}
          >
            <Image
              width={100}
              height={100}
              alt="plane"
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full transition-transform duration-500 ${
                !isScrollingDown ? "rotate-180" : ""
              }`}
              src="/assets/images/plane-flying.svg"
            />
          </motion.div>

          {/* Card 1 */}
          <div
            className="sticky flex bg-green-light h-[70vh] w-full rounded-[40px] shadow-lg items-center z-10"
            style={{
              top: "calc(10vh + 0px)",
              marginBottom: "calc(-0px)",
              height: "calc(70vh - 0px)",
            }}
          >
            <div
              className="relative w-full h-full pb-6 px-[34px] sm:px-10 lg:px-24 rounded-[40px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(104deg, #D3FFAE -0.05%, rgba(255, 255, 255, 1) 100.02%)",
              }}
            >
              <div className="flex items-center h-full">
                <div className="w-4/5">
                  {/* <div className="text-lg font-bold">
                    {t("cardTitles.0")}
                  </div> */}
                  <div className="text-3xl sm:text-5xl font-bold pt-5 text-balance  text-primary">
                    {t("cardSubtitles.0")}
                  </div>
                  {/* <div className="text-lg md:text-xl pt-8">
                    <ul className="list-disc">
                      {[
                        t("cardDescriptions.0.0"),
                        t("cardDescriptions.0.1"),
                        t("cardDescriptions.0.2"),
                        t("cardDescriptions.0.3"),
                        t("cardDescriptions.0.4"),
                      ].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div> */}
                </div>
                {/* Optional Runway Image */}
                <div className="absolute h-[100vh] w-[40px] md:h-[2000px] md:w-[80px] -mt-1 ltr:right-7 ltr:md:right-12 rtl:left-7 rtl:md:left-12">
                  <Image
                    width={100}
                    height={100}
                    alt="runway"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full"
                    src="/assets/images/runway.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Cards */}
          {[
            {
              gradient:
                "linear-gradient(99deg, #75E1D5 0%, rgba(255, 255, 255, 1) 99.96%)",
              subtitle: "2-بناء مشاريع تقنية مبتكرة",
              offset: "64px",
            },
            {
              gradient:
                "linear-gradient(104deg, #D3FFAE -0.05%, rgba(255, 255, 255, 1) 100.02%)",
              title: "Medium Enterprises",
              subtitle: "Specialized Package",
              offset: "96px",
            },
            {
              gradient:
                "linear-gradient(99deg, #75E1D5 0%, rgba(255, 255, 255, 1) 99.96%)",
              subtitle: "2-بناء مشاريع تقنية مبتكرة",
              offset: "128px",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="mt-[90vh] sticky flex bg-green-light h-[70vh] w-full rounded-[40px] shadow-lg items-center"
              style={{
                top: `calc(10vh + ${card.offset})`,
                marginBottom: `calc(-${card.offset})`,
                height: "calc(70vh - 0px)",
                zIndex: (index + 2) * 10,
              }}
            >
              <div
                className="relative w-full h-full pb-6 px-[34px] sm:px-10 lg:px-24 rounded-[40px] overflow-hidden"
                style={{
                  background: card.gradient,
                }}
              >
                <div className="flex items-center h-full">
                  <div className="w-4/5">
                    {/* <div className="text-lg font-bold">
                      {t(`cardTitles.${index + 1}`)}
                    </div> */}
                    <div className="text-3xl sm:text-5xl font-bold pt-5 text-balance text-primary">
                      {t(`cardSubtitles.${index + 1}`)}
                    </div>
                    {/* <div className="text-lg pt-8">
                      <ul className="list-disc">
                        {card.description.map((item, idx) => (
                          <li key={idx} className="mb-2">
                            {t(
                              `cardDescriptions.${
                                index + 1
                              }.${idx}`
                            )}
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                  <div className="absolute h-[100vh] w-[40px] md:h-[2000px] md:w-[80px] -mt-1 ltr:right-7 ltr:md:right-12 rtl:left-7 rtl:md:left-12">
                    <Image
                      width={100}
                      height={100}
                      alt="runway"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full"
                      src="/assets/images/runway.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
