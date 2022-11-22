import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applayCouponCart,
  clearAllCartItem,
  deleteCartItem,
  updateCartItem,
} from "./../../Redux/actions/cartAction";
import notify from "../../hook/useNotifaction";
const ApplyCouponHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [couponName, setCouponName] = useState("");

  const onChangeCoupon = (e) => {
    setCouponName(e);
  };
  const handelSubmitCoupon = async () => {
    if (couponName === "") {
      notify("من فضلك ادخل الكوبون", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      applayCouponCart({
        couponName: couponName,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.cartReducer.applayCoupon);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم تطبيق الكوبون  بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هذا الكوبون غير صحيح او منتهى الصلاحية", "error");
      }
    }
  }, [loading]);
  return [couponName, onChangeCoupon, handelSubmitCoupon];
};

export default ApplyCouponHook;
