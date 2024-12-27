import React from "react";

export function Hero() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className="w-full h-[500px] object-cover"
        // style={{ backgroundSize: "cover" }}
      >
        <source src="/assets/hero.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Hero;
