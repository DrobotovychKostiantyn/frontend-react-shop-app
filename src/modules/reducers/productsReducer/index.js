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

export default combineReducers({
  data: productsReducer,
  //   loading: loadingReducer,
  //   error: errorReducer,
});
