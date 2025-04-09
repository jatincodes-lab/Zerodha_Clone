import React from "react";

export default function Hero() {
  return (
    <div className="container my-5 border-bottom">
      <div className="row text-center lh-lg p-5">
        <h1>Zerodha Products</h1>
        <h5 className="fw-medium opacity-75 my-3">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="fs-6 fw-semibold mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}
