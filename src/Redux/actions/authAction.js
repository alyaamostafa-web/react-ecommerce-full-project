import {
  CREATE_NEW_USER,
  LOGIN_USER,
  GET_CURRENT_USER,
  FORGET_PASSWORD,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PASSWORD,
} from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetData, useGetDataToken } from "./../../hooks/useGetData";
import { useUpdateData } from "../../hooks/useUpdateData";

//create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/signup`, data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};
//loginuser
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};
//get current user
export const getLoggedUser = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/users/getMe`);
    dispatch({
      type: GET_CURRENT_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_CURRENT_USER,
      payload: e.response,
    });
  }
};

//Forget password
export const forgetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
    dispatch({
      type: FORGET_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: FORGET_PASSWORD,
      payload: e.response,
    });
  }
};
//update user profile
export const updateUserProfile = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/users/updateMe`, body);
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: e.response,
    });
  }
};
//update user Password
export const updateUserPassword = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(
      `/api/v1/users/changeMyPassword`,
      body
    );
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: e.response,
    });
  }
};
