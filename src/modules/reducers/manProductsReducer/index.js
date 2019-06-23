import { combineReducers } from 'redux';
import actionTypes from '../../actionTypes';

const manProductsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MAN_PRODUCTS_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case actionTypes.FETCH_MAN_PRODUCTS_REQUEST:
      return true;
    case actionTypes.FETCH_MAN_PRODUCTS_SUCCESS:
    case actionTypes.FETCH_MAN_PRODUCTS_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MAN_PRODUCTS_ERROR:
      return payload.error;
    case actionTypes.FETCH_MAN_PRODUCTS_REQUEST:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  data: manProductsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
