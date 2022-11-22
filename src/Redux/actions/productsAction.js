import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";
import {
  CREATE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_ERROR,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_LIKE,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ALL_PRODUCTS_BRAND,
} from "../type";
import { useGetData } from "./../../hooks/useGetData";
import useDeleteData from "./../../hooks/useDeleteData";

//Create Products

export const createProduct = (formatData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      "/api/v1/products",
      formatData
    );

    dispatch({
      type: CREATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + e,
    });
  }
};
//Get all Products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
//get all products with pagination with page number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);
    // console.log(response);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: e.response,
    });
  }
};
//get one products with pagination
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);

    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
//get products like
export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${id}`);

    dispatch({
      type: GET_PRODUCT_LIKE,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
//delete product with id
export const deleteProducts = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);

    dispatch({
      type: DELETE_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//update prooduct with id
export const updateProducts = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      data
    );
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all products by category
export const getAllProductsByCategory =
  (page, limit, categoryID) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&category=${categoryID}&page=${page}`
      );

      dispatch({
        type: GET_ALL_PRODUCTS_CATEGORY,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCTS_CATEGORY,
        payload: e.response,
      });
    }
  };
//get all products by brand
export const getAllProductsByBrand =
  (page, limit, brandID) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&brand=${brandID}&page=${page}`
      );
      // console.log(response);
      dispatch({
        type: GET_ALL_PRODUCTS_BRAND,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCTS_BRAND,
        payload: e.response,
      });
    }
  };
