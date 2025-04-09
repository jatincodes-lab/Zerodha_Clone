import React from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Brokerage from "./Brokerage";

export default function PricingPage() {
  return (
    <>
      <div>
        <Hero />
        <OpenAccount />
        <Brokerage />
      </div>
    </>
  );
}
