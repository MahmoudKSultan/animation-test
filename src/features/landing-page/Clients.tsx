"use client";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";
import Container from "@/components/Container";
import { logos } from "@/data/constants/clients-logos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export function Clients() {
  // cloud animation
  // const firstCloudRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress: cloudScrollYProgress } = useScroll({
  //   target: firstCloudRef,
  //   offset: ["start end", "end start"],
  // });

  // const firstCloudValue = useTransform(cloudScrollYProgress, [0, 1], [0, -300]);

  // const secondCloudRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress: secondCloudScrollYProgress } = useScroll({
  //   target: secondCloudRef,
  //   offset: ["start end", "end start"],
  // });

  // const secondCloudValue = useTransform(
  //   secondCloudScrollYProgress,
  //   [0, 1],
  //   [0, 200]
  // );
  const t = useTranslations("clients");
  return (
    <div className="relative py-16">
      <Container>
        <h2 className="text-4xl font-bold mb-3">{t("title")}</h2>
        <p className="text-xl mb-10 font-bold text-muted-foreground/90">{t("subtitle")}</p>
      </Container>
      <div className="hidden md:block relative px-5 masked" dir="ltr">
        <Marquee autoFill={true} speed={100} pauseOnHover>
          {logos.map((logo, idx) => (
            <Image
              src={`/assets/images/partners/${idx + 1}.jpg`}
              width={70}
              height={70}
              alt={`${logo}`}
              key={logo}
              className="ml-10"
            />
          ))}
        </Marquee>
      </div>

      {/* mobile */}
      <div className="md:hidden px-5 masked" dir="ltr">
        {[0, 1, 2].map((n, idx) => {
          return (
            <Marquee
              autoFill={true}
              speed={20}
              pauseOnHover
              className="mb-10"
              key={`${n}_${idx}`}
              direction={n % 2 === 0 ? "right" : "left"}
            >
              {[...logos.slice(n * 10, (n + 1) * 10)].map((logo, idx) => {
                return (
                  <Image
                    src={`/assets/images/partners/${idx + 1}.jpg`}
                    width={30}
                    height={30}
                    alt={`${logo}`}
                    key={logo}
                    className="ml-10"
                  />
                );
              })}
            </Marquee>
          );
        })}
      </div>

      {/* Clouds */}
      {/* <div className="max-sm:hidden">
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
      </div> */}
    </div>
  );
}

export default Clients;
