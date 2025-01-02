"use client";
import Container from "@/components/Container";
import { useTranslations } from "next-intl";
// import Image from "next/image";
import React, { useRef } from "react";
import VideoControls from "./VideoControls";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
  <>
    <div className="relative  mb-0">
      <video
        autoPlay
        loop
        muted
        className="w-full  h-screen lg:h-[700px] object-cover"
        ref={videoRef}
        // style={{ backgroundSize: "cover" }}
      >
        <source src="/assets/hero.mp4" type="video/mp4"></source>
      </video>
      {/* small overlay */}
      <div className="absolute  -bottom-1 md:bottom-0 left-0 w-full h-screen to-black bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7))] "></div>
      <VideoControls videoRef={videoRef} />
   
    </div>
       <VisionMission />
  </>
  );
}

const VisionMission = () => {
  const t = useTranslations("hero");
  return (
    // relative md:absolute md:-bottom-40 left-1/2 -translate-x-1/2
    <div className="bg-primary w-full pt-8 h-[200px]   md:py-12 mx-auto  text-white  ">
      <Container>
        <div className="flex justify-start items-start">
          {/* Mission Section */}
          <div className="text-start font-semibold">
            <div className="flex justify-start">
              {/* <Image
                alt="compass image"
                src={"/assets/images/compass.png"}
                width={120}
                height={120}
                className="w-28 h-28 md:w-20 md:h-20"
              /> */}
            </div>
            <h2 className="text-4xl font-bold mb-8   inline-block pb-2   text-white border-b-4 border-[#1E8022]">{t("mission.title")}</h2>
            <blockquote className="text-xl">{t("mission.description")}</blockquote>
          </div>

          {/* Vision Section */}
          {/* <div className="text-center font-semibold">
            <div className="flex justify-center">
              <Image
                alt="worker image"
                src={"/assets/images/worker.png"}
                width={120}
                height={120}
                className="w-28 h-28 md:w-20 md:h-20"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{t("vision.title")}</h2>
            <p className="text-lg">{t("vision.description")}</p>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
