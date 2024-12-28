"use client";
import Container from "@/components/Container";
import { logos } from "@/data/constants/clients-logos";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export function Clients() {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-10">Clients</h2>
      <Marquee>
        {logos.map((logo) => (
          <Image
            src={`/assets/images/parteners/${logo}`}
            width={200}
            height={100}
            alt={`${logo}`}
            key={logo}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Clients;
