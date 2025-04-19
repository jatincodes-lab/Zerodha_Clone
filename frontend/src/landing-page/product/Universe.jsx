import React from "react";
import { Link } from "react-router-dom";
import './Universe.css'

export default function Universe() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center p-5">
          <h1 className="mb-4 opacity-75">The Zerodha Universe</h1>
          <h6 className=" text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </h6>
        </div>
        <div className="row p-5">
          <div className="col col-12 col-md-4 mt-5 text-center">
            <img
              src="media\images\zerodhaFundhouse.png"
              alt=""
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p className=" text-muted " style={{ fontSize: "15px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col col-12 col-md-4 mt-5 text-center">
            <img
              src="media\images\tijori.svg"
              alt=""
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p className=" text-muted px-3" style={{ fontSize: "15px" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more. .
            </p>
          </div>
          <div className="col col-12 col-md-4 mt-5 text-center">
            <img
              src="media\images\streakLogo.png"
              alt=""
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p className=" text-muted px-4" style={{ fontSize: "15px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col col-12 col-md-4 mt-5 text-center">
            <img
              src="media\images\smallcaseLogo.png"
              alt=""
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p className=" text-muted px-4" style={{ fontSize: "15px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col col-12 col-md-4 mt-5 text-center">
            <img
              src="media\images\dittoLogo.png"
              alt=""
              style={{ width: "40%" }}
              className="mb-3"
            />
            <p className=" text-muted px-3" style={{ fontSize: "15px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free.
            </p>
          </div>
          <div className="col col-12 col-md-4 text-center mt-5">
            <img
              src="media\images/sensibullLogo.svg"
              alt=""
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p className=" text-muted " style={{ fontSize: "15px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
        </div>
        <button
          className="btn btn-primary mt-3 mb-5 px-1 py-2 m-auto fw-semibold fs-5"
          style={{ width: "20%" }}
        >
         <Link to="/signup" className="text-white text-decoration-none">Sing up for free</Link> 
        </button>
      </div>
    </div>
  );
}
