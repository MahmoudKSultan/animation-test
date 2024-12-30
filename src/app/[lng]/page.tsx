import React from "react";
import { Cards, Clients, Contact, Hero } from "@/features/landing-page";

function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Contact />
      <Cards />
    </div>
  );
}

export default Home;
