import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subcategoryReducer";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import wishListReducer from "./washListReducer";
import couponReducer from "./couponReducer";
import userAddressReducer from "./userAddressReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subcategoryReducer,
  allproducts: productsReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  wishListReducer: wishListReducer,
  couponReducer: couponReducer,
  userAddressReducer: userAddressReducer,
  cartReducer: cartReducer,
});
