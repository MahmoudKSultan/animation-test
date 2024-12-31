"use client";
import Container from "@/components/Container";
import { logos } from "@/data/constants/clients-logos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export function Clients() {
  const t = useTranslations("clients");
  return (
    <div className="py-16">
      <Container>
        <h2 className="text-4xl font-bold mb-10">{t("title")}</h2>
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
              speed={100}
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
    </div>
  );
}

export default Clients;
