import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "./../../Redux/actions/washLlistAction";

const CardContainerHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };

    get();
  }, []);
  const res = useSelector((state) => state.wishListReducer.allWishlist);
  //   console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res?.data) {
        if (res.data.length >= 1) {
          setFavProd(res.data.map((item) => item._id));
        }
      } else setFavProd([]);
    }
  }, [loading]);

  return [favProd];
};

export default CardContainerHook;
