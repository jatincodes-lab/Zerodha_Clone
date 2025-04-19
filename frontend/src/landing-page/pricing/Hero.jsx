import React from "react";

export default function Hero() {
  return (
    <div className="container my-5">
      <div className="text-center p-5 mb-5">
        <h1 className="mb-3">Charges</h1>
        <h4 className="text-muted">List of all charges and taxes</h4>
      </div>
      <div className="row">
        <div className="col col-12 col-md-4 p-5">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "90%", marginLeft: "1rem" }}
            alt=""
          />
          <h3 className="my-4 text-center">Free equity delivery</h3>
          <p className="text-muted text-center p-none">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col col-12 col-md-4 p-5">
          <img
            src="media/images/intradayTrades.svg"
            style={{ width: "90%", marginLeft: "1rem" }}
            alt=""
          />
          <h3 className="my-4 text-center">Intraday and F&O trades</h3>
          <p className="text-muted text-center p-none">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col col-12 col-md-4 p-5">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "90%", marginLeft: "1rem" }}
            alt=""
          />
          <h3 className="my-4 text-center">Free direct MF</h3>
          <p className="text-muted text-center p-none">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
