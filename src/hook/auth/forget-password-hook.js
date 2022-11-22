import React, { useState, useEffect } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "./../../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const res = useSelector((state) => state.authReducer.forgetPassword);
  const onSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    if (email === "") {
      notify("من فضلك ادخل الايميل ", "error");
      return;
    }
    await dispatch(
      forgetPassword({
        email,
      })
    );
    setIsPress(false);
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "Success") {
          notify("تم ارسال الكود للايميل بنجاح", "sucsess");
        }
        if (res.data.status === "fail") {
          notify("هذا الحساب غير موجود لدينا", "error");
        }
        setLoading(true);
      }
    }
  }, [loading]);

  return [email, loading, isPress, onChangeEmail, onSubmit];
};

export default ForgetPasswordHook;
