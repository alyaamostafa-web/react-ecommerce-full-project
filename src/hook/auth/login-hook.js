import React, { useState, useEffect } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser, loginUser } from "./../../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValues = () => {
    if (email === "") {
      notify("من فضلك ادخل الايميل ", "error");
      return;
    }
    if (password === "") {
      notify("من فضلك ادخل الباسورد ", "error");
      return;
    }
  };

  const res = useSelector((state) => state.authReducer.loginUser);
  const onSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    validationValues();
    await dispatch(
      loginUser({
        email,
        password,
      })
    );
    setIsPress(false);
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (res) {
        // console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        if (res.data.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify("كلمة السر أو الايميل خطأ", "error");
        }
        setLoading(true);
      }
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    isPress,
    onChangeEmail,
    onChangePassword,
    onSubmit,
  ];
};

export default LoginHook;
