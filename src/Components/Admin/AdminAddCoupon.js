import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "./../../hook/coupon/add-coupon-hook";
import AdminCouponCard from "./AdminCouponCard";

const AdminAddCoupon = () => {
  const [
    couponname,
    coupondate,
    couponValue,
    loading,
    isPress,
    onChangeName,
    onChangeDate,
    onChangeValue,
    handelSubmit,
    coupons,
  ] = AddCouponHook();
  const dateRef = useRef();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف كوبون جديده</div>
        <Col sm="8">
          <input
            value={couponname}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
          />
          <input
            ref={dateRef}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ انتهاء الكوبون"
            onFocus={() => (dateRef.current.type = "date")}
            onBlur={() => (dateRef.current.type = "text")}
            value={coupondate}
            onChange={onChangeDate}
          />
          <input
            value={couponValue}
            onChange={onChangeValue}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="نسبة خصم الكوبون الكوبون"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ الكوبون
          </button>
        </Col>
      </Row>

      <Row>
        <Col sm="8">
          {coupons ? (
            coupons.map((coupon, index) => {
              return <AdminCouponCard coupon={coupon} key={index} />;
            })
          ) : (
            <h6>لا يوجد كوبونات</h6>
          )}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddCoupon;
