import React from "react";

export default function Education() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col col-12 col-md-6 p-4">
          <img className="pe-5" style={{width:"90%"}} src="media/images/education.svg" alt="" />
        </div>
        <div className="col col-12 col-md-6 p-4 my-5">
          <h2 className="mb-4">Free and open market education</h2>
          <div>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <span>
              <a
                href=""
                className="fw-semibold "
                style={{ textDecoration: "none" }}
              >
                Varsity &#8594;
              </a>
            </span>
            <p className="mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <span className="mb-5">
              <a
                href=""
                className="fw-semibold"
                style={{ textDecoration: "none" }}
              >
                TradingQ&A &#8594;
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
