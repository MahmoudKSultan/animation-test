import React from "react";
import { Cards, Clients, Contact, Hero, Slider } from "@/features/landing-page";
import OurFocus from "@/features/landing-page/OurFocus";
export { generateMetadata } from "@/lib/utils"; // Import the function

function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <Clients />
      <OurFocus />
      <Slider />
      <Contact />
    </div>
  );
}

export default Home;
