import { CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW } from "../type";
import { ALL_REVIEW_PRODUCT } from "./../type";

const inital = {
  createReview: [],
  allReviewProduct: [],
  deleteReview: [],
  updateReview: [],
  loading: true,
};
const reviewReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createReview: action.payload,
        loading: false,
      };
    case ALL_REVIEW_PRODUCT:
      return {
        ...state,
        allReviewProduct: action.payload,
        loading: false,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        deleteReview: action.payload,
        loading: false,
      };
    case UPDATE_REVIEW:
      return {
        ...state,
        updateReview: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default reviewReducer;
