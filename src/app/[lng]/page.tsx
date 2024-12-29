import React from "react";
import { Clients, Contact, Hero } from "@/features/landing-page";

function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Contact />
    </div>
  );
}

export default Home;
