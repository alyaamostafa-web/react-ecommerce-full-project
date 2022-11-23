import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../../Components/Uitily/Pagination";
import AllBrandHook from "./../../hook/brand/all-brand-page-hook";
import AdminSideBar from "./../../Components/Admin/AdminSideBar";
import AdminAllBrands from "./../../Components/Admin/AdminAllBrands";
const AdminAllBrandsPage = () => {
  const [brand, loading, pageCount, getPage] = AllBrandHook();
  let items = [];
  try {
    if (brand) items = brand.data;
  } catch (e) {}
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllBrands data={items} loading={loading} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllBrandsPage;
