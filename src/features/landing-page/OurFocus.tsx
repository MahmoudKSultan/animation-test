import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const images = [
  {
    path: "1.png",
    title: "eccommerce",
  },
  {
    path: "2.jpeg",
    title: "culture",
  },
  {
    path: "3.jpeg",
    title: "terorissm",
  },
  {
    path: "4.jpeg",
    title: "media",
  },
];


function OurFocus() {
  const t = useTranslations("fields");
  return (
    <div className="relative py-16">
      <Container>
        <h2 className="text-4xl inline-block pb-2 font-bold mb-10 text-primary border-b-4 border-[#1E8022]">{t("title")}</h2>
        <div className="flex flex-wrap -mx-5">
          {images.map((image, idx) => (
            <div
              className="group px-5 mx-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-10"
              key={image.title}
            >
      <div className="relative clip-path-cut-corner  overflow-hidden">
      <Image
                  className="w-full  min-h-[250px] group-hover:scale-125 transition-all duration-300"
                  width={400}
                  height={300}
                  alt={`${image.title} image`}
                  src={`/assets/images/our-focus/${image.path}`}
                />
                {/* overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1E8022] to-black/10" />
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold md:text-xl lg:text-lg">
                  {t(`cols.${idx}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default OurFocus;
