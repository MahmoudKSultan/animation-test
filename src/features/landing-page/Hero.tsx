import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <div className="relative mb-0 md:mb-48">
      <video
        autoPlay
        loop
        muted
        className="w-full sm:h-[500px] lg:h-[700px] object-cover"
        // style={{ backgroundSize: "cover" }}
      >
        <source src="/assets/hero.mp4" type="video/mp4"></source>
      </video>
      <VisionMission />
    </div>
  );
}

const VisionMission = () => {
  const t = useTranslations("hero");
  return (
    <div className="bg-primary md:w-2/3  py-12 md:py-8 mx-auto px-8 text-white relative md:absolute md:-bottom-40 left-1/2 -translate-x-1/2 md:rounded-lg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
          <div className="text-center font-semibold">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
