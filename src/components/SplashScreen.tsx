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
    }, 100);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
      <div className="text-center">
        {/* <h1 className="text-4xl font-bold">Welcome to Saudina</h1>
        <p className="mt-2 text-lg">Loading...</p> */}
        {/* mobile */}
        {/* <div className="md:hidden flex flex-col items-center justify-center w-full sm:w-3/4 mx-auto">
            <Image
              alt="the chinese president with the saudi prince"
              src="/assets/images/splash.jpg"
              width={500}
              height={700}
              className="sm:h-auto bg-cover bg-center rounded-lg"
            />
            <div className="rounded-lg w-full text-white">
              <div className="bg-primary text-3xl text-center font-semi py-4 rounded-t-lg">
                أهلا بالصينيين
              </div>
              <div className="bg-green-600 text-3xl text-center font-bold py-4 rounded-b-lg">
                في السعودية
              </div>
            </div>
          </div> */}
        {/* medium and large screens */}
        <div className="w-96 h-96 relative overflow-hidden">
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
