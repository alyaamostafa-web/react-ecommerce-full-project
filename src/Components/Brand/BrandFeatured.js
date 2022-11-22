import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import BrandCard from "./BrandCard";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle, pathText }) => {
  const [brand, loading] = HomeBrandHook();
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brand.data ? (
            brand.data.slice(0, 5).map((item, index) => {
              return <BrandCard key={index} img={item.image} id={item._id} />;
            })
          ) : (
            <h6> لا يوجد ماركات </h6>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandFeatured;
