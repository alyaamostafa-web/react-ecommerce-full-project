import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductCardHook from "./../../hook/products/product-card-hook";
const ProductCard = ({ product, favProd }) => {
  const [removeToWishListData, addToWishListData, handelFav, favImg] =
    ProductCardHook(product, favProd);
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}>
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={product.imageCover}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favImg}
            onClick={handelFav}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
              cursor: "pointer",
            }}
          />
        </div>

        <Card.Body>
          <Card.Title>
            <div className="card-title">{product.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{product.ratingsAverage}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">
                  {product.priceAfterDiscount >= 1 ? (
                    <div>
                      <span style={{ textDecorationLine: "line-through" }}>
                        {product.price}
                      </span>{" "}
                      {product.priceAfterDiscount}
                    </div>
                  ) : (
                    product.price
                  )}
                </div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
};

export default ProductCard;
