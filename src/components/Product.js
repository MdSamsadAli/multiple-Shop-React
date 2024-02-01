import React, { useState } from "react";
import { products } from "../data/Data";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, getCartTotal } from "../redux/CartSlice";

export default function Product() {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  return (
    <>
      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          {products.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src={item.product_img}
                    alt="img"
                  />
                  <div className="product-action">
                    <Link
                      className="btn btn-outline-dark btn-square"
                      onClick={() => handleAddToCart(item)}
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square">
                      <i className="far fa-heart"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square">
                      <i className="fa fa-sync-alt"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square">
                      <i className="fa fa-search"></i>
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4">
                  <Link className="h6 text-decoration-none text-truncate">
                    {item.product_name}
                  </Link>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>${item.price}</h5>
                    <h6 className="text-muted ml-2">
                      <del>${item.price}</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    {item.stars}
                    <small>({item.ratingCount})</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
