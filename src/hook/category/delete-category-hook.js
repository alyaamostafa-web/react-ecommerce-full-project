import React, { useState, useEffect } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";

import { deleteCategory } from "./../../Redux/actions/categoryAction";
const DeleteCategoryHook = (id) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteCategory(id));
    setLoading(false);
    handleClose();
    window.location.reload(false);
  };
  const res = useSelector((state) => state.allCategory.deleteCategory);
  //   console.log(res);

  //   useEffect(() => {
  //     if (loading === false) {
  //       if (res) console.log(res);
  //       //   if (res === "") {

  //       //     notify("تم حذف التقييم بنجاح", "success");
  //       //     setTimeout(() => {
  //       //       window.location.reload(false);
  //       //     }, 1000);
  //       //   } else notify("هناك مشكله فى عملية المسح", "error");
  //     }
  //   }, [loading]);
  return [handelDelete, showDelete, handleClose, handleShow];
};

export default DeleteCategoryHook;
