import React from "react";

export default function Stats() {
  return (
    <div className="container my-5">
      <div className="row p-5">
        <div className="col-6 p-x5">
          <h1 className="mb-5 fw-normal">Trust with confidence</h1>
          <div className="mb-4 ">
            <h3 className="fw-normal">Costumer-first always</h3>
            <p className="fw-normal text-body-secondary">
              That's why 1.3+ crore customres trust Zerodha with &#8377;3.5+
              lakh crores worth of equity
            </p>
          </div>
          <div className="mb-4">
            <h3 className="fw-normal">No spam or gimmicks</h3>
            <p className="fw-normal text-body-secondary">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="fw-normal">The Zerodha universe</h3>
            <p className="fw-normal text-body-secondary">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="fw-normal">Do better with money</h3>
            <p className="fw-normal text-body-secondary">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6 text-center">
          <img
            src="media\images\ecosystem.png"
            alt=""
            style={{ width: "100%" }}
          />
          <span className="p-5 fw-bold">
            <a href="" style={{ textDecoration: "none" }}>
              Explore our products &#8594;{" "}
            </a>
          </span>
          <span className="p-5 fw-bold">
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo &#8594;
            </a>
          </span>
        </div>
        <img
          src="media\images\pressLogos.png"
          alt=""
          className="p-5 m-auto"
          style={{ width: "80%" }}
        />
      </div>
    </div>
  );
}
