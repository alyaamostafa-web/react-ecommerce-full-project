import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../type";

const inital = {
  addWishlist: [],
  removeWishlist: [],
  allWishlist: [],
};
const wishListReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addWishlist: action.payload,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeWishlist: action.payload,
      };
    case USER_WISHLIST:
      return {
        ...state,
        allWishlist: action.payload,
      };

    default:
      return state;
  }
};
export default wishListReducer;
