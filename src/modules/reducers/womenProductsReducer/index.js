import { combineReducers } from 'redux';
import actionTypes from '../../actionTypes';

const womenProductsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_WOMEN_PRODUCTS_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case actionTypes.FETCH_WOMEN_PRODUCTS_REQUEST:
      return true;
    case actionTypes.FETCH_WOMEN_PRODUCTS_SUCCESS:
    case actionTypes.FETCH_WOMEN_PRODUCTS_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_WOMEN_PRODUCTS_ERROR:
      return payload.error;
    case actionTypes.FETCH_WOMEN_PRODUCTS_REQUEST:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  data: womenProductsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
