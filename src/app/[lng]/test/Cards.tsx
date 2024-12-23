import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const Cards = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLDivElement>(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "end start"],
  });

  const topValue = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const t = useTranslations();
  useEffect(() => {
    let previousScrollPosition = 0;

    const isScrollingDown = () => {
      let goingDown = false;

      const scrollPosition = window.pageYOffset;

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
      <div className="w-full max-w-screen-lg  pb-36 pt-16 mx-auto">
        <div className="pb-14 text-4xl font-bold max-w-2xl">
          {t("testPage.reasons.title")}
        </div>
        <div className="flex flex-col flex-grow items-center w-full relative">
          {/* Plane Icon */}
          <motion.div
            className="sticky w-12 h-12 md:w-[4.4rem] md:h-[4.4rem] z-20 self-end ltr:mr-6 ltr:md:mr-[53px] rtl:ml-6 rtl:md:ml-[53px] rotate-0 z-50"
            style={{
              marginBottom: "-72px",
              top: topValue, // Adjust for your scroll logic
              willChange: "auto",
              scale, // Adjust as needed for motion
            }}
            ref={planRef}
          >
            <img
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
                <div className="max-w-60 md:max-w-lg">
                  <div className="text-lg font-bold">
                    {t("testPage.reasons.cardTitles.0")}
                  </div>
                  <div className="text-3xl sm:text-5xl font-bold pt-5 text-balance">
                    {t("testPage.reasons.cardSubtitles.0")}
                  </div>
                  <div className="text-lg md:text-xl pt-8">
                    <ul className="list-disc">
                      {[
                        t("testPage.reasons.cardDescriptions.0.0"),
                        t("testPage.reasons.cardDescriptions.0.1"),
                        t("testPage.reasons.cardDescriptions.0.2"),
                        t("testPage.reasons.cardDescriptions.0.3"),
                        t("testPage.reasons.cardDescriptions.0.4"),
                      ].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Optional Runway Image */}
                <div className="absolute h-[100vh] w-[40px] md:h-[2000px] md:w-[80px] -mt-1 ltr:right-7 ltr:md:right-12 rtl:left-7 rtl:md:left-12">
                  <img
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
              title: "Small Business",
              subtitle: "Professional Package",
              description: [
                "Basic package elements",
                "Produce 5 UGC advertising videos",
                "Ad with 5 active accounts with a trusted license and over 10k followers",
                "Campaign end report with recommendations for future campaigns",
              ],
              offset: "64px",
            },
            {
              gradient:
                "linear-gradient(104deg, #D3FFAE -0.05%, rgba(255, 255, 255, 1) 100.02%)",
              title: "Medium Enterprises",
              subtitle: "Specialized Package",
              description: [
                "Design advertising campaigns with the internal marketing team aiming for a +20% sales increase",
                "Work on improving ad spend efficiency",
                "Work on increasing conversion rates",
                "Manage campaigns with micro-influencers",
                "Creative ideas for campaign launches or new product launches",
                "Build marketing departments for medium-sized enterprises",
              ],
              offset: "96px",
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
                  <div className="max-w-60 md:max-w-lg">
                    <div className="text-lg font-bold">
                      {t(`testPage.reasons.cardTitles.${index + 1}`)}
                    </div>
                    <div className="text-3xl sm:text-5xl font-bold pt-5 text-balance">
                      {t(`testPage.reasons.cardSubtitles.${index + 1}`)}
                    </div>
                    <div className="text-lg pt-8">
                      <ul className="list-disc">
                        {card.description.map((item, idx) => (
                          <li key={idx} className="mb-2">
                            {t(
                              `testPage.reasons.cardDescriptions.${
                                index + 1
                              }.${idx}`
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute h-[100vh] w-[40px] md:h-[2000px] md:w-[80px] -mt-1 ltr:right-7 ltr:md:right-12 rtl:left-7 rtl:md:left-12">
                    <img
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
