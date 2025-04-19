import React from "react";
import './RightSection.css'

export default function RightSection({ imgUrl, productName, productDescription, productLearnMore}) {
  return (
    <div className="container my-5">
      <div className="row p-5">
        <div className="col rightInfo col-12 col-md-4 p-4 me-5 mt-5">
          <h1 className="mb-4 mt-3">{productName}</h1>
          <p className="fw-medium opacity-75 fs-6 mt-3">{productDescription}</p>
          <a
            className="text-decoration-none fw-medium mt-3"
            href={productLearnMore}
          >
            Learn More →
          </a>
        </div>
        <div className="col rightImg col-12 col-md-7 px-5">
          <img className="object-fit-cover" src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
}
