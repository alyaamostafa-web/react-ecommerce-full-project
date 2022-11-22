import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateUserPassword,
  updateUserProfile,
} from "./../../Redux/actions/authAction";

const ProfileHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = [];
  try {
    if (localStorage.getItem("user") != null)
      user = JSON.parse(localStorage.getItem("user"));
  } catch (e) {}

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  const handleSubmit = async () => {
    let body;
    if (email === user.email) {
      body = {
        name,
        phone,
      };
    } else {
      body = {
        name,
        phone,
        email,
      };
    }
    setLoading(true);
    await dispatch(updateUserProfile(body));

    setLoading(false);
    setShow(false);
  };
  const res = useSelector((state) => state.authReducer.userProfile);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        notify("تم تعديل البيانات بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else {
        notify("فشل عملية التحديث", "warn");
      }
    }
  }, [loading]);

  //Change Password

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);
  const onChangeOldPassword = (e) => {
    e.persist();
    setOldPassword(e.target.value);
  };
  const onChangeNewPassword = (e) => {
    e.persist();
    setNewPassword(e.target.value);
  };
  const onChangeConfirmNewPassword = (e) => {
    e.persist();
    setConfirmNewPassword(e.target.value);
  };

  const changePassword = async () => {
    if (newPassword != confirmNewPassword) {
      notify("تأكيد كلمة المرور غير متطابق", "warn");
      return;
    }
    setLoadingPass(true);
    await dispatch(
      updateUserPassword({
        currentPassword: oldPassword,
        password: newPassword,
        passwordConfirm: confirmNewPassword,
      })
    );
    setLoadingPass(false);
  };
  const resPass = useSelector((state) => state.authReducer.userChangePassword);
  useEffect(() => {
    if (loadingPass === false) {
      console.log(resPass);
      if (resPass && resPass.status === 200) {
        notify("تم تعديل البيانات بنجاح", "success");
        setTimeout(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          navigate("/login");
        }, 1500);
        // localStorage.setItem("user", JSON.stringify(resPass.data.data));
        // localStorage.setItem("token", JSON.stringify(resPass.data.token));
      } else {
        notify("فشل عملية التحديث", "warn");
      }
    }
  }, [loadingPass]);

  return [
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
  ];
};

export default ProfileHook;
