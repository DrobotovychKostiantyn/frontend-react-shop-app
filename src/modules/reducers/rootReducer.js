import { combineReducers } from 'redux';
import productsReducer from './productsReducer/index';
import manProductsReducer from './manProductsReducer/index';
import womenProductsReducer from './womenProductsReducer/index';
import accessoriesProductsReducer from './accessoriesProductsReducer/index';

export default combineReducers({
  products: productsReducer,
  manProducts: manProductsReducer,
  womenProducts: womenProductsReducer,
  accessoriesProducts: accessoriesProductsReducer,
});
