"use client";
import Container from "@/components/Container";
import { useTranslations } from "next-intl";

export default function StoryPage() {
  const t = useTranslations();
  const paragraphs = t.raw("our-story"); // `our-story` is an array of strings
  console.log(paragraphs);

  return (
    <div className="py-10 text-gray-600 dark:text-gray-100 font-semibold">
      <Container>
        <div className="space-y-5">
          {paragraphs.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </div>
  );
}
