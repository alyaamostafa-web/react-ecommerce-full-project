import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllCategory from "../../Components/Admin/AdminAllCategory";
import Pagination from "../../Components/Uitily/Pagination";
import AllCategoryHook from "./../../hook/category/all-category-page-hook";

const AdminAllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = AllCategoryHook();
  let items = [];
  try {
    if (category) items = category.data;
  } catch (e) {}

  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllCategory data={items} loading={loading} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllCategoryPage;
