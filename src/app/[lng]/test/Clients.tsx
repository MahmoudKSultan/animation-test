import { useScroll, useTransform, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";

export const AirlinesSection = () => {
  const t = useTranslations("testPage");

  const rightDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rightDivRef,
  });

  const rightValue = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const leftDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: leftScrollYProgress } = useScroll({
    target: leftDivRef,
  });
  const leftValue = useTransform(leftScrollYProgress, [0, 1], [0, 50]);

  // cloud animation
  const firstCloudRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cloudScrollYProgress } = useScroll({
    target: firstCloudRef,
    offset: ["start end", "end start"],
  });

  const firstCloudValue = useTransform(cloudScrollYProgress, [0, 1], [0, -300]);

  const secondCloudRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: secondCloudScrollYProgress } = useScroll({
    target: secondCloudRef,
    offset: ["start end", "end start"],
  });

  const secondCloudValue = useTransform(
    secondCloudScrollYProgress,
    [0, 1],
    [0, 200]
  );

  return (
    <div className="relative overflow-hidden px-5">
      <div className="container mx-auto">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between py-28 overflow-hidden">
          {/* Left Column */}
          <div className="sm:max-w-sm max-sm:flex flex-col w-full justify-center items-center">
            <p className="text-3xl max-sm:text-center sm:text-4xl font-bold text-balance">
              {t("clients.title")}
            </p>

            {/* Buttons */}
            <div className="sm:pt-4 max-w-xs">
              <Link href="/form">
                <button className="bg-primary rounded-full text-blue-dark font-extrabold uppercase hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 group px-6 py-3 mt-4  w-full transition-all">
                  <div className="flex justify-center">
                    <div className="flex items-center relative">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-[-10px] transition-all ease-in-out absolute left-0"
                      >
                        <path
                          d="M14 5L21 12M21 12L14 19M21 12L3 12"
                          stroke="#1F368D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-3 bg-primary">
                        {t("clients.book-btn")}
                      </span>
                    </div>
                  </div>
                </button>
              </Link>
              <a target="_blank" href="/static/sample.pdf">
                <button className="bg-transparent rounded-full text-blue-dark font-extrabold uppercase hover:bg-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border-2 border-blue-dark group px-6 py-3 mt-4  w-full transition-all">
                  <div className="flex justify-center">
                    <div className="flex items-center relative">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-[-10px] transition-all ease-in-out absolute left-0"
                      >
                        <path
                          d="M14 5L21 12M21 12L14 19M21 12L3 12"
                          stroke="#1F368D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-3">
                        {t("clients.see-sample")}
                      </span>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
          {/* <Image src="/assets/images" alt="" width={100} height={100}/> */}
          {/* Right Column */}
          <div className="max-sm:hidden w-2/5 relative -mt-16">
            {[
              {
                src: "C6.webp",
                top: "top-[calc(100%)] lg:top-24   md:ltr:-left-[5rem] lg:rtl:right-[calc(100%-100px)] ",
              },
              {
                src: "C4.webp",
                top: "top-[2rem] ltr:left-[10rem] ltr:md:left-[5rem] rtl:right-[10rem] rtl:md:right-[8rem]",
              },
              {
                src: "C5.png",
                top: "top-[5rem] ltr:left-[8rem] ltr:md:left-[10rem] rtl:right-[8rem] rtl:md:right-[10rem]",
              },
              {
                src: "C11.png",
                top: "top-[-5rem] ltr:left-[15rem] rtl:right-0",
              },
              {
                src: "C20.png",
                top: "top-[-3rem] ltr:md:left-[0] rtl:md:right-[0]",
              },
            ].map((airline, index) => (
              <div className={`relative w-fit ${airline.top}`} key={index}>
                <img
                  alt="airline"
                  loading="lazy"
                  decoding="async"
                  src={`/assets/images/logos/${airline.src}`}
                  className="w-[100px] h-[65px]"
                />
              </div>
            ))}
          </div>

          {/* Mobile View: Airline Rows */}
          <div className="sm:hidden">
            {["row1.svg", "row2.svg", "row3.svg"].map((row, index) => (
              <div className="relative h-[80px] w-screen mt-5" key={index}>
                <motion.div
                  ref={index % 2 === 0 ? leftDivRef : rightDivRef}
                  className={`absolute w-[1080px] h-[56px]`}
                  style={{
                    x: index % 2 === 0 ? leftValue : rightValue,
                  }}
                >
                  <img
                    alt="airline"
                    loading="lazy"
                    decoding="async"
                    src={`https://onwardticket.com/static/img/landing/airlines/mobile/${row}`}
                    className="absolute inset-0 h-full w-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clouds */}
      <div className="max-sm:hidden">
        <motion.div
          className="absolute -right-[18rem] -bottom-5 -z-10"
          style={{
            y: firstCloudValue,
          }}
          ref={firstCloudRef}
        >
          <img
            alt="cloud"
            loading="lazy"
            src="/assets/images/cloud.svg"
            className="w-[700px] h-[200px]"
          />
        </motion.div>
        <motion.div
          className="absolute -left-[25rem] -top-5 -z-10"
          ref={secondCloudRef}
          style={{
            y: secondCloudValue,
          }}
        >
          <img
            alt="cloud"
            loading="lazy"
            src="/assets/images/cloud.svg"
            className="w-[700px] h-[200px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AirlinesSection;
