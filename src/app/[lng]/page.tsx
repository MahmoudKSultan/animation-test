import React from "react";
import { Cards, Clients, Contact, Hero, Slider } from "@/features/landing-page";
import OurFocus from "@/features/landing-page/OurFocus";

function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <OurFocus />
      <Cards />
      <Slider />
      <Contact />
    </div>
  );
}

export default Home;
