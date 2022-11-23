import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";

import { Spinner } from "react-bootstrap";
import AdminCategoryCard from "./AdminCategoryCard";
import { ToastContainer } from "react-toastify";

const AdminAllCategory = ({ data, loading }) => {
  return (
    <Container>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <AdminCategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  id={item._id}
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
      <ToastContainer />
    </Container>
  );
};

export default AdminAllCategory;
