import React from "react";
import { Cards, Clients, Contact, Hero, Slider } from "@/features/landing-page";
import OurFocus from "@/features/landing-page/OurFocus";
export { generateMetadata } from "@/lib/utils"; // Import the function

function Home({ params }: { params: { lng: string } }) {
  console.log(params.lng);

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
