import {
  CREATE_BRAND,
  GET_ALL_BRAND,
  GET_ONE_BRAND,
  GET_ERROR,
  DELETE_BRAND,
} from "../type";

const inital = {
  brand: [],
  oneBrand: [],
  deleteBrandRes: [],
  loading: true,
};
const brandReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        brand: action.payload,
        loading: false,
      };
    case DELETE_BRAND:
      return {
        deleteBrandRes: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        brand: action.payload,
      };
    default:
      return state;
  }
};
export default brandReducer;
