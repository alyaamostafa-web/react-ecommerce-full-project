import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/actions/productsAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllProducts());
    };
    get();
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);
  useEffect(() => {
    if (allProducts) {
      const get = async () => {
        await dispatch(getAllProducts());
      };
      get();
    }
  }, [allProducts]);

  const loading = useSelector((state) => state.allproducts.loading);

  let items = [];
  try {
    if (allProducts.data) items = allProducts.data.slice(0, 4);
    else items = [];
  } catch (e) {}

  return [items, loading];
};

export default ViewHomeProductsHook;
