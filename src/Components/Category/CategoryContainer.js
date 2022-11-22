import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";

import { Spinner } from "react-bootstrap";

const CategoryContainer = ({ data, loading }) => {
  const colors = ["FFD3E8", "F4DBA5", "55CFDF", "FF6262", "0034FF", "FFD3E8"];
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  id={item._id}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
                />
              );
            })
          ) : (
            <h6> لا يوجد تصنيفات </h6>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
