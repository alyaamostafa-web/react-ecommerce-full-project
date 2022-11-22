import React, { useState, useEffect } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { updateReviewOnProduct } from "../../Redux/actions/reviewAction";
const EditRateHook = (review) => {
  const dispatch = useDispatch(); 

  const [loading, setLoading] = useState(true);

  const [newRateText, setNewRateText] = useState(review.review);
  const [newRatevalue, setNewRatevalue] = useState(review.rating);

  const [showEdit, setShowEdit] = useState(false);
  const handleEditClose = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const onChangeRateText = (e) => {
    setNewRateText(e.target.value);
  };

  const onChangeRateValue = (val) => {
    setNewRatevalue(val);
  };
  const handelEdit = async () => {
    if (newRateText === "") {
      notify("من فضلك اكتب تعليق", "error");
      return;
    }
    if (newRatevalue === 0) {
      notify("من فضلك ادخل قيمة تقيميك", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      updateReviewOnProduct(review._id, {
        review: newRateText,
        rating: newRatevalue,
      })
    );
    setLoading(false);
    handleEditClose();
  };
  const res = useSelector((state) => state.reviewReducer.updateReview);
  useEffect(() => {
    if (loading === false) {
      // console.log(res);
      if (res.status && res.status === 200) {
        notify("تم تعديل التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else notify("هناك مشكله فى عملية التعديل", "error");
    }
  }, [loading]);
  return [
    handelEdit,
    showEdit,
    handleEditClose,
    handleShowEdit,
    onChangeRateText,
    newRateText,
    onChangeRateValue,
    newRatevalue,
  ];
};

export default EditRateHook;
