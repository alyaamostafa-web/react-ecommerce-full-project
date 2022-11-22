import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { getOneCoupon, updateCoupon } from "./../../Redux/actions/couponAction";

const EditCouponHook = (id) => {
  //   console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [couponname, setCouponName] = useState("");
  const [coupondate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");

  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(getOneCoupon(id));
      setLoadingData(false);
    };
    get();
  }, []);

  const oneCoupon = useSelector((state) => state.couponReducer.oneCoupon);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  useEffect(() => {
    if (loadingData === false) {
      if (oneCoupon && oneCoupon.data) {
        setCouponName(oneCoupon.data.name);
        setCouponDate(formatDate(oneCoupon.data.expire));
        setCouponValue(oneCoupon.data.discount);
      }
    }
  }, [loadingData]);

  const onChangeName = (event) => {
    event.persist();
    setCouponName(event.target.value);
  };
  const onChangeDate = (event) => {
    event.persist();
    setCouponDate(event.target.value);
  };
  const onChangeValue = (event) => {
    event.persist();
    setCouponValue(event.target.value);
  };

  const res = useSelector((state) => state.couponReducer.updateCoupon);

  //save data in database
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (couponname === "" || coupondate === "" || couponValue <= 0) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    setLoading(true);

    await dispatch(
      updateCoupon(id, {
        name: couponname,
        expire: coupondate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      // console.log(res);

      if (res && res.status === 200) {
        notify("تم اتعديل بنجاح", "success");
        setTimeout(() => {
          navigate("/admin/addcoupon");
        }, 2000);
      } else {
        notify("فشل عملية التعديل", "error");
      }
    }
  }, [loading]);

  return [
    couponname,
    coupondate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    handelSubmit,
  ];
};

export default EditCouponHook;
