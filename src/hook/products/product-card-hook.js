import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../../hook/useNotifaction";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";
import {
  addProductToWishList,
  removeProductFromWishList,
} from "./../../Redux/actions/washLlistAction";
const ProductCardHook = (product, favProd) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  let Fav = favProd.some((fitem) => fitem === product._id);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);
  const [isFav, setIsFav] = useState(Fav);

  useEffect(() => {
    setIsFav(favProd.some((fitem) => fitem === product._id));
  }, [favProd]);

  const handelFav = () => {
    if (isFav) {
      removeToWishListData();
    } else {
      addToWishListData();
    }
  };

  useEffect(() => {
    if (isFav === true) {
      setFavImg(favon);
    } else {
      setFavImg(favoff);
    }
  }, [isFav]);

  const addToWishListData = async () => {
    setIsFav(true);
    setFavImg(favon);
    setLoadingAdd(true);
    await dispatch(
      addProductToWishList({
        productId: product._id,
      })
    );
    setLoadingAdd(false);
  };

  const removeToWishListData = async () => {
    setIsFav(false);
    setFavImg(favoff);
    setLoadingRemove(true);
    await dispatch(removeProductFromWishList(product._id));
    setLoadingRemove(false);
  };
  const resAdd = useSelector((state) => state.wishListReducer.addWishlist);
  const resRemove = useSelector(
    (state) => state.wishListReducer.removeWishlist
  );
  useEffect(() => {
    if (loadingAdd === false) {
      console.log(resAdd);
      if (resAdd && resAdd.status === 200) {
        notify("تمت اضافة المنتج للمفضلة بنجاح", "success");
      } else if (resAdd && resAdd.status === 401) {
        notify("انتا غير مسجل", "error");
      }
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (loadingRemove === false) {
      console.log(resRemove);
      if (resRemove && resRemove.status === "success") {
        notify("تمت حذف المنتج من المفضلة بنجاح", "warn");
      } else if (resAdd && resAdd.status === 401) {
        notify("انتا غير مسجل", "error");
      }
    }
  }, [loadingRemove]);

  return [removeToWishListData, addToWishListData, handelFav, favImg];
};

export default ProductCardHook;
