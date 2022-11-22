import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAddress } from "../../Redux/actions/userAddressAction";

const DeleteAddressHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteUserAddress(id));

    setLoading(false);
    setShow(false);
  };
  const res = useSelector((state) => state.userAddressReducer.deleteAddress);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === "success") {
        notify("تمت اضافة العنوان بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
    }
  }, [loading]);
  return [show, handleClose, handleShow, handelDelete];
};

export default DeleteAddressHook;
