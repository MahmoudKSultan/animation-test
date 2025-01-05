"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
export const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Listen for page load
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);
    setTimeout(() => {
      // just in case
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
      <div className="text-center">
        <div className="w-80 h-80 relative overflow-hidden">
          <div className="w-full h-full border-4 border-primary border-b-0 border-l-0 animate-spinning rounded-full"></div>

          <Image
            alt="saudina logo"
            src={"/assets/images/logos/main-logo.png"}
            width={350} // أو أبعاد أخرى مناسبة
            height={350}
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
            />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
