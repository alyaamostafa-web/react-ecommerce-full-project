import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { addCoupon, getAllCoupon } from "./../../Redux/actions/couponAction";

const AddCouponHook = () => {
  const dispatch = useDispatch();

  const [couponname, setCouponName] = useState("");
  const [coupondate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");

  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

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

  const res = useSelector((state) => state.couponReducer.addCoupon);

  //save data in database
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (couponname === "" || coupondate === "" || couponValue <= 0) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    setLoading(true);
    // setIsPress(true);
    await dispatch(
      addCoupon({
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
      // setLoading(true);
      // setTimeout(() => setIsPress(false), 1000);

      if (res && res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else if (res && res.status === 400) {
        notify("هذا الكوبون موجود من قبل", "error");
      } else if (res && res.status === 403) {
        notify("انت غير مسموح لك بالاضافة", "error");
      }
    }
  }, [loading]);
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCoupon());
    };
    get();
  }, []);

  const allCoupon = useSelector((state) => state.couponReducer.allCoupon);
  let coupons = [];
  try {
    if (allCoupon && allCoupon.data.length >= 1) coupons = allCoupon.data;
  } catch (e) {}

  return [
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
  ];
};

export default AddCouponHook;
