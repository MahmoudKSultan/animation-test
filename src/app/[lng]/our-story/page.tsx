"use client";
import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function StoryPage() {
  const t = useTranslations();
  const paragraphs = t.raw("our-story"); // `our-story` is an array of strings
  console.log(paragraphs);

  return (
    <div className="py-10 text-gray-600 dark:text-gray-100 font-semibold lg:pr-20">
      <Container>
        <Image
          width={300}
          height={500}
          className="w-[90%] md:w-2/5 mx-auto lg:mx-0 lg:1/5 mb-10"
          src="/assets/images/our-story.jpg"
          alt="Two men next to each other"
        />
        <div className="space-y-5">
          {paragraphs.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </div>
  );
}
