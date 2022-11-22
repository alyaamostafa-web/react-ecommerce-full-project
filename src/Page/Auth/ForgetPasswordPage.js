import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "./../../hook/auth/forget-password-hook";

const ForgetPasswordPage = () => {
  const [email,loading,isPress, onChangeEmail, onSubmit] = ForgetPasswordHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">هل نسيت كلمة المرور </label>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="ادخل الايميل..."
            type="email"
            className="user-input my-3 text-center mx-auto"
          />

          <button onClick={onSubmit} className="btn-login mx-auto mt-2">
            ارسال الكود
          </button>

          {isPress ? (
            loading === true ? (
              <Spinner animation="border" role="status"></Spinner>
            ) : null
          ) : null}
        </Col>

        <ToastContainer />
      </Row>
    </Container>
  );
};

export default ForgetPasswordPage;
