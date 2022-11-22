import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { addUserAddress } from "./../../Redux/actions/userAddressAction";
import { useNavigate } from "react-router-dom";

const AddAddressHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(true);

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

  const res = useSelector((state) => state.userAddressReducer.addUserAddress);

  //save data in database
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (alias === "" || details === "" || phone === "") {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    setLoading(true);

    await dispatch(
      addUserAddress({
        alias,
        details,
        phone,
        city: "",
        postalCode: "",
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      // console.log(res);

      if (res && res.status === 200) {
        notify("تمت اضافة العنوان بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
    }
  }, [loading]);

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

export default AddAddressHook;
