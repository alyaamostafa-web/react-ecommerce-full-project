import {
  ADD_TO_CART,
  GET_ALL_USER_CART,
  CLEAR_ALL_USER_CART,
  DELETE_CART_ITEM,
  UPDATE_CART_ITEM,
  APPLY_COUPON_CART,
} from "../type";

import { useInsertData } from "../../hooks/useInsertData";

import useDeleteData from "./../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useUpdateData } from "../../hooks/useUpdateData";

//add product to cart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/cart`, body);
    // console.log(response);

    dispatch({
      type: ADD_TO_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_CART,
      payload: e.response,
    });
  }
};
//gat all cart items
export const getAllUserCartItems = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/cart`);
    // console.log(response);

    dispatch({
      type: GET_ALL_USER_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_CART,
      payload: e.response,
    });
  }
};
//clear all cart item
export const clearAllCartItem = () => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart`);
    // console.log(response);

    dispatch({
      type: CLEAR_ALL_USER_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_ALL_USER_CART,
      payload: e.response,
    });
  }
};
//delete cart item
export const deleteCartItem = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart/${id}`);
    // console.log(response);

    dispatch({
      type: DELETE_CART_ITEM,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_CART_ITEM,
      payload: e.response,
    });
  }
};
//update cart item
export const updateCartItem = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/${id}`, body);
    // console.log(response);

    dispatch({
      type: UPDATE_CART_ITEM,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: e.response,
    });
  }
};
//apply coupon cart item
export const applayCouponCart = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/applyCoupon`, body);
    // console.log(response);

    dispatch({
      type: APPLY_COUPON_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: APPLY_COUPON_CART,
      payload: e.response,
    });
  }
};
