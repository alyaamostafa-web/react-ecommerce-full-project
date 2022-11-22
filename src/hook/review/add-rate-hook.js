import React, { useState, useEffect } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReview } from "../../Redux/actions/reviewAction";
const AddRateHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const onChangeRateText = (e) => {
    setRateText(e.target.value);
  };
  const onChangeRateValue = (val) => {
    setRateValue(val);
  };

  const res = useSelector((state) => state.reviewReducer.createReview);

  var user = "";
  try {
    if (localStorage.getItem("user") != null) {
      user = JSON.parse(localStorage.getItem("user"));
    } else {
      user = "";
    }
  } catch (e) {}

  const onSubmit = async () => {
    if (rateText === "") {
      notify("من فضلك اكتب تعليق", "error");
      return;
    }
    if (rateValue === 0) {
      notify("من فضلك ادخل قيمة تقيميك", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      createReview(id, {
        review: rateText,
        rating: rateValue,
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setRateText("");
      setRateValue(0);
      if (res) {
        console.log(res);
        if (res.status && res.status === 403) {
          notify("غير مسموح للادمن بالتقييم", "error");
        } else if (
          res.data.errors &&
          res.data.errors[0].msg === "You already added review on this product"
        ) {
          notify("لقد قمت باضافة تقييم لهذا المنتج مسبقا", "error");
        } else if (res.status && res.status === 201) {
          notify("تمت اضافة التقييم بنجاح", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        }
      }
    }
  }, [loading]);

  return [
    onChangeRateText,
    onChangeRateValue,
    rateText,
    rateValue,
    user,
    onSubmit,
  ];
};

export default AddRateHook;
