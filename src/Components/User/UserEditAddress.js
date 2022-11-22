import React from "react";
import { Row, Col } from "react-bootstrap";
import EditAddressHook from "../../hook/user/edit-address-hook";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
  const { id } = useParams();
  const [
    alias,
    details,
    phone,
    loading,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    handelSubmit,
  ] = EditAddressHook(id);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">تعديل العنوان </div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            value={alias}
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            onChange={onChangeAlias}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            value={details}
            placeholder="العنوان بالتفصيل"
            onChange={onChangeDetalis}
          />
          <input
            type="text"
            value={phone}
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
            onChange={onChangePhone}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ تعديل العنوان
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserEditAddress;
