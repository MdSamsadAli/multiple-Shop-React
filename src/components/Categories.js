import React from "react";
import { category } from "../data/Data";

export default function Categories() {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {category.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
              <a className="text-decoration-none" href="">
                <div className="cat-item d-flex align-items-center mb-4">
                  <div
                    className="overflow-hidden"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img className="img-fluid" src={item.img} alt="img" />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{item.category_name}</h6>
                    <small className="text-body">{item.quantity}</small>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
