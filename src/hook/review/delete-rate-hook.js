import React, { useState, useEffect } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createReview,
  deleteReviewOnProduct,
} from "../../Redux/actions/reviewAction";
const DeleteRateHook = (review) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState(false);

  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    try {
      if (review.user._id === user._id) {
        setIsUser(true);
      }
    } catch (e) {}
  }, []);

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteReviewOnProduct(review._id));
    setLoading(false);
    handleClose();
  };
  const res = useSelector((state) => state.reviewReducer.deleteReview);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم حذف التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else notify("هناك مشكله فى عملية المسح", "error");
    }
  }, [loading]);
  return [isUser, handelDelete, showDelete, handleClose, handleShow];
};

export default DeleteRateHook;
