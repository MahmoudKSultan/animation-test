import React from "react";
import { Cards, Clients, Contact, Hero, Slider } from "@/features/landing-page";

function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Cards />
      <Slider />
      <Contact />
    </div>
  );
}

export default Home;
