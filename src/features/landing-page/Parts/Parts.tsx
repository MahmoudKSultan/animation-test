"use client";
import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";

const Parts = () => {
  const { lng } = useParams<{ lng: string }>();

  return (
    <div className="w-full my-12 md:py-12 mx-auto text-primary">
      <Container>
        <div className="flex justify-center gap-12 lg:justify-between items-center lg:gap-80 lg:flex-row flex-wrap   ">
          {/* قسم المهمة */}
          <h2 className="text-3xl inline-block pb-2 text-primary text-center">
            文化之旅——沉浸式探索沙特阿拉伯的魅力* 免费
          </h2>
          <section>
            <Link
              href={`/${lng}/cultural-tour`}
              className="button button--moema px-5 py-3 bg-primary hover:text-white text-gray-300 relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest"
            >
              立即报名
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Parts;
