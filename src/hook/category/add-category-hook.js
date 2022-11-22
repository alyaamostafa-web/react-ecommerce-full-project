import React, { useState, useEffect } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "./../../Redux/actions/categoryAction";
import notify from "./../../hook/useNotifaction";
const AddCategoryHook = () => {
  const dispatch = useDispatch();

  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  //to change name state
  const onChangeName = (event) => {
    // for input text during on change name i should put this
    event.persist();
    setName(event.target.value);
  };

  //When Iimage Change Save It
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };
  const res = useSelector((state) => state.allCategory.category);
  //Save data in database
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || selectedFile === null) {
      notify("من فضلك اكمل البيانات ", "warn");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createCategory(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
    }
  }, [loading]);

  return [
    img,
    name,
    loading,
    isPress,
    handelSubmit,
    onImageChange,
    onChangeName,
  ];
};

export default AddCategoryHook;
