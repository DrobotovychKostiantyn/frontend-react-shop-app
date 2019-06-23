import { combineReducers } from 'redux';
import productsReducer from './productsReducer/index';

export default combineReducers({
  products: productsReducer,
});
