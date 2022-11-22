import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllBrand,
  getAllBrandPage,
} from "./../../Redux/actions/brandAction";

const AllBrandHook = () => {
  const dispatch = useDispatch();

  //To Get State From Redux
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  //When First Load
  useEffect(() => {
    dispatch(getAllBrand(6));
  }, []);

  //To Get Page Count
  let pageCount = 0;
  if (brand.paginationResult) {
    pageCount = brand.paginationResult.numberOfPages;
  }

  //Press Pagination
  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };

  return [brand, loading, pageCount, getPage];
};

export default AllBrandHook;
