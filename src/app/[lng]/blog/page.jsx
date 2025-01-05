"use client";
import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList/BlogList";
import { useLocale } from "next-intl";
import { getTranslatedPosts } from "@/data/constants/data";
const Blog = ({ params }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const locale = useLocale();

  const searchText = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = getTranslatedPosts(locale).filter((blog) => {
      return Object.keys(blog).some(
        (key) =>
          blog.title
            .toString()
            .toLowerCase()
            .includes(searchTerm.toString().toLowerCase()) ||
          blog.category
            .toString()
            .toLowerCase()
            .includes(searchTerm.toString().toLowerCase()) ||
          blog.authorName
            .toString()
            .toLowerCase()
            .includes(searchTerm.toString().toLowerCase())
      );
    });
    setSearchResult(results);
  }, [searchTerm]);
  return (
    <div>
      <br /> <br />
      <div className="lg:px-[180px]">
        {/* Blog List & Empty View */}
        {<BlogList blogs={searchResult} />}
      </div>
      <br /> <br /> <br />
    </div>
  );
};
export default Blog;
