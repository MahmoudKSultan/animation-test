import React from "react";
import { Cards, Clients, Contact, Hero, Slider } from "@/features/landing-page";

function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Contact />
      <Cards />
      <Slider />
    </div>
  );
}

export default Home;
