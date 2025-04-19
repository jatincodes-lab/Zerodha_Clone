import React from "react";

export default function Awards() {
  return (
    <>
      <div className="container my-5">
        <div className="row mt-5 p-4 ">
          <img
            className="col col-md-12 col-lg-6 p-5"
            src="media/images/largestBroker.svg"
            alt=""
          />

          <div className="col col-md-12 col-lg-6 text-start p-5 mt-5">
            <h2>Largest stock broker in India</h2>
            <p className="mb-5 fw-semibold">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in india daily by trading and investing in:
            </p>
            <div className="row">
              <div className="col">
                <ul>
                  <li className="mb-3 fw-semibold">Futures and Options</li>
                  <li className="mb-3 fw-semibold">Commodity derivatives</li>
                  <li className="mb-3 fw-semibold">Currency derivatives</li>
                </ul>
              </div>
              <div className="col">
                <li className="mb-3 fw-semibold">Stocks and IPOs</li>
                <li className="mb-3 fw-semibold">Direct mutual funds</li>
                <li className="mb-3 fw-semibold">Bonds and Securities</li>
              </div>
              <img className="mt-3" src="media\images\pressLogos.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
