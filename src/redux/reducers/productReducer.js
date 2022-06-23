import {
  GET_ALL_PRODUCT,
  GET_PRODUCT,
  CREATE_PRODUCT,
  PREVIEW_PROODUCT,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
  CLEAR_PRODUCT,
} from "../actions/types";

const initialState = {
  product: [],
  detailProduct: [],
  newproduct: [],
  previewProduct: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        newproduct: action.payload,
      };
    case PREVIEW_PROODUCT:
      return {
        ...state,
        previewProduct: action.payload,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        detailProduct: [],
        newproduct: [],
        previewProduct: [],
        error: null,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
