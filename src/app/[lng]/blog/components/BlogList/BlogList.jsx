import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import BlogItem from './BlogItem/BlogItem';

const BlogList = ({blogs}) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,blogs]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };
const t = useTranslations("bloglist");

    return (
        <>
        <h1 className="text-3xl font-[600] mb-[30px] mx-2">
        {t("news")}
        </h1>
        <div className='blogList-wrap grid xl:grid-cols-3 gap-8 max-sm:grid-cols-1 sm:grid-cols-2 mx-5'>
            {currentItems.map((blog, index) => (
                <BlogItem key={index} blog={blog} />
            ))}
        </div>
  
        </>
    );
};

export default BlogList;
