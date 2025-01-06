import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const BlogItem = ({
  blog: { description, title, createdAt, authorName, cover, category, id, key },
}) => {
  const locale = useLocale();
  return (
    <div key={key} className="flex flex-col bg-white rounded-lg drop-shadow-md">
      <div className="relative">
        <div
          className="bg-cover bg-center w-full h-64 pt-1.5 pr-1.5"
          style={{
            backgroundImage: `url(${cover})`,
            borderRadius: "30px",
            overflow: "hidden",
          }}
        ></div>
      </div>
      <div className="py-2 px-3">
        <p className="text-gray-600 font-semibold">{createdAt}</p>
        <Link
          className="hover:text-black  text-primary font-bold py-1.5 px-3 rounded-md flex justify-center items-center gap-1"
          href={`/${locale}/blog/${id}`}
        >
          <h3 className="text-lg flex-1 font-semibold mt-2 mb-3">{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
{
  /* <footer className="flex items-center justify-between mb-3 mt-7">
                <div className="flex items-center ">
                    <div className="text-sm mx-2">
                        <div className="font-bold">{authorName}</div>
          
                    </div>
                </div>
              
            </footer> */
}
