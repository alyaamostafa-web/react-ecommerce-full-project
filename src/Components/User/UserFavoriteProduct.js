import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import ProductCard from "./../Products/ProductCard";
import Pagination from "../Uitily/Pagination";
import CardProductsContainer from "./../Products/CardProductsContainer";
import { getProductWishList } from "./../../Redux/actions/washLlistAction";
const UserFavoriteProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };

    get();
  }, []);
  const res = useSelector((state) => state.wishListReducer.allWishlist);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        setItems(res.data);
      }
    }
  }, [loading]);

  return (
    <div>
      <div className="admin-content-text pb-4">قائمة المفضلة</div>
      <Row className="justify-content-start">
        {items.length <= 0 ? (
          <h6>لا يوجد منتجات مفضلة حاليا</h6>
        ) : (
          <CardProductsContainer products={items} title="" btntitle="" />
        )}
      </Row>
    </div>
  );
};

export default UserFavoriteProduct;
