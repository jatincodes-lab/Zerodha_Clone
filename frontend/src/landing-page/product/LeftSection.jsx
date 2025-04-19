import React from "react";
import './LeftSection.css'

export default function LeftSection({
  imgUrl,
  productName,
  productDescription,
  productDemo,
  productLearnMore,
  productGplay,
  productAppStore,
}) {
  return (
    <div className="container my-5">
      <div className="row p-5">
        <div className="col leftImg col-12 col-md-5 p-3">
          <img src={imgUrl} alt="" />
        </div>
        <div className="col"></div>
        <div className="col leftInfo col-12 col-md-5 p-5 ms-5 mt-3">
          <h1 className="mb-4">{productName}</h1>
          <p className="fw-medium opacity-75 fs-6">{productDescription}</p>
          <div className="text-center d-flex gap-5">
            <a className="text-decoration-none fw-medium" href={productDemo}>
              Try Demo →
            </a>
            <a
              className="text-decoration-none fw-medium"
              href={productLearnMore}
            >
              Learn More →
            </a>
          </div>
          <div className="text-center d-flex gap-5 mt-4">
            <a href={productGplay}>
              {" "}
              <img src="media\images\googlePlayBadge.svg" alt="" />
            </a>
            <a href={productAppStore}>
              <img src="media\images\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
