import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import edit from "../../images/edit.png";
import CouponCardHook from "./../../hook/coupon/coupon-card-hook";
const AdminCouponCard = ({ coupon }) => {
  const [
    dateString,
    formatDate,
    show,
    handleClose,
    handleShow,
    handelDelete,
    loading,
  ] = CouponCardHook(coupon);

  return (
    <div className="user-address-card my-3 px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف للكوبون</div>
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

      <Row className="d-flex justify-content-between  ">
        <Col xs="6">
          <div className="p-2">اسم الكوبون : {coupon.name}</div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={edit}
                height="17px"
                width="15px"
              />
              <Link
                to={`/admin/editcoupon/${coupon._id}`}
                style={{ textDecoration: "none" }}>
                <p className="item-delete-edit"> تعديل</p>
              </Link>
            </div>
            <div className="d-flex " onClick={handleShow}>
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> ازاله</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}>
            تاريخ الانتهاء :{formatDate(dateString)}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}>
            نسبة الخصم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2">
            {coupon.discount}%
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCouponCard;
