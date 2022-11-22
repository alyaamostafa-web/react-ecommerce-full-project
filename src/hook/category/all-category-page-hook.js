import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "./../../Redux/actions/categoryAction";

const AllCategoryHook = () => {
  const dispatch = useDispatch();

  //To Get State From Redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  //When First Load
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory(6));
    };
    get();
  }, []);

  //To Get Page Count
  let pageCount = 0;
  try {
    if (category.paginationResult) {
      pageCount = category.paginationResult.numberOfPages;
    }
  } catch (e) {}
  //Press Pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return [category, loading, pageCount, getPage];
};

export default AllCategoryHook;
