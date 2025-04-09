import React from "react";

export default function Hero() {
  return (
    <div className="text-white" style={{ background: "#387ED1" }}>
      <div className="row p-5 mx-5">
        <div className="col-7">
          <h4 className="mb-5">Support Portal</h4>
          <h4 className="mb-5">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            type="text"
            className="p-3"
            style={{ width: "100%" }}
            placeholder="Eg:how do i activate F&O, why is my order getting rejected ..."
          />
          <div className="row">
            <div className="col-4">
              <p
                style={{ borderBottom: "1px solid white" }}
                className="text-center fw-medium fs-6 px-3 my-3"
              >
                Track account opening
              </p>
            </div>
            <div className="col-4">
              <p
                style={{ borderBottom: "1px solid white" }}
                className="text-center fw-medium fs-6 px-1 my-3"
              >
                Track segment activation{" "}
              </p>
            </div>
            <div className="col-4">
              <p
                style={{ borderBottom: "1px solid white" }}
                className="text-center fw-medium fs-6 px-3 my-3"
              >
                Intraday margins{" "}
              </p>
            </div>
            <div className="col-4">
              <p
                style={{ borderBottom: "1px solid white" }}
                className="text-center fw-medium fs-6 px-3 my-3"
              >
                Kite user manual{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-5 mb-5">
          <div className="text-end ">
            <a
              href=""
              className="text-white fw-medium fs-6 text-decoration-none border-bottom"
            >
              Track tickets
            </a>
          </div>
          <div className="my-5">
            <h4 className="mt-5">Featured</h4>
            <br />
            <ol>
              <li >
                <a className="text-white" href="">
                  Change in expiry day of NSE derivative contracts from April
                  04, 2025 [Withheld]
                </a>
              </li>
              <br />
              <li>
                <a className="text-white" href="">
                  Surveillance measure on scrips - April 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
