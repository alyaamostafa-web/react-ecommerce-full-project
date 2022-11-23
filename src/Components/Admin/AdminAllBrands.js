import React from "react";

import { Container, Row, Spinner, Table } from "react-bootstrap";
import AdminBrandCard from "./AdminBrandCard";
const AdminAllBrands = ({ data, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 mb-4 ">كل الماركات</div>
      {loading === false ? (
        <Table hover>
          <thead>
            <tr>
              {/* <th>id</th> */}
              <th>اسم الماركة</th>
              <th>الصورة</th>
              <th>الحدث</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, index) => {
                return (
                  <AdminBrandCard
                    key={index}
                    index={index}
                    img={item.image}
                    title={item.name}
                    id={item._id}
                  />
                );
              })
            ) : (
              <h6> لا يوجد ماركات </h6>
            )}
          </tbody>
        </Table>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}

      {/* <Row className="my-1 d-flex justify-content-between">

      </Row> */}
    </Container>
  );
};

export default AdminAllBrands;
