import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { deleteCoupon } from "./../../Redux/actions/couponAction";

const CouponCardHook = (coupon) => {
  const dispatch = useDispatch();

  const dateString = coupon.expire;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteCoupon(coupon._id));

    setLoading(false);
    setShow(false);
  };

  const res = useSelector((state) => state.couponReducer.deleteCoupon);
  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم حذف الكوبون بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else notify("هناك مشكله فى عملية المسح", "error");
    }
  }, [loading]);

  return [
    dateString,
    formatDate,
    show,
    handleClose,
    handleShow,
    handelDelete,
    loading,
  ];
};

export default CouponCardHook;
