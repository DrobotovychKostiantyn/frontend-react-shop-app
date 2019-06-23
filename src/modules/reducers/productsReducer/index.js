import { combineReducers } from 'redux';
import actionTypes from '../../actionTypes';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return true;
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
    case actionTypes.FETCH_PRODUCTS_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS_ERROR:
      return payload.error;
    case actionTypes.FETCH_PRODUCTS_REQUEST:
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  data: productsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
