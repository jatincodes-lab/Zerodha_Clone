import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        productDemo=""
        imgUrl="media/images/kite.png"
        productLearnMore=""
        productGplay=""
        productAppStore=""
      />
      <RightSection
        imgUrl="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        productLearnMore=""
      />
      <LeftSection
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        productDemo=""
        imgUrl="media/images/coin.png"
        productLearnMore=""
        productGplay=""
        productAppStore=""
      />
      <RightSection
        imgUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        productLearnMore=""
      />
      <LeftSection
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        productDemo=""
        imgUrl="media/images/varsity.png"
        productLearnMore=""
        productGplay=""
        productAppStore=""
      />
      <h5 className="text-center p-5 text-muted">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" className="text-decoration-none mx-1">Zerodha.tech</a>
        blog.
      </h5>
      <Universe />
    </div>
  );
}
