import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BrandCard = ({ img, id }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-2 d-flex justify-content-center">
      <Link to={`/products/brand/${id}`} style={{ textDecoration: "none" }}>
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={img} />
        </Card>
      </Link>
    </Col>
  );
};

export default BrandCard;
