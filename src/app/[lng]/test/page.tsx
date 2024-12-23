"use client";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
import AirlinesSection from "./Clients";
// import { useTranslations } from "next-intl";
// import CenteredSwiper from "./Slider";
import Cards from "./Cards";
import Slider2 from "./Slider2";

const ContentSection = () => {
  // const t = useTranslations("testPage");

  return (
    <div className=" text-blue-dark">
      <Slider2 />
      <AirlinesSection />
      <Cards />
    </div>
  );
};

export default ContentSection;
