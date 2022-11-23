import React from "react";
import { Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteCategoryHook from "./../../hook/category/delete-category-hook";

const AdminCategoryCard = ({ img, title, id }) => {
  const [handelDelete, showDelete, handleClose, handleShow] =
    DeleteCategoryHook(id);
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="my-4">
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف للتصنيف</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <div class="d-flex justify-content-center px-2 row">
        <div class=" d-flex justify-content-between col">
          <div class=" item-delete-edit" onClick={handleShow}>
            ازاله
          </div>
          {/* <a
            href="/admin/editproduct/637d2e5b3e15fd3a78aaccee"
            style="text-decoration: none;"> */}
          <div class=" item-delete-edit">تعديل</div>
          {/* </a> */}
        </div>
      </div>
      <div className="categoty-card-admin mb-3 ">
        {/* <div className="categoty-card "></div> */}

        <img alt="zcv" src={img} className="img-fluid" />
        <p className="categoty-card-text my-2">{title}</p>
      </div>
    </Col>
  );
};

export default AdminCategoryCard;
