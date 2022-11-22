import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import deleteicon from "../../images/edit.png";
import ProfileHook from "./../../hook/user/profile-hook";
import { ToastContainer } from "react-toastify";
const UserProfile = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    handleSubmit,
    name,
    onChangeName,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPassword,
    onChangeNewPassword,
    onChangeConfirmNewPassword,
  ] = ProfileHook();

  return (
    <div>
      <div className="admin-content-text">الصفحه الشخصية</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تعديل البيانات الشخصية</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="اسم المستخدم"
            value={name}
            onChange={onChangeName}
          />
          <input
            type="email"
            className="input-form font d-block mt-3 px-3"
            placeholder="الايميل"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            type="phone"
            className="input-form font d-block mt-3 px-3"
            placeholder="الهاتف"
            value={phone}
            onChange={onChangePhone}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handleSubmit}>
            حفظ التعديلات
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">الاسم:</div>
            <div className="p-1 item-delete-edit">{user.name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2" onClick={handleShow}>
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> تعديل</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">{user.phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور</div>
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="ادخل كلمة المرور القديمة"
              value={oldPassword}
              onChange={onChangeOldPassword}
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="ادخل كلمة المرور الجديده"
              value={newPassword}
              onChange={onChangeNewPassword}
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="تأكيد كلمة المرور الجديده"
              value={confirmNewPassword}
              onChange={onChangeConfirmNewPassword}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              onClick={changePassword}
              className="btn-save d-inline mt-2 ">
              حفظ كلمة السر
            </button>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserProfile;
