"use client";

import React from "react";
import EmptyList from "../components/EmptyList/EmptyList";
import Taps from "../components/Taps/Taps";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChevronRight, Share } from "lucide-react";

interface BlogPageClientTypes {
  blog: {
    title: string;
    cover: string;
    description: string;
    content: string;
    authorName: string;
    createdAt: string;
  };
  lng: string;
}

const BlogPageClient = ({ blog, lng }: BlogPageClientTypes) => {
  const t = useTranslations("blog");

  if (!blog) {
    return <EmptyList />;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="mt-[30px] Container mx-auto lg:px-40 md:px-10">
        <Link
          href={`/${lng}/blog`}
          className="flex items-center text-[#238023]"
        >
          <span>
            <ChevronRight />
          </span>
          <span>{t("reverse")}</span>
        </Link>
        <header className="flex justify-center items-center">
          <h1 className="text-primary font-bold text-2xl text-center py-12">
            {blog.title}
          </h1>
        </header>
        <div
          className="bg-cover bg-center h-[480px] relative max-sm:h-[250px] flex justify-start gap-2 pt-2 pr-2"
          style={{
            backgroundImage: `url(${blog.cover})`,
            borderRadius: "30px",
            overflow: "hidden",
          }}
        ></div>
        <div className="flex justify-between items-center mt-3 mx-2 min-sm:mx-5 max-sm:mx-5 text-[#858484] font-bold">
          <div className="flex justify-center gap-3 items-center">
            <div>
              {t("posted")}
              <Link className="mr-1 text-blue-600" href="/blog">
                {blog.authorName}
              </Link>
            </div>
            <Link className="text-blue-600" href="/blog">
              <Share />
            </Link>
          </div>
          <p className="blog-date text-[var(--primary)] font-bold">
            {blog.createdAt}
          </p>
        </div>
        <div className="flex justify-between items-start gap-10 mt-4 mx-2 mb-12 sm:mx-5 max-sm:mx-5 max-sm:block">
          <div className="text-justify text-lg leading-10">
            {blog.description}
          </div>
          <div className="max-w-[250px] min-w-[250px] h-[300px] mt-[2.5rem] pb-2 drop-shadow-md max-sm:max-w-[100%]">
            <Taps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageClient;
