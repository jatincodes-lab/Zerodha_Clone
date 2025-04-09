import React from "react";

export default function Team() {
  return (
    <div className="container my-5 border-top">
      <div className="row p-5">
        <div className="col-6 p-5 lh-base">
          <p className="fw-medium opacity-50" style={{ fontSize: "17px" }}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
            <br />
            <br />
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
            <br />
            <br />
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5 lh-base">
          <p className="fw-medium opacity-50" style={{ fontSize: "17px" }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br />
            <br />
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br />
            <br />
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
        <h2 className="text-center p-5">People</h2>
        <div className="row">
          <div className="col-5 p-5">
            <img
              src="media\images\nithinKamath.jpg"
              alt=""
              style={{ width: "90%" }}
              className="rounded-circle ms-5"
            />
            <h5 className="text-center my-3 ms-5 opacity-75">Nithin Kamath</h5>
            <p className="text-center my-3 ms-5 opacity-75">Founder, CEO</p>
          </div>
          <div className="col-7 p-5">
            <p
              className="fw-medium opacity-75 mt-2 me-3"
              style={{ fontSize: "16px" }}
            >
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
              <br />
              <br />
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
              <br />
              <br />
              Playing basketball is his zen.
              <br />
              <br />
              Connect on Homepage / TradingQnA / Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
