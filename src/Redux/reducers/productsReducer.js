import {
  CREATE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_LIKE,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  GET_ERROR,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ALL_PRODUCTS_BRAND,
  GET_ALL_SEARCH_PRODUCTS,
} from "../type";

const inital = {
  products: [],
  allProducts: [],
  allSearchProducts: [],
  oneProduct: [],
  productLike: [],
  deleteProduct: [],
  updateProducts: [],
  allProductCat: [],
  allProductBrand: [],
  loading: true,
};

const productsReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_ALL_SEARCH_PRODUCTS:
      return {
        ...state,
        allSearchProducts: action.payload,
        loading: false,
      };

    case GET_PRODUCT_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GET_PRODUCT_LIKE:
      return {
        ...state,
        productLike: action.payload,
        loading: false,
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        updateProducts: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_CATEGORY:
      return {
        ...state,
        allProductCat: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_BRAND:
      return {
        ...state,
        allProductBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
