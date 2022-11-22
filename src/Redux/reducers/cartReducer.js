import {
  ADD_TO_CART,
  GET_ALL_USER_CART,
  CLEAR_ALL_USER_CART,
  DELETE_CART_ITEM,
  UPDATE_CART_ITEM,
  APPLY_COUPON_CART,
} from "../type";

const inital = {
  addToCart: [],
  getAllUserCart: [],
  clearCart: [],
  deleteCartItem: [],
  updateCartItem: [],
  applayCoupon: [],
};
const cartReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
      };
    case GET_ALL_USER_CART:
      return {
        ...state,
        getAllUserCart: action.payload,
      };
    case CLEAR_ALL_USER_CART:
      return {
        ...state,
        clearCart: action.payload,
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        deleteCartItem: action.payload,
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        updateCartItem: action.payload,
      };
    case APPLY_COUPON_CART:
      return {
        ...state,
        applayCoupon: action.payload,
      };

    default:
      return state;
  }
};
export default cartReducer;
