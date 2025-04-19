import React from "react";

export default function Pricing() {
  return (
    <div className="container my-5">
      <div className="row p-3">
        <div className="col col-12 col-md-5">
          <h2 className="fw-medium mb-4">Unbeatable pricing</h2>
          <p className="fw-normal">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div>
            <a href="" className="fw-medium" style={{ textDecoration: "none" }}>
              See pricing &#8594;
            </a>
          </div>
        </div>
        <div className="col col-12 col-md-7 d-flex">
          <div className="position-relative d-flex">
            <img
              src="media/images/pricing0.svg"
              alt=""
              style={{ width: "60%" }}
            />
            <p
              className="fw-semibold position-absolute top-50 mt-2 ms-3 start-50 translate-middle fw-lighter"
              style={{ fontSize: "10px", fontWeight: "100" }}
            >
              Free account <br /> opening
            </p>
          </div>
          <div className="position-relative d-flex">
            <img
              src="media/images/pricing0.svg"
              alt=""
              style={{ width: "60%" }}
            />
            <p
              className="w-75 fw-semibold position-absolute top-50 left-50 mt-2 ms-5 start-50 translate-middle fw-lighter"
              style={{ fontSize: "10px", fontWeight: "100" }}
            >
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
          <div className="position-relative d-flex">
            <img
              src="media\images\intradayTrades.svg"
              alt=""
              style={{ width: "60%" }}
            />
            <p
              className="fw-semibold position-absolute top-50 mt-2 ps-3 end-0 translate-middle fw-lighter"
              style={{ fontSize: "10px", fontWeight: "100" }}
            >
              Intraday and <br /> F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
