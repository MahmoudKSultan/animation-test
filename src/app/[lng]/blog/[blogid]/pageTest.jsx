"use client";
import React, { useEffect, useState } from "react";
import EmptyList from "../components/EmptyList/EmptyList";
import Taps from "../components/Taps/Taps";
import Link from "next/link";
import { getTranslatedPosts } from "@/data/constants/data";
import { useTranslations } from "next-intl";
import { ChevronRight, Share } from "lucide-react";
import { useParams } from "next/navigation";

export async function generateStaticParams() {
  // Supported languages
  const languages = ["ar", "en", "zh"];
  const params = [];

  // Loop through each language and its posts
  languages.forEach((lng) => {
    const posts = getTranslatedPosts(lng);
    posts.forEach((post) => {
      params.push({ lng, blogid: post.id.toString() });
    });
  });

  return params;
}

const page = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const paramsHooks = useParams();
  const [unwrappedParams, setUnwrappedParams] = useState(null);

  // Unwrap params using React.use()
  useEffect(() => {
    const unwrapParams = async () => {
      try {
        const resolvedParams = await params;
        setUnwrappedParams(resolvedParams);
      } catch (error) {
        console.error("Error unwrapping params:", error);
      }
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    console.log("this is params");
    console.log(paramsHooks);

    if (unwrappedParams && unwrappedParams.blogid) {
      // Find the blog by converting blogid to an integer
      const foundBlog = getTranslatedPosts(unwrappedParams.lng).find(
        (blog) => blog.id === parseInt(unwrappedParams.blogid)
      );
      console.log("this is blog");
      console.log(foundBlog);

      if (foundBlog) {
        setBlog(foundBlog);
      } else {
        console.error(`Blog with ID ${unwrappedParams.blogid} not found.`);
      }
    }
  }, [unwrappedParams]);
  const t = useTranslations("blog");

  return (
    <div className="w-full flex justify-center ">
      {blog ? (
        <div className="mt-[30px] Container mx-auto lg:px-40 md:px-10">
          <Link href="/blog" className="flex items-center text-[#238023]">
            <span className="">
              <ChevronRight />
            </span>
            <span>{t("reverse")}</span>
          </Link>
          <header className=" flex justify-center  items-center">
            <h1 className=" text-primary font-bold text-2xl text-center py-12  ">
              {blog.title}
            </h1>
          </header>
          <div
            className="bg-cover bg-center h-[480px] relative max-sm:h-[250px] flex justify-start gap-2 pt-2 pr-2 "
            style={{
              backgroundImage: `url(${blog.cover})`,
              borderRadius: "30px",
              overflow: "hidden",
            }}
          ></div>
          <div className="flex justify-between items-center mt-3 mx-2 min-sm:mx-5 max-sm:mx-5 text-[#858484] font-bold">
            <div className="flex justify-center gap-3 items-center">
              <div>
                نشرت بواسطة
                <Link
                  className="mr-1 text-blue-600 after:content ..."
                  href="/blog"
                >
                  {blog.authorName}
                </Link>
              </div>
              <Link className="text-blue-600 after:content ..." href="/blog">
                {/* <FaShare /> */}
                <Share />
              </Link>
            </div>
            <p className="blog-date text-[var(--primary)] font-bold">
              {blog.createdAt}
            </p>
          </div>
          <div className="flex justify-between items-start gap-10  mt-4 mx-2 mb-12 sm:mx-5 max-sm:mx-5  max-sm:block  ">
            <div className=" text-justify text-lg leading-10 ">
              {blog.description}
            </div>
            <div className="max-w-[250px] min-w-[250px] h-[300px]  mt-[2.5rem] pb-2 drop-shadow-md max-sm:max-w-[100%] ">
              <Taps />
            </div>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default page;
