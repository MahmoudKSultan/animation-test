"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui";
import { ArrowUp } from "lucide-react";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 transition-opacity duration-300 z-40 text-white ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      size="icon"
    >
      <ArrowUp />
    </Button>
  );
}

export default ScrollTop;
