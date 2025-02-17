import React from "react";
import { Cards, Clients, Contact, Hero, Slider } from "@/features/landing-page";
import OurFocus from "@/features/landing-page/OurFocus";
import Parts from "@/features/landing-page/Parts/Parts";

export { generateMetadata } from "@/lib/utils"; // Import the function

function Home() {
  return (
    <div>
      <Hero />
      <Parts/>
      <Cards />
      <Clients />
      <OurFocus />
      <Slider />
      <Contact />
    </div>
  );
}

export default Home;
