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
    path: "78.jpg",
    title: "culture",
  },
  {
    path: "55.jpg",
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
        {/* <p className="text-xl mb-10 font-medium text-muted-foreground/90">{t("subtitle")}</p> */}
        <div className="flex flex-wrap -mx-5">
          {images.map((image, idx) => (
            <div
              className="group px-5 relative  mt-12 mx-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-10"
              key={image.title}
            >
                   <p className="absolute w-[200px] p-1 text-center mr-2 -top-[14px] z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-[#1E8022] font-bold md:text-xl lg:text-lg  ">
                  {t(`cols.${idx}`)}
                </p>
      <div className=" clip-path-cut-corner  ">
 
      <Image
                  className="w-full md:h-[200px] lg:min-h-[250px] group-hover:scale-125 transition-all duration-300  "
                  width={500}
                  height={400}
                  alt={`${image.title} image`}
                  src={`/assets/images/our-focus/${image.path}`}
                />
                {/* overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#1e802164] to-black/2 " />
            
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default OurFocus;
