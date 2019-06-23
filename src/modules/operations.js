import axios from 'axios';
import * as actions from './actions';

// for Home

export const fetchProductSuccess = () => async dispatch => {
  dispatch(actions.fetchProductsRequest());

  try {
    const response = await axios.get('http://localhost:3001/products');
    dispatch(actions.fetchProductsSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    dispatch(actions.fetchProductsError(error));
  }
};

// for man

export const fetchManProducts = () => async dispatch => {
  dispatch(actions.fetchManProductsRequest());

  try {
    const response = await axios.get(
      'http://localhost:3001/products?category=man',
    );
    dispatch(actions.fetchManProductsSuccess(response.data));
    // console.log(response);
  } catch (error) {
    dispatch(actions.fetchManProductsError(error));
  }
};

// for women

export const fetchWomenProducts = () => async dispatch => {
  dispatch(actions.fetchWomenProductsRequest());

  try {
    const response = await axios.get(
      'http://localhost:3001/products?category=women',
    );
    dispatch(actions.fetchWomenProductsSuccess(response.data));
    // console.log(response);
  } catch (error) {
    dispatch(actions.fetchWomenProductsError(error));
  }
};
