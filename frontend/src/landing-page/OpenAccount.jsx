import React from "react";
import { Link } from "react-router-dom";

export default function OpenAccount() {
  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col text-center">
          <h2 className="mb-4">Open a Zerodha account</h2>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button className="btn btn-primary px-4 py-2 fw-bold mb-5"> <Link to="/signup" className="text-white text-decoration-none">Sing up for free</Link> </button>
        </div>
      </div>
    </div>
  );
}
