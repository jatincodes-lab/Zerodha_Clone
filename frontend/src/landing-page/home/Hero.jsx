import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container text-center my-5">
        <div className="row mb-5">
          <img
            className="col p-5 mb-3"
            src="./media/images/homeHero.png"
            alt="HomeHero Image"
          />
          <div className="col mt-3">
            <h1>Invest in everything</h1>
            <p>
              Online platform to Invest in stocks, derivatives, mutal funds, and
              more.
            </p>
            <button className="btn btn-primary mt-3 mb-5 px-5  ">Singup Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
