import React from "react";
import Awards from "./Awards.jsx";
import Hero from "./Hero.jsx";
import Stats from "./Stats.jsx";
import Education from "./Education.jsx";
import OpenAccount from "../OpenAccount.jsx";
import Pricing from "./Pricing.jsx";

export default function HomePage() {
  return (
    <>
      <div>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
      </div>
    </>
  );
}
