"use client";
import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useRef } from "react";
import VideoControls from "./VideoControls";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="relative mb-0 md:mb-48 border-black border-8">
      <video
        autoPlay
        loop
        muted
        className="w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover"
        ref={videoRef}
        // style={{ backgroundSize: "cover" }}
      >
        <source src="/assets/hero.mp4" type="video/mp4"></source>
      </video>
      {/* small overlay */}
      <div className="absolute  bottom-1/4 md:bottom-0 left-0 w-full h-1/2 to-black bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7))] "></div>
      <VideoControls videoRef={videoRef} />
      <VisionMission />
    </div>
  );
}

const VisionMission = () => {
  const t = useTranslations("hero");
  return (
    <div className="bg-primary md:w-fit  py-12 md:py-8 mx-auto px-8 text-white relative md:absolute md:-bottom-40 left-1/2 -translate-x-1/2 md:rounded-lg">
      <Container>
        <div className="flex justify-center items-center">
          {/* Mission Section */}
          <div className="text-center font-semibold">
            <div className="flex justify-center">
              <Image
                alt="compass image"
                src={"/assets/images/compass.png"}
                width={120}
                height={120}
                className="w-28 h-28 md:w-20 md:h-20"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{t("mission.title")}</h2>
            <p className="text-lg">{t("mission.description")}</p>
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
