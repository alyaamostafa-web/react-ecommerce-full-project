import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserCartItems } from "./../../Redux/actions/cartAction";
import notify from "../../hook/useNotifaction";
const GetAllUserCartHook = (prodID, item) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [itemsNum, setItemsNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] =
    useState(0);
  const [couponNameRes, setCouponName] = useState("");
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllUserCartItems());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.cartReducer.getAllUserCart);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === "success") {
        setItemsNum(res.numOfCartItems);
        setCartItems(res.data.products);
        setTotalCartPrice(res.data.totalCartPrice);
        if (res.data.coupon) {
          setCouponName(res.data.coupon);
        } else {
          setCouponName("");
        }
        if (res.data.totalAfterDiscount) {
          setTotalCartPriceAfterDiscount(res.data.totalAfterDiscount);
        } else {
          setTotalCartPriceAfterDiscount("");
        }
      } else {
        setItemsNum(0);
        setCartItems([]);
        setTotalCartPrice(0);
        setCouponName("");
        setTotalCartPriceAfterDiscount("");
      }
    }
  }, [loading]);
  return [
    itemsNum,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  ];
};

export default GetAllUserCartHook;
