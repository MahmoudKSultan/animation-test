"use client";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/assets/tour/1.jpg", caption: "Photo 1" },
  { src: "/assets/tour/2.jpg", caption: "Photo 2" },
  { src: "/assets/tour/3.jpg", caption: "Photo 3" },
  { src: "/assets/tour/4.jpg", caption: "Photo 4" },
  { src: "/assets/tour/5.jpg", caption: "Photo 5" },
  { src: "/assets/tour/6.jpg", caption: "Photo 6" },
];

export default function StoryPage() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="py-10 text-gray-600 dark:text-gray-100 font-semibold px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-center text-2xl font-bold text-primary my-2">
      文化之旅——沉浸式探索沙特阿拉伯的魅力
      </h2>

      <p className="text-center sm:text-left py-6">
      踏上一场穿越时空的文化之旅，免费解锁沙特阿拉伯的宗教、历史与文化奥秘！您将走进 利雅得的传奇地标——“Al Masmak 宫”，这里见证了沙特阿拉伯统一的辉煌起点。正是在这座承载历史的宫殿中，开国国王阿卜杜勒阿齐兹·本·阿卜杜勒拉赫曼·沙特开启了统一国家的伟大征程，奠定了现代沙特的基石。
        此外，您还将深入了解伊斯兰文化的核心价值，感受其如何塑造我们的民族特性，并体验沙特人民在服饰和美食方面的独特习俗。整个行程由专业沙特导游团队全程讲解，带您沉浸式感受一个充满活力的国度。
        立即报名，零费用畅游沙特文化！      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={500}
            height={500}
            alt={`Image ${index + 1}`}
            onClick={() => handleClick(index)}
            className="cursor-pointer w-full h-60 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-12 items-center mt-6">
        <Image
          src="/assets/tour/24.svg"
          alt="Left arrow"
          className="w-24 sm:w-36 md:w-44 lg:w-56 arrow-right"
          width={450}
          height={350}
          quality={100}
        />
        <Image
          src="/assets/tour/24.svg"
          alt="Right arrow"
          className="w-24 sm:w-36 md:w-44 lg:w-56 arrow-left "
          width={450}
          height={350}
          quality={100}
        />
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center -mt-10">
        <h2 className="text-2xl font-bold text-primary">立即报名</h2>
        <Image
          src="/assets/tour/login.jpg"
          alt="Registration"
          className="max-w-full mt-4 rounded-lg"
          width={350}
          height={350}
          quality={100}
        />
        <Image
          src="/assets/tour/7.jpg"
          alt="Tour image"
          className="max-w-full w-[80%] sm:w-[550px] mt-6 rounded-lg"
          width={100}
          height={100}
          quality={100}
        />
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images}
        />
      )}
    </div>
  );
}
