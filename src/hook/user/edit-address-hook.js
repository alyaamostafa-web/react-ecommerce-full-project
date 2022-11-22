import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import {
  editUserAddress,
  getOneUserAddress,
} from "./../../Redux/actions/userAddressAction";
import { useNavigate } from "react-router-dom";

const EditAddressHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };
  const onChangeDetalis = (event) => {
    event.persist();
    setDetails(event.target.value);
  };
  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getOneUserAddress(id));
      setLoading(false);
    };
    get();
  }, []);

  const resAddress = useSelector(
    (state) => state.userAddressReducer.oneAddress
  );
  useEffect(() => {
    if (loading === false) {
      // console.log(resAddress);

      if (resAddress && resAddress.status === "success") {
        setAlias(resAddress.data.alias);
        setPhone(resAddress.data.phone);
        setDetails(resAddress.data.details);
      }
    }
  }, [loading]);

  //save data in database
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (alias === "" || details === "" || phone === "") {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    setLoadingEdit(true);

    await dispatch(
      editUserAddress(id, {
        alias,
        details,
        phone,
      })
    );
    setLoadingEdit(false);
  };
  const resEdit = useSelector((state) => state.userAddressReducer.editAddress);

  useEffect(() => {
    if (loadingEdit === false) {
      if (resEdit) console.log(resEdit);

      if (resEdit && resEdit.status === 200) {
        notify("تم تعديل العنوان بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
    }
  }, [loadingEdit]);

  return [
    alias,
    details,
    phone,
    loading,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    handelSubmit,
  ];
};

export default EditAddressHook;
