import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByBrand } from "./../../Redux/actions/productsAction";
const ViewAllProductsBrandHook = (BrandID) => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    await dispatch(getAllProductsByBrand("", limit, BrandID));
  };
  useEffect(() => {
    getProduct();
  }, []);

  //when click pagination
  const onPress = async (page) => {
    await dispatch(getAllProductsByBrand(page, limit, BrandID));
  };

  const allProductsBrand = useSelector(
    (state) => state.allproducts.allProductBrand
  );

  let items = [];
  let pagination = [];
  try {
    if (allProductsBrand.data) items = allProductsBrand.data;
    else items = [];
  } catch (e) {}
  try {
    if (allProductsBrand.paginationResult)
      pagination = allProductsBrand.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}

  return [items, pagination, onPress];
};

export default ViewAllProductsBrandHook;
