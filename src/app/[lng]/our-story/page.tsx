"use client";
import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function StoryPage() {
  const t = useTranslations();
  const paragraphs = t.raw("our-story"); // `our-story` is an array of strings
  console.log(paragraphs);
  const [showFullStory, setShowFullStory] = useState(false); // state to toggle full story visibility
  const [password, setPassword] = useState(""); // state to store password input
  const [showModal, setShowModal] = useState(false); // state to control modal visibility

  // Function to handle password submission
  const handlePasswordSubmit = () => {
  if (password === "ماجد") {
    setShowFullStory(true); // Show full story
    setShowModal(false); // Close modal
  } else {
    alert("Incorrect password!"); // Show alert on incorrect password
  }
};
  return (
    <div className="py-10 text-gray-600 dark:text-gray-100 font-semibold lg:pr-20">
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        {/* Text Section */}
        <div className="space-y-5 md:w-1/2">
          {paragraphs.slice(0, 2).map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
          {!showFullStory && (
            <p
              className="text-[#1E8022] cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              انقر هنا لاستكمال القصة
            </p>
          )}

          {showFullStory && (
            <div>
              {paragraphs.slice(6).map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-5 md:mt-0">
          <Image
            width={300}
            height={500}
            className="w-full max-w-[500px] rounded-md object-cover"
            src="/assets/images/our-story.jpg"
            alt="Two men next to each other"
          />
        </div>
      </div>
    </Container>

    {/* Modal for Password */}
    {showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">أدخل كلمة المرور للاستمرار</h2>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة السر"
          />
          <button
            onClick={handlePasswordSubmit}
            className="w-full bg-[#1E8022] text-white p-2 rounded"
          >
            ارسال
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="w-full mt-2 text-red-500"
          >
            اغلاق
          </button>
        </div>
      </div>
    )}
  </div>
  );
}
